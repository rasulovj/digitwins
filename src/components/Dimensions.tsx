import React, { useState, useEffect } from 'react';
import { TranslationContent, DimensionItem } from '../locales/translations';
import { Globe, Building, Glasses, Check, ArrowRight } from 'lucide-react';

interface DimensionsProps {
  content: TranslationContent['dimensionsSection'];
  onOpenDemo: (dimensionTitle: string) => void;
}

export const Dimensions: React.FC<DimensionsProps> = ({ content, onOpenDemo }) => {
  const [oeeVal, setOeeVal] = useState('96.2%');

  // Live telemetry fluctuation effect matching HTML
  useEffect(() => {
    const interval = setInterval(() => {
      const val = (95.2 + Math.random() * 1.4).toFixed(1);
      setOeeVal(`${val}%`);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getDimConfig = (id: string) => {
    switch (id) {
      case 'macro':
        return {
          borderTop: 'border-t-[#00f0ff]',
          iconBg: 'bg-[#00f0ff]/10 border-[#00f0ff]/30 text-[#00f0ff]',
          tagBorder: 'border-[#00f0ff]/30 bg-[#00f0ff]/10 text-[#00f0ff]',
          hoverTitle: 'group-hover:text-[#00f0ff]',
          checkColor: 'text-[#00f0ff]',
          statusColor: 'text-[#00f0ff]',
          metricColor: 'text-[#00f0ff]',
          btnStyle: 'hover:bg-[#00f0ff]/20 text-[#00f0ff] border-[#00f0ff]/40',
          icon: <Globe className="w-6 h-6" />,
        };
      case 'micro':
        return {
          borderTop: 'border-t-[#f59e0b]',
          iconBg: 'bg-[#f59e0b]/10 border-[#f59e0b]/30 text-[#f59e0b]',
          tagBorder: 'border-[#f59e0b]/30 bg-[#f59e0b]/10 text-[#f59e0b]',
          hoverTitle: 'group-hover:text-[#f59e0b]',
          checkColor: 'text-[#f59e0b]',
          statusColor: 'text-[#f59e0b]',
          metricColor: 'text-[#f59e0b]',
          btnStyle: 'hover:bg-[#f59e0b]/20 text-[#f59e0b] border-[#f59e0b]/40',
          icon: <Building className="w-6 h-6" />,
        };
      case 'xr':
      default:
        return {
          borderTop: 'border-t-[#a855f7]',
          iconBg: 'bg-[#a855f7]/10 border-[#a855f7]/30 text-[#a855f7]',
          tagBorder: 'border-[#a855f7]/30 bg-[#a855f7]/10 text-[#a855f7]',
          hoverTitle: 'group-hover:text-[#a855f7]',
          checkColor: 'text-[#a855f7]',
          statusColor: 'text-[#a855f7]',
          metricColor: 'text-[#a855f7]',
          btnStyle: 'hover:bg-[#a855f7]/20 text-[#a855f7] border-[#a855f7]/40',
          icon: <Glasses className="w-6 h-6" />,
        };
    }
  };

  return (
    <section id="dijital-boyutlar" className="py-20 relative z-10 border-t border-[#1e293b]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-mono font-bold tracking-widest text-[#00f0ff] uppercase">
            {content.badge}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            {content.title}
          </p>
          <p className="text-slate-400 text-sm">
            {content.subtitle}
          </p>
        </div>

        {/* 3 Dimension Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {content.items.map((item: DimensionItem) => {
            const cfg = getDimConfig(item.id);
            return (
              <div
                key={item.id}
                className={`glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between border-t-2 ${cfg.borderTop} relative overflow-hidden group`}
              >
                <div className="space-y-5">
                  
                  {/* Top Bar with Icon and Tag */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center text-2xl ${cfg.iconBg}`}>
                      {cfg.icon}
                    </div>
                    <span className={`px-2.5 py-1 rounded border font-mono text-xs font-bold ${cfg.tagBorder}`}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className={`text-2xl font-bold text-white transition-colors ${cfg.hoverTitle}`}>
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2 pt-2 text-xs font-medium text-slate-300 border-t border-[#1e293b]/60">
                    {item.features.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className={`w-4 h-4 shrink-0 ${cfg.checkColor}`} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Live Mini Telemetry Widget */}
                  <div className="p-4 rounded-xl bg-[#090d16] border border-[#1e293b] font-mono text-xs space-y-3">
                    <div className="flex items-center justify-between text-slate-400 text-[11px] border-b border-[#1e293b] pb-2">
                      <span>{item.widgetTitle}</span>
                      <span className={`font-bold ${cfg.statusColor}`}>
                        {item.widgetStatus}
                      </span>
                    </div>

                    {item.id === 'macro' && (
                      <div className="grid grid-cols-2 gap-2 text-center">
                        <div className="bg-[#0f172a] p-2 rounded border border-[#1e293b]">
                          <div className="text-slate-400 text-[10px]">{item.metric1Label}</div>
                          <div className="text-white font-bold text-sm">{item.metric1Value}</div>
                        </div>
                        <div className="bg-[#0f172a] p-2 rounded border border-[#1e293b]">
                          <div className="text-slate-400 text-[10px]">{item.metric2Label}</div>
                          <div className="text-[#00f0ff] font-bold text-sm">{item.metric2Value}</div>
                        </div>
                      </div>
                    )}

                    {item.id === 'micro' && (
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-slate-400 text-[10px]">{item.metric1Label}</div>
                          <div className="text-white font-bold text-sm">{item.metric1Value}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-slate-400 text-[10px]">{item.metric2Label}</div>
                          <div className="text-[#f59e0b] font-bold text-sm">{oeeVal}</div>
                        </div>
                      </div>
                    )}

                    {item.id === 'xr' && (
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-slate-400 text-[10px]">{item.metric1Label}</div>
                          <div className="text-white font-bold text-sm">{item.metric1Value}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-slate-400 text-[10px]">{item.metric2Label}</div>
                          <div className="text-[#a855f7] font-bold text-sm">{item.metric2Value}</div>
                        </div>
                      </div>
                    )}

                  </div>

                </div>

                {/* Bottom CTA Button */}
                <div className="pt-6">
                  <button
                    onClick={() => onOpenDemo(item.title)}
                    className={`w-full py-3 rounded-xl bg-[#0f172a] border font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${cfg.btnStyle}`}
                  >
                    <span>{item.btnText}</span>
                    <ArrowRight className="w-4 h-4 text-xs" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
