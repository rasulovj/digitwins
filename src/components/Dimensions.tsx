import React from 'react';
import { TranslationContent, DimensionItem } from '../locales/translations';
import { Globe, Building, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface DimensionsProps {
  content: TranslationContent['dimensionsSection'];
  onOpenDemo: (dimensionTitle: string) => void;
}

export const Dimensions: React.FC<DimensionsProps> = ({ content, onOpenDemo }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'macro':
        return <Globe className="w-5 h-5 text-sky-700" />;
      case 'micro':
        return <Building className="w-5 h-5 text-blue-700" />;
      case 'xr':
        return <Sparkles className="w-5 h-5 text-purple-700" />;
      default:
        return <Globe className="w-5 h-5 text-sky-700" />;
    }
  };

  const getBadgeStyle = (id: string) => {
    switch (id) {
      case 'macro':
        return 'bg-sky-50 text-sky-800 border-sky-200';
      case 'micro':
        return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'xr':
        return 'bg-purple-50 text-purple-800 border-purple-200';
      default:
        return 'bg-zinc-100 text-zinc-800 border-zinc-200';
    }
  };

  return (
    <section id="dijital-boyutlar" className="py-16 sm:py-20 relative border-t border-zinc-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-block text-xs font-mono font-bold tracking-widest text-sky-700 uppercase">
            {content.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
            {content.title}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* 3 Unified Dimension Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.items.map((item: DimensionItem) => (
            <div
              key={item.id}
              className="bg-zinc-50/60 rounded-2xl border border-zinc-200/80 p-6 flex flex-col justify-between hover:border-zinc-300 transition-all shadow-2xs hover:shadow-md"
            >
              <div className="space-y-4">
                
                {/* Header with Icon and Tag */}
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-md border ${getBadgeStyle(item.id)} uppercase`}>
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white border border-zinc-200/70 flex items-center justify-center">
                    {getIcon(item.id)}
                  </div>
                </div>

                {/* Title and Description */}
                <div>
                  <h3 className="text-base font-bold text-zinc-950 tracking-tight">
                    {item.title}
                  </h3>
                  <div className="text-xs font-medium text-sky-800 mt-0.5">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-zinc-600 font-normal leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="space-y-1.5 pt-1">
                  {item.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-zinc-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-tight">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Telemetry / Live Status Box */}
                <div className="p-3 rounded-xl bg-white border border-zinc-200/70 font-mono text-xs shadow-2xs">
                  <div className="flex items-center justify-between text-zinc-500 text-[10px] mb-1.5">
                    <span>{item.widgetTitle}</span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {item.widgetStatus}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-zinc-100">
                    <div>
                      <div className="text-[10px] text-zinc-500">{item.metric1Label}</div>
                      <div className="text-sm font-bold text-zinc-900">{item.metric1Value}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-500">{item.metric2Label}</div>
                      <div className="text-sm font-bold text-sky-700">{item.metric2Value}</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-5">
                <button
                  onClick={() => onOpenDemo(item.title)}
                  className="w-full py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-900 text-zinc-800 hover:text-white border border-zinc-200 hover:border-zinc-900 font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>{item.btnText}</span>
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
