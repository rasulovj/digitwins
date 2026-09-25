import React, { useState, useRef, useEffect } from 'react';
import { Language, TranslationContent } from '../locales/translations';
import { Box, Layers, Leaf, Cpu, Mail, Menu, X, ArrowUpRight, Sparkles, Globe, ChevronDown, Check } from 'lucide-react';

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
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Array<{ code: Language; label: string; full: string; flag: string }> = [
    { code: 'uz', label: 'UZ', full: "O'zbekcha", flag: '🇺🇿' },
    { code: 'tr', label: 'TR', full: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', label: 'EN', full: 'English', flag: '🇬🇧' },
  ];

  const currentLangObj = languages.find((l) => l.code === currentLang) || languages[0];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white transition-transform group-hover:scale-105">
            <Box className="w-4 h-4 text-sky-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-zinc-950 flex items-center">
              DigiTwins<span className="text-sky-600">.uz</span>
            </span>
            <span className="text-[9px] font-mono text-zinc-500 tracking-wider uppercase font-semibold -mt-1">
              Spatial Twin & Green Tech
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden xl:flex items-center space-x-6 text-[13px] font-medium text-zinc-600">
          <a
            href="#oz-mantik"
            className="hover:text-zinc-950 transition-colors flex items-center gap-1.5 py-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
            <span>{content.system}</span>
          </a>
          <a
            href="#dijital-boyutlar"
            className="hover:text-zinc-950 transition-colors flex items-center gap-1.5 py-1"
          >
            <Layers className="w-3.5 h-3.5 text-zinc-400" />
            <span>{content.dimensions}</span>
          </a>
          <a
            href="#green-carbon"
            className="hover:text-emerald-700 transition-colors flex items-center gap-1.5 py-1 text-emerald-700 font-semibold"
          >
            <Leaf className="w-3.5 h-3.5 text-emerald-600" />
            <span>{content.greenCarbon}</span>
          </a>
          <a
            href="#teknoloji-katmani"
            className="hover:text-zinc-950 transition-colors flex items-center gap-1.5 py-1"
          >
            <Cpu className="w-3.5 h-3.5 text-zinc-400" />
            <span>{content.tech}</span>
          </a>
          <a
            href="#iletisim"
            className="hover:text-zinc-950 transition-colors flex items-center gap-1.5 py-1"
          >
            <Mail className="w-3.5 h-3.5 text-zinc-400" />
            <span>{content.contact}</span>
          </a>
        </nav>

        {/* Right Actions: Language Dropdown & CTA */}
        <div className="hidden sm:flex items-center space-x-3 shrink-0">
          
          {/* Elegant Language Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100/80 hover:bg-zinc-200/70 border border-zinc-200/80 text-xs font-mono font-medium text-zinc-700 transition-all cursor-pointer"
              aria-label="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-zinc-500" />
              <span className="font-semibold">{currentLangObj.label}</span>
              <ChevronDown className={`w-3 h-3 text-zinc-400 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {langDropdownOpen && (
              <div className="absolute right-0 mt-1.5 w-40 bg-white border border-zinc-200 rounded-xl shadow-lg p-1 z-50 animate-in fade-in zoom-in-95 duration-150">
                {languages.map((item) => {
                  const isSelected = currentLang === item.code;
                  return (
                    <button
                      key={item.code}
                      onClick={() => {
                        onLanguageChange(item.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-zinc-100 text-zinc-950 font-semibold'
                          : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{item.flag}</span>
                        <span>{item.full}</span>
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 text-sky-600" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => onOpenDemo()}
            className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <span>{content.demoButton}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
          </button>

          {/* Mobile menu toggle on small-xl screens */}
          <div className="xl:hidden">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="text-zinc-700 hover:text-zinc-950 p-1.5 rounded-lg border border-zinc-200 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile menu toggle (< sm screens) */}
        <div className="sm:hidden flex items-center gap-2">
          {/* Mobile compact language selector */}
          <button
            onClick={() => setLangDropdownOpen((prev) => !prev)}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-zinc-100 border border-zinc-200 text-xs font-mono font-medium text-zinc-700"
          >
            <Globe className="w-3 h-3 text-zinc-500" />
            <span>{currentLangObj.label}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-zinc-700 hover:text-zinc-950 p-1.5 rounded-lg border border-zinc-200 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-zinc-200 px-5 pt-3 pb-6 space-y-3 shadow-md animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-1">
            <a
              href="#oz-mantik"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 text-sm font-medium transition-colors"
            >
              {content.system}
            </a>
            <a
              href="#dijital-boyutlar"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 text-sm font-medium transition-colors"
            >
              {content.dimensions}
            </a>
            <a
              href="#green-carbon"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-emerald-700 hover:bg-emerald-50 text-sm font-semibold transition-colors flex items-center gap-1.5"
            >
              <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              <span>{content.greenCarbon}</span>
            </a>
            <a
              href="#teknoloji-katmani"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 text-sm font-medium transition-colors"
            >
              {content.tech}
            </a>
            <a
              href="#iletisim"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 text-sm font-medium transition-colors"
            >
              {content.contact}
            </a>
          </nav>

          {/* Mobile Language Selection List */}
          <div className="pt-2 border-t border-zinc-100 flex items-center justify-around bg-zinc-50 p-1.5 rounded-xl">
            {languages.map((item) => (
              <button
                key={item.code}
                onClick={() => {
                  onLanguageChange(item.code);
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  currentLang === item.code
                    ? 'bg-white text-zinc-950 font-bold shadow-xs'
                    : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                {item.flag} {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDemo();
            }}
            className="w-full mt-2 py-2.5 rounded-xl bg-zinc-900 text-white font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <span>{content.demoButton}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>
      )}
    </header>
  );
};
