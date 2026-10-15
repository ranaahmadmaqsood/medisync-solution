import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radar, ShieldCheck, MapPin, Search, Star, Sparkles, Navigation, Users, RefreshCw } from 'lucide-react';

export const PracticeRadar: React.FC = () => {
  const [scanning, setScanning] = useState(true);
  const [selectedTarget, setSelectedTarget] = useState<number>(0);
  const [scanAngle, setScanAngle] = useState(0);

  useEffect(() => {
    if (!scanning) return;
    const interval = setInterval(() => {
      setScanAngle((prev) => (prev + 3) % 360);
    }, 20);
    return () => clearInterval(interval);
  }, [scanning]);

  const targets = [
    {
      id: 0,
      name: 'Your Practice (MediSync)',
      distance: '0.4 mi',
      rank: '#1 Choice',
      reviews: '4.9 ★ (184 reviews)',
      status: 'Dominating Local 3-Pack',
      x: 50,
      y: 35,
      color: '#D62828',
      isYou: true,
      inflow: '+320% Calls',
      keywords: '18 high-intent terms ranked #1'
    },
    {
      id: 1,
      name: 'Regional Health Competitor',
      distance: '1.2 mi',
      rank: '#2 Choice',
      reviews: '4.2 ★ (45 reviews)',
      status: 'Incomplete schema, losing patients',
      x: 75,
      y: 65,
      color: '#94A3B8',
      isYou: false,
      inflow: 'Stagnant',
      keywords: 'Losing top 3-pack visibility'
    },
    {
      id: 2,
      name: 'Downtown Medical Group',
      distance: '2.1 mi',
      rank: '#3 Choice',
      reviews: '3.9 ★ (22 reviews)',
      status: 'Slow website, zero online booking',
      x: 25,
      y: 70,
      color: '#64748B',
      isYou: false,
      inflow: '-15% Drop',
      keywords: 'High bounce rate'
    },
  ];

  const current = targets[selectedTarget];

  return (
    <div className="w-full max-w-4xl mx-auto my-12 px-4">
      <div className="relative rounded-3xl p-1 bg-gradient-to-r from-[#0A2E5C] via-[#D62828] to-[#0A2E5C] shadow-[0_20px_60px_rgba(10,46,92,0.25)] overflow-hidden">
        <div className="bg-[#071F42] rounded-[23px] p-6 sm:p-9 text-white">
          
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 mb-6 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D62828] text-white flex items-center justify-center shadow-md">
                <Radar className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-black text-lg text-white">Live Local Market Radar Scanner</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                    Active 5-Mile Scan
                  </span>
                </div>
                <div className="text-xs text-slate-300">Scanning local patient search queries in real time</div>
              </div>
            </div>

            <button
              onClick={() => {
                setScanning(true);
                setSelectedTarget((prev) => (prev + 1) % targets.length);
              }}
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold font-display text-white flex items-center gap-1.5 transition-all border border-white/10 active:scale-95 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#D62828]" />
              <span>Cycle Detected Clinics</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Radar Canvas / Visualizer */}
            <div className="md:col-span-7 flex items-center justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-white/20 bg-[#041328] flex items-center justify-center shadow-inner overflow-hidden select-none">
                
                {/* Concentric distance rings */}
                <div className="absolute w-3/4 h-3/4 rounded-full border border-white/10" />
                <div className="absolute w-1/2 h-1/2 rounded-full border border-white/10" />
                <div className="absolute w-1/4 h-1/4 rounded-full border border-white/10" />
                
                {/* Crosshairs */}
                <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
                <div className="absolute inset-y-0 left-1/2 w-px bg-white/10" />

                {/* Radar sweeping beam */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background: `conic-gradient(from ${scanAngle}deg, rgba(214, 40, 40, 0.35) 0deg, transparent 65deg)`,
                  }}
                />

                {/* Center Doctor Icon */}
                <div className="w-7 h-7 rounded-full bg-[#0A2E5C] text-white flex items-center justify-center border-2 border-[#D62828] z-20 shadow-[0_0_15px_rgba(214,40,40,0.8)]">
                  <Navigation className="w-3.5 h-3.5 text-[#D62828]" />
                </div>

                {/* Detected Target Blips */}
                {targets.map((tgt, i) => {
                  const isSelected = selectedTarget === i;
                  return (
                    <motion.div
                      key={tgt.id}
                      onClick={() => setSelectedTarget(i)}
                      className="absolute z-20 cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${tgt.x}%`, top: `${tgt.y}%` }}
                      whileHover={{ scale: 1.25 }}
                    >
                      <div className="relative flex items-center justify-center">
                        {tgt.isYou && (
                          <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-[#D62828] opacity-75" />
                        )}
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black font-display shadow-lg border-2 ${
                            tgt.isYou
                              ? 'bg-[#D62828] text-white border-white'
                              : 'bg-slate-700 text-slate-300 border-slate-500'
                          } ${isSelected ? 'ring-4 ring-white/50' : ''}`}
                        >
                          {i + 1}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Distance Label */}
                <div className="absolute bottom-2 right-4 text-[10px] text-slate-400 font-mono">
                  RANGE: 5.0 MI
                </div>
              </div>
            </div>

            {/* Right Target Telemetry Card */}
            <div className="md:col-span-5 bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-white/10">
                <span className="text-slate-400 font-medium">Telemetry Target:</span>
                <span
                  className={`px-2 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider ${
                    current.isYou
                      ? 'bg-[#D62828] text-white'
                      : 'bg-slate-700 text-slate-300'
                  }`}
                >
                  {current.rank}
                </span>
              </div>

              <div className="mt-4">
                <h4 className="font-display font-black text-xl text-white flex items-center gap-2">
                  <span>{current.name}</span>
                </h4>
                <div className="text-xs text-amber-400 font-semibold mt-1 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{current.reviews}</span>
                  <span className="text-slate-400 ml-1">• {current.distance}</span>
                </div>
              </div>

              <div className="space-y-2.5 mt-5 text-xs">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-300">Local Visibility Status:</span>
                  <span className="font-bold text-white text-[11px] text-right truncate max-w-[150px]">
                    {current.status}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-300">Patient Inflow Momentum:</span>
                  <span
                    className={`font-black font-display text-sm ${
                      current.isYou ? 'text-emerald-400' : 'text-slate-400'
                    }`}
                  >
                    {current.inflow}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-300">Keyword Coverage:</span>
                  <span className="font-bold text-white text-[11px] text-right truncate max-w-[150px]">
                    {current.keywords}
                  </span>
                </div>
              </div>

              <a
                href="#audit"
                className="mt-5 w-full py-2.5 rounded-xl bg-[#D62828] hover:bg-[#B31E1E] text-white font-display text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
              >
                <span>Audit Your Exact Zip Code</span>
                <Sparkles className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
