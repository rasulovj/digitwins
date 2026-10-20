import { useEffect, useState } from 'react';
import type { Dict, Lang } from '../i18n';
import { Logo } from './Logo';

const SECTIONS = ['cozumler', 'etkinlikler', 'iletisim'] as const;
const LANGS: Lang[] = ['uz', 'ru', 'en', 'tr'];

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140;
      let a: string | null = null;
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) a = id;
      });
      setActive(a);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return active;
}

interface Props {
  t: Dict;
  lang: Lang;
  wide: boolean;
  /** Very narrow screens: language switcher moves into the mobile menu. */
  compact: boolean;
  onLang: (l: Lang) => void;
  onDemo: () => void;
}

export function Header({ t, lang, wide, compact, onLang, onDemo }: Props) {
  const active = useActiveSection();
  const [menu, setMenu] = useState(false);
  const navItems: [string, string][] = [
    ['cozumler', t.nav_solutions],
    ['etkinlikler', t.nav_events],
    ['iletisim', t.nav_contact],
  ];

  const langSwitch = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2, background: '#eef0f2', borderRadius: 999, padding: 4, alignSelf: compact ? 'flex-start' : undefined }}>
      {LANGS.map((l) => (
        <button key={l} onClick={() => onLang(l)} aria-pressed={l === lang} style={{ border: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: 12, fontWeight: 700, padding: '7px 10px', borderRadius: 999, background: l === lang ? '#fff' : 'transparent', color: l === lang ? '#1b2230' : '#6b7482', boxShadow: l === lang ? '0 2px 8px -2px rgba(27,34,48,0.18)' : 'none', transition: 'all .2s' }}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, padding: '14px 20px 0' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '10px 10px 10px 18px', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(18px) saturate(1.4)', WebkitBackdropFilter: 'blur(18px) saturate(1.4)', border: '1px solid rgba(228,231,234,0.9)', borderRadius: 999, boxShadow: '0 10px 34px -14px rgba(27,34,48,0.16)' }}>
        <Logo />
        {wide && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 14, fontWeight: 600 }}>
            {navItems.map(([id, label]) => (
              <a key={id} href={'#' + id} style={{ padding: '8px 14px', borderRadius: 999, transition: 'background .2s, color .2s', color: active === id ? '#1b2230' : '#4a5363', background: active === id ? '#eef0f2' : 'transparent' }}>
                {label}
              </a>
            ))}
          </nav>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {!compact && langSwitch}
          {wide ? (
            <button className="btn-dark" onClick={onDemo}>
              {t.btn_demo}
              <i className="ph ph-arrow-up-right" style={{ fontSize: 15 }} />
            </button>
          ) : (
            <button onClick={() => setMenu((m) => !m)} aria-label="Menu" aria-expanded={menu} style={{ width: 44, height: 44, border: 0, cursor: 'pointer', borderRadius: '50%', background: '#1b2230', color: '#fff', fontSize: 20, display: 'grid', placeItems: 'center' }}>
              <i className={menu ? 'ph ph-x' : 'ph ph-list'} />
            </button>
          )}
        </div>
      </div>
      {menu && !wide && (
        <div style={{ maxWidth: 1240, margin: '8px auto 0', padding: 10, background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(18px)', border: '1px solid #e4e7ea', borderRadius: 28, display: 'flex', flexDirection: 'column', gap: 4, boxShadow: '0 20px 40px -20px rgba(27,34,48,0.25)', animation: 'dtUp .25s ease both' }}>
          {compact && <div style={{ padding: '6px 6px 10px' }}>{langSwitch}</div>}
          {navItems.map(([id, label]) => (
            <a key={id} href={'#' + id} className="menu-link" onClick={() => setMenu(false)}>
              {label}
              <i className="ph ph-arrow-right" style={{ color: '#8a93a1' }} />
            </a>
          ))}
          <button className="btn-primary" style={{ marginTop: 6 }} onClick={() => { setMenu(false); onDemo(); }}>
            {t.btn_demo}
          </button>
        </div>
      )}
    </header>
  );
}
