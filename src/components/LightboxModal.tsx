import React, { useEffect } from 'react';
import { SiteDictionary } from '../locales/siteContent';

interface LightboxModalProps {
  isOpen: boolean;
  src: string;
  caption: string;
  content: SiteDictionary['lightbox'];
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  src,
  caption,
  content,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 transition-all duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-6xl w-full flex flex-col items-center"
      >
        <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-[#1E293B]/80 text-white font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4] animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold text-slate-200">
              {caption || content.defaultCaption}
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-[#0F172A] border border-[#1E293B] text-slate-300 hover:text-white hover:border-[#06B6D4] text-sm flex items-center gap-2 transition-all cursor-pointer"
          >
            <span>{content.close}</span>
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        <div className="relative max-h-[80vh] w-full flex items-center justify-center overflow-hidden rounded-xl border border-[#06B6D4]/40 bg-slate-950 p-1">
          <img
            src={src}
            alt={caption || content.defaultCaption}
            className="max-h-[78vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
          />
        </div>

        <div className="w-full pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>
            <i className="fa-solid fa-keyboard mr-1"></i> {content.escHint}
          </span>
          <span className="text-[#06B6D4] font-bold">{content.brand}</span>
        </div>
      </div>
    </div>
  );
};
