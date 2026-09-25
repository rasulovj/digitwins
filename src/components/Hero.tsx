import React from 'react';
import { TranslationContent } from '../locales/translations';
import { HeroCanvas } from './HeroCanvas';
import { Globe, Building, Sparkles, Leaf, ArrowRight, Boxes } from 'lucide-react';

interface HeroProps {
  heroContent: TranslationContent['hero'];
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  heroContent,
  onOpenDemo,
}) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border-[#0ea5e9]/40 text-xs font-mono text-[#00f0ff]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-ping"></span>
              <span className="font-bold tracking-wide">
                {heroContent.badge}
              </span>
            </div>

            {/* Glowing Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-white leading-[1.18]">
              <span>{heroContent.title1}</span> <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#22c55e] text-glow">
                {heroContent.title2}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {heroContent.description}
            </p>

            {/* 4 Universal Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono text-slate-300 max-w-xl mx-auto lg:mx-0">
              <div className="p-2.5 rounded-lg bg-[#0f172a] border border-[#1e293b] text-center hover:border-[#00f0ff]/50 transition-colors">
                <Globe className="w-4 h-4 text-[#00f0ff] mx-auto mb-1" />
                <span>{heroContent.tagAreas}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0f172a] border border-[#1e293b] text-center hover:border-[#f59e0b]/50 transition-colors">
                <Building className="w-4 h-4 text-[#f59e0b] mx-auto mb-1" />
                <span>{heroContent.tagFacilities}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0f172a] border border-[#1e293b] text-center hover:border-[#a855f7]/50 transition-colors">
                <Sparkles className="w-4 h-4 text-[#a855f7] mx-auto mb-1" />
                <span>{heroContent.tagXr}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0f172a] border border-[#1e293b] text-center hover:border-[#22c55e]/50 transition-colors">
                <Leaf className="w-4 h-4 text-[#22c55e] mx-auto mb-1" />
                <span>{heroContent.tagGreen}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#0ea5e9] to-[#00f0ff] hover:from-[#0284c7] hover:to-[#0ea5e9] text-white font-bold text-sm shadow-xl shadow-[#0ea5e9]/20 hover:shadow-[#0ea5e9]/40 transition-all flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>{heroContent.btnMain}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#dijital-boyutlar"
                className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel hover:bg-[#1a2436] text-slate-200 font-semibold text-sm border border-[#1e293b] hover:border-[#0ea5e9]/50 transition-all flex items-center justify-center gap-2"
              >
                <Boxes className="w-4 h-4 text-[#38bdf8]" />
                <span>{heroContent.btnSub}</span>
              </a>
            </div>

          </div>

          {/* Right Column: 3D Spatial Interactive Visualizer */}
          <div className="lg:col-span-5 relative">
            <HeroCanvas telemetryLabel={heroContent.canvasTelemetry} />
          </div>

        </div>
      </div>
    </section>
  );
};
