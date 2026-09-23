import React, { useEffect, useRef, useState } from 'react';

interface DigitalTwinCanvasProps {
  interactiveLabel?: string;
  statusActive?: string;
}

export const DigitalTwinCanvas: React.FC<DigitalTwinCanvasProps> = ({
  interactiveLabel = "Interaktiv 3D Klaster",
  statusActive = "Jonli Sinxronizatsiya"
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [nodeCount, setNodeCount] = useState(64);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // 3D Nodes setup - elegant, geometric structure representing twin nodes
    let rotX = 0.35;
    let rotY = 0.55;
    let targetRotY = rotY;
    let isDragging = false;
    let lastMousePos = { x: 0, y: 0 };

    // Generate balanced 3D coordinate lattice
    const nodes: Array<{
      x: number;
      y: number;
      z: number;
      group: 'industry' | 'factory' | 'education';
      pulseOffset: number;
    }> = [];

    const spacing = 38;
    const gridRange = 3;

    for (let x = -gridRange; x <= gridRange; x += 2) {
      for (let y = -1; y <= 2; y += 1) {
        for (let z = -gridRange; z <= gridRange; z += 2) {
          const group = y === -1 ? 'industry' : y <= 1 ? 'factory' : 'education';
          nodes.push({
            x: x * spacing + (Math.random() - 0.5) * 6,
            y: y * spacing + (Math.random() - 0.5) * 4,
            z: z * spacing + (Math.random() - 0.5) * 6,
            group,
            pulseOffset: Math.random() * Math.PI * 2,
          });
        }
      }
    }
    setNodeCount(nodes.length);

    // 3D Projection math
    const project = (x: number, y: number, z: number) => {
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Y-axis rotation
      const x1 = x * cosY + z * sinY;
      const z1 = -x * sinY + z * cosY;

      // X-axis rotation
      const y2 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;

      const fov = 380;
      const scale = fov / (fov + z2 + 100);

      return {
        px: width / 2 + x1 * scale,
        py: height / 2 + y2 * scale,
        scale,
        depth: z2,
      };
    };

    let tick = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick += 0.015;

      if (!isDragging && isRotating) {
        rotY += 0.003;
      } else if (!isDragging) {
        rotY += (targetRotY - rotY) * 0.05;
      }

      // Project all nodes
      const projected = nodes.map((n) => ({
        ...n,
        ...project(n.x, n.y, n.z),
      }));

      // Sort by depth for correct painter's rendering
      projected.sort((a, b) => b.depth - a.depth);

      // Draw subtle lattice connection lines
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dist = Math.hypot(p1.px - p2.px, p1.py - p2.py);
          if (dist < 64) {
            const alpha = Math.max(0.02, (1 - dist / 64) * 0.22);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const pulse = Math.sin(tick + p.pulseOffset) * 0.4 + 0.6;
        const radius = Math.max(1.8, 3.2 * p.scale * pulse);

        // Group colors - subtle, dignified
        let color = '#38BDF8'; // Factory (Sky)
        if (p.group === 'industry') color = '#22D3EE'; // Industry (Cyan)
        if (p.group === 'education') color = '#A78BFA'; // Education (Soft Violet)

        // Glow ring for key nodes
        if (i % 7 === 0) {
          ctx.beginPath();
          ctx.arc(p.px, p.py, radius * 2.2, 0, Math.PI * 2);
          ctx.strokeStyle = `${color}25`;
          ctx.stroke();
        }

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.px, p.py, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Mouse drag interactions
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastMousePos.x;
      const dy = e.clientY - lastMousePos.y;
      rotY += dx * 0.007;
      rotX += dy * 0.007;
      targetRotY = rotY;
      lastMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isRotating]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[360px] sm:h-[420px] rounded-2xl bg-[#0E1117] border border-[#1E2430] overflow-hidden group select-none shadow-2xl"
    >
      {/* Top Telemetry Header */}
      <div className="absolute top-0 left-0 right-0 h-11 bg-[#12151D]/90 border-b border-[#1E2430] px-4 flex items-center justify-between z-10 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-slate-200">DIGITWINS TELEMETRY</span>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span className="text-sky-400">{statusActive}</span>
          <span className="text-slate-500 hidden sm:inline">| {nodeCount} NODES</span>
        </div>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing block"
      />

      {/* Bottom control strip */}
      <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between pointer-events-none z-10 text-xs font-mono">
        <div className="bg-[#12151D]/80 backdrop-blur border border-[#1E2430] px-3 py-1.5 rounded-lg text-slate-300 flex items-center gap-2 pointer-events-auto shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          <span className="text-[11px]">{interactiveLabel}</span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => setIsRotating((prev) => !prev)}
            title={isRotating ? "Aylanishni to'xtatish" : "Aylantirish"}
            className="bg-[#12151D]/80 backdrop-blur hover:bg-[#1A202C] border border-[#1E2430] px-3 py-1.5 rounded-lg text-slate-300 hover:text-white transition-colors text-[11px]"
          >
            {isRotating ? "Pauza" : "Jonlantirish"}
          </button>
        </div>
      </div>
    </div>
  );
};
