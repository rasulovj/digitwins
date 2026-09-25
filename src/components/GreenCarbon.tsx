import React from 'react';
import { TranslationContent } from '../locales/translations';
import { Leaf, ShieldCheck, Flame, Award, ArrowRight, ExternalLink } from 'lucide-react';

interface GreenCarbonProps {
  content: TranslationContent['greenCarbonSection'];
  onOpenDemo: (subject: string) => void;
}

export const GreenCarbon: React.FC<GreenCarbonProps> = ({ content, onOpenDemo }) => {
  const featureIcons = [
    <Leaf className="w-4 h-4 text-emerald-600 shrink-0" />,
    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />,
    <Flame className="w-4 h-4 text-emerald-600 shrink-0" />,
    <Award className="w-4 h-4 text-emerald-600 shrink-0" />,
  ];

  const features = [content.f1, content.f2, content.f3, content.f4];

  return (
    <section id="green-carbon" className="py-16 sm:py-20 relative border-t border-zinc-200/80 bg-[#FAFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold tracking-widest text-emerald-800 uppercase">
            <Leaf className="w-3.5 h-3.5 text-emerald-600" />
            <span>{content.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
            {content.title1}{' '}
            <span className="text-emerald-700 block sm:inline">
              {content.title2}
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed max-w-xl mx-auto">
            {content.description}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left: 4 Feature Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-emerald-100 p-4 shadow-2xs flex items-start gap-3 hover:border-emerald-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                  {featureIcons[idx]}
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-900 leading-snug">
                    {feature}
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono mt-0.5">
                    ISO 14064 / GHG Protocol
                  </div>
                </div>
              </div>
            ))}

            <div className="sm:col-span-2 pt-2">
              <a
                href="https://greencarbonai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
              >
                <span>greencarbonai.com rasmiy platformasi</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Live Carbon Neutrality Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-emerald-200/90 p-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-2xl pointer-events-none -z-0" />
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md uppercase">
                    {content.boxLabel}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div>
                  <div className="text-4xl font-extrabold text-emerald-700 tracking-tight font-mono">
                    {content.boxValue}
                  </div>
                  <div className="text-xs font-medium text-zinc-600 mt-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span>{content.boxSub}</span>
                  </div>
                </div>

                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200/70 font-mono text-[11px] space-y-1 text-zinc-600">
                  <div className="flex justify-between">
                    <span>Uglerod zichligi kamayishi:</span>
                    <strong className="text-emerald-700">-28.4%</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Yevropa Ittifoqi SKDM:</span>
                    <strong className="text-zinc-900">A+ Moslik</strong>
                  </div>
                </div>

                <button
                  onClick={() => onOpenDemo("Green Carbon AI")}
                  className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>{content.boxBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
