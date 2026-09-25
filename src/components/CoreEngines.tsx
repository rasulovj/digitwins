import React from 'react';
import { TranslationContent } from '../locales/translations';
import { Database, Scan, CheckCircle2, ArrowRight } from 'lucide-react';

interface CoreEnginesProps {
  content: TranslationContent['coreEngines'];
  onOpenDemo: (moduleName: string) => void;
}

export const CoreEngines: React.FC<CoreEnginesProps> = ({ content, onOpenDemo }) => {
  return (
    <section id="oz-mantik" className="py-16 sm:py-20 relative border-t border-zinc-200/80 bg-zinc-50/50">
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

        {/* 2 Core Engines Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Engine 1: Ready-Made Assets Library */}
          <div className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-sky-700 bg-sky-50 border border-sky-200/80 px-2.5 py-1 rounded-md">
                  {content.engine1Tag}
                </span>
                <div className="w-9 h-9 rounded-xl bg-zinc-100 flex items-center justify-center text-sky-700">
                  <Database className="w-4.5 h-4.5" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                  {content.engine1Title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mt-1.5">
                  {content.engine1Desc}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-medium text-zinc-700">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>{content.engine1Check}</span>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onOpenDemo(content.engine1Title)}
                className="w-full py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-900 text-zinc-800 hover:text-white border border-zinc-200 hover:border-zinc-900 font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{content.engine1Title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Engine 2: On-Site Digitization Service */}
          <div className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-md">
                  {content.engine2Tag}
                </span>
                <div className="w-9 h-9 rounded-xl bg-zinc-100 flex items-center justify-center text-emerald-700">
                  <Scan className="w-4.5 h-4.5" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                  {content.engine2Title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mt-1.5">
                  {content.engine2Desc}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-medium text-zinc-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{content.engine2Check}</span>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onOpenDemo(content.engine2Title)}
                className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>{content.engine2Title}</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
