import React, { useState, useEffect } from 'react';

interface DimensionsSectionProps {
  onOpenLightbox: (src: string, caption: string) => void;
}

const DEFAULT_IMAGES = {
  osb1: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80',
  osb3: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  osb4: 'https://images.unsplash.com/photo-1581291518655-9523c932deda?auto=format&fit=crop&w=800&q=80',
  dt1: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
  dt4: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  dt2: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  dt5: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
};

export const DimensionsSection: React.FC<DimensionsSectionProps> = ({
  onOpenLightbox,
}) => {
  const [images, setImages] = useState(DEFAULT_IMAGES);

  useEffect(() => {
    // Attempt to load local images if present
    const keys = ['osb1', 'osb3', 'osb4', 'dt1', 'dt4', 'dt2', 'dt5'] as const;
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
    <section id="donusum-odaklari" className="py-16 bg-[#0F172A]/30 border-t border-[#1E293B]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#06B6D4] font-mono text-xs tracking-widest uppercase font-semibold">
            UZMANLIK ALANLARIMIZ
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
            İki Ana Sütun Üzerinde Dijitalleşme
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Bölgesel ölçekten tesis ölçeğine kadar bütünsel dijital ikiz ekosistemi. Haritaların ayrıntılarını görmek için üzerlerine tıklayabilirsiniz.
          </p>
        </div>

        {/* Balanced Equal-Height Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Pillar 1: OSB & Industrial Zones (osb1, osb3, osb4) */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border-t-4 border-t-[#06B6D4] relative overflow-hidden group h-full">
            <div>
              {/* Primary GIS Masterplan (osb1) */}
              <div className="mb-3">
                <div
                  className="image-zoom-card border border-[#06B6D4]/40 p-1 h-48 sm:h-52 w-full"
                  onClick={() =>
                    onOpenLightbox(
                      images.osb1,
                      'OSB 3D GIS Genel Yerleşim ve Katman Haritası (osb1.jpeg)'
                    )
                  }
                >
                  <img
                    src={images.osb1}
                    alt="OSB GIS 3D Haritası"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/95 via-transparent to-transparent flex items-end justify-between p-2.5 pointer-events-none">
                    <span className="text-[10px] font-mono text-[#06B6D4] font-bold bg-[#070B12]/90 px-2 py-0.5 rounded border border-[#06B6D4]/30">
                      3D OSB Masterplan (osb1.jpeg)
                    </span>
                    <span className="image-zoom-badge text-[10px] font-mono bg-[#06B6D4] text-black px-2 py-0.5 rounded font-bold">
                      <i className="fa-solid fa-expand mr-1"></i>Büyüt
                    </span>
                  </div>
                </div>
              </div>

              {/* Secondary GIS Dashboards (osb3 & osb4) */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div
                  className="image-zoom-card border border-[#1E293B] p-1 h-28 w-full"
                  onClick={() =>
                    onOpenLightbox(
                      images.osb3,
                      'Sanayi Parsellerinin Ruhsat, İzin Durumları ve Sektör İstatistikleri GIS Paneli (osb3.jpeg)'
                    )
                  }
                >
                  <img
                    src={images.osb3}
                    alt="Parsel İzin Durumu GIS"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/95 via-transparent to-transparent flex items-end justify-between p-1.5 pointer-events-none">
                    <span className="text-[9px] font-mono text-[#06B6D4] font-bold bg-[#070B12]/85 px-1.5 py-0.5 rounded">
                      Ruhsat GIS (osb3.jpeg)
                    </span>
                    <span className="image-zoom-badge text-[9px] font-mono bg-[#06B6D4] text-black px-1.5 py-0.5 rounded font-bold">
                      <i className="fa-solid fa-expand"></i>
                    </span>
                  </div>
                </div>

                <div
                  className="image-zoom-card border border-[#1E293B] p-1 h-28 w-full"
                  onClick={() =>
                    onOpenLightbox(
                      images.osb4,
                      'Zonas Industriais Kadastro ve Mülkiyet Katman Yöneticisi (osb4.jpeg)'
                    )
                  }
                >
                  <img
                    src={images.osb4}
                    alt="GIS Katman Yöneticisi"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/95 via-transparent to-transparent flex items-end justify-between p-1.5 pointer-events-none">
                    <span className="text-[9px] font-mono text-[#06B6D4] font-bold bg-[#070B12]/85 px-1.5 py-0.5 rounded">
                      Kadastro (osb4.jpeg)
                    </span>
                    <span className="image-zoom-badge text-[9px] font-mono bg-[#06B6D4] text-black px-1.5 py-0.5 rounded font-bold">
                      <i className="fa-solid fa-expand"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#06B6D4]/10 text-[#06B6D4] border border-[#06B6D4]/30">
                    1. SÜTUN
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#06B6D4] transition-colors mt-2">
                    OSB ve Sanayi Bölgeleri Dijital İkizi
                  </h3>
                  <p className="text-xs font-mono text-[#06B6D4] mt-1">
                    Parsel Tahsisi, Altyapı ve Yatırımcı Portalı
                  </p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Sanayi bölgelerinin parsel haritalarını, altyapı hatlarını ve yatırım alanlarını interaktif dijital ortama aktarıyoruz. Yatırımcılar için şeffaf parsel tahsis portalı sunuyoruz.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 2: Commercial Facilities & Asset Management (dt1, dt4, dt2) */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border-t-4 border-t-[#F59E0B] relative overflow-hidden group h-full">
            <div>
              {/* Primary Robotics Digital Twin (dt1) */}
              <div className="mb-3">
                <div
                  className="image-zoom-card border border-[#F59E0B]/40 p-1 h-48 sm:h-52 w-full"
                  onClick={() =>
                    onOpenLightbox(
                      images.dt1,
                      'Robotik Üretim Hattı Tel Kafes 3D Dijital İkizi (dt1.jpeg)'
                    )
                  }
                >
                  <img
                    src={images.dt1}
                    alt="Robotik Üretim Hattı"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/95 via-transparent to-transparent flex items-end justify-between p-2.5 pointer-events-none">
                    <span className="text-[10px] font-mono text-[#F59E0B] font-bold bg-[#070B12]/90 px-2 py-0.5 rounded border border-[#F59E0B]/30">
                      Robotik Hat & 3D Tarama (dt1.jpeg)
                    </span>
                    <span className="image-zoom-badge text-[10px] font-mono bg-[#F59E0B] text-black px-2 py-0.5 rounded font-bold">
                      <i className="fa-solid fa-expand mr-1"></i>Büyüt
                    </span>
                  </div>
                </div>
              </div>

              {/* Secondary Hardware & IoT Modules (dt4 & dt2) */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div
                  className="image-zoom-card border border-[#1E293B] p-1 h-28 w-full"
                  onClick={() =>
                    onOpenLightbox(
                      images.dt4,
                      'Meqrix Endüstriyel IoT Sensör Donanımları & Canlı Telemetri Paneli (dt4.jpeg)'
                    )
                  }
                >
                  <img
                    src={images.dt4}
                    alt="Meqrix IoT Donanım"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/95 via-transparent to-transparent flex items-end justify-between p-1.5 pointer-events-none">
                    <span className="text-[9px] font-mono text-[#F59E0B] font-bold bg-[#070B12]/85 px-1.5 py-0.5 rounded">
                      Meqrix Sensörler (dt4.jpeg)
                    </span>
                    <span className="image-zoom-badge text-[9px] font-mono bg-[#F59E0B] text-black px-1.5 py-0.5 rounded font-bold">
                      <i className="fa-solid fa-expand"></i>
                    </span>
                  </div>
                </div>

                <div
                  className="image-zoom-card border border-[#1E293B] p-1 h-28 w-full"
                  onClick={() =>
                    onOpenLightbox(
                      images.dt2,
                      'Akıllı Fabrika Komuta Ekranı & Canlı SCADA Paneli (dt2.jpeg)'
                    )
                  }
                >
                  <img
                    src={images.dt2}
                    alt="Fabrika Komuta Paneli"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/95 via-transparent to-transparent flex items-end justify-between p-1.5 pointer-events-none">
                    <span className="text-[9px] font-mono text-[#F59E0B] font-bold bg-[#070B12]/85 px-1.5 py-0.5 rounded">
                      Komuta Paneli (dt2.jpeg)
                    </span>
                    <span className="image-zoom-badge text-[9px] font-mono bg-[#F59E0B] text-black px-1.5 py-0.5 rounded font-bold">
                      <i className="fa-solid fa-expand"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30">
                    2. SÜTUN
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#F59E0B] transition-colors mt-2">
                    Fabrika, Binalar ve Tesisler
                  </h3>
                  <p className="text-xs font-mono text-[#F59E0B] mt-1">
                    Dijital Varlık, Tesis ve Operasyon Yönetimi
                  </p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Tesislerin ve binaların tamamını veya kritik üretim bölümlerini dijitalleştirerek varlık, makine ve operasyon takibini sağlıyoruz. Üretim verimliliğini merkezi dijital panelde birleştiriyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* GREEN CARBON AI LAYER */}
        <div
          id="green-carbon"
          className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-950/85 via-[#0F172A] to-[#0F172A] border-2 border-emerald-400/80 p-6 sm:p-8 shadow-2xl shadow-emerald-950/50 glow-emerald relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-400/50 font-mono text-xs font-bold uppercase tracking-wider">
                  ÇATI KATMANI: GREEN CARBON AI
                </span>
                <span className="px-2.5 py-0.5 rounded bg-emerald-900/60 text-emerald-200 text-[11px] font-mono border border-emerald-500/30">
                  SKDM / CBAM & AB UYUMLU
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Sürdürülebilirlik, Enerji ve Karbon Ayak İzi Katmanı
              </h3>

              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                Hem OSB'ler hem de münferit fabrikalar için ISO 14064, ISO 14046 ve SKDM standartlarında otomatik karbon ayak izi hesaplama, enerji optimizasyonu ve yeşil dönüşüm raporlama platformu.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-200">
                  <i className="fa-solid fa-calculator text-emerald-400 mr-1.5"></i>
                  <span>Kurumsal Karbon (Kapsam 1-2-3)</span>
                </div>
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-200">
                  <i className="fa-solid fa-file-contract text-emerald-400 mr-1.5"></i>
                  <span>SKDM / CBAM Beyanı</span>
                </div>
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-200">
                  <i className="fa-solid fa-droplet text-emerald-400 mr-1.5"></i>
                  <span>Su Ayak İzi (ISO 14046)</span>
                </div>
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-200">
                  <i className="fa-solid fa-box text-emerald-400 mr-1.5"></i>
                  <span>Ürün Karbon Ayak İzi</span>
                </div>
              </div>
            </div>

            {/* Asset Health & Condition Monitoring Dashboard (dt5.jpeg) */}
            <div
              className="lg:col-span-4 image-zoom-card border border-emerald-500/50 p-1 h-56 sm:h-64 w-full"
              onClick={() =>
                onOpenLightbox(
                  images.dt5,
                  'Green Carbon AI Varlık Sağlığı ve Kestirimci Bakım Ekranı (dt5.jpeg)'
                )
              }
            >
              <img
                src={images.dt5}
                alt="Green Carbon & Asset Health Dashboard"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/95 via-transparent to-transparent flex items-end justify-between p-3 pointer-events-none">
                <span className="text-xs font-mono text-emerald-300 font-bold bg-[#070B12]/90 px-2.5 py-1 rounded border border-emerald-500/40">
                  Varlık & Enerji İzleme (dt5.jpeg)
                </span>
                <span className="image-zoom-badge p-1 px-2 rounded bg-emerald-400 text-black font-bold text-[10px] font-mono">
                  <i className="fa-solid fa-expand mr-1"></i> Büyüt
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
