import { useState } from 'react';
import type { Dict, Lang } from '../i18n';
import { X } from '../i18n';
import consultingImg from '../assets/consulting.jpg';
import { Reveal } from './Reveal';

const STEP_ICONS = ['ph-duotone ph-map-trifold', 'ph-duotone ph-handshake', 'ph-duotone ph-gauge'];
const ACCENT = 'oklch(0.52 0.12 228)';

interface Props {
  t: Dict;
  lang: Lang;
}

export function Consulting({ t, lang }: Props) {
  const [step, setStep] = useState(0);
  const steps = t.cons_formula.split('+').map((s) => s.trim());

  return (
    <section className="section" style={{ padding: '64px 24px 40px' }}>
      <Reveal>
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 40, background: 'oklch(0.95 0.022 222)', padding: 'clamp(24px,4vw,56px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: 44, alignItems: 'center' }}>
          <div style={{ position: 'absolute', right: -140, bottom: -200, width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.9 0.05 280 / 0.6), transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 14px', borderRadius: 999, background: '#fff', fontSize: 13, fontWeight: 700, color: 'oklch(0.48 0.12 228)' }}>
              <i className="ph-duotone ph-strategy" style={{ fontSize: 16 }} />
              {t.cons_badge}
            </div>
            <h2 style={{ margin: 0, fontSize: 'clamp(26px,3vw,38px)', lineHeight: 1.12, fontWeight: 800, letterSpacing: '-0.03em', color: '#1b2230', textWrap: 'balance' }}>{t.cons_title}</h2>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: '#4a5363', textWrap: 'pretty' }}>{t.cons_desc}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
              {steps.map((label, i) => {
                const on = step === i;
                return (
                  <div key={label} onMouseEnter={() => setStep(i)} onClick={() => setStep(i)} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', borderRadius: 20, cursor: 'default', background: on ? '#fff' : 'rgba(255,255,255,0.45)', boxShadow: on ? '0 14px 30px -20px rgba(27,34,48,0.35)' : 'none', transform: on ? 'translateX(6px)' : 'none', transition: 'all .25s' }}>
                    <span style={{ width: 42, height: 42, borderRadius: 14, flexShrink: 0, display: 'grid', placeItems: 'center', fontSize: 22, background: on ? ACCENT : '#fff', color: on ? '#fff' : ACCENT, transition: 'all .25s' }}>
                      <i className={STEP_ICONS[i]} />
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
                      <span style={{ fontSize: 16, fontWeight: 800, color: '#1b2230' }}>0{i + 1} · {label}</span>
                      <span style={{ fontSize: 13, color: '#5d6676', fontWeight: 500 }}>{X[lang].steps[i]}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ position: 'relative', height: '100%', minHeight: 440, borderRadius: 30, overflow: 'hidden', background: '#dfe5e9' }}>
            <img src={consultingImg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', left: 16, right: 16, bottom: 16, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(14px)', borderRadius: 22, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ width: 44, height: 44, borderRadius: 14, background: 'oklch(0.94 0.035 222)', color: 'oklch(0.5 0.12 228)', display: 'grid', placeItems: 'center', fontSize: 22, flexShrink: 0 }}>
                <i className="ph-duotone ph-path" />
              </span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 800, color: '#1b2230' }}>{t.cons_approach}</div>
                <div style={{ fontSize: 13, color: '#5d6676', marginTop: 2 }}>{t.cons_formula_desc}</div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
