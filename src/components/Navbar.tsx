import React, { useState } from 'react';
import { Language, TranslationContent } from '../locales/translations';
import { Box, Layers, Cpu, Activity, Mail, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  content: TranslationContent['nav'];
  onOpenDemo: (platform?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  content,
  onOpenDemo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages: Array<{ code: Language; label: string }> = [
    { code: 'uz', label: 'UZ' },
    { code: 'tr', label: 'TR' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-zinc-900 flex items-center justify-center text-white transition-transform group-hover:scale-102">
            <Box className="w-4 h-4 text-sky-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-zinc-900 flex items-center">
              DigiTwins<span className="text-sky-600">.uz</span>
            </span>
            <span className="text-[10px] font-mono text-zinc-600 tracking-wider uppercase font-semibold -mt-1">
              Deep Tech Group
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-zinc-700">
          <a
            href="#platformlar"
            className="hover:text-zinc-900 transition-colors flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5 text-zinc-600" />
            <span>{content.platforms}</span>
          </a>
          <a
            href="#katmanlar"
            className="hover:text-zinc-900 transition-colors flex items-center gap-1.5"
          >
            <Cpu className="w-3.5 h-3.5 text-zinc-600" />
            <span>{content.techLayers}</span>
          </a>
          <a
            href="#telemetriya"
            className="hover:text-zinc-900 transition-colors flex items-center gap-1.5"
          >
            <Activity className="w-3.5 h-3.5 text-zinc-600" />
            <span>{content.telemetry}</span>
          </a>
          <a
            href="#aloqa"
            className="hover:text-zinc-900 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-zinc-600" />
            <span>{content.contact}</span>
          </a>
        </nav>

        {/* Language selector & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center bg-zinc-100 border border-zinc-200/80 rounded-lg p-0.5 text-xs font-mono">
            {languages.map((item) => (
              <button
                key={item.code}
                onClick={() => onLanguageChange(item.code)}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  currentLang === item.code
                    ? 'bg-white text-zinc-900 font-bold shadow-2xs'
                    : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => onOpenDemo()}
            className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <span>{content.demoButton}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <div className="flex items-center bg-zinc-100 border border-zinc-200 rounded-lg p-0.5 text-xs font-mono">
            {languages.map((item) => (
              <button
                key={item.code}
                onClick={() => onLanguageChange(item.code)}
                className={`px-2 py-0.5 rounded ${
                  currentLang === item.code
                    ? 'bg-white text-zinc-900 font-bold shadow-2xs'
                    : 'text-zinc-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-zinc-700 hover:text-zinc-900 p-1.5 rounded-lg border border-zinc-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-5 pt-4 pb-6 space-y-3">
          <a
            href="#platformlar"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-700 hover:text-zinc-950 py-2 text-sm font-medium"
          >
            {content.platforms}
          </a>
          <a
            href="#katmanlar"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-700 hover:text-zinc-950 py-2 text-sm font-medium"
          >
            {content.techLayers}
          </a>
          <a
            href="#telemetriya"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-700 hover:text-zinc-950 py-2 text-sm font-medium"
          >
            {content.telemetry}
          </a>
          <a
            href="#aloqa"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-700 hover:text-zinc-950 py-2 text-sm font-medium"
          >
            {content.contact}
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDemo();
            }}
            className="w-full mt-2 py-2.5 rounded-xl bg-zinc-900 text-white font-semibold text-sm flex items-center justify-center gap-2"
          >
            <span>{content.demoButton}</span>
            <ArrowUpRight className="w-4 h-4 text-sky-400" />
          </button>
        </div>
      )}
    </header>
  );
};
