import React from 'react';
import { TranslationContent } from '../locales/translations';
import { Factory, Building, Check, ArrowRight } from 'lucide-react';

interface DimensionsProps {
  content: TranslationContent['dimensionsSection'];
  onOpenDemo: (subject: string) => void;
}

export const Dimensions: React.FC<DimensionsProps> = ({ content, onOpenDemo }) => {
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

        {/* 2 Main Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Pillar 1: OSB & Industrial Zones */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col justify-between border-t-2 border-t-[#00f0ff] relative overflow-hidden group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] text-3xl">
                  <Factory className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/10 text-[#00f0ff] font-mono text-xs font-bold">
                  {content.p1Tag}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                  {content.p1Title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  {content.p1Sub}
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {content.p1Desc}
              </p>

              <div className="space-y-3 pt-2 text-xs font-medium text-slate-300 border-t border-[#1e293b]/60">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00f0ff] shrink-0" />
                  <span>{content.p1C1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00f0ff] shrink-0" />
                  <span>{content.p1C2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00f0ff] shrink-0" />
                  <span>{content.p1C3}</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onOpenDemo(content.p1Title)}
                className="w-full py-3.5 rounded-xl bg-[#0f172a] hover:bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/40 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{content.p1Btn}</span>
                <ArrowRight className="w-4 h-4 text-xs" />
              </button>
            </div>
          </div>

          {/* Pillar 2: Facilities & Built Spaces */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col justify-between border-t-2 border-t-[#f59e0b] relative overflow-hidden group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#f59e0b]/10 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b] text-3xl">
                  <Building className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 text-[#f59e0b] font-mono text-xs font-bold">
                  {content.p2Tag}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#f59e0b] transition-colors">
                  {content.p2Title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  {content.p2Sub}
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {content.p2Desc}
              </p>

              <div className="space-y-3 pt-2 text-xs font-medium text-slate-300 border-t border-[#1e293b]/60">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#f59e0b] shrink-0" />
                  <span>{content.p2C1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#f59e0b] shrink-0" />
                  <span>{content.p2C2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#f59e0b] shrink-0" />
                  <span>{content.p2C3}</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onOpenDemo(content.p2Title)}
                className="w-full py-3.5 rounded-xl bg-[#0f172a] hover:bg-[#f59e0b]/20 text-[#f59e0b] border border-[#f59e0b]/40 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{content.p2Btn}</span>
                <ArrowRight className="w-4 h-4 text-xs" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
