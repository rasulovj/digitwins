import React, { useState } from 'react';
import { TranslationContent } from '../locales/translations';
import { Landmark, ChevronDown, ChevronUp } from 'lucide-react';

interface LegalGuideProps {
  content: TranslationContent['legalSection'];
}

export const LegalGuide: React.FC<LegalGuideProps> = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="ozbekiston-raqamli" className="py-8 border-t border-[#1e293b]/40 bg-[#030712] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-xl bg-[#090d16]/60 border border-[#1e293b]/80">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Landmark className="w-4 h-4 text-[#f59e0b] shrink-0" />
              <span className="text-xs font-semibold text-slate-300">
                {content.title}
              </span>
            </div>

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="px-3 py-1.5 rounded-lg bg-[#0f172a] border border-[#1e293b] hover:bg-[#1a2436] text-slate-300 font-mono text-[11px] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>{isOpen ? content.toggleClose : content.toggleOpen}</span>
              {isOpen ? (
                <ChevronUp className="w-3.5 h-3.5 text-[10px]" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-[10px]" />
              )}
            </button>
          </div>

          {isOpen && (
            <div className="pt-4 border-t border-[#1e293b]/50 space-y-4 text-xs text-slate-300 animate-in fade-in duration-200 mt-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* PF-6079 */}
                <div className="p-3 rounded-lg bg-[#0f172a] border border-[#1e293b]/60 space-y-1">
                  <span className="px-2 py-0.5 rounded bg-[#f59e0b]/10 text-[#f59e0b] font-mono text-[10px] font-bold">
                    PF-6079-SONLI FARMON
                  </span>
                  <h4 className="font-bold text-white text-xs mt-1">
                    {content.pf6079Title}
                  </h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    {content.pf6079Desc}
                  </p>
                </div>

                {/* O'RQ-702 */}
                <div className="p-3 rounded-lg bg-[#0f172a] border border-[#1e293b]/60 space-y-1">
                  <span className="px-2 py-0.5 rounded bg-[#00f0ff]/10 text-[#00f0ff] font-mono text-[10px] font-bold">
                    O'RQ-702-SONLI QONUN
                  </span>
                  <h4 className="font-bold text-white text-xs mt-1">
                    {content.orq702Title}
                  </h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    {content.orq702Desc}
                  </p>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
