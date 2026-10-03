import React, { useEffect, useRef, useState } from 'react';

declare const THREE: any;

export const ThreeCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [fps, setFps] = useState<number>(60);
  const [latency, setLatency] = useState<number>(12);

  useEffect(() => {
    const latencyInterval = setInterval(() => {
      setLatency(11 + Math.floor(Math.random() * 4));
    }, 3000);

    return () => clearInterval(latencyInterval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const container = canvas.parentElement;
    if (!container) return;

    if (typeof THREE === 'undefined') {
      console.warn('THREE.js is not loaded');
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070B12, 0.035);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(16, 12, 18);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Grid Ground
    const gridHelper = new THREE.GridHelper(30, 30, 0x06B6D4, 0x1E293B);
    gridHelper.position.y = -0.01;
    scene.add(gridHelper);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x06B6D4, 1.3);
    dirLight.position.set(10, 20, 10);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0x10B981, 2, 25);
    pointLight.position.set(0, 5, 0);
    scene.add(pointLight);

    // Industrial Zone Buildings & Nodes
    const cityGroup = new THREE.Group();
    const buildingGeo = new THREE.BoxGeometry(1, 1, 1);
    const colors = [0x06B6D4, 0x3B82F6, 0x10B981, 0xF59E0B];

    for (let x = -8; x <= 8; x += 2.5) {
      for (let z = -8; z <= 8; z += 2.5) {
        if (Math.random() > 0.25) {
          const height = Math.random() * 3 + 1;
          const col = colors[Math.floor(Math.random() * colors.length)];

          const mat = new THREE.MeshStandardMaterial({
            color: 0x0F172A,
            roughness: 0.2,
            metalness: 0.85,
          });

          const mesh = new THREE.Mesh(buildingGeo, mat);
          mesh.scale.set(1.5, height, 1.5);
          mesh.position.set(x, height / 2, z);
          cityGroup.add(mesh);

          // Neon Edges Wireframe
          const edges = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.5, height, 1.5));
          const lineMat = new THREE.LineBasicMaterial({ color: col });
          const wireframe = new THREE.LineSegments(edges, lineMat);
          wireframe.position.set(x, height / 2, z);
          cityGroup.add(wireframe);

          // Sensor beacon on roof
          const beaconGeo = new THREE.SphereGeometry(0.12, 8, 8);
          const beaconMat = new THREE.MeshBasicMaterial({ color: col });
          const beacon = new THREE.Mesh(beaconGeo, beaconMat);
          beacon.position.set(x, height + 0.15, z);
          cityGroup.add(beacon);
        }
      }
    }
    scene.add(cityGroup);

    // Orbit controls via mouse / touch dragging
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    function onPointerDown(e: MouseEvent | TouchEvent) {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousMousePosition = { x: clientX, y: clientY };
    }

    function onPointerMove(e: MouseEvent | TouchEvent) {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const deltaX = clientX - previousMousePosition.x;
      cityGroup.rotation.y += deltaX * 0.006;
      gridHelper.rotation.y += deltaX * 0.006;
      previousMousePosition = { x: clientX, y: clientY };
    }

    function onPointerUp() {
      isDragging = false;
    }

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    canvas.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    canvas.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    function animate(time: number) {
      animId = requestAnimationFrame(animate);

      if (!isDragging) {
        cityGroup.rotation.y += 0.002;
        gridHelper.rotation.y += 0.002;
      }

      frameCount++;
      if (time - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (time - lastTime)));
        frameCount = 0;
        lastTime = time;
      }

      renderer.render(scene, camera);
    }

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      canvas.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="glass-panel p-5 sm:p-7 rounded-2xl max-w-4xl mx-auto border border-[#06B6D4]/35 mt-8 glow-cyan text-left">
      <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-[#1E293B] font-mono gap-2">
        <span className="text-[#06B6D4] flex items-center gap-2 font-semibold">
          <i className="fa-solid fa-satellite-dish animate-pulse"></i> CANLI TELEMETRİ VE KONTROL MERKEZİ (Spatial Digital Twin)
        </span>
        <div className="flex items-center gap-3">
          <span className="text-slate-400">
            FPS: <span className="text-[#06B6D4] font-bold">{fps}</span>
          </span>
          <span className="bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded border border-emerald-500/40 text-[10px] font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> ONLINE
          </span>
        </div>
      </div>

      {/* 3D Canvas Container */}
      <div className="relative w-full h-[360px] sm:h-[420px] rounded-xl overflow-hidden border border-[#06B6D4]/30 bg-slate-950">
        <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

        <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
          <div className="bg-[#0F172A]/90 backdrop-blur-md border border-[#1E293B] px-3.5 py-1.5 rounded-lg text-xs font-mono text-slate-300">
            <span className="text-slate-400">Düğüm Sayısı:</span>{' '}
            <span className="text-[#06B6D4] font-bold">142 Aktif Düğüm</span>
          </div>
          <div className="bg-[#0F172A]/90 backdrop-blur-md border border-[#1E293B] px-3.5 py-1.5 rounded-lg text-xs font-mono text-slate-300">
            <span className="text-slate-400">Telemetri Gecikmesi:</span>{' '}
            <span className="text-emerald-400 font-bold">{latency} ms</span>
          </div>
          <div className="bg-[#0F172A]/90 backdrop-blur-md border border-[#1E293B] px-3.5 py-1.5 rounded-lg text-xs font-mono text-slate-300">
            <span className="text-slate-400">Tesis Sağlık Oranı:</span>{' '}
            <span className="text-emerald-400 font-bold">%89 Verimlilik (OEE)</span>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 bg-[#070B12]/90 backdrop-blur-md border border-[#06B6D4]/30 px-3.5 py-1.5 rounded-lg text-xs font-mono text-slate-300 flex items-center gap-2">
          <i className="fa-solid fa-arrows-up-down-left-right text-[#06B6D4]"></i>
          <span>Fare veya Dokunmatik ile 3D Döndürün</span>
        </div>
      </div>
    </div>
  );
};
