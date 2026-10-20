import type { Dict, Lang } from '../i18n';
import { X } from '../i18n';
import type { Product } from '../data';
import { Logo } from './Logo';

const colTitle = { fontSize: 12, fontWeight: 700, color: '#1b2230', letterSpacing: '0.04em', marginBottom: 4 } as const;
const col = { display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, flex: '1 1 160px' } as const;

export function Footer({ t, lang, products }: { t: Dict; lang: Lang; products: Product[] }) {
  return (
    <footer style={{ borderTop: '1px solid #e6e9ec', background: '#fff' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '56px 24px 28px', display: 'flex', flexDirection: 'column', gap: 40 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: '2 1 300px', minWidth: 0 }}>
            <Logo size={34} />
            <p style={{ margin: 0, maxWidth: 340, fontSize: 14, lineHeight: 1.6, color: '#5d6676' }}>{t.footer_desc}</p>
          </div>
          <div style={col}>
            <div style={colTitle}>{t.section_platforms_tag}</div>
            {products.map((p) => (
              <span key={p.name} style={{ color: '#5d6676', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 8 }}>
                <i className={p.icon} style={{ fontSize: 16 }} />
                {p.name}
              </span>
            ))}
          </div>
          <div style={col}>
            <div style={colTitle}>{t.nav_contact}</div>
            <a href="mailto:info@digitwins.uz" className="muted-link">info@digitwins.uz</a>
            <a href="tel:+998902777366" className="muted-link">+998 90 277 73 66</a>
            <span style={{ color: '#5d6676', fontWeight: 500 }}>{t.lbl_address_val}</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, paddingTop: 24, borderTop: '1px solid #f0f2f4', fontSize: 13, color: '#6b7482' }}>
          <span>© 2026 DigiTwins</span>
          <a href="#top" className="muted-link" style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600 }}>
            <i className="ph ph-arrow-up" />
            {X[lang].top}
          </a>
        </div>
      </div>
    </footer>
  );
}
