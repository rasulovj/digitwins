import React from 'react';
import { ThreeCanvas } from './ThreeCanvas';
import { SiteDictionary } from '../locales/siteContent';

interface HeroSectionProps {
  content: SiteDictionary['hero'];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070B12]/85 to-[#070B12] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#06B6D4]/40 bg-[#06B6D4]/10 text-[#06B6D4] text-xs font-mono font-semibold tracking-wider uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-ping"></span>
            <span>{content.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#06B6D4] via-blue-400 to-[#10B981]">
              {content.titleGradient}
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            {content.description}
          </p>

          {/* 3D Telemetry and Control Center */}
          <ThreeCanvas content={content} />
        </div>
      </div>
    </section>
  );
};
