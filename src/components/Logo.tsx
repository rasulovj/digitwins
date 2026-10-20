const C = 'oklch(0.66 0.13 222)';

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#1b2230' }}>
      <svg viewBox="0 0 400 442" width={size} height={Math.round((size * 442) / 400)} style={{ display: 'block', flexShrink: 0 }}>
        <polygon points="197,221 359,131 359,311 197,401" fill={C} stroke={C} strokeWidth="16" strokeLinejoin="round" />
        <path d="M197,41 L359,131 M197,41 L41,131 L197,221 M41,131 L41,311 L197,401" fill="none" stroke={C} strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
        {[[197, 41], [41, 131], [197, 221], [41, 311]].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="30" fill="#fff" stroke={C} strokeWidth="18" />
        ))}
      </svg>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <span style={{ fontWeight: 800, fontSize: 21, lineHeight: 1, letterSpacing: '-0.03em', color: '#1b2230' }}>
          Digi
          <span style={{ background: 'linear-gradient(180deg,oklch(0.72 0.12 215),oklch(0.56 0.13 235))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Twins</span>
        </span>
        <span style={{ fontSize: 8.5, lineHeight: 1, fontWeight: 700, letterSpacing: '0.26em', color: '#5d6676', whiteSpace: 'nowrap' }}>OPERATIONAL SOLUTIONS</span>
      </span>
    </a>
  );
}
