import React from 'react';
import { TranslationContent } from '../locales/translations';
import { Cpu, Box, Sparkles, LineChart } from 'lucide-react';

interface TechLayersProps {
  content: TranslationContent['techSection'];
}

export const TechLayers: React.FC<TechLayersProps> = ({ content }) => {
  const getLayerIcon = (step: string) => {
    switch (step) {
      case '1':
        return <Cpu className="w-5 h-5 text-sky-700" />;
      case '2':
        return <Box className="w-5 h-5 text-blue-700" />;
      case '3':
        return <Sparkles className="w-5 h-5 text-purple-700" />;
      case '4':
        return <LineChart className="w-5 h-5 text-emerald-700" />;
      default:
        return <Cpu className="w-5 h-5 text-sky-700" />;
    }
  };

  return (
    <section id="teknoloji-katmani" className="py-16 sm:py-20 relative border-t border-zinc-200/80 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-block text-xs font-mono font-bold tracking-widest text-sky-700 uppercase">
            {content.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
            {content.title}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* 4 Architectural Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {content.layers.map((layer) => (
            <div
              key={layer.step}
              className="bg-white rounded-2xl border border-zinc-200/80 p-5 shadow-2xs hover:border-zinc-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                
                {/* Step Header */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200/70 px-2 py-0.5 rounded">
                    {content.stepPrefix}{layer.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-200/70 flex items-center justify-center">
                    {getLayerIcon(layer.step)}
                  </div>
                </div>

                {/* Layer Title */}
                <h3 className="text-sm font-bold text-zinc-950 tracking-tight">
                  {layer.title}
                </h3>

                {/* Layer Description */}
                <p className="text-xs text-zinc-600 font-normal leading-relaxed">
                  {layer.description}
                </p>

              </div>

              {/* Protocol Tag */}
              <div className="pt-4 mt-2 border-t border-zinc-100">
                <span className="text-[10px] font-mono text-zinc-500 bg-zinc-50 border border-zinc-200/60 px-2 py-1 rounded inline-block">
                  {layer.tag}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
