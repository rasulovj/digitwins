import React, { useEffect, useRef } from 'react';

interface HeroCanvasProps {
  telemetryLabel: string;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ telemetryLabel }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rotationAngleRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const points: Array<{ x: number; y: number; z: number; size: number }> = [];
    for (let i = 0; i < 40; i++) {
      points.push({
        x: (Math.random() - 0.5) * 280,
        y: (Math.random() - 0.5) * 180,
        z: (Math.random() - 0.5) * 280,
        size: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      rotationAngleRef.current += 0.005;
      const rot = rotationAngleRef.current;

      // Perspective wireframe ground grid
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
      ctx.lineWidth = 1;

      for (let i = -150; i <= 150; i += 30) {
        ctx.beginPath();
        ctx.moveTo(centerX + i, centerY + 80);
        ctx.lineTo(centerX + i * 0.5, centerY - 60);
        ctx.stroke();
      }

      // Projected 3D Nodes
      const projected = points.map((p) => {
        const cos = Math.cos(rot);
        const sin = Math.sin(rot);
        const rx = p.x * cos - p.z * sin;
        const rz = p.x * sin + p.z * cos;

        const scale = 300 / (300 + rz);
        return {
          x: centerX + rx * scale,
          y: centerY + p.y * scale,
          scale: scale,
          size: p.size,
        };
      });

      // Connecting lines between close nodes
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.2)';
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dist = Math.hypot(
            projected[i].x - projected[j].x,
            projected[i].y - projected[j].y
          );
          if (dist < 70) {
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Node dots
      projected.forEach((p) => {
        ctx.fillStyle = '#00f0ff';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.scale, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  const handleReset = () => {
    rotationAngleRef.current = 0;
  };

  return (
    <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl glass-panel border border-[#0ea5e9]/30 overflow-hidden shadow-2xl group">
      {/* Top Node Header */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-[#090d16]/90 border-b border-[#1e293b] px-4 flex items-center justify-between z-20 font-mono text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-pulse"></span>
          <span className="text-white font-bold">SPATIAL NODE</span>
        </div>
        <span className="text-[#00f0ff]">LIVE TWIN ENGINE</span>
      </div>

      <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Bottom Telemetry Overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
        <div className="glass-panel px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 flex items-center gap-2 pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
          <span>{telemetryLabel}</span>
        </div>
        <button
          onClick={handleReset}
          className="glass-panel hover:bg-[#0284c7] px-3 py-1.5 rounded-lg text-xs font-mono text-white pointer-events-auto transition-colors cursor-pointer"
          title="Reset View"
        >
          &#x21bb;
        </button>
      </div>
    </div>
  );
};
