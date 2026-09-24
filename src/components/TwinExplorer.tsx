import React, { useState } from 'react';
import { translations, Language } from '../locales/translations';
import { Building2, Factory, FlaskConical, GraduationCap, Activity, ShieldCheck, Zap } from 'lucide-react';

interface TwinExplorerProps {
  currentLang: Language;
}

export const TwinExplorer: React.FC<TwinExplorerProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<'industry' | 'factory' | 'rd' | 'education'>('industry');
  const [selectedParcel, setSelectedParcel] = useState<number>(2);
  const [isLive, setIsLive] = useState(true);

  const t = translations[currentLang].twinExplorer;

  return (
    <div className="w-full bg-white border border-zinc-200/90 rounded-2xl shadow-xs overflow-hidden">
      
      {/* Top Controller Bar */}
      <div className="border-b border-zinc-100 bg-zinc-50/80 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        
        {/* Navigation Tabs - 4 Core Verticals */}
        <div className="flex flex-wrap items-center gap-1 bg-zinc-200/60 p-1 rounded-xl text-xs font-medium">
          <button
            onClick={() => setActiveTab('industry')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'industry'
                ? 'bg-white text-zinc-900 font-semibold shadow-xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <Building2 className="w-3.5 h-3.5 text-sky-600" />
            <span>{t.tabIndustry}</span>
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
            <span>{t.tabFactory}</span>
          </button>

          <button
            onClick={() => setActiveTab('rd')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'rd'
                ? 'bg-white text-zinc-900 font-semibold shadow-xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <FlaskConical className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.tabRd}</span>
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
            <span>{t.tabEducation}</span>
          </button>
        </div>

        {/* Live Status indicator */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <button
            onClick={() => setIsLive((p) => !p)}
            className="flex items-center gap-1.5 text-zinc-600 hover:text-zinc-900 cursor-pointer bg-white border border-zinc-200 px-2.5 py-1 rounded-lg shadow-2xs"
          >
            <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-400'}`} />
            <span className="text-[11px] text-zinc-700">{t.liveBadge}</span>
          </button>
        </div>

      </div>

      {/* Main Interactive Twin Content */}
      <div className="p-6 sm:p-7">
        
        {/* TAB 1: INDUSTRY */}
        {activeTab === 'industry' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-bold text-zinc-900">
                  {t.industryTitle}
                </h4>
                <p className="text-xs text-zinc-500 mt-0.5">
                  {t.industryDesc}
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-mono text-sky-700 bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-md">
                <span>{t.industryGis}</span>
              </span>
            </div>

            {/* Interactive Parcel Map */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 1, name: t.parcel1Name, size: "4.5 Ga", status: "allocated", desc: t.parcel1Desc },
                { id: 2, name: t.parcel2Name, size: "6.2 Ga", status: "available", desc: t.parcel2Desc },
                { id: 3, name: t.parcel3Name, size: "8.0 Ga", status: "allocated", desc: t.parcel3Desc },
                { id: 4, name: t.parcel4Name, size: "5.0 Ga", status: "available", desc: t.parcel4Desc },
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
                    {parcel.status === 'allocated' ? t.allocated : t.available}
                  </div>
                </div>
              ))}
            </div>

            {/* Utility status */}
            <div className="bg-zinc-50 border border-zinc-200/80 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-sky-600 shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">{t.powerLabel}</div>
                  <div className="font-semibold text-zinc-800 mt-0.5">{t.powerValue}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-sky-600 shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">{t.gasLabel}</div>
                  <div className="font-semibold text-zinc-800 mt-0.5">{t.gasValue}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-sky-600 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">{t.legalLabel}</div>
                  <div className="font-semibold text-emerald-600 mt-0.5">{t.legalValue}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FACTORY */}
        {activeTab === 'factory' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-bold text-zinc-900">
                  {t.factoryTitle}
                </h4>
                <p className="text-xs text-zinc-500 mt-0.5">
                  {t.factoryDesc}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>{t.factoryOeeBadge}</span>
              </span>
            </div>

            {/* Visual Process Line */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-500">{t.stage1Label}</span>
                  <span className="text-sky-600 font-bold">{t.activeStatus}</span>
                </div>
                <div className="text-lg font-bold text-zinc-800">{t.stage1Title}</div>
                <div className="text-xs text-zinc-600 whitespace-pre-line">
                  {t.stage1Desc}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-500">{t.stage2Label}</span>
                  <span className="text-emerald-600 font-bold">{t.activeStatus}</span>
                </div>
                <div className="text-lg font-bold text-zinc-800">{t.stage2Title}</div>
                <div className="text-xs text-zinc-600 whitespace-pre-line">
                  {t.stage2Desc}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-500">{t.stage3Label}</span>
                  <span className="text-sky-600 font-bold">100%</span>
                </div>
                <div className="text-lg font-bold text-zinc-800">{t.stage3Title}</div>
                <div className="text-xs text-zinc-600 whitespace-pre-line">
                  {t.stage3Desc}
                </div>
              </div>
            </div>

            <div className="bg-zinc-100/70 rounded-xl p-4 text-xs font-mono text-zinc-600 flex flex-wrap items-center justify-between gap-3">
              <div>{t.factoryFooterProtocol}</div>
              <div className="text-emerald-600 font-semibold">{t.factoryFooterMaintenance}</div>
            </div>
          </div>
        )}

        {/* TAB 3: R&D */}
        {activeTab === 'rd' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-bold text-zinc-900">
                  {t.rdTitle}
                </h4>
                <p className="text-xs text-zinc-500 mt-0.5">
                  {t.rdDesc}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-700 bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-md">
                <FlaskConical className="w-3.5 h-3.5 text-amber-600" />
                <span>{t.rdBadge}</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                <span className="text-[10px] font-mono text-amber-600 font-bold uppercase">{t.rdStage1Tag}</span>
                <div className="text-base font-bold text-zinc-900">{t.rdStage1Title}</div>
                <p className="text-xs text-zinc-600">
                  {t.rdStage1Desc}
                </p>
                <div className="pt-2 text-xs font-mono text-zinc-500"><strong>{t.rdStage1Partner}</strong></div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                <span className="text-[10px] font-mono text-amber-600 font-bold uppercase">{t.rdStage2Tag}</span>
                <div className="text-base font-bold text-zinc-900">{t.rdStage2Title}</div>
                <p className="text-xs text-zinc-600">
                  {t.rdStage2Desc}
                </p>
                <div className="pt-2 text-xs font-mono text-zinc-500"><strong>{t.rdStage2Saving}</strong></div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                <span className="text-[10px] font-mono text-amber-600 font-bold uppercase">{t.rdStage3Tag}</span>
                <div className="text-base font-bold text-zinc-900">{t.rdStage3Title}</div>
                <p className="text-xs text-zinc-600">
                  {t.rdStage3Desc}
                </p>
                <div className="pt-2 text-xs font-mono text-zinc-500"><strong>{t.rdStage3Speed}</strong></div>
              </div>
            </div>

            <div className="bg-zinc-100/70 rounded-xl p-4 text-xs font-mono text-zinc-600 flex flex-wrap items-center justify-between gap-3">
              <div>{t.rdFooterModel}</div>
              <div className="text-amber-700 font-semibold">{t.rdFooterRate}</div>
            </div>
          </div>
        )}

        {/* TAB 4: EDUCATION */}
        {activeTab === 'education' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-bold text-zinc-900">
                  {t.eduTitle}
                </h4>
                <p className="text-xs text-zinc-500 mt-0.5">
                  {t.eduDesc}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-700 bg-violet-50 border border-violet-100 px-2.5 py-1 rounded-md">
                <span>{t.eduBadge}</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                <span className="text-[10px] font-mono text-violet-600 font-bold uppercase">{t.eduCard1Tag}</span>
                <div className="text-base font-bold text-zinc-900">{t.eduCard1Title}</div>
                <p className="text-xs text-zinc-600">
                  {t.eduCard1Desc}
                </p>
                <div className="pt-2 text-xs font-mono text-zinc-500"><strong>{t.eduCard1Metric}</strong></div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                <span className="text-[10px] font-mono text-violet-600 font-bold uppercase">{t.eduCard2Tag}</span>
                <div className="text-base font-bold text-zinc-900">{t.eduCard2Title}</div>
                <p className="text-xs text-zinc-600">
                  {t.eduCard2Desc}
                </p>
                <div className="pt-2 text-xs font-mono text-zinc-500"><strong>{t.eduCard2Metric}</strong></div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                <span className="text-[10px] font-mono text-violet-600 font-bold uppercase">{t.eduCard3Tag}</span>
                <div className="text-base font-bold text-zinc-900">{t.eduCard3Title}</div>
                <p className="text-xs text-zinc-600">
                  {t.eduCard3Desc}
                </p>
                <div className="pt-2 text-xs font-mono text-zinc-500"><strong>{t.eduCard3Metric}</strong></div>
              </div>
            </div>

            <div className="bg-zinc-100/70 rounded-xl p-4 text-xs font-mono text-zinc-600 flex flex-wrap items-center justify-between gap-3">
              <div>{t.eduFooterCert}</div>
              <div className="text-violet-600 font-semibold">{t.eduFooterSafety}</div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
