import React from 'react';
import { TranslationContent, PlatformItem } from '../locales/translations';
import { Building2, Factory, FlaskConical, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

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
      case 'rd':
        return <FlaskConical className="w-5 h-5 text-amber-700" />;
      case 'education':
        return <GraduationCap className="w-5 h-5 text-violet-700" />;
      default:
        return <Building2 className="w-5 h-5 text-sky-700" />;
    }
  };

  const getBadgeColor = (id: string) => {
    switch (id) {
      case 'industry':
        return 'bg-sky-50 text-sky-800 border-sky-200';
      case 'factory':
        return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'rd':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'education':
        return 'bg-violet-50 text-violet-800 border-violet-200';
      default:
        return 'bg-zinc-100 text-zinc-800 border-zinc-200';
    }
  };

  return (
    <section id="platformlar" className="py-16 sm:py-20 relative border-t border-zinc-200/80 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-block text-xs font-mono font-bold tracking-widest text-sky-700 uppercase">
            {content.tag}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
            {content.title}
          </h2>
          <p className="text-zinc-600 text-sm leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* 4 Vertical Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.platforms.map((p: PlatformItem) => (
            <div
              key={p.id}
              className="bg-white border border-zinc-200/90 rounded-2xl p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-300 group"
            >
              <div className="space-y-4">
                
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-zinc-100 border border-zinc-200/60 flex items-center justify-center">
                    {getIcon(p.id)}
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${getBadgeColor(p.id)}`}>
                    {p.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-base font-bold text-zinc-900 group-hover:text-sky-700 transition-colors">
                    {p.title}
                  </h3>
                  <div className="text-xs text-zinc-500 mt-0.5 font-medium">
                    {p.subtitle}
                  </div>
                </div>

                {/* Features checklist (Short and clean) */}
                <div className="space-y-2 pt-2 border-t border-zinc-100">
                  {p.features.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-tight font-medium">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Compact Metric Box */}
                <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/70 font-mono text-xs">
                  <div className="flex items-center justify-between text-zinc-500 text-[10px] mb-0.5">
                    <span>{p.metricLabel}</span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {content.activeBadge}
                    </span>
                  </div>
                  <div className="text-base font-bold text-zinc-900">
                    {p.metricValue}
                  </div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">
                    {p.metricSub}
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={() => onOpenDemo(p.title)}
                  className="w-full py-2 rounded-xl bg-zinc-100 hover:bg-zinc-900 text-zinc-800 hover:text-white border border-zinc-200 hover:border-zinc-900 font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
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
