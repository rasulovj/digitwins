import React, { useState, useEffect } from 'react';

interface EventsSectionProps {
  onOpenModalWithSubject: (subject: string) => void;
  onOpenLightbox: (src: string, caption: string) => void;
}

const DEFAULT_EVENT_IMAGES = {
  osb5: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  osb2: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  dt3: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
};

export const EventsSection: React.FC<EventsSectionProps> = ({
  onOpenModalWithSubject,
  onOpenLightbox,
}) => {
  const [images, setImages] = useState(DEFAULT_EVENT_IMAGES);

  useEffect(() => {
    const keys = ['osb5', 'osb2', 'dt3'] as const;
    keys.forEach((key) => {
      const localSrc = `/${key}.jpeg`;
      const img = new Image();
      img.onload = () => {
        setImages((prev) => ({ ...prev, [key]: localSrc }));
      };
      img.src = localSrc;
    });
  }, []);

  return (
    <section
      id="etkinlik-zirve"
      className="py-14 relative border-t border-[#1E293B]/80 bg-gradient-to-b from-[#070B12] via-[#0F172A]/40 to-[#070B12]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-9">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#06B6D4] font-mono text-xs uppercase tracking-wider font-semibold mb-2">
            <i className="fa-solid fa-calendar-check text-xs"></i> ÖZBEKİSTAN RESMİ ETKİNLİK & ATÖLYE PROGRAMI
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white">
            Zirveler ve Canlı Saha Buluşmaları
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Bölgesel sanayi liderleri, OSB yönetimleri ve fabrika yöneticileri için özel oturumlar.
          </p>
        </div>

        {/* 2-column event boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto items-stretch">
          {/* CARD 1: Özbekistan Akıllı Sanayi Zirvesi (osb5.jpeg & osb2.jpeg) */}
          <div className="glass-panel glass-panel-hover rounded-xl p-5 sm:p-6 border border-[#06B6D4]/40 relative overflow-hidden flex flex-col justify-between group shadow-lg shadow-[#06B6D4]/5 h-full">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded-full bg-[#06B6D4]/20 text-[#06B6D4] border border-[#06B6D4]/40 font-bold uppercase flex items-center gap-1.5">
                  <i className="fa-solid fa-landmark text-[10px]"></i> SANAYİ ZİRVESİ
                </span>
                <span className="text-slate-400 flex items-center gap-1">
                  <i className="fa-solid fa-location-dot text-[#06B6D4] text-[11px]"></i> Özbekistan
                </span>
              </div>

              {/* Compact Dual Showcase (osb5 & osb2) */}
              <div className="grid grid-cols-2 gap-2.5 mb-3.5">
                <div
                  className="image-zoom-card border border-[#06B6D4]/30 p-1 h-36 sm:h-40 w-full"
                  onClick={() =>
                    onOpenLightbox(
                      images.osb5,
                      'Akıllı OSB Yönetim Komuta Merkezi (osb5.jpeg)'
                    )
                  }
                >
                  <img
                    src={images.osb5}
                    alt="Akıllı OSB Yönetim Komuta Merkezi"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/95 via-transparent to-transparent flex items-end justify-between p-1.5 pointer-events-none">
                    <span className="text-[9px] font-mono text-[#06B6D4] font-bold bg-[#070B12]/90 px-1.5 py-0.5 rounded border border-[#06B6D4]/30">
                      OSB Komuta (osb5.jpeg)
                    </span>
                    <span className="image-zoom-badge text-[9px] font-mono bg-[#06B6D4] text-black px-1 rounded">
                      <i className="fa-solid fa-expand"></i>
                    </span>
                  </div>
                </div>

                <div
                  className="image-zoom-card border border-[#06B6D4]/30 p-1 h-36 sm:h-40 w-full"
                  onClick={() =>
                    onOpenLightbox(
                      images.osb2,
                      'OSB Master Plan Dijital İkizi & Parseller (osb2.jpeg)'
                    )
                  }
                >
                  <img
                    src={images.osb2}
                    alt="OSB Master Plan Dijital İkizi"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/95 via-transparent to-transparent flex items-end justify-between p-1.5 pointer-events-none">
                    <span className="text-[9px] font-mono text-[#06B6D4] font-bold bg-[#070B12]/90 px-1.5 py-0.5 rounded border border-[#06B6D4]/30">
                      Parsel Planı (osb2.jpeg)
                    </span>
                    <span className="image-zoom-badge text-[9px] font-mono bg-[#06B6D4] text-black px-1 rounded">
                      <i className="fa-solid fa-expand"></i>
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#06B6D4] transition-colors mb-1.5">
                Özbekistan Akıllı Sanayi Zirvesi
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                Özbekistan'daki Organize Sanayi Bölgeleri müdürleri, Bakanlık yetkilileri ve uluslararası yatırımcıları buluşturan dijital parsel ve akıllı OSB dönüşüm zirvesi.
              </p>
            </div>

            <div className="pt-3 border-t border-[#1E293B]/70 flex items-center justify-between mt-auto">
              <span className="text-[11px] font-mono text-slate-400">
                Katılım & Detaylı Bilgi İçin:
              </span>
              <button
                onClick={() => onOpenModalWithSubject('Özbekistan Akıllı Sanayi Zirvesi')}
                className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#06B6D4] to-blue-600 text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5 shadow-md shadow-[#06B6D4]/20 cursor-pointer"
              >
                <span>Kayıt</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </button>
            </div>
          </div>

          {/* CARD 2: SAHA ATÖLYESİ - Canlı Tesis Taraması (dt3.jpeg) */}
          <div className="glass-panel glass-panel-hover rounded-xl p-5 sm:p-6 border border-[#F59E0B]/40 relative overflow-hidden flex flex-col justify-between group shadow-lg shadow-[#F59E0B]/5 h-full">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40 font-bold uppercase flex items-center gap-1.5">
                  <i className="fa-solid fa-screwdriver-wrench text-[10px]"></i> SAHA ATÖLYESİ
                </span>
                <span className="text-slate-400 flex items-center gap-1">
                  <i className="fa-solid fa-industry text-[#F59E0B] text-[11px]"></i> Canlı Tesis Taraması
                </span>
              </div>

              {/* Compact Single Showcase (dt3.jpeg) */}
              <div className="mb-3.5">
                <div
                  className="image-zoom-card border border-[#F59E0B]/30 p-1 h-36 sm:h-40 w-full"
                  onClick={() =>
                    onOpenLightbox(
                      images.dt3,
                      'Canlı Saha Sensör Taraması ve Mobil Tablet Kontrolü (dt3.jpeg)'
                    )
                  }
                >
                  <img
                    src={images.dt3}
                    alt="Canlı Sensör Taraması"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/95 via-transparent to-transparent flex items-end justify-between p-1.5 pointer-events-none">
                    <span className="text-[9px] font-mono text-[#F59E0B] font-bold bg-[#070B12]/90 px-1.5 py-0.5 rounded border border-[#F59E0B]/30">
                      IoT & Canlı Basınç/Sıcaklık Sensörleri (dt3.jpeg)
                    </span>
                    <span className="image-zoom-badge text-[9px] font-mono bg-[#F59E0B] text-black px-1 rounded">
                      <i className="fa-solid fa-expand"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-mono text-[#F59E0B] uppercase font-bold tracking-wider mb-1">
                "Fabrikanı Keşfet" Saha Etkinliği
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#F59E0B] transition-colors mb-1.5">
                SAHA ATÖLYESİ - Canlı Tesis Taraması
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                Sanayicilerin ve fabrika sahiplerinin kendi üretim tesislerinin dijital ikiz potansiyelini, varlık takibini ve enerji verimliliğini canlı yerinde tecrübe ettiği özel saha buluşması.
              </p>
            </div>

            <div className="pt-3 border-t border-[#1E293B]/70 flex items-center justify-between mt-auto">
              <span className="text-[11px] font-mono text-slate-400">
                Katılım & Detaylı Bilgi İçin:
              </span>
              <button
                onClick={() => onOpenModalWithSubject('Fabrikanı Keşfet Saha Atölyesi')}
                className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#F59E0B] to-amber-600 text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5 shadow-md shadow-[#F59E0B]/20 cursor-pointer"
              >
                <span>Atölye Başvurusu</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
