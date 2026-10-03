import React, { useState, useEffect } from 'react';
import { SiteDictionary } from '../locales/siteContent';

interface DimensionsSectionProps {
  content: SiteDictionary['dimensions'];
  onOpenLightbox: (src: string, caption: string) => void;
}

const DEFAULT_IMAGES = {
  osb1: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80',
  osb3: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  osb4: 'https://images.unsplash.com/photo-1581291518655-9523c932deda?auto=format&fit=crop&w=800&q=80',
  dt1: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
  dt4: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  dt2: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  dt5: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
};

export const DimensionsSection: React.FC<DimensionsSectionProps> = ({
  content,
  onOpenLightbox,
}) => {
  const [images, setImages] = useState(DEFAULT_IMAGES);

  useEffect(() => {
    // Attempt to load local images if present
    const keys = ['osb1', 'osb3', 'osb4', 'dt1', 'dt4', 'dt2', 'dt5'] as const;
    keys.forEach((key) => {
      const localSrc = `/${key}.jpeg`;
      const img = new Image();
      img.onload = () => {
        setImages((prev) => ({ ...prev, [key]: localSrc }));
      };
      img.src = localSrc;
    });
  }, []);

  return (
    <section id="donusum-odaklari" className="py-16 bg-[#0F172A]/30 border-t border-[#1E293B]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#06B6D4] font-mono text-xs tracking-widest uppercase font-semibold">
            {content.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
            {content.title}
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            {content.subtitle}
          </p>
        </div>

        {/* Balanced Equal-Height Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Pillar 1: OSB & Industrial Zones (osb1, osb3, osb4) */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border-t-4 border-t-[#06B6D4] relative overflow-hidden group h-full">
            <div>
              {/* Primary GIS Masterplan (osb1) */}
              <div className="mb-3">
                <div
                  className="image-zoom-card border border-[#06B6D4]/40 p-1 h-48 sm:h-52 w-full"
                  onClick={() =>
                    onOpenLightbox(images.osb1, content.pillar1.osb1Caption)
                  }
                >
                  <img
                    src={images.osb1}
                    alt={content.pillar1.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/95 via-transparent to-transparent flex items-end justify-between p-2.5 pointer-events-none">
                    <span className="text-[10px] font-mono text-[#06B6D4] font-bold bg-[#070B12]/90 px-2 py-0.5 rounded border border-[#06B6D4]/30">
                      {content.pillar1.osb1Badge}
                    </span>
                    <span className="image-zoom-badge text-[10px] font-mono bg-[#06B6D4] text-black px-2 py-0.5 rounded font-bold">
                      <i className="fa-solid fa-expand mr-1"></i>{content.expandBadge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Secondary GIS Dashboards (osb3 & osb4) */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div
                  className="image-zoom-card border border-[#1E293B] p-1 h-28 w-full"
                  onClick={() =>
                    onOpenLightbox(images.osb3, content.pillar1.osb3Caption)
                  }
                >
                  <img
                    src={images.osb3}
                    alt="OSB GIS"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/95 via-transparent to-transparent flex items-end justify-between p-1.5 pointer-events-none">
                    <span className="text-[9px] font-mono text-[#06B6D4] font-bold bg-[#070B12]/85 px-1.5 py-0.5 rounded">
                      {content.pillar1.osb3Badge}
                    </span>
                    <span className="image-zoom-badge text-[9px] font-mono bg-[#06B6D4] text-black px-1.5 py-0.5 rounded font-bold">
                      <i className="fa-solid fa-expand"></i>
                    </span>
                  </div>
                </div>

                <div
                  className="image-zoom-card border border-[#1E293B] p-1 h-28 w-full"
                  onClick={() =>
                    onOpenLightbox(images.osb4, content.pillar1.osb4Caption)
                  }
                >
                  <img
                    src={images.osb4}
                    alt="Cadastre GIS"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/95 via-transparent to-transparent flex items-end justify-between p-1.5 pointer-events-none">
                    <span className="text-[9px] font-mono text-[#06B6D4] font-bold bg-[#070B12]/85 px-1.5 py-0.5 rounded">
                      {content.pillar1.osb4Badge}
                    </span>
                    <span className="image-zoom-badge text-[9px] font-mono bg-[#06B6D4] text-black px-1.5 py-0.5 rounded font-bold">
                      <i className="fa-solid fa-expand"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#06B6D4]/10 text-[#06B6D4] border border-[#06B6D4]/30">
                    {content.pillar1.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#06B6D4] transition-colors mt-2">
                    {content.pillar1.title}
                  </h3>
                  <p className="text-xs font-mono text-[#06B6D4] mt-1">
                    {content.pillar1.sub}
                  </p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {content.pillar1.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 2: Commercial Facilities & Asset Management (dt1, dt4, dt2) */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border-t-4 border-t-[#F59E0B] relative overflow-hidden group h-full">
            <div>
              {/* Primary Robotics Digital Twin (dt1) */}
              <div className="mb-3">
                <div
                  className="image-zoom-card border border-[#F59E0B]/40 p-1 h-48 sm:h-52 w-full"
                  onClick={() =>
                    onOpenLightbox(images.dt1, content.pillar2.dt1Caption)
                  }
                >
                  <img
                    src={images.dt1}
                    alt={content.pillar2.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/95 via-transparent to-transparent flex items-end justify-between p-2.5 pointer-events-none">
                    <span className="text-[10px] font-mono text-[#F59E0B] font-bold bg-[#070B12]/90 px-2 py-0.5 rounded border border-[#F59E0B]/30">
                      {content.pillar2.dt1Badge}
                    </span>
                    <span className="image-zoom-badge text-[10px] font-mono bg-[#F59E0B] text-black px-2 py-0.5 rounded font-bold">
                      <i className="fa-solid fa-expand mr-1"></i>{content.expandBadge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Secondary Hardware & IoT Modules (dt4 & dt2) */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div
                  className="image-zoom-card border border-[#1E293B] p-1 h-28 w-full"
                  onClick={() =>
                    onOpenLightbox(images.dt4, content.pillar2.dt4Caption)
                  }
                >
                  <img
                    src={images.dt4}
                    alt="IoT Sensors"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/95 via-transparent to-transparent flex items-end justify-between p-1.5 pointer-events-none">
                    <span className="text-[9px] font-mono text-[#F59E0B] font-bold bg-[#070B12]/85 px-1.5 py-0.5 rounded">
                      {content.pillar2.dt4Badge}
                    </span>
                    <span className="image-zoom-badge text-[9px] font-mono bg-[#F59E0B] text-black px-1.5 py-0.5 rounded font-bold">
                      <i className="fa-solid fa-expand"></i>
                    </span>
                  </div>
                </div>

                <div
                  className="image-zoom-card border border-[#1E293B] p-1 h-28 w-full"
                  onClick={() =>
                    onOpenLightbox(images.dt2, content.pillar2.dt2Caption)
                  }
                >
                  <img
                    src={images.dt2}
                    alt="Command Panel"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/95 via-transparent to-transparent flex items-end justify-between p-1.5 pointer-events-none">
                    <span className="text-[9px] font-mono text-[#F59E0B] font-bold bg-[#070B12]/85 px-1.5 py-0.5 rounded">
                      {content.pillar2.dt2Badge}
                    </span>
                    <span className="image-zoom-badge text-[9px] font-mono bg-[#F59E0B] text-black px-1.5 py-0.5 rounded font-bold">
                      <i className="fa-solid fa-expand"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30">
                    {content.pillar2.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#F59E0B] transition-colors mt-2">
                    {content.pillar2.title}
                  </h3>
                  <p className="text-xs font-mono text-[#F59E0B] mt-1">
                    {content.pillar2.sub}
                  </p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {content.pillar2.desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* GREEN CARBON AI LAYER */}
        <div
          id="green-carbon"
          className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-950/85 via-[#0F172A] to-[#0F172A] border-2 border-emerald-400/80 p-6 sm:p-8 shadow-2xl shadow-emerald-950/50 glow-emerald relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-400/50 font-mono text-xs font-bold uppercase tracking-wider">
                  {content.greenCarbon.tag}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-emerald-900/60 text-emerald-200 text-[11px] font-mono border border-emerald-500/30">
                  {content.greenCarbon.standard}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {content.greenCarbon.title}
              </h3>

              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                {content.greenCarbon.desc}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-200">
                  <i className="fa-solid fa-calculator text-emerald-400 mr-1.5"></i>
                  <span>{content.greenCarbon.c1}</span>
                </div>
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-200">
                  <i className="fa-solid fa-file-contract text-emerald-400 mr-1.5"></i>
                  <span>{content.greenCarbon.c2}</span>
                </div>
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-200">
                  <i className="fa-solid fa-droplet text-emerald-400 mr-1.5"></i>
                  <span>{content.greenCarbon.c3}</span>
                </div>
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-200">
                  <i className="fa-solid fa-box text-emerald-400 mr-1.5"></i>
                  <span>{content.greenCarbon.c4}</span>
                </div>
              </div>
            </div>

            {/* Asset Health & Condition Monitoring Dashboard (dt5.jpeg) */}
            <div
              className="lg:col-span-4 image-zoom-card border border-emerald-500/50 p-1 h-56 sm:h-64 w-full"
              onClick={() =>
                onOpenLightbox(images.dt5, content.greenCarbon.dt5Caption)
              }
            >
              <img
                src={images.dt5}
                alt="Green Carbon & Asset Health Dashboard"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/95 via-transparent to-transparent flex items-end justify-between p-3 pointer-events-none">
                <span className="text-xs font-mono text-emerald-300 font-bold bg-[#070B12]/90 px-2.5 py-1 rounded border border-emerald-500/40">
                  {content.greenCarbon.dt5Badge}
                </span>
                <span className="image-zoom-badge p-1 px-2 rounded bg-emerald-400 text-black font-bold text-[10px] font-mono">
                  <i className="fa-solid fa-expand mr-1"></i> {content.expandBadge}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
