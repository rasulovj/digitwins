import React from 'react';
import { TranslationContent } from '../locales/translations';
import { Leaf, PieChart, ShieldCheck, Zap, Award, Sprout } from 'lucide-react';

interface GreenCarbonProps {
  content: TranslationContent['greenCarbonSection'];
  onOpenDemo: (subject: string) => void;
}

export const GreenCarbon: React.FC<GreenCarbonProps> = ({ content, onOpenDemo }) => {
  return (
    <section id="green-carbon" className="py-20 relative z-10 border-t border-[#1e293b]/60 bg-gradient-to-b from-[#090d16]/80 to-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#22c55e]/30 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#22c55e]/10 blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: 8 cols */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] font-mono text-xs font-bold">
                <Leaf className="w-3.5 h-3.5" />
                <span>{content.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                <span>{content.title1}</span> <br />
                <span className="text-[#22c55e] text-glow-green">
                  {content.title2}
                </span>
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                {content.description}
              </p>

              {/* 4 Feature Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-slate-300 pt-2">
                
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#090d16]/80 border border-[#1e293b]">
                  <PieChart className="w-5 h-5 text-[#22c55e] shrink-0" />
                  <span>{content.f1}</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#090d16]/80 border border-[#1e293b]">
                  <ShieldCheck className="w-5 h-5 text-[#22c55e] shrink-0" />
                  <span>{content.f2}</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#090d16]/80 border border-[#1e293b]">
                  <Zap className="w-5 h-5 text-[#22c55e] shrink-0" />
                  <span>{content.f3}</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#090d16]/80 border border-[#1e293b]">
                  <Award className="w-5 h-5 text-[#22c55e] shrink-0" />
                  <span>{content.f4}</span>
                </div>

              </div>

            </div>

            {/* Right Column: 4 cols Live Carbon Neutral Widget */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-xs p-6 rounded-2xl bg-[#090d16] border border-[#22c55e]/40 text-center space-y-4 shadow-2xl">
                
                <div className="w-16 h-16 mx-auto rounded-full bg-[#22c55e]/20 flex items-center justify-center text-[#22c55e] text-3xl animate-pulse">
                  <Sprout className="w-8 h-8" />
                </div>

                <div>
                  <div className="text-xs font-mono text-slate-400">
                    {content.boxLabel}
                  </div>
                  <div className="text-3xl font-black text-[#22c55e] mt-1">
                    {content.boxValue}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-1">
                    {content.boxSub}
                  </div>
                </div>

                <button
                  onClick={() => onOpenDemo("Green Carbon AI")}
                  className="w-full py-2.5 rounded-lg bg-[#22c55e] hover:bg-emerald-600 text-[#030712] font-bold text-xs transition-colors cursor-pointer"
                >
                  {content.boxBtn}
                </button>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
