import React, { useState, useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  initialTopic?: string;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  initialTopic = 'Özbekistan Akıllı Sanayi Zirvesi',
  onClose,
}) => {
  const [selectedTopic, setSelectedTopic] = useState(initialTopic);
  const [companyName, setCompanyName] = useState('');
  const [personName, setPersonName] = useState('');
  const [phone, setPhone] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (initialTopic) {
      setSelectedTopic(initialTopic);
    }
  }, [initialTopic]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
      onClose();
      setCompanyName('');
      setPersonName('');
      setPhone('');
    }, 2500);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-panel border border-[#06B6D4]/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg cursor-pointer"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center text-[#06B6D4] text-xl mx-auto mb-3">
            <i className="fa-solid fa-paper-plane"></i>
          </div>
          <h3 className="text-xl font-bold text-white">Katılım & Demo Talebi</h3>
          <p className="text-xs text-slate-400 mt-1">
            Sahanız, zirve katılımı veya saha atölyesi için hemen irtibata geçelim.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1">
              Kurum / Fabrika / Şirket Adı
            </label>
            <input
              type="text"
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Örn: Özbekistan Sanayi Bölgesi / Üretim Tesisi"
              className="w-full bg-[#0F172A] border border-[#1E293B] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#06B6D4]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">
                Yetkili Adı Soyadı
              </label>
              <input
                type="text"
                required
                value={personName}
                onChange={(e) => setPersonName(e.target.value)}
                placeholder="Ad Soyad"
                className="w-full bg-[#0F172A] border border-[#1E293B] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#06B6D4]"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">
                Telefon / İletişim
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+998 / +90 ..."
                className="w-full bg-[#0F172A] border border-[#1E293B] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#06B6D4]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1">
              Katılım / Odak Alanı
            </label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full bg-[#0F172A] border border-[#1E293B] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#06B6D4]"
            >
              <option value="Özbekistan Akıllı Sanayi Zirvesi">
                Özbekistan Akıllı Sanayi Zirvesi (OSB & Bakanlık)
              </option>
              <option value="Fabrikanı Keşfet Saha Atölyesi">
                SAHA ATÖLYESİ - "Fabrikanı Keşfet" (Canlı Tesis Taraması)
              </option>
              <option value="Organize Sanayi Bölgesi (OSB) Dijital İkizi">
                Organize Sanayi Bölgesi (OSB) Dijital İkizi & GIS
              </option>
              <option value="Fabrika & Üretim Tesisi İkizi">
                Fabrika & Üretim Tesisi İkizi (Varlık & Sensör)
              </option>
              <option value="Green Carbon AI & SKDM">
                Green Carbon AI & SKDM Sürdürülebilirlik Katmanı
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#06B6D4] to-blue-600 text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg shadow-[#06B6D4]/20 cursor-pointer"
          >
            Başvuruyu İlet
          </button>

          {showFeedback && (
            <div className="text-xs font-mono text-center text-emerald-400 pt-2 animate-pulse">
              ✓ Talebiniz başarıyla iletildi! Uzmanlarımız en kısa sürede dönüş yapacaktır.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
