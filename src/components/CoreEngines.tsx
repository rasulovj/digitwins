import React from 'react';
import { TranslationContent } from '../locales/translations';
import { Archive, Glasses, Check } from 'lucide-react';

interface CoreEnginesProps {
  content: TranslationContent['coreEngines'];
}

export const CoreEngines: React.FC<CoreEnginesProps> = ({ content }) => {
  return (
    <section id="oz-mantik" className="py-16 border-t border-[#1e293b]/40 bg-[#090d16]/30 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
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

        {/* 2 Engines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Engine 1 */}
          <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-[#00f0ff] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] text-2xl">
              <Archive className="w-6 h-6" />
            </div>
            <span className="px-2.5 py-1 rounded bg-[#00f0ff]/10 text-[#00f0ff] font-mono text-xs font-bold inline-block">
              {content.engine1Tag}
            </span>
            <h3 className="text-2xl font-bold text-white">
              {content.engine1Title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {content.engine1Desc}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#00f0ff]">
              <Check className="w-4 h-4 shrink-0" />
              <span>{content.engine1Check}</span>
            </div>
          </div>

          {/* Engine 2 */}
          <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-[#a855f7] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#a855f7]/10 border border-[#a855f7]/30 flex items-center justify-center text-[#a855f7] text-2xl">
              <Glasses className="w-6 h-6" />
            </div>
            <span className="px-2.5 py-1 rounded bg-[#a855f7]/10 text-[#a855f7] font-mono text-xs font-bold inline-block">
              {content.engine2Tag}
            </span>
            <h3 className="text-2xl font-bold text-white">
              {content.engine2Title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {content.engine2Desc}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#a855f7]">
              <Check className="w-4 h-4 shrink-0" />
              <span>{content.engine2Check}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
