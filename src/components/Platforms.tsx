import React from 'react';
import { TranslationContent, PlatformItem } from '../locales/translations';
import { Building2, Factory, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

interface PlatformsProps {
  content: TranslationContent['platformsSection'];
  onOpenDemo: (platformName: string) => void;
}

export const Platforms: React.FC<PlatformsProps> = ({ content, onOpenDemo }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'industry':
        return <Building2 className="w-5 h-5 text-sky-700" />;
      case 'factory':
        return <Factory className="w-5 h-5 text-sky-700" />;
      case 'education':
        return <GraduationCap className="w-5 h-5 text-violet-700" />;
      default:
        return <Building2 className="w-5 h-5 text-sky-700" />;
    }
  };

  return (
    <section id="platformlar" className="py-20 sm:py-24 relative border-t border-zinc-200/80 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-block text-xs font-mono font-bold tracking-widest text-sky-700 uppercase">
            {content.tag}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            {content.title}
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* 3 Vertical Platform Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {content.platforms.map((p: PlatformItem) => (
            <div
              key={p.id}
              className="bg-white border border-zinc-200/90 rounded-2xl p-7 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-300 group"
            >
              <div className="space-y-6">
                
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-zinc-100 border border-zinc-200/60 flex items-center justify-center">
                    {getIcon(p.id)}
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700">
                    {p.badge}
                  </span>
                </div>

                {/* Title & Origin */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 group-hover:text-sky-700 transition-colors">
                    {p.title}
                  </h3>
                  <div className="text-xs text-zinc-500 mt-1 font-medium">
                    {p.subtitle}
                  </div>
                  <div className="mt-2.5 inline-flex items-center text-[11px] font-mono font-medium text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                    {p.origin}
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {p.description}
                </p>

                {/* Feature checklist */}
                <div className="space-y-2.5 pt-3 border-t border-zinc-100">
                  {p.features.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Live Telemetry Mini-Box */}
                <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/70 font-mono text-xs">
                  <div className="flex items-center justify-between text-zinc-500 text-[10px] mb-1">
                    <span>{p.metricLabel}</span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      AKTIV
                    </span>
                  </div>
                  <div className="text-lg font-bold text-zinc-900">
                    {p.metricValue}
                  </div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">
                    {p.metricSub}
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  onClick={() => onOpenDemo(p.title)}
                  className="w-full py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-900 text-zinc-800 hover:text-white border border-zinc-200 hover:border-zinc-900 font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{content.ctaBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
