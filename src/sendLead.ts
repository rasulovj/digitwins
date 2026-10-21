import type { Lang } from './i18n';

export interface Lead {
  name?: string;
  company?: string;
  contact?: string;
  topic?: string;
  message?: string;
}

// Serverless function in /api/lead.ts holds the Telegram token; override for a different backend.
const FORM_ENDPOINT = (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) || '/api/lead';

/** Posts a lead to the form endpoint. Returns true on success. */
export async function sendLead(source: string, lang: Lang, d: Lead): Promise<boolean> {
  try {
    const r = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ source, lang, ...d }),
    });
    return r.ok;
  } catch (err) {
    console.error(err);
    return false;
  }
}
