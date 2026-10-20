import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import type { Dict } from '../i18n';
import { iconBox, ink, tint } from '../data';
import type { Product } from '../data';

const SLIDE_MS = 5000;
const TICK_MS = 100;

export const slideBg = (img: string, on: boolean): CSSProperties => ({
  position: 'absolute',
  inset: 0,
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: on ? 1 : 0,
  transform: on ? 'scale(1)' : 'scale(1.06)',
  transition: 'opacity .9s ease, transform 6s ease',
});

interface Props {
  t: Dict;
  products: Product[];
  floatCard: boolean;
  onDemo: () => void;
}

export function Hero({ t, products, floatCard, onDemo }: Props) {
  const [{ hero, heroT }, setSlide] = useState({ hero: 0, heroT: 0 });
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (paused.current) return;
      setSlide(({ hero, heroT }) =>
        heroT + TICK_MS >= SLIDE_MS ? { hero: (hero + 1) % products.length, heroT: 0 } : { hero, heroT: heroT + TICK_MS },
      );
    }, TICK_MS);
    return () => clearInterval(id);
  }, [products.length]);

  const select = (i: number) => setSlide({ hero: i, heroT: 0 });
  const hp = products[hero];

  return (
    <section id="top" style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: '64px 24px 32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,460px),1fr))', gap: 56, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 26, animation: 'dtUp .6s ease both' }}>
          <h1 style={{ margin: 0, fontSize: 'clamp(40px,5.6vw,68px)', lineHeight: 1.02, fontWeight: 800, letterSpacing: '-0.04em', color: '#1b2230', textWrap: 'balance' }}>{t.hero_title}</h1>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: '#5d6676', maxWidth: 540, textWrap: 'pretty' }}>{t.hero_desc}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, paddingTop: 4 }}>
            <button className="btn-primary" onClick={onDemo}>
              {t.btn_demo}
              <i className="ph ph-arrow-right" style={{ fontSize: 16 }} />
            </button>
            <a href="#cozumler" className="btn-ghost">
              <i className="ph-duotone ph-squares-four" style={{ fontSize: 18, color: 'oklch(0.52 0.12 228)' }} />
              {t.btn_solutions}
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 8 }}>
            <div style={{ display: 'flex' }}>
              {products.map((p, i) => {
                const on = i === hero;
                return (
                  <button key={p.name} onClick={() => select(i)} title={p.name} style={{ width: 40, height: 40, marginLeft: i ? -8 : 0, borderRadius: '50%', border: '3px solid #f5f6f4', background: on ? ink(p.hue) : tint(p.hue), color: on ? '#fff' : ink(p.hue), display: 'grid', placeItems: 'center', fontSize: 18, cursor: 'pointer', padding: 0, transition: 'all .25s', position: 'relative', zIndex: on ? 2 : 1 }}>
                    <i className={p.icon} />
                  </button>
                );
              })}
            </div>
            <span style={{ fontSize: 14, color: '#5d6676', fontWeight: 600 }}>{t.section_platforms_title}</span>
          </div>
        </div>

        <div style={{ position: 'relative', animation: 'dtUp .8s .1s ease both' }}>
          <div
            onMouseEnter={() => (paused.current = true)}
            onMouseLeave={() => (paused.current = false)}
            style={{ position: 'relative', borderRadius: 36, overflow: 'hidden', height: 560, background: '#dfe5e9', boxShadow: '0 40px 80px -40px rgba(27,34,48,0.45)' }}
          >
            {products.map((p, i) => (
              <div key={p.name} role="img" aria-label={p.name} style={slideBg(p.img, i === hero)} />
            ))}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(17,24,36,0.25) 0%,transparent 30%,transparent 50%,rgba(17,24,36,0.7) 100%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: 18, left: 18, right: 18, display: 'flex', justifyContent: 'flex-end' }}>
              <span style={{ padding: '8px 14px', borderRadius: 999, background: 'rgba(17,24,36,0.45)', backdropFilter: 'blur(10px)', fontSize: 13, fontWeight: 700, color: '#fff' }}>{hp.num} / 04</span>
            </div>
            <div style={{ position: 'absolute', left: 12, right: 12, bottom: 12, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ padding: '0 10px', display: 'flex', flexDirection: 'column', gap: 6, color: '#fff', textShadow: '0 2px 12px rgba(0,0,0,0.25)' }}>
                <div style={{ fontSize: 13, fontWeight: 700, opacity: 0.9 }}>{hp.stage}</div>
                <div style={{ fontSize: 'clamp(22px,2.4vw,30px)', fontWeight: 800, letterSpacing: '-0.025em', maxWidth: 420, lineHeight: 1.15, textWrap: 'balance' }}>{hp.sub}</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: 6, padding: 6, borderRadius: 24, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
                {products.map((p, i) => {
                  const on = i === hero;
                  return (
                    <button key={p.name} onClick={() => select(i)} style={{ border: 0, cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 12px 10px', borderRadius: 18, background: on ? '#fff' : 'transparent', color: '#1b2230', boxShadow: on ? '0 6px 18px -8px rgba(27,34,48,0.25)' : 'none', transition: 'all .25s', minWidth: 0 }}>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 6, minWidth: 0 }}>
                        <i className={p.icon} style={{ fontSize: 22, color: ink(p.hue) }} />
                        <span style={{ fontSize: 'clamp(11px, 3vw, 13px)', fontWeight: 800, lineHeight: 1.2, overflowWrap: 'anywhere' }}>{p.name}</span>
                      </span>
                      <span style={{ display: 'block', width: '100%', height: 3, borderRadius: 3, background: 'rgba(27,34,48,0.08)', overflow: 'hidden' }}>
                        <span style={{ display: 'block', height: '100%', borderRadius: 3, background: ink(p.hue), width: on ? (heroT / SLIDE_MS) * 100 + '%' : '0%', transition: on ? 'width .1s linear' : 'none' }} />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          {floatCard && (
            <div style={{ position: 'absolute', left: -28, top: 96, width: 230, background: '#fff', borderRadius: 22, padding: 16, boxShadow: '0 24px 50px -24px rgba(27,34,48,0.35)', display: 'flex', flexDirection: 'column', gap: 10, border: '1px solid #eef0f2' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={iconBox(hp.hue, 36)}><i className={hp.icon} /></span>
                <span style={{ fontWeight: 800, fontSize: 15, letterSpacing: '-0.01em' }}>{hp.name}</span>
              </div>
              {hp.features.map((f) => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: '#4a5363' }}>
                  <i className="ph-duotone ph-check-circle" style={{ fontSize: 16, color: 'oklch(0.6 0.13 155)' }} />
                  {f}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
