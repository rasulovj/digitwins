import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Dict } from '../i18n';
import type { Lead } from '../sendLead';
import { Reveal } from './Reveal';

const TOPIC_ICONS = ['ph-duotone ph-strategy', 'ph-duotone ph-map-trifold', 'ph-duotone ph-buildings', 'ph-duotone ph-factory', 'ph-duotone ph-leaf', 'ph-duotone ph-dots-three-circle'];
const iconTile = { width: 44, height: 44, borderRadius: 14, background: 'rgba(255,255,255,0.1)', display: 'grid', placeItems: 'center', color: 'oklch(0.82 0.1 215)', fontSize: 22, flexShrink: 0 } as const;
const lbl = { fontSize: 12, color: '#9aa5b4', fontWeight: 600 } as const;
const val = { fontSize: 16, fontWeight: 700 } as const;

interface Props {
  t: Dict;
  onSubmit: (source: string, lead: Lead) => Promise<boolean>;
}

export function Contact({ t, onSubmit }: Props) {
  const [topic, setTopic] = useState(0);
  const [sending, setSending] = useState(false);
  const topics = [t.cons_badge, 'InvestPark', 'IQPark', 'Fabriq', 'Green Carbon', t.opts[5]];

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const fd = Object.fromEntries(new FormData(form)) as Lead;
    setSending(true);
    const ok = await onSubmit('Kontakt formasi', { topic: topics[topic], ...fd });
    setSending(false);
    if (ok) form.reset();
  };

  return (
    <section id="iletisim" className="section" style={{ padding: '80px 24px 96px' }}>
      <Reveal>
        <div style={{ background: '#fff', border: '1px solid #e8ebee', borderRadius: 40, padding: 10, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,400px),1fr))', gap: 10, boxShadow: '0 40px 80px -60px rgba(27,34,48,0.3)' }}>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 32, background: '#16202e', color: '#fff', padding: 'clamp(24px,3.5vw,44px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 40, minHeight: '100%' }}>
            <div style={{ position: 'absolute', right: -160, top: -160, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.55 0.13 222 / 0.45), transparent 65%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', left: -120, bottom: -180, width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.5 0.1 280 / 0.35), transparent 65%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="eyebrow" style={{ color: 'oklch(0.8 0.1 215)' }}><i className="ph-duotone ph-chats-circle" style={{ fontSize: 18 }} />{t.contact_badge}</div>
              <h2 style={{ margin: 0, fontSize: 'clamp(30px,3.6vw,46px)', lineHeight: 1.08, fontWeight: 800, letterSpacing: '-0.035em', color: '#fff', textWrap: 'balance' }}>{t.contact_title}</h2>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: '#b7c0cd', maxWidth: 400 }}>{t.contact_desc}</p>
            </div>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="mailto:info@digitwins.uz" className="contact-link">
                <span style={iconTile}><i className="ph-duotone ph-envelope-simple" /></span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1, minWidth: 0 }}><span style={lbl}>{t.lbl_email}</span><span style={val}>info@digitwins.uz</span></span>
                <i className="ph ph-arrow-up-right" style={{ color: '#9aa5b4' }} />
              </a>
              <a href="tel:+998902777366" className="contact-link">
                <span style={iconTile}><i className="ph-duotone ph-phone" /></span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1, minWidth: 0 }}><span style={lbl}>{t.lbl_phone}</span><span style={val}>+998 90 277 73 66</span></span>
                <i className="ph ph-arrow-up-right" style={{ color: '#9aa5b4' }} />
              </a>
              <div className="contact-link">
                <span style={iconTile}><i className="ph-duotone ph-map-pin" /></span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}><span style={lbl}>{t.lbl_address}</span><span style={val}>{t.lbl_address_val}</span></span>
              </div>
            </div>
          </div>
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 18, padding: 'clamp(18px,3vw,36px)' }}>
            <div className="field">
              {t.form_subject}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))', gap: 8 }}>
                {topics.map((label, i) => {
                  const on = topic === i;
                  return (
                    <button key={label} type="button" onClick={() => setTopic(i)} style={{ cursor: 'pointer', fontFamily: 'inherit', fontSize: 14, fontWeight: 700, padding: '12px 14px', borderRadius: 16, display: 'flex', alignItems: 'center', gap: 10, minWidth: 0, border: '1px solid ' + (on ? 'oklch(0.6 0.12 225)' : '#e6e9ec'), background: on ? 'oklch(0.96 0.025 222)' : '#f6f7f8', color: on ? 'oklch(0.38 0.11 228)' : '#3d4554', boxShadow: on ? '0 0 0 3px oklch(0.94 0.035 222)' : 'none', transition: 'all .2s', textAlign: 'left' }}>
                      <i className={TOPIC_ICONS[i]} style={{ fontSize: 20, flexShrink: 0, color: on ? 'oklch(0.5 0.12 228)' : '#8a93a1' }} />
                      <span style={{ lineHeight: 1.25, textWrap: 'balance' }}>{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <label className="field">
              {t.form_name}
              <input className="input" name="name" required autoComplete="name" placeholder={t.ph_name} />
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 16 }}>
              <label className="field">
                {t.form_company}
                <input className="input" name="company" required autoComplete="organization" placeholder={t.ph_company} />
              </label>
              <label className="field">
                {t.form_contact}
                <input className="input" name="contact" required placeholder={t.ph_contact} />
              </label>
            </div>
            <label className="field">
              {t.form_message}
              <textarea className="input" name="message" rows={4} placeholder={t.ph_message} />
            </label>
            <button type="submit" className="btn-primary" disabled={sending} style={{ marginTop: 4 }}>
              <i className={sending ? 'ph ph-circle-notch' : 'ph ph-paper-plane-tilt'} style={{ fontSize: 17, animation: sending ? 'spin 1s linear infinite' : undefined }} />
              {t.form_submit}
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
