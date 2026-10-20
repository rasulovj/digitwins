import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

/** Fades its children in once they scroll into view (with a 4s failsafe). */
export function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (on) return;
    const check = () => {
      const el = ref.current;
      if (el && el.getBoundingClientRect().top < window.innerHeight * 0.92) setOn(true);
    };
    window.addEventListener('scroll', check, { passive: true });
    const raf = requestAnimationFrame(check);
    const t1 = setTimeout(check, 300);
    const failsafe = setTimeout(() => setOn(true), 4000);
    return () => {
      window.removeEventListener('scroll', check);
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(failsafe);
    };
  }, [on]);

  return (
    <div ref={ref} style={{ opacity: on ? 1 : 0, transform: on ? 'none' : 'translateY(28px)', transition: 'opacity .8s ease, transform .8s ease' }}>
      {children}
    </div>
  );
}
