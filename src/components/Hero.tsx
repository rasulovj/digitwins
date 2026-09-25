import React from 'react';
import { TranslationContent, Language } from '../locales/translations';
import { TwinExplorer } from './TwinExplorer';
import { ArrowRight, Layers, Globe, Building, Sparkles, Leaf } from 'lucide-react';

interface HeroProps {
  heroContent: TranslationContent['hero'];
  currentLang: Language;
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  heroContent,
  currentLang,
  onOpenDemo,
}) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden">
      
      {/* Background Subtle Warmth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-sky-100/40 via-sky-50/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Tag */}
        <div className="flex flex-col items-center text-center space-y-5 max-w-4xl mx-auto mb-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/90 text-xs font-mono text-zinc-700 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
            <span className="font-semibold tracking-wide">
              {heroContent.badge}
            </span>
          </div>

          {/* Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.12]">
            {heroContent.title1}{' '}
            <span className="text-sky-700 block sm:inline">
              {heroContent.title2}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl">
            {heroContent.description}
          </p>

          {/* 4 Feature Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 pb-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200 text-xs font-medium">
              <Globe className="w-3.5 h-3.5 text-sky-600" />
              <span>{heroContent.tagAreas}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 text-xs font-medium">
              <Building className="w-3.5 h-3.5 text-blue-600" />
              <span>{heroContent.tagFacilities}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>{heroContent.tagXr}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium">
              <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              <span>{heroContent.tagGreen}</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full sm:w-auto">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{heroContent.btnMain}</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </button>

            <a
              href="#dijital-boyutlar"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white hover:bg-zinc-50 text-zinc-800 font-semibold text-sm border border-zinc-200 hover:border-zinc-300 transition-all flex items-center justify-center gap-2 shadow-2xs"
            >
              <Layers className="w-4 h-4 text-zinc-500" />
              <span>{heroContent.btnSub}</span>
            </a>
          </div>

        </div>

        {/* Interactive Digital Twin Showcase */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{heroContent.canvasTelemetry}</span>
            </div>
            <div className="text-[11px] font-mono text-zinc-400">
              LiDAR · IoT Telemetry · Nara XR Engine
            </div>
          </div>
          <TwinExplorer currentLang={currentLang} />
        </div>

      </div>
    </section>
  );
};
