import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import type { Dict } from '../i18n';
import type { Lead } from '../sendLead';

interface Props {
  t: Dict;
  onClose: () => void;
  onSubmit: (source: string, lead: Lead) => Promise<boolean>;
}

export function DemoModal({ t, onClose, onSubmit }: Props) {
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    const fd = Object.fromEntries(new FormData(e.currentTarget)) as Lead;
    setSending(true);
    const ok = await onSubmit("Demo so'rovi", fd);
    setSending(false);
    if (ok) onClose();
  };

  return (
    <div onClick={onClose} role="dialog" aria-modal="true" aria-label={t.modal_title} style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'rgba(27,34,48,0.35)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', display: 'grid', placeItems: 'center', padding: 16 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', width: '100%', maxWidth: 460, background: '#fff', borderRadius: 32, padding: 32, boxShadow: '0 40px 80px -30px rgba(27,34,48,0.45)', animation: 'dtUp .3s ease both' }}>
        <button className="btn-close" onClick={onClose} aria-label="Close"><i className="ph ph-x" /></button>
        <div style={{ width: 52, height: 52, borderRadius: 17, background: 'oklch(0.94 0.035 222)', color: 'oklch(0.5 0.12 228)', display: 'grid', placeItems: 'center', fontSize: 26, marginBottom: 18 }}>
          <i className="ph-duotone ph-headset" />
        </div>
        <h3 style={{ margin: '0 0 8px', fontSize: 24, fontWeight: 800, letterSpacing: '-0.025em', color: '#1b2230' }}>{t.modal_title}</h3>
        <p style={{ margin: '0 0 22px', fontSize: 14, lineHeight: 1.6, color: '#5d6676' }}>{t.modal_desc}</p>
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <label className="field">
            {t.form_name}
            <input className="input" name="name" required autoFocus autoComplete="name" placeholder={t.ph_name} />
          </label>
          <label className="field">
            {t.modal_contact_lbl}
            <input className="input" name="contact" required placeholder={t.ph_contact} />
          </label>
          <button type="submit" className="btn-primary" disabled={sending} style={{ marginTop: 6 }}>
            {sending && <i className="ph ph-circle-notch" style={{ animation: 'spin 1s linear infinite' }} />}
            {t.modal_submit}
          </button>
        </form>
      </div>
    </div>
  );
}
