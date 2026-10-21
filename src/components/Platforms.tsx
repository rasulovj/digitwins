import { useState } from 'react';
import type { Dict } from '../i18n';
import { iconBox, ink } from '../data';
import type { Product } from '../data';
import { slideBg } from './Hero';
import { Reveal } from './Reveal';

interface Props {
  t: Dict;
  products: Product[];
}

export function Platforms({ t, products }: Props) {
  const [pIdx, setPIdx] = useState(0);
  const ap = products[pIdx];

  return (
    <section id="cozumler" className="section" style={{ padding: '88px 24px 40px' }}>
      <Reveal>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640 }}>
            <div className="eyebrow"><i className="ph-duotone ph-squares-four" style={{ fontSize: 18 }} />{t.section_platforms_tag}</div>
            <h2 className="h2">{t.section_platforms_title}</h2>
          </div>
          <p style={{ margin: 0, maxWidth: 420, fontSize: 16, lineHeight: 1.65, color: '#5d6676', textWrap: 'pretty' }}>{t.section_platforms_desc}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))', gap: 20, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {products.map((p, i) => {
              const on = i === pIdx;
              return (
                <div key={p.name} role="button" tabIndex={0} aria-expanded={on} onClick={() => setPIdx(i)} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setPIdx(i))} style={{ cursor: 'pointer', padding: '16px 18px', borderRadius: 24, background: on ? '#fff' : 'rgba(255,255,255,0.5)', border: '1px solid ' + (on ? '#e3e7ea' : 'transparent'), boxShadow: on ? '0 20px 40px -28px rgba(27,34,48,0.35)' : 'none', transition: 'all .25s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span style={{ fontSize: 12, fontWeight: 800, color: '#8a93a1', fontVariantNumeric: 'tabular-nums', width: 20 }}>{p.num}</span>
                    <span style={iconBox(p.hue, 48)}><i className={p.icon} /></span>
                    <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em', color: '#1b2230' }}>{p.name}</span>
                      <span style={{ fontSize: 13, fontWeight: 600, color: '#5d6676' }}>{p.stage}</span>
                    </div>
                    <span style={{ width: 36, height: 36, borderRadius: '50%', display: 'grid', placeItems: 'center', fontSize: 16, background: on ? ink(p.hue) : '#eef0f2', color: on ? '#fff' : '#6b7482', transform: on ? 'rotate(-45deg)' : 'none', transition: 'all .25s', flexShrink: 0 }}>
                      <i className="ph ph-arrow-right" />
                    </span>
                  </div>
                  {on && (
                    <p style={{ margin: 0, padding: '14px 0 2px 34px', fontSize: 14, lineHeight: 1.6, color: '#4a5363', animation: 'dtUp .35s ease both', textWrap: 'pretty' }}>{p.desc}</p>
                  )}
                </div>
              );
            })}
          </div>
          <article style={{ background: '#fff', border: '1px solid #e8ebee', borderRadius: 32, padding: 10, display: 'flex', flexDirection: 'column', boxShadow: '0 30px 60px -40px rgba(27,34,48,0.35)' }}>
            <div style={{ position: 'relative', height: 320, borderRadius: 24, overflow: 'hidden', background: '#dfe5e9' }}>
              {products.map((p, i) => (
                <div key={p.name} role="img" aria-label={p.name} style={slideBg(p.img, i === pIdx)} />
              ))}
            </div>
            <div style={{ padding: '26px 18px 18px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={iconBox(ap.hue, 48)}><i className={ap.icon} /></span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <h3 style={{ margin: 0, fontSize: 26, fontWeight: 800, letterSpacing: '-0.03em', color: '#1b2230' }}>{ap.name}</h3>
                  <span style={{ fontSize: 14, fontWeight: 700, color: ink(ap.hue) }}>{ap.sub}</span>
                </div>
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: '#5d6676', textWrap: 'pretty' }}>{ap.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {ap.features.map((f) => (
                  <span key={f} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 12px', borderRadius: 999, background: '#f4f6f7', fontSize: 13, fontWeight: 600, color: '#3d4554' }}>
                    <i className="ph-duotone ph-check-circle" style={{ fontSize: 15, color: ink(ap.hue) }} />
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </Reveal>
    </section>
  );
}
