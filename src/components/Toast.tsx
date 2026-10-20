export function Toast({ title, desc, error }: { title: string; desc: string; error?: boolean }) {
  return (
    <div role="status" aria-live="polite" style={{ position: 'fixed', bottom: 24, right: 24, maxWidth: 'calc(100vw - 48px)', zIndex: 70, display: 'flex', alignItems: 'center', gap: 14, background: '#fff', border: '1px solid #e6e9ec', padding: '16px 20px', borderRadius: 22, boxShadow: '0 24px 50px -20px rgba(27,34,48,0.35)', animation: 'dtUp .3s ease both' }}>
      <span style={{ width: 40, height: 40, borderRadius: '50%', background: error ? 'oklch(0.94 0.05 25)' : 'oklch(0.94 0.05 155)', color: error ? 'oklch(0.55 0.15 25)' : 'oklch(0.5 0.13 155)', display: 'grid', placeItems: 'center', fontSize: 22 }}>
        <i className={error ? 'ph-duotone ph-warning-circle' : 'ph-duotone ph-check-circle'} />
      </span>
      <div>
        <div style={{ fontWeight: 800, fontSize: 14, color: '#1b2230' }}>{title}</div>
        <div style={{ fontSize: 13, color: '#5d6676', marginTop: 2 }}>{desc}</div>
      </div>
    </div>
  );
}
