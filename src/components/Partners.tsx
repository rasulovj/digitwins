import React from 'react';
import { TranslationContent } from '../locales/translations';
import { Handshake, Users } from 'lucide-react';

interface PartnersProps {
  content: TranslationContent['partnersSection'];
  onOpenDemo: (subject: string) => void;
}

export const Partners: React.FC<PartnersProps> = ({ content, onOpenDemo }) => {
  return (
    <section id="partnerler" className="py-16 border-t border-[#1e293b]/40 bg-[#090d16]/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-[#1e293b] text-center max-w-3xl mx-auto space-y-4">
          <div className="w-12 h-12 mx-auto rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] text-2xl">
            <Handshake className="w-6 h-6" />
          </div>
          <h2 className="text-xs font-mono font-bold tracking-widest text-[#00f0ff] uppercase">
            {content.badge}
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-white">
            {content.title}
          </p>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenDemo("Teknoloji Partnerliği")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0ea5e9] to-[#00f0ff] hover:opacity-90 text-white font-bold text-xs transition-all shadow-lg shadow-[#0ea5e9]/20 cursor-pointer"
            >
              <Users className="w-4 h-4" />
              <span>{content.btn}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
