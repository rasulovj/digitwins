import React from 'react';

interface FooterSectionProps {
  onOpenModal: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenModal }) => {
  return (
    <footer className="glass-panel border-t border-[#1E293B] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
        <div>
          © 2026 DigiTwins.uz — Spatial Digital Twin. Tüm Hakları Saklıdır.
        </div>
        <div className="flex items-center gap-6">
          <a href="#donusum-odaklari" className="hover:text-[#06B6D4] transition-colors">
            OSB & Fabrika
          </a>
          <a href="#green-carbon" className="hover:text-emerald-400 transition-colors">
            Green Carbon AI
          </a>
          <a href="#etkinlik-zirve" className="hover:text-[#06B6D4] transition-colors">
            Özbekistan Zirvesi
          </a>
          <button
            onClick={onOpenModal}
            className="hover:text-[#06B6D4] transition-colors cursor-pointer"
          >
            İletişim & Demo
          </button>
        </div>
      </div>
    </footer>
  );
};
