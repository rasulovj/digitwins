import type { Lang } from './i18n';

export interface Lead {
  name?: string;
  company?: string;
  contact?: string;
  topic?: string;
  message?: string;
}

const TG_BOT_TOKEN = import.meta.env.VITE_TG_BOT_TOKEN as string | undefined;
const TG_CHAT_ID = import.meta.env.VITE_TG_CHAT_ID as string | undefined;
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

const esc = (s?: string) =>
  String(s || '—').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' })[c]!);

/** Sends a lead to FORM_ENDPOINT if set, otherwise directly to Telegram. Returns true on success. */
export async function sendLead(source: string, lang: Lang, d: Lead): Promise<boolean> {
  const L = lang.toUpperCase();
  const lines = ['<b>🆕 DigiTwins — ' + esc(source) + '</b>', '', '👤 <b>Ism:</b> ' + esc(d.name)];
  if (d.company) lines.push('🏢 <b>Tashkilot:</b> ' + esc(d.company));
  lines.push('📞 <b>Aloqa:</b> ' + esc(d.contact));
  if (d.topic) lines.push('📌 <b>Mavzu:</b> ' + esc(d.topic));
  if (d.message) lines.push('💬 <b>Xabar:</b> ' + esc(d.message));
  lines.push('', '🌐 Til: ' + L + ' · ' + new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Tashkent' }));
  const text = lines.join('\n');

  try {
    let ok = true;
    if (FORM_ENDPOINT) {
      const r = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source, lang: L, ...d, text }),
      });
      ok = r.ok;
    } else if (TG_BOT_TOKEN && TG_CHAT_ID) {
      const r = await fetch('https://api.telegram.org/bot' + TG_BOT_TOKEN + '/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TG_CHAT_ID, text, parse_mode: 'HTML' }),
      });
      ok = r.ok;
    } else {
      console.warn('Telegram sozlanmagan: VITE_TG_BOT_TOKEN va VITE_TG_CHAT_ID kiriting', text);
      ok = false;
    }
    return ok;
  } catch (err) {
    console.error(err);
    return false;
  }
}
