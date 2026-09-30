import React from 'react';
import { TranslationContent } from '../locales/translations';
import { Star, LayoutTemplate } from 'lucide-react';

interface ShowcaseBannerProps {
  content: TranslationContent['showcaseSection'];
  onOpenDemo: (subject: string) => void;
}

export const ShowcaseBanner: React.FC<ShowcaseBannerProps> = ({ content, onOpenDemo }) => {
  return (
    <section className="py-12 border-t border-[#1e293b]/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-2 border-dashed border-[#00f0ff]/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#090d16] via-[#0f172a] to-[#090d16]">
          
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs font-bold">
              <Star className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>{content.badge}</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              {content.title}
            </h3>
            <p className="text-slate-300 text-xs max-w-2xl leading-relaxed">
              {content.description}
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenDemo("Reklam ve Öne Çıkarma")}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#0ea5e9] text-white font-bold text-xs hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-[#0ea5e9]/20 cursor-pointer"
            >
              <LayoutTemplate className="w-4 h-4" />
              <span>{content.btn}</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
