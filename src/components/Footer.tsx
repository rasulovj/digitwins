import React from 'react';
import { TranslationContent } from '../locales/translations';
import { Box } from 'lucide-react';

interface FooterProps {
  content: TranslationContent['footer'];
  navContent: TranslationContent['nav'];
}

export const Footer: React.FC<FooterProps> = ({ content, navContent }) => {
  return (
    <footer className="bg-zinc-100/70 border-t border-zinc-200 py-12 text-zinc-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white">
              <Box className="w-4 h-4 text-sky-400" />
            </div>
            <div>
              <span className="text-base font-bold text-zinc-900 tracking-tight">
                DigiTwins Group
              </span>
              <div className="text-[10px] font-mono text-zinc-500">
                {content.locations}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-600 text-xs font-medium">
            <a href="#platformlar" className="hover:text-zinc-900 transition-colors">
              {navContent.platforms}
            </a>
            <a href="#katmanlar" className="hover:text-zinc-900 transition-colors">
              {navContent.techLayers}
            </a>
            <a href="#telemetriya" className="hover:text-zinc-900 transition-colors">
              {navContent.telemetry}
            </a>
            <a href="#aloqa" className="hover:text-zinc-900 transition-colors">
              {navContent.contact}
            </a>
          </div>
        </div>

        <p className="text-center md:text-left text-zinc-500 text-xs max-w-xl">
          {content.tagline}
        </p>

        {/* Bottom Row */}
        <div className="border-t border-zinc-200/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} DigiTwins Deep Tech Group. {content.rights}
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-800 transition-colors">
              {content.privacy}
            </a>
            <a href="#" className="hover:text-zinc-800 transition-colors">
              {content.terms}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
