import React from 'react';
import { TranslationContent } from '../locales/translations';
import { Megaphone, MapPin, Factory } from 'lucide-react';

interface EventsProps {
  content: TranslationContent['eventsSection'];
  onOpenDemo: (eventName: string) => void;
}

export const Events: React.FC<EventsProps> = ({ content, onOpenDemo }) => {
  return (
    <section id="etkinlikler" className="py-20 border-t border-[#1e293b]/40 relative z-10 bg-[#090d16]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] font-mono text-xs font-bold">
            <Megaphone className="w-3.5 h-3.5 animate-bounce" />
            <span>{content.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {content.title}
          </h2>
          <p className="text-slate-400 text-sm">
            {content.subtitle}
          </p>
        </div>

        {/* 2 Summits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Summit 1 */}
          <div className="glass-panel p-8 rounded-2xl border border-[#f59e0b]/30 relative overflow-hidden flex flex-col justify-between space-y-6 group hover:border-[#f59e0b] transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-[#f59e0b]/20 text-[#f59e0b] font-mono text-xs font-bold">
                  {content.event1Tag}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span>{content.event1Location}</span>
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-[#f59e0b] transition-colors">
                {content.event1Title}
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                {content.event1Desc}
              </p>
            </div>

            <div className="pt-4 border-t border-[#1e293b] flex items-center justify-between gap-2">
              <span className="text-xs font-mono text-slate-400">
                {content.ctaLabel}
              </span>
              <button
                onClick={() => onOpenDemo(content.event1Title)}
                className="px-4 py-2 rounded-lg bg-[#f59e0b]/10 hover:bg-[#f59e0b] text-[#f59e0b] hover:text-[#030712] font-bold text-xs transition-colors cursor-pointer"
              >
                {content.ctaBtn1}
              </button>
            </div>
          </div>

          {/* Summit 2 */}
          <div className="glass-panel p-8 rounded-2xl border border-[#00f0ff]/30 relative overflow-hidden flex flex-col justify-between space-y-6 group hover:border-[#00f0ff] transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-[#00f0ff]/20 text-[#00f0ff] font-mono text-xs font-bold">
                  {content.event2Tag}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Factory className="w-3.5 h-3.5 text-[#00f0ff]" />
                  <span>{content.event2Location}</span>
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                {content.event2Title}
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                {content.event2Desc}
              </p>
            </div>

            <div className="pt-4 border-t border-[#1e293b] flex items-center justify-between gap-2">
              <span className="text-xs font-mono text-slate-400">
                {content.ctaLabel}
              </span>
              <button
                onClick={() => onOpenDemo(content.event2Title)}
                className="px-4 py-2 rounded-lg bg-[#00f0ff]/10 hover:bg-[#00f0ff] text-[#00f0ff] hover:text-[#030712] font-bold text-xs transition-colors cursor-pointer"
              >
                {content.ctaBtn2}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
