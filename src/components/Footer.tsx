import React from 'react';
import { TranslationContent } from '../locales/translations';
import { Globe, MapPin, Phone, Send } from 'lucide-react';

interface FooterProps {
  content: TranslationContent['footer'];
  navContent: TranslationContent['nav'];
}

export const Footer: React.FC<FooterProps> = ({ content, navContent }) => {
  return (
    <footer id="iletisim" className="border-t border-[#1e293b]/80 bg-[#030712] relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#1e293b]/60">
          
          {/* Brand & Socials (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff]">
                <Globe className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold text-white">
                DigiTwins<span className="text-[#00f0ff]">.uz</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {content.description}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 text-slate-400 text-sm pt-1">
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-[#0f172a] border border-[#1e293b] flex items-center justify-center hover:text-[#00f0ff] hover:border-[#00f0ff] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="https://t.me/digitwins_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0f172a] border border-[#1e293b] flex items-center justify-center hover:text-[#00f0ff] hover:border-[#00f0ff] transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-[#0f172a] border border-[#1e293b] flex items-center justify-center hover:text-[#00f0ff] hover:border-[#00f0ff] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Dimension Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {content.dimensionsHeading}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#oz-mantik" className="hover:text-[#00f0ff] transition-colors">
                  {navContent.system}
                </a>
              </li>
              <li>
                <a href="#dijital-boyutlar" className="hover:text-[#00f0ff] transition-colors">
                  {navContent.dimensions}
                </a>
              </li>
              <li>
                <a href="#green-carbon" className="hover:text-[#22c55e] transition-colors font-medium text-[#22c55e]">
                  {navContent.greenCarbon}
                </a>
              </li>
              <li>
                <a href="#teknoloji-katmani" className="hover:text-[#00f0ff] transition-colors">
                  {navContent.tech}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {content.contactHeading}
            </h4>
            <div className="space-y-2 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span>{content.locations}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <a
                  href={`tel:${content.phoneValue.replace(/\s+/g, '')}`}
                  className="hover:text-[#00f0ff] transition-colors"
                >
                  {content.phoneValue}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span>www.digitwins.uz</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
          <div>&copy; {new Date().getFullYear()} DigiTwins.uz. {content.rights}</div>
          <div>Spatial Twin & Green Tech Ecosystem</div>
        </div>

      </div>
    </footer>
  );
};
