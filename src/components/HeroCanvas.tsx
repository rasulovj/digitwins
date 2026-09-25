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

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) * 0.55;

      rotationAngleRef.current += 0.006;
      const rot = rotationAngleRef.current;

      // Draw Wireframe Spatial Sphere
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.25)';
      ctx.lineWidth = 1.2;

      for (let i = -3; i <= 3; i++) {
        ctx.beginPath();
        const r = radius * Math.cos((i * Math.PI) / 8);
        const y = centerY + radius * Math.sin((i * Math.PI) / 8);
        ctx.ellipse(centerX, y, r, r * 0.35, rot, 0, Math.PI * 2);
        ctx.stroke();
      }

      for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        const angle = rot + (i * Math.PI) / 3;
        ctx.ellipse(centerX, centerY, radius, radius * 0.4, angle, 0, Math.PI * 2);
        ctx.strokeStyle = i % 2 === 0 ? 'rgba(0, 240, 255, 0.35)' : 'rgba(34, 197, 94, 0.35)';
        ctx.stroke();
      }

      // Central Core Node
      ctx.beginPath();
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#00f0ff';
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 15;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Orbiting Satellite Nodes
      const nodes = 4;
      for (let i = 0; i < nodes; i++) {
        const orbAngle = rot * 1.5 + (i * Math.PI * 2) / nodes;
        const orbX = centerX + Math.cos(orbAngle) * (radius * 1.1);
        const orbY = centerY + Math.sin(orbAngle) * (radius * 0.5);

        ctx.beginPath();
        ctx.arc(orbX, orbY, 4, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? '#0284c7' : '#22c55e';
        ctx.fill();

        // Connecting Line
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(orbX, orbY);
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
        ctx.stroke();
      }

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
        <span className="text-[#00f0ff]">LIVE 3D TWIN ENGINE</span>
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
