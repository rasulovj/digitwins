import React from 'react';
import { TranslationContent } from '../locales/translations';
import { MapPin, Box, Wifi, LineChart } from 'lucide-react';

interface TechLayersProps {
  content: TranslationContent['techSection'];
}

export const TechLayers: React.FC<TechLayersProps> = ({ content }) => {
  return (
    <section id="teknoloji-katmani" className="py-20 border-t border-[#1e293b]/40 relative z-10">
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

        {/* 4 Architectural Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Step 01 */}
          <div className="glass-panel p-6 rounded-2xl space-y-3 relative group hover:border-[#0ea5e9] transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[#00f0ff] block">
                {content.t1Step}
              </span>
              <h3 className="text-lg font-bold text-white">
                {content.t1Title}
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                {content.t1Desc}
              </p>
            </div>
            <div className="pt-2 text-[#00f0ff] text-sm">
              <MapPin className="w-5 h-5 text-[#00f0ff]" />
            </div>
          </div>

          {/* Step 02 */}
          <div className="glass-panel p-6 rounded-2xl space-y-3 relative group hover:border-[#0ea5e9] transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[#00f0ff] block">
                {content.t2Step}
              </span>
              <h3 className="text-lg font-bold text-white">
                {content.t2Title}
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                {content.t2Desc}
              </p>
            </div>
            <div className="pt-2 text-[#00f0ff] text-sm">
              <Box className="w-5 h-5 text-[#00f0ff]" />
            </div>
          </div>

          {/* Step 03 */}
          <div className="glass-panel p-6 rounded-2xl space-y-3 relative group hover:border-[#0ea5e9] transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[#00f0ff] block">
                {content.t3Step}
              </span>
              <h3 className="text-lg font-bold text-white">
                {content.t3Title}
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                {content.t3Desc}
              </p>
            </div>
            <div className="pt-2 text-[#00f0ff] text-sm">
              <Wifi className="w-5 h-5 text-[#00f0ff]" />
            </div>
          </div>

          {/* Step 04 */}
          <div className="glass-panel p-6 rounded-2xl space-y-3 relative group hover:border-[#0ea5e9] transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[#00f0ff] block">
                {content.t4Step}
              </span>
              <h3 className="text-lg font-bold text-white">
                {content.t4Title}
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                {content.t4Desc}
              </p>
            </div>
            <div className="pt-2 text-[#00f0ff] text-sm">
              <LineChart className="w-5 h-5 text-[#00f0ff]" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
