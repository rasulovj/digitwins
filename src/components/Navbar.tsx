import React, { useState } from 'react';
import { Language, TranslationContent } from '../locales/translations';
import { Globe, Boxes, Layers, Leaf, Cpu, Mail, Menu, X, Zap } from 'lucide-react';

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
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-[#1e293b]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00f0ff] via-[#0ea5e9] to-[#22c55e] p-[1px] transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-[#030712] rounded-[11px] flex items-center justify-center">
              <Globe className="w-5 h-5 text-[#00f0ff] transition-transform group-hover:rotate-45" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-[#00f0ff]">
              DigiTwins<span className="text-[#00f0ff]">.uz</span>
            </span>
            <span className="text-[9px] font-mono text-slate-400 tracking-widest -mt-1 uppercase font-semibold">
              Spatial Twin & Green Tech
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-slate-300">
          <a
            href="#oz-mantik"
            className="hover:text-[#00f0ff] transition-colors flex items-center gap-2"
          >
            <Boxes className="w-4 h-4 text-[#38bdf8]" />
            <span>{content.system}</span>
          </a>
          <a
            href="#dijital-boyutlar"
            className="hover:text-[#00f0ff] transition-colors flex items-center gap-2"
          >
            <Layers className="w-4 h-4 text-[#38bdf8]" />
            <span>{content.dimensions}</span>
          </a>
          <a
            href="#green-carbon"
            className="hover:text-[#22c55e] transition-colors flex items-center gap-2 text-[#22c55e]/90 font-semibold"
          >
            <Leaf className="w-4 h-4 text-[#22c55e] animate-pulse" />
            <span>{content.greenCarbon}</span>
          </a>
          <a
            href="#teknoloji-katmani"
            className="hover:text-[#00f0ff] transition-colors flex items-center gap-2"
          >
            <Cpu className="w-4 h-4 text-[#38bdf8]" />
            <span>{content.tech}</span>
          </a>
          <a
            href="#iletisim"
            className="hover:text-[#00f0ff] transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-[#38bdf8]" />
            <span>{content.contact}</span>
          </a>
        </nav>

        {/* Language Switcher & Gradient CTA */}
        <div className="hidden md:flex items-center space-x-4">
          
          {/* Language Switcher Buttons */}
          <div className="flex items-center bg-[#0f172a] border border-[#1e293b] rounded-lg p-1 text-xs font-mono">
            {languages.map((item) => (
              <button
                key={item.code}
                onClick={() => onLanguageChange(item.code)}
                className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                  currentLang === item.code
                    ? 'bg-[#0284c7] text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Project / Demo Button */}
          <button
            onClick={() => onOpenDemo()}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold rounded-xl group bg-gradient-to-br from-[#00f0ff] via-[#0ea5e9] to-[#22c55e] text-white shadow-lg shadow-[#0ea5e9]/20 hover:shadow-[#0ea5e9]/40 transition-all cursor-pointer"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#030712] rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-[#00f0ff] group-hover:text-white transition-colors" />
              <span>{content.demoButton}</span>
            </span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden text-slate-300 hover:text-white text-2xl p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-[#1e293b] px-4 pt-4 pb-6 space-y-4 animate-in fade-in duration-150">
          <a
            href="#oz-mantik"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-[#00f0ff] font-medium py-2"
          >
            {content.system}
          </a>
          <a
            href="#dijital-boyutlar"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-[#00f0ff] font-medium py-2"
          >
            {content.dimensions}
          </a>
          <a
            href="#green-carbon"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#22c55e] font-semibold py-2"
          >
            {content.greenCarbon}
          </a>
          <a
            href="#teknoloji-katmani"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-[#00f0ff] font-medium py-2"
          >
            {content.tech}
          </a>
          <a
            href="#iletisim"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-[#00f0ff] font-medium py-2"
          >
            {content.contact}
          </a>

          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-center bg-[#0f172a] border border-[#1e293b] rounded-lg p-1 text-xs font-mono my-2">
            {languages.map((item) => (
              <button
                key={item.code}
                onClick={() => {
                  onLanguageChange(item.code);
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 py-1 text-center rounded transition-all cursor-pointer ${
                  currentLang === item.code
                    ? 'bg-[#0284c7] text-white font-bold'
                    : 'text-slate-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDemo();
            }}
            className="w-full py-3 bg-gradient-to-r from-[#0ea5e9] to-[#00f0ff] text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <Zap className="w-4 h-4" />
            <span>{content.demoButton}</span>
          </button>
        </div>
      )}
    </header>
  );
};
