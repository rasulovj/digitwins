// Vercel serverless function: receives lead forms and forwards them to Telegram.
// Required env (Vercel → Settings → Environment Variables): TG_BOT_TOKEN, TG_CHAT_ID

const FIELDS = ['source', 'lang', 'name', 'company', 'contact', 'topic', 'message'] as const;
const MAX_LEN = { message: 2000, default: 200 };

const esc = (s: string) => s.replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' })[c]!);

export async function POST(request: Request): Promise<Response> {
  const token = process.env.TG_BOT_TOKEN;
  const chat = process.env.TG_CHAT_ID;
  if (!token || !chat) return Response.json({ error: 'not_configured' }, { status: 500 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'bad_json' }, { status: 400 });
  }

  const d: Record<string, string> = {};
  for (const k of FIELDS) {
    const v = body[k];
    if (typeof v === 'string' && v.trim()) d[k] = v.trim().slice(0, k === 'message' ? MAX_LEN.message : MAX_LEN.default);
  }
  if (!d.name || !d.contact) return Response.json({ error: 'missing_fields' }, { status: 400 });

  const lines = ['<b>🆕 DigiTwins — ' + esc(d.source || 'Sayt') + '</b>', '', '👤 <b>Ism:</b> ' + esc(d.name)];
  if (d.company) lines.push('🏢 <b>Tashkilot:</b> ' + esc(d.company));
  lines.push('📞 <b>Aloqa:</b> ' + esc(d.contact));
  if (d.topic) lines.push('📌 <b>Mavzu:</b> ' + esc(d.topic));
  if (d.message) lines.push('💬 <b>Xabar:</b> ' + esc(d.message));
  lines.push('', '🌐 Til: ' + esc((d.lang || '—').toUpperCase()) + ' · ' + new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Tashkent' }));

  const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chat, text: lines.join('\n'), parse_mode: 'HTML' }),
  });
  if (!r.ok) {
    console.error('Telegram error', r.status, await r.text());
    return Response.json({ error: 'telegram_failed' }, { status: 502 });
  }
  return Response.json({ ok: true });
}
