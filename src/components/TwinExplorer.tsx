import React, { useState, useEffect } from 'react';
import { Building2, Factory, GraduationCap, Activity, ShieldCheck, Zap } from 'lucide-react';

interface TwinExplorerProps {
  currentLang: 'uz' | 'tr' | 'en';
}

export const TwinExplorer: React.FC<TwinExplorerProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<'industry' | 'factory' | 'education'>('industry');
  const [selectedParcel, setSelectedParcel] = useState<number>(2);
  const [isLive, setIsLive] = useState(true);
  const [, setPulseTick] = useState(0);

  // Live telemetry pulse
  useEffect(() => {
    if (!isLive) return;
    const timer = setInterval(() => {
      setPulseTick((prev) => (prev + 1) % 100);
    }, 1200);
    return () => clearInterval(timer);
  }, [isLive]);

  const labels = {
    uz: {
      industryTab: "Sanoat & Yer (Fabriq Land)",
      factoryTab: "Fabrika & IIoT (Fabriq Build)",
      educationTab: "Akademiya (Xapp Tech)",
      liveBadge: "Real Vaqt Telemetriyasi",
      parcelStatus: "Hudud / Parsel Holati",
      allocated: "Band qilingan (Sanoat korxonasi)",
      available: "Bo'sh (Investorlar uchun tayyor)",
      utilityHeader: "Muhandislik Tarmoqlari",
      powerGrid: "Elektr quvvati: 110/10 kV nimstansiya",
      gasFlow: "Gaz bosimi: 0.6 MPa (Barqaror)",
      waterSupply: "Texnik suv: 450 m³/kun",
      oeeHeader: "Uskuna Samaradorligi (OEE)",
      vibration: "Tebranish darajasi: 1.2 mm/s (Normal)",
      speed: "Konveyer tezligi: 100% nominal",
      simHeader: "VR & Simulyatsiya Holati",
      activeTrainees: "Faol tinglovchilar: 142 mutaxassis",
      passRate: "Imtihon topshirish: 98.6%",
    },
    tr: {
      industryTab: "Sanayi & Arazi (Fabriq Land)",
      factoryTab: "Fabrika & IIoT (Fabriq Build)",
      educationTab: "Akademiya (Xapp Tech)",
      liveBadge: "Gerçek Zamanlı Telemetri",
      parcelStatus: "Parsel / Saha Durumu",
      allocated: "Tahsis Edildi (Sanayi Tesisi)",
      available: "Uygun (Yatırıma Hazır)",
      utilityHeader: "Altyapı Şebekesi",
      powerGrid: "Elektrik Gücü: 110/10 kV Trafo",
      gasFlow: "Gaz Basıncı: 0.6 MPa (Stabil)",
      waterSupply: "Teknik Su: 450 m³/gün",
      oeeHeader: "Ekipman Etkinliği (OEE)",
      vibration: "Titreşim Seviyesi: 1.2 mm/s (Normal)",
      speed: "Hat Hızı: %100 Nominal",
      simHeader: "VR & Simülasyon Durumu",
      activeTrainees: "Aktif Kursiyer: 142 Uzman",
      passRate: "Başarı Oranı: %98.6",
    },
    en: {
      industryTab: "Industry & Land (Fabriq Land)",
      factoryTab: "Factory & IIoT (Fabriq Build)",
      educationTab: "Academy (Xapp Tech)",
      liveBadge: "Live Operational Telemetry",
      parcelStatus: "Parcel / Zone Status",
      allocated: "Allocated (Industrial Plant)",
      available: "Available (Ready for SEZ)",
      utilityHeader: "Utility Infrastructure",
      powerGrid: "Power Grid: 110/10 kV Substation",
      gasFlow: "Gas Pressure: 0.6 MPa (Nominal)",
      waterSupply: "Industrial Water: 450 m³/day",
      oeeHeader: "Equipment Effectiveness (OEE)",
      vibration: "Vibration: 1.2 mm/s (Optimal)",
      speed: "Line Throughput: 100% Rated",
      simHeader: "VR & Simulation Status",
      activeTrainees: "Active Trainees: 142 Specialists",
      passRate: "Certification Rate: 98.6%",
    },
  }[currentLang];

  return (
    <div className="w-full bg-white border border-zinc-200/90 rounded-2xl shadow-xs overflow-hidden">
      
      {/* Top Controller Bar */}
      <div className="border-b border-zinc-100 bg-zinc-50/80 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 bg-zinc-200/60 p-1 rounded-xl text-xs font-medium">
          <button
            onClick={() => setActiveTab('industry')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'industry'
                ? 'bg-white text-zinc-900 font-semibold shadow-xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <Building2 className="w-3.5 h-3.5 text-sky-600" />
            <span>{labels.industryTab}</span>
          </button>

          <button
            onClick={() => setActiveTab('factory')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'factory'
                ? 'bg-white text-zinc-900 font-semibold shadow-xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <Factory className="w-3.5 h-3.5 text-sky-600" />
            <span>{labels.factoryTab}</span>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'education'
                ? 'bg-white text-zinc-900 font-semibold shadow-xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 text-violet-600" />
            <span>{labels.educationTab}</span>
          </button>
        </div>

        {/* Live Status indicator */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <button
            onClick={() => setIsLive((p) => !p)}
            className="flex items-center gap-1.5 text-zinc-600 hover:text-zinc-900 cursor-pointer bg-white border border-zinc-200 px-2.5 py-1 rounded-lg shadow-2xs"
          >
            <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-400'}`} />
            <span className="text-[11px] text-zinc-700">{labels.liveBadge}</span>
          </button>
        </div>

      </div>

      {/* Main Interactive Twin Canvas Area */}
      <div className="p-6 sm:p-7">
        
        {/* TAB 1: INDUSTRY (LAND & SEZ TWIN) */}
        {activeTab === 'industry' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-bold text-zinc-900">
                  Toshkent Maxsus Sanoat Zonasi (EIZ) — 3D GIS Egizagi
                </h4>
                <p className="text-xs text-zinc-500 mt-0.5">
                  1,240 Gektar hudud, 48 ta sanoat parseli va markaziy kommunikatsiyalar
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-mono text-sky-700 bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-md">
                <span>Koordinata: 41.2995° N, 69.2401° E</span>
              </span>
            </div>

            {/* Interactive Parcel Map */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 1, name: "Parsel A-01", size: "4.5 Ga", status: "allocated", desc: "Farmatsevtika zavodi" },
                { id: 2, name: "Parsel A-02", size: "6.2 Ga", status: "available", desc: "Elektronika yoki Mashinasozlik" },
                { id: 3, name: "Parsel B-01", size: "8.0 Ga", status: "allocated", desc: "To'qimachilik klasteri" },
                { id: 4, name: "Parsel B-02", size: "5.0 Ga", status: "available", desc: "Metall konstruksiya ishlab chiqarish" },
              ].map((parcel) => (
                <div
                  key={parcel.id}
                  onClick={() => setSelectedParcel(parcel.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    selectedParcel === parcel.id
                      ? 'border-sky-500 bg-sky-50/40 shadow-xs'
                      : 'border-zinc-200 hover:border-zinc-300 bg-zinc-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="font-bold text-zinc-900">{parcel.name}</span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        parcel.status === 'allocated' ? 'bg-zinc-400' : 'bg-emerald-500'
                      }`}
                    />
                  </div>
                  <div className="text-base font-bold text-zinc-800">{parcel.size}</div>
                  <div className="text-[11px] text-zinc-500 mt-1 line-clamp-1">{parcel.desc}</div>
                  <div className="mt-3 text-[10px] font-mono font-medium text-sky-600">
                    {parcel.status === 'allocated' ? labels.allocated : labels.available}
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Parcel Telemetry Details */}
            <div className="bg-zinc-50 border border-zinc-200/80 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-sky-600 shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">Elektr Nimstansiyasi</div>
                  <div className="font-semibold text-zinc-800 mt-0.5">110/10 kV — 12 MW Zaxira</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-sky-600 shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">Magistral Gaz Quvuri</div>
                  <div className="font-semibold text-zinc-800 mt-0.5">0.6 MPa Yuqori Bosim</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-sky-600 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">Yuridik Holat (EIZ)</div>
                  <div className="font-semibold text-emerald-600 mt-0.5">0% Bojxona / 10 yil Imtiyoz</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FACTORY (IIoT & MACHINE TWIN) */}
        {activeTab === 'factory' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-bold text-zinc-900">
                  Aqlli Zavod Konveyer Liniyasi — Jonli SCADA & IIoT Egizagi
                </h4>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Avtomatlashtirilgan oqim, datchiklar telemetriyasi va OEE unumdorlik tahlili
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>OEE: 95.8% (Optimal)</span>
              </span>
            </div>

            {/* Visual Process Line */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-500">BO'LIM 01: XOMASHYO</span>
                  <span className="text-sky-600 font-bold">FAOL</span>
                </div>
                <div className="text-lg font-bold text-zinc-800">Yuklash Dastgohi</div>
                <div className="text-xs text-zinc-600">
                  Datchik harorati: 42.1°C <br />
                  Yuklama: 88% quvvat
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-500">BO'LIM 02: MONTAJ</span>
                  <span className="text-emerald-600 font-bold">SINKRON</span>
                </div>
                <div className="text-lg font-bold text-zinc-800">Robotik Payvandlash</div>
                <div className="text-xs text-zinc-600">
                  Tebranish (Vibration): 1.1 mm/s <br />
                  Sikllar davriyligi: 14.2 soniya
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-500">BO'LIM 03: SIFAT NAZORATI</span>
                  <span className="text-sky-600 font-bold">100% TEKSHIRUV</span>
                </div>
                <div className="text-lg font-bold text-zinc-800">Optik Skaner</div>
                <div className="text-xs text-zinc-600">
                  Nuqsonlar: 0.02% (Standartdan past) <br />
                  Qadoqlashga ruxsat: 1,840 dona/soat
                </div>
              </div>
            </div>

            <div className="bg-zinc-100/70 rounded-xl p-4 text-xs font-mono text-zinc-600 flex flex-wrap items-center justify-between gap-3">
              <div>Protokol: <strong>OPC-UA over TLS</strong> · PLC: <strong>Siemens S7-1500</strong></div>
              <div className="text-emerald-600 font-semibold">Bashoratli Ta'mirlash (Predictive Maintenance): Xavf 0%</div>
            </div>
          </div>
        )}

        {/* TAB 3: EDUCATION & SIMULATION (XAPP TECH) */}
        {activeTab === 'education' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-bold text-zinc-900">
                  Sanoat Akademiyasi & Jiddiy O'yinlar — Virtual Simulyator
                </h4>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Xapp platformasi negizidagi kadrlar tayyorlash va interaktiv simulyatsiya laboratoriyasi
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-700 bg-violet-50 border border-violet-100 px-2.5 py-1 rounded-md">
                <span>4,500+ Malakali Mutaxassis</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                <span className="text-[10px] font-mono text-violet-600 font-bold uppercase">VR Tizimi</span>
                <div className="text-base font-bold text-zinc-900">Texnika Xavfsizligi VR</div>
                <p className="text-xs text-zinc-600">
                  Favqulodda vaziyatlar, yuqori kuchlanish va sanoat xavfsizligi bo'yicha virtual trenajyor.
                </p>
                <div className="pt-2 text-xs font-mono text-zinc-500">Muvaffaqiyat: <strong>99.1%</strong></div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                <span className="text-[10px] font-mono text-violet-600 font-bold uppercase">Simulyator</span>
                <div className="text-base font-bold text-zinc-900">Dastgoh Operatori Egizagi</div>
                <p className="text-xs text-zinc-600">
                  Qimmatbaho uskunani buzmasdan, 1:1 fizik modelda boshqarishni o'rgatish moduli.
                </p>
                <div className="pt-2 text-xs font-mono text-zinc-500">O'rganish tezligi: <strong>3.4x tezroq</strong></div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                <span className="text-[10px] font-mono text-violet-600 font-bold uppercase">EdTech Transfer</span>
                <div className="text-base font-bold text-zinc-900">Intellektual O'yinlar</div>
                <p className="text-xs text-zinc-600">
                  Dunyo bo'ylab saralangan aqliy va ta'limiy mobil o'yinlarni mahalliylashtirish va tarqatish.
                </p>
                <div className="pt-2 text-xs font-mono text-zinc-500">Mahalliylashtirish: <strong>O'zbek / Turk</strong></div>
              </div>
            </div>

            <div className="bg-zinc-100/70 rounded-xl p-4 text-xs font-mono text-zinc-600 flex flex-wrap items-center justify-between gap-3">
              <div>Sertifikatlashtirish: <strong>Xalqaro Sanoat Standartlari (ISO 9001 / OSHA)</strong></div>
              <div className="text-violet-600 font-semibold">O'quv jarayonida jarohatlanish xavfi: Mutlaqo 0%</div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
