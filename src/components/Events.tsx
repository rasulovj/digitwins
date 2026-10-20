import type { Dict } from '../i18n';
import summitImg from '../assets/event-summit.avif';
import factoryImg from '../assets/event-factory.jpg';
import { Reveal } from './Reveal';

const badge = { position: 'absolute', top: 14, left: 14, display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(10px)', fontSize: 12, fontWeight: 700 } as const;
const title = { margin: 0, fontSize: 24, fontWeight: 800, letterSpacing: '-0.025em', color: '#1b2230' } as const;
const desc = { margin: 0, fontSize: 15, lineHeight: 1.65, color: '#5d6676', flex: 1 } as const;
const media = { position: 'relative', height: 280, borderRadius: 24, overflow: 'hidden', background: '#dfe5e9' } as const;
const body = { padding: '24px 18px 18px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 } as const;

export function Events({ t, onDemo }: { t: Dict; onDemo: () => void }) {
  return (
    <section id="etkinlikler" className="section" style={{ padding: '80px 24px 40px' }}>
      <Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14, marginBottom: 40 }}>
          <div className="eyebrow"><i className="ph-duotone ph-calendar-star" style={{ fontSize: 18 }} />{t.events_tag}</div>
          <h2 className="h2">{t.events_title}</h2>
          <p style={{ margin: 0, maxWidth: 520, fontSize: 16, lineHeight: 1.65, color: '#5d6676' }}>{t.events_desc}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))', gap: 20 }}>
          <article className="event-card">
            <div style={media}>
              <div className="zoom-bg" style={{ backgroundImage: `url(${summitImg})` }} />
              <span style={{ ...badge, color: 'oklch(0.48 0.12 228)' }}><i className="ph-duotone ph-microphone-stage" style={{ fontSize: 15 }} />{t.ev1_badge}</span>
            </div>
            <div style={body}>
              <h3 style={title}>{t.ev1_title}</h3>
              <p style={desc}>{t.ev1_desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, paddingTop: 12 }}>
                <button className="btn-primary sm" onClick={onDemo}><i className="ph ph-ticket" style={{ fontSize: 16 }} />{t.btn_register}</button>
                <button className="btn-ghost sm" onClick={onDemo}><i className="ph ph-handshake" style={{ fontSize: 16 }} />{t.btn_sponsor}</button>
              </div>
            </div>
          </article>
          <article className="event-card">
            <div style={media}>
              <div className="zoom-bg" style={{ backgroundImage: `url(${factoryImg})` }} />
              <span style={{ ...badge, color: 'oklch(0.5 0.12 60)' }}><i className="ph-duotone ph-hard-hat" style={{ fontSize: 15 }} />{t.ev2_badge}</span>
            </div>
            <div style={body}>
              <h3 style={title}>{t.ev2_title}</h3>
              <p style={desc}>{t.ev2_desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 10, paddingTop: 12 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#5d6676', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <i className="ph-duotone ph-factory" style={{ fontSize: 18, color: 'oklch(0.58 0.12 60)' }} />
                  {t.ev2_target}
                </span>
                <button className="btn-amber" onClick={onDemo}>{t.btn_apply}<i className="ph ph-arrow-right" /></button>
              </div>
            </div>
          </article>
        </div>
      </Reveal>
    </section>
  );
}
