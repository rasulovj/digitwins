import React, { useState } from 'react';
import { Language } from '../locales/translations';
import { Globe, Building, Sparkles, Leaf, Activity, Layers, CheckCircle2, ShieldCheck, Zap, Thermometer, Wind } from 'lucide-react';

interface TwinExplorerProps {
  currentLang: Language;
}

export const TwinExplorer: React.FC<TwinExplorerProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<'macro' | 'micro' | 'xr' | 'green'>('macro');
  const [selectedZone, setSelectedZone] = useState<number>(2);
  const [isLive, setIsLive] = useState(true);

  const tabLabels = {
    uz: {
      macro: 'Makro: GIS & Maydon',
      micro: 'Mikro: Bino & Inshoot',
      xr: "Ta'sir: Simulyatsiya & XR",
      green: 'Green Carbon AI',
      live: 'JONLI TELEMETRIYA',
      readyStatus: 'Faol & Ulanmoqda',
      // Macro
      macroTitle: '3D GIS Makoniy Xaritalash & Yer Taqsimoti',
      macroSub: '2,450 Hektar sanoat va urban maydoni real vaqtda monitoring qilinmoqda',
      zone1: 'A-1: Logistika Markazi (34 Ha)',
      zone2: 'B-4: Yuqori Texnologiya Parki (52 Ha)',
      zone3: 'C-2: Og\'ir Sanoat Zonasi (88 Ha)',
      zone4: 'D-1: Ekologik Yashil Koridor (26 Ha)',
      allocated: 'Band qilingan: 68%',
      available: 'Bo\'sh maydon: 32%',
      // Micro
      microTitle: 'Inshootlar & Tesis Telemetriyasi',
      microSub: '82 ta bino va ishlab chiqarish bloki datchiklar bilan bog\'langan',
      sensorTemp: 'Harorat / Iqlim',
      sensorPower: 'Quvvat Sarfi',
      sensorVibe: 'Uskuna Vibratsiyasi',
      sensorAir: 'Havo Sifati (AQI)',
      // XR
      xrTitle: 'Nara XR Simulyatsiya va Virtual Trening',
      xrSub: '18,400+ mutaxassis virtual muhitda malaka oshirmoqda',
      mod1: 'Kran & Og\'ir Texnika Simulyatori',
      mod2: 'Sanoat Xavfsizligi (HSE VR Trenajyor)',
      mod3: 'Raqamli Egizak Boshqaruv Markazi',
      // Green
      greenTitle: 'GreenCarbonAI Uglerod & Energiya Nazorati',
      greenSub: 'Tesis bo\'yicha real vaqtda CO2 emissiyasi va suv sarfi balansi',
      greenEff: 'Uglerod Zichligi',
      greenEu: 'SKDM / CBAM Muvofiqlik',
      greenSave: 'Energiya Tejamkorligi',
    },
    tr: {
      macro: 'Makro: GIS & Arazi',
      micro: 'Mikro: Yapı & Tesis',
      xr: 'Etkileşim: Simülasyon & XR',
      green: 'Green Carbon AI',
      live: 'CANLI TELEMETRİ',
      readyStatus: 'Aktif & Bağlı',
      // Macro
      macroTitle: '3D GIS Mekansal Haritalama ve Arazi Tahsisi',
      macroSub: '2,450 Hektar sanayi ve kentsel alan gerçek zamanlı izleniyor',
      zone1: 'A-1: Lojistik Merkezi (34 Ha)',
      zone2: 'B-4: Yüksek Teknoloji Parkı (52 Ha)',
      zone3: 'C-2: Ağır Sanayi Bölgesi (88 Ha)',
      zone4: 'D-1: Yeşil Ekolojik Koridor (26 Ha)',
      allocated: 'Tahsis Edilen: %68',
      available: 'Boş Alan: %32',
      // Micro
      microTitle: 'Tesisler & Yapı Telemetrisi',
      microSub: '82 bina ve üretim bloğu canlı sensörlerle yönetiliyor',
      sensorTemp: 'Sıcaklık / İklimlendirme',
      sensorPower: 'Güç Tüketimi',
      sensorVibe: 'Titreşim Analizi',
      sensorAir: 'Hava Kalitesi (AQI)',
      // XR
      xrTitle: 'Nara XR Simülasyon ve Sanal Eğitim',
      xrSub: '18,400+ uzman sanal ikiz üzerinde deneyim kazanıyor',
      mod1: 'Vinç & Ağır Ekipman Simülatörü',
      mod2: 'İş Güvenliği (HSE VR Eğitimi)',
      mod3: 'Dijital İkiz Operasyon Odası',
      // Green
      greenTitle: 'GreenCarbonAI Karbon & Enerji İzleme',
      greenSub: 'Tesis bazlı gerçek zamanlı CO2 emisyonu ve su tüketimi dengesi',
      greenEff: 'Karbon Yoğunluğu',
      greenEu: 'SKDM / CBAM Uyumluluk',
      greenSave: 'Enerji Tasarrufu',
    },
    en: {
      macro: 'Macro: GIS & Land',
      micro: 'Micro: Built Facility',
      xr: 'Interaction: Simulation & XR',
      green: 'Green Carbon AI',
      live: 'LIVE TELEMETRY',
      readyStatus: 'Active & Connected',
      // Macro
      macroTitle: '3D GIS Spatial Mapping & Land Allocation',
      macroSub: '2,450 Hectares of industrial and urban terrain monitored in real time',
      zone1: 'A-1: Logistics Hub (34 Ha)',
      zone2: 'B-4: High-Tech Cluster (52 Ha)',
      zone3: 'C-2: Heavy Industrial Zone (88 Ha)',
      zone4: 'D-1: Green Eco Corridor (26 Ha)',
      allocated: 'Allocated: 68%',
      available: 'Available: 32%',
      // Micro
      microTitle: 'Facility & Structural Telemetry',
      microSub: '82 buildings and industrial blocks synced via IoT sensor feeds',
      sensorTemp: 'Climate & Temperature',
      sensorPower: 'Power Draw',
      sensorVibe: 'Vibration Dynamics',
      sensorAir: 'Air Quality (AQI)',
      // XR
      xrTitle: 'Nara XR Simulation & Virtual Training',
      xrSub: '18,400+ trainees operating in real-time interactive 3D simulations',
      mod1: 'Crane & Heavy Machinery Simulator',
      mod2: 'Industrial HSE & Safety VR Suite',
      mod3: 'Digital Twin Operations Center',
      // Green
      greenTitle: 'GreenCarbonAI Carbon & Energy Intelligence',
      greenSub: 'Live plant-wide CO2 emission tracking and water balance intelligence',
      greenEff: 'Carbon Density',
      greenEu: 'EU CBAM Compliance',
      greenSave: 'Energy Savings',
    },
  }[currentLang];

  return (
    <div className="w-full bg-white border border-zinc-200/90 rounded-2xl shadow-xs overflow-hidden">
      
      {/* Top Controller Bar */}
      <div className="border-b border-zinc-100 bg-zinc-50/90 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        
        {/* Navigation Tabs - 4 Core Spatial Dimensions */}
        <div className="flex flex-wrap items-center gap-1 bg-zinc-200/60 p-1 rounded-xl text-xs font-medium">
          <button
            onClick={() => setActiveTab('macro')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'macro'
                ? 'bg-white text-zinc-900 font-semibold shadow-xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-sky-600" />
            <span>{tabLabels.macro}</span>
          </button>

          <button
            onClick={() => setActiveTab('micro')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'micro'
                ? 'bg-white text-zinc-900 font-semibold shadow-xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <Building className="w-3.5 h-3.5 text-blue-600" />
            <span>{tabLabels.micro}</span>
          </button>

          <button
            onClick={() => setActiveTab('xr')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'xr'
                ? 'bg-white text-zinc-900 font-semibold shadow-xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>{tabLabels.xr}</span>
          </button>

          <button
            onClick={() => setActiveTab('green')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'green'
                ? 'bg-white text-emerald-900 font-semibold shadow-xs'
                : 'text-zinc-600 hover:text-emerald-700'
            }`}
          >
            <Leaf className="w-3.5 h-3.5 text-emerald-600" />
            <span>{tabLabels.green}</span>
          </button>
        </div>

        {/* Live Status indicator */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <button
            onClick={() => setIsLive((p) => !p)}
            className="flex items-center gap-1.5 text-zinc-600 hover:text-zinc-900 cursor-pointer bg-white border border-zinc-200 px-2.5 py-1 rounded-lg shadow-2xs"
          >
            <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-400'}`} />
            <span className="text-[11px] text-zinc-700">{tabLabels.live}</span>
          </button>
        </div>

      </div>

      {/* Main Interactive Twin Content */}
      <div className="p-6 sm:p-7">
        
        {/* TAB 1: MACRO SCALE (GIS & LANDS) */}
        {activeTab === 'macro' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-bold text-zinc-900">
                  {tabLabels.macroTitle}
                </h4>
                <p className="text-xs text-zinc-500 mt-0.5">
                  {tabLabels.macroSub}
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] bg-zinc-50 border border-zinc-200 px-3 py-1 rounded-lg">
                <span className="text-sky-700 font-semibold">{tabLabels.allocated}</span>
                <span className="text-zinc-300">|</span>
                <span className="text-emerald-700 font-semibold">{tabLabels.available}</span>
              </div>
            </div>

            {/* Simulated 3D GIS Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { id: 1, name: tabLabels.zone1, util: '10 kV · 4.2 bar', status: 'Infratuzilma Tayyor', color: 'sky' },
                { id: 2, name: tabLabels.zone2, util: '35 kV · Optika 10G', status: 'Tanlangan Aktiv', color: 'blue' },
                { id: 3, name: tabLabels.zone3, util: '110 kV · Sanoat Gazi', status: 'Yuqori Quvvat', color: 'amber' },
                { id: 4, name: tabLabels.zone4, util: 'Yashil Hudud · Solar', status: 'Eko Zonasi', color: 'emerald' },
              ].map((zone) => (
                <div
                  key={zone.id}
                  onClick={() => setSelectedZone(zone.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${
                    selectedZone === zone.id
                      ? 'bg-sky-50/60 border-sky-400 ring-1 ring-sky-300 shadow-xs'
                      : 'bg-zinc-50/50 border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-zinc-400 font-bold">PARCEL-0{zone.id}</span>
                    <span className="text-[10px] font-mono font-semibold text-sky-700 bg-white border border-zinc-200 px-1.5 py-0.5 rounded">
                      GIS &lt; 2cm
                    </span>
                  </div>
                  <div className="text-xs font-bold text-zinc-900 mb-1 leading-snug">
                    {zone.name}
                  </div>
                  <div className="text-[11px] text-zinc-500 font-mono mb-2">
                    {zone.util}
                  </div>
                  <div className="text-[10px] font-semibold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{zone.status}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom GIS Telemetry Strip */}
            <div className="p-3.5 bg-zinc-900 rounded-xl text-white font-mono text-xs flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-sky-400" />
                <span className="text-zinc-300">WGS84 / EPSG:3857 · LiDAR 3D Topografik Setka</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-400 text-[11px]">
                <span>Nuqtalar Zichligi: <strong className="text-white">128 pts/m²</strong></span>
                <span>Balandlik Aniqligi: <strong className="text-sky-400">&plusmn;1.4 cm</strong></span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MICRO SCALE (BUILT FACILITIES & SENSORS) */}
        {activeTab === 'micro' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-bold text-zinc-900">
                  {tabLabels.microTitle}
                </h4>
                <p className="text-xs text-zinc-500 mt-0.5">
                  {tabLabels.microSub}
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1 rounded-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span className="font-semibold">OEE: 96.2% · To'xtalish: 0</span>
              </div>
            </div>

            {/* 4 Sensor Telemetry Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="flex items-center justify-between text-zinc-500 text-[11px] mb-1">
                  <span>{tabLabels.sensorTemp}</span>
                  <Thermometer className="w-3.5 h-3.5 text-sky-600" />
                </div>
                <div className="text-2xl font-bold text-zinc-900">22.4°C</div>
                <div className="text-[10px] text-emerald-600 font-medium mt-1">Optimum (19-24°C)</div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="flex items-center justify-between text-zinc-500 text-[11px] mb-1">
                  <span>{tabLabels.sensorPower}</span>
                  <Zap className="w-3.5 h-3.5 text-amber-600" />
                </div>
                <div className="text-2xl font-bold text-zinc-900">184.2 kW</div>
                <div className="text-[10px] text-zinc-500 font-medium mt-1">Avtomatik yuk taqsimoti</div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="flex items-center justify-between text-zinc-500 text-[11px] mb-1">
                  <span>{tabLabels.sensorVibe}</span>
                  <Activity className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-zinc-900">1.2 mm/s</div>
                <div className="text-[10px] text-emerald-600 font-medium mt-1">ISO 10816 Standart</div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="flex items-center justify-between text-zinc-500 text-[11px] mb-1">
                  <span>{tabLabels.sensorAir}</span>
                  <Wind className="w-3.5 h-3.5 text-teal-600" />
                </div>
                <div className="text-2xl font-bold text-zinc-900">AQI 24</div>
                <div className="text-[10px] text-emerald-600 font-medium mt-1">Toza havo (HEPA H14)</div>
              </div>
            </div>

            {/* Industrial Protocol Bar */}
            <div className="p-3.5 bg-zinc-900 rounded-xl text-white font-mono text-xs flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-400" />
                <span className="text-zinc-300">OPC-UA / Modbus TCP / MQTT Real-Time Protokol</span>
              </div>
              <div className="text-zinc-400 text-[11px]">
                Kestirimci Bakım Algoritmasi: <strong className="text-emerald-400">FAOL (Anomaly 0%)</strong>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: XR & SIMULATION */}
        {activeTab === 'xr' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-bold text-zinc-900">
                  {tabLabels.xrTitle}
                </h4>
                <p className="text-xs text-zinc-500 mt-0.5">
                  {tabLabels.xrSub}
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] bg-purple-50 border border-purple-200 text-purple-800 px-3 py-1 rounded-lg">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span className="font-semibold">Nara XR Engine · WebXR / VR</span>
              </div>
            </div>

            {/* 3 XR Modules */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { title: tabLabels.mod1, badge: 'VR Trenajyor', stats: '99.2% Aniqlik', desc: 'Og\'ir mashina operatorlarini 3D fizik simulyatsiyada o\'qitish.' },
                { title: tabLabels.mod2, badge: 'HSE & OSHA', stats: 'ISO 45001', desc: 'Favqulodda vaziyatlar, yong\'in va xavfsizlik ssenariylarini mashq qilish.' },
                { title: tabLabels.mod3, badge: 'Universal GIS', stats: '3D Spatial View', desc: 'Butun shahar va sanoat infratuzilmasini real vaqtda boshqarish.' },
              ].map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-100/70 px-2 py-0.5 rounded">
                      {m.badge}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">{m.stats}</span>
                  </div>
                  <div className="text-xs font-bold text-zinc-900 mb-1">
                    {m.title}
                  </div>
                  <p className="text-[11px] text-zinc-500 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom XR Engine Strip */}
            <div className="p-3.5 bg-zinc-900 rounded-xl text-white font-mono text-xs flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-zinc-300">Unreal Engine / WebGL 2.0 Real-Time Render</span>
              </div>
              <div className="text-zinc-400 text-[11px]">
                Kadrlar tayyorlash samaradorligi: <strong className="text-emerald-400">+45% Tezroq</strong>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: GREEN CARBON AI */}
        {activeTab === 'green' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-bold text-zinc-900">
                  {tabLabels.greenTitle}
                </h4>
                <p className="text-xs text-zinc-500 mt-0.5">
                  {tabLabels.greenSub}
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1 rounded-lg">
                <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                <span className="font-semibold">greencarbonai.com integratsiyasi</span>
              </div>
            </div>

            {/* 3 Green Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="text-zinc-500 text-[11px] mb-1">{tabLabels.greenEff}</div>
                <div className="text-2xl font-bold text-emerald-700">-28.4%</div>
                <div className="text-[10px] text-zinc-500 mt-1">Uglerod kamayishi (Yillik)</div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="text-zinc-500 text-[11px] mb-1">{tabLabels.greenEu}</div>
                <div className="text-2xl font-bold text-zinc-900">A+ Daraja</div>
                <div className="text-[10px] text-emerald-600 mt-1">Yevropa Ittifoqi standarti</div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="text-zinc-500 text-[11px] mb-1">{tabLabels.greenSave}</div>
                <div className="text-2xl font-bold text-sky-700">94.8%</div>
                <div className="text-[10px] text-zinc-500 mt-1">Neytrallik indeksi</div>
              </div>
            </div>

            {/* Bottom Green Intelligence Strip */}
            <div className="p-3.5 bg-zinc-900 rounded-xl text-white font-mono text-xs flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-emerald-400" />
                <span className="text-zinc-300">ISO 14064 / GHG Protocol / ESG Audit Moduli</span>
              </div>
              <div className="text-zinc-400 text-[11px]">
                Yashil Pasport Sertifikati: <strong className="text-emerald-400">FAOL</strong>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
