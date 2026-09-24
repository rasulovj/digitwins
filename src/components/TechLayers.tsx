import React from 'react';
import { TranslationContent } from '../locales/translations';
import { Wifi, Box, Activity, BrainCircuit } from 'lucide-react';

interface TechLayersProps {
  content: TranslationContent['techLayersSection'];
}

export const TechLayers: React.FC<TechLayersProps> = ({ content }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Wifi className="w-5 h-5 text-sky-700" />;
      case 1:
        return <Box className="w-5 h-5 text-sky-700" />;
      case 2:
        return <Activity className="w-5 h-5 text-indigo-700" />;
      case 3:
        return <BrainCircuit className="w-5 h-5 text-amber-700" />;
      default:
        return <Wifi className="w-5 h-5 text-sky-700" />;
    }
  };

  return (
    <section id="katmanlar" className="py-20 sm:py-24 relative border-t border-zinc-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-block text-xs font-mono font-bold tracking-widest text-sky-700 uppercase">
            {content.tag}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            {content.title}
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* 4 Layers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.layers.map((layer, idx) => (
            <div
              key={layer.step}
              className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-6 space-y-4 hover:bg-white hover:border-zinc-300 hover:shadow-2xs transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-zinc-500">
                  {content.stepPrefix} {layer.step}
                </span>
                <div className="w-9 h-9 rounded-lg bg-white border border-zinc-200 flex items-center justify-center">
                  {getIcon(idx)}
                </div>
              </div>

              <h3 className="text-base font-bold text-zinc-900 leading-snug">
                {layer.title}
              </h3>

              <p className="text-zinc-600 text-xs leading-relaxed">
                {layer.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {layer.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-zinc-200 text-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
