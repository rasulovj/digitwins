# DigiTwins

Operational solutions for industrial zones and factories — InvestPark, IQPark, Fabriq, Green Carbon.

## Tech Stack
- **Framework:** Vite 6 + React 19 + TypeScript
- **Fonts / Icons:** Manrope (`@fontsource/manrope`), Phosphor (`@phosphor-icons/web`)
- **Languages:** Uzbek (`uz`), Russian (`ru`), English (`en`), Turkish (`tr`) — see `src/i18n.ts`
- **Lead forms:** `api/lead.ts` (Vercel serverless function) forwards submissions to Telegram

## Running Locally
```bash
npm install
npm run dev
```
`npm run dev` serves the site only; to test the forms locally run `vercel dev` instead.

## Deploy (Vercel)
Set these in **Vercel → Project → Settings → Environment Variables**, then redeploy:

| Name | Value |
| --- | --- |
| `TG_BOT_TOKEN` | Telegram bot token from @BotFather |
| `TG_CHAT_ID` | Chat / group id that receives leads |

Do not prefix them with `VITE_` — anything with that prefix is embedded in the public JS bundle.
