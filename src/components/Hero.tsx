import React from 'react';
import { TranslationContent, Language } from '../locales/translations';
import { TwinExplorer } from './TwinExplorer';
import { ArrowRight, Layers } from 'lucide-react';

interface HeroProps {
  heroContent: TranslationContent['hero'];
  statsContent: TranslationContent['stats'];
  currentLang: Language;
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  heroContent,
  statsContent,
  currentLang,
  onOpenDemo,
}) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-18 md:pb-24 overflow-hidden">
      
      {/* Background Subtle Warmth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-sky-100/50 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Tag */}
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto mb-14">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/90 text-xs font-mono text-zinc-700 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
            <span className="font-semibold tracking-wide">
              {heroContent.groupTag}
            </span>
          </div>

          {/* Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.12]">
            {heroContent.titleStart}{' '}
            <span className="text-sky-700">
              {heroContent.titleHighlight}
            </span>{' '}
            {heroContent.titleEnd}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl">
            {heroContent.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full sm:w-auto">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{heroContent.ctaDemo}</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </button>

            <a
              href="#platformlar"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white hover:bg-zinc-50 text-zinc-800 font-semibold text-sm border border-zinc-200 hover:border-zinc-300 transition-all flex items-center justify-center gap-2 shadow-2xs"
            >
              <Layers className="w-4 h-4 text-zinc-500" />
              <span>{heroContent.ctaPlatforms}</span>
            </a>
          </div>

        </div>

        {/* Interactive Digital Twin Showcase */}
        <div className="max-w-5xl mx-auto mb-16">
          <TwinExplorer currentLang={currentLang} />
        </div>

        {/* Minimalist 3-Metric Bar */}
        <div className="max-w-5xl mx-auto pt-10 border-t border-zinc-200 grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          <div className="p-4 rounded-xl bg-white border border-zinc-200/80 shadow-2xs">
            <div className="text-[11px] font-mono font-medium text-zinc-500 uppercase tracking-wider mb-1">
              {statsContent.label1}
            </div>
            <div className="text-2xl font-bold text-zinc-900 mb-0.5">
              {statsContent.value1}
            </div>
            <div className="text-xs text-zinc-500">
              {statsContent.sub1}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-zinc-200/80 shadow-2xs">
            <div className="text-[11px] font-mono font-medium text-zinc-500 uppercase tracking-wider mb-1">
              {statsContent.label2}
            </div>
            <div className="text-2xl font-bold text-sky-700 mb-0.5">
              {statsContent.value2}
            </div>
            <div className="text-xs text-zinc-500">
              {statsContent.sub2}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-zinc-200/80 shadow-2xs">
            <div className="text-[11px] font-mono font-medium text-zinc-500 uppercase tracking-wider mb-1">
              {statsContent.label3}
            </div>
            <div className="text-2xl font-bold text-emerald-700 mb-0.5">
              {statsContent.value3}
            </div>
            <div className="text-xs text-zinc-500">
              {statsContent.sub3}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
