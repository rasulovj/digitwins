import React, { useState } from 'react';

interface HeaderNavProps {
  currentLang: 'UZ' | 'TR' | 'EN';
  onLanguageChange: (lang: 'UZ' | 'TR' | 'EN') => void;
  onOpenModal: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentLang,
  onLanguageChange,
  onOpenModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-[#1E293B]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#06B6D4] via-blue-500 to-indigo-600 flex items-center justify-center text-black font-black text-xl shadow-lg shadow-[#06B6D4]/25 group-hover:scale-105 transition-transform">
            <i className="fa-solid fa-cube text-white text-lg"></i>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-white group-hover:text-[#06B6D4] transition-colors">
              DigiTwins<span className="text-[#06B6D4]">.uz</span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
              Spatial Digital Twin
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#donusum-odaklari" className="hover:text-[#06B6D4] transition-colors">
            OSB & Fabrika İkizi
          </a>
          <a
            href="#green-carbon"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <i className="fa-solid fa-leaf text-[#10B981] text-xs"></i>
            <span>Green Carbon AI</span>
          </a>
          <a
            href="#etkinlik-zirve"
            className="text-[#06B6D4] font-semibold hover:text-white transition-colors flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/30"
          >
            <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse"></span>
            <span>Zirve & Atölye</span>
          </a>
        </nav>

        {/* Actions & Language Selector */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center bg-[#0F172A] border border-[#1E293B] rounded-lg p-1 text-xs font-mono">
            {(['UZ', 'TR', 'EN'] as const).map((l) => (
              <button
                key={l}
                onClick={() => onLanguageChange(l)}
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                  currentLang === l
                    ? 'bg-[#06B6D4] text-black font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#06B6D4] to-blue-600 text-black font-bold text-xs tracking-wide uppercase hover:brightness-110 transition-all shadow-md shadow-[#06B6D4]/25 cursor-pointer"
          >
            <i className="fa-solid fa-paper-plane text-xs"></i>
            <span className="hidden sm:inline">Demo & İletişim</span>
            <span className="sm:hidden">Demo</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#0F172A] border border-[#1E293B] text-slate-300 hover:text-white cursor-pointer"
            aria-label="Toggle Menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#1E293B]/80 bg-[#0F172A]/95 px-5 py-4 space-y-3 font-mono text-sm">
          <a
            href="#donusum-odaklari"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-[#06B6D4] py-1"
          >
            ➔ OSB ve Fabrika İkizleri
          </a>
          <a
            href="#green-carbon"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-emerald-400 hover:text-emerald-300 py-1"
          >
            ➔ Green Carbon AI (SKDM)
          </a>
          <a
            href="#etkinlik-zirve"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#06B6D4] font-bold py-1 border-t border-[#1E293B]/60 pt-2"
          >
            ➔ Zirve & Canlı Atölyeler
          </a>
        </div>
      )}
    </header>
  );
};
