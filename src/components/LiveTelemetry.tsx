import React, { useState, useEffect } from 'react';
import { TranslationContent } from '../locales/translations';
import { Gauge, Server, Users, FlaskConical } from 'lucide-react';

interface LiveTelemetryProps {
  content: TranslationContent['telemetrySection'];
}

export const LiveTelemetry: React.FC<LiveTelemetryProps> = ({ content }) => {
  const [oeeVal, setOeeVal] = useState(95.8);
  const [activeNodes, setActiveNodes] = useState(3852);
  const [trainees, setTrainees] = useState(4520);
  const [rdProjects, setRdProjects] = useState(24);
  const [latency, setLatency] = useState(14);

  useEffect(() => {
    const interval = setInterval(() => {
      setOeeVal(Number((94.5 + Math.random() * 2.2).toFixed(1)));
      setActiveNodes(3850 + Math.floor(Math.random() * 8));
      setTrainees(4520 + Math.floor(Math.random() * 15));
      setRdProjects(24 + (Math.random() > 0.5 ? 1 : 0));
      setLatency(12 + Math.floor(Math.random() * 6));
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="telemetriya" className="py-20 sm:py-24 relative border-t border-zinc-200/80 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-sky-700 uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{content.liveBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              {content.title}
            </h2>
            <p className="text-zinc-600 text-sm max-w-2xl">
              {content.description}
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-500 shrink-0">
            {content.refreshNote}
          </div>
        </div>

        {/* Live Telemetry Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Tile 1: SEZ Land Telemetry */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-5 space-y-4 shadow-2xs">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1.5 font-medium">
                <Server className="w-4 h-4 text-sky-600" />
                <span>{content.tile1Title}</span>
              </span>
              <span className="text-sky-700 font-bold">ONLINE</span>
            </div>

            <div>
              <div className="text-3xl font-bold font-mono text-zinc-900 mb-1">
                {activeNodes}
              </div>
              <div className="text-xs text-zinc-500 font-mono">
                {content.tile1Sub}
              </div>
            </div>

            <div className="text-[11px] font-mono text-zinc-500 flex justify-between pt-1 border-t border-zinc-100">
              <span>{content.tile1FootLabel}</span>
              <span className="text-emerald-700 font-semibold">{latency} ms</span>
            </div>
          </div>

          {/* Tile 2: Factory OEE */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-5 space-y-4 shadow-2xs">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1.5 font-medium">
                <Gauge className="w-4 h-4 text-sky-600" />
                <span>{content.tile2Title}</span>
              </span>
              <span className="text-emerald-700 font-bold">NORMAL</span>
            </div>

            <div>
              <div className="text-3xl font-bold font-mono text-zinc-900 mb-1.5">
                {oeeVal}%
              </div>
              <div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-sky-600 h-full transition-all duration-700"
                  style={{ width: `${oeeVal}%` }}
                />
              </div>
            </div>

            <div className="text-[11px] font-mono text-zinc-500 flex justify-between pt-1 border-t border-zinc-100">
              <span>{content.tile2FootLabel}</span>
              <span className="text-zinc-900 font-semibold">{content.tile2FootValue}</span>
            </div>
          </div>

          {/* Tile 3: R&D / TechTransfer */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-5 space-y-4 shadow-2xs">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1.5 font-medium">
                <FlaskConical className="w-4 h-4 text-amber-600" />
                <span>{content.tile3Title}</span>
              </span>
              <span className="text-amber-700 font-bold">24/7</span>
            </div>

            <div>
              <div className="text-3xl font-bold font-mono text-zinc-900 mb-1">
                {rdProjects}+
              </div>
              <div className="text-xs text-zinc-500 font-mono">
                {content.tile3Sub}
              </div>
            </div>

            <div className="text-[11px] font-mono text-zinc-500 flex justify-between pt-1 border-t border-zinc-100">
              <span>{content.tile3FootLabel}</span>
              <span className="text-amber-700 font-semibold">{content.tile3FootValue}</span>
            </div>
          </div>

          {/* Tile 4: Virtual Academy Simulation */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-5 space-y-4 shadow-2xs">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1.5 font-medium">
                <Users className="w-4 h-4 text-violet-600" />
                <span>{content.tile4Title}</span>
              </span>
              <span className="text-violet-700 font-bold">ISO/OSHA</span>
            </div>

            <div>
              <div className="text-3xl font-bold font-mono text-zinc-900 mb-1">
                {trainees}+
              </div>
              <div className="text-xs text-zinc-500 font-mono">
                {content.tile4Sub}
              </div>
            </div>

            <div className="text-[11px] font-mono text-zinc-500 flex justify-between pt-1 border-t border-zinc-100">
              <span>{content.tile4FootLabel}</span>
              <span className="text-zinc-900 font-semibold">{content.tile4FootValue}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
