import React from 'react';
import { TranslationContent } from '../locales/translations';
import { Box, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  content: TranslationContent['footer'];
  navContent: TranslationContent['nav'];
}

export const Footer: React.FC<FooterProps> = ({ content, navContent }) => {
  return (
    <footer className="bg-white border-t border-zinc-200/80 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-zinc-200/60">
          
          {/* Brand & Description */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white">
                <Box className="w-4 h-4 text-sky-400" />
              </div>
              <span className="text-base font-bold tracking-tight text-zinc-900">
                DigiTwins<span className="text-sky-600">.uz</span>
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
              {content.description}
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-zinc-500">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span>{content.locations}</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-[11px] font-mono font-bold text-zinc-900 uppercase tracking-wider">
              {content.dimensionsHeading}
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-600">
              <li>
                <a href="#oz-mantik" className="hover:text-zinc-950 transition-colors">
                  {navContent.system}
                </a>
              </li>
              <li>
                <a href="#dijital-boyutlar" className="hover:text-zinc-950 transition-colors">
                  {navContent.dimensions}
                </a>
              </li>
              <li>
                <a href="#green-carbon" className="hover:text-emerald-700 transition-colors font-medium text-emerald-700">
                  {navContent.greenCarbon}
                </a>
              </li>
              <li>
                <a href="#teknoloji-katmani" className="hover:text-zinc-950 transition-colors">
                  {navContent.tech}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-[11px] font-mono font-bold text-zinc-900 uppercase tracking-wider">
              {content.contactHeading}
            </h4>
            <div className="text-xs text-zinc-600 space-y-1.5">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <a
                  href="tel:+998902777366"
                  className="hover:text-emerald-700 font-mono text-zinc-900 font-semibold"
                >
                  {content.phoneValue}
                </a>
              </div>
              <div className="text-[11px] text-zinc-400 pt-1">
                Toshkent · Istanbul · Silk Road Spatial Hub
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400 font-mono">
          <div>
            &copy; {new Date().getFullYear()} DigiTwins.uz. {content.rights}
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-600 transition-colors">
              {content.privacy}
            </a>
            <span>·</span>
            <span>Spatial Twin & Green Tech</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
