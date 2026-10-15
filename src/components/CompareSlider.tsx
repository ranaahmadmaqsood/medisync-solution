import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, CheckCircle, ShieldAlert, ArrowLeftRight, Columns, Layers, CalendarCheck, TrendingUp, AlertTriangle } from 'lucide-react';

export const CompareSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(6, Math.min(94, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (viewMode !== 'slider') return;
    setIsDragging(true);
    handleMove(e.clientX);
  };

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const onPointerUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    }
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [isDragging, handleMove]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 my-10">
      {/* Top Controls: Interactive Slider / Dual View Switcher */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D62828] animate-pulse" />
          <span className="text-xs font-bold font-display uppercase tracking-wider text-slate-700">
            Google 3-Pack Local Search Transformation
          </span>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 shadow-sm text-xs font-bold font-display">
          <button
            onClick={() => setViewMode('slider')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              viewMode === 'slider' ? 'bg-[#0A2E5C] text-white shadow-sm' : 'text-slate-600 hover:text-[#0A2E5C]'
            }`}
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>Interactive Drag Slider</span>
          </button>
          <button
            onClick={() => setViewMode('side-by-side')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              viewMode === 'side-by-side' ? 'bg-[#0A2E5C] text-white shadow-sm' : 'text-slate-600 hover:text-[#0A2E5C]'
            }`}
          >
            <Columns className="w-3.5 h-3.5" />
            <span>Side-by-Side Dual View</span>
          </button>
        </div>
      </div>

      {viewMode === 'slider' ? (
        /* Slider Mode */
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          className="relative select-none touch-none overflow-hidden rounded-3xl bg-white border-2 border-slate-200 shadow-card-hover cursor-ew-resize min-h-[440px]"
        >
          {/* AFTER (Right side - Optimized with MediSync) */}
          <div className="w-full h-full p-6 sm:p-8 bg-gradient-to-br from-white to-slate-50">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#0A2E5C]/10 flex items-center justify-center">
                  <Search className="w-4 h-4 text-[#0A2E5C]" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-400">Target Patient Search</div>
                  <div className="text-sm font-bold text-[#0A2E5C]">"best medical clinic near me"</div>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                With MediSync (Position #1)
              </span>
            </div>

            <div className="space-y-3">
              {/* RANK 1: Your Practice */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0A2E5C] text-white shadow-lg border-2 border-[#D62828]/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D62828]/25 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#D62828] text-white font-black flex items-center justify-center text-sm shrink-0 shadow-md">
                      1
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-base sm:text-lg text-white">Your Medical Practice</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#D62828] text-white uppercase tracking-wider">
                          Rank #1 Choice
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-amber-300 text-xs mt-1">
                        <Star className="w-3.5 h-3.5 fill-amber-300" />
                        <span className="font-bold">4.9 ★</span>
                        <span className="text-slate-200">(148 Google Reviews)</span>
                        <span className="text-slate-300">• Open Now</span>
                      </div>
                      <p className="text-xs text-slate-300 mt-2 line-clamp-1">
                        Direct online booking available · In-network with major insurance · Next-day slots
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex flex-col items-end gap-1.5 shrink-0">
                    <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-[#D62828] text-white shadow-sm">
                      <CalendarCheck className="w-3.5 h-3.5" /> Book Online
                    </span>
                    <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +320% inquiries
                    </span>
                  </div>
                </div>
              </div>

              {/* Competitor 1 */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-600 font-bold flex items-center justify-center text-xs">2</div>
                  <div>
                    <div className="font-display font-bold text-sm text-[#0A2E5C]">Metro Healthcare Center</div>
                    <div className="text-xs text-slate-500">4.3 ★ (58 reviews) · Page 1 #2</div>
                  </div>
                </div>
                <span className="text-xs text-slate-400 hidden sm:inline">2.4 mi away</span>
              </div>

              {/* Competitor 2 */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-600 font-bold flex items-center justify-center text-xs">3</div>
                  <div>
                    <div className="font-display font-bold text-sm text-[#0A2E5C]">Premier Family Clinic</div>
                    <div className="text-xs text-slate-500">4.1 ★ (32 reviews) · Page 1 #3</div>
                  </div>
                </div>
                <span className="text-xs text-slate-400 hidden sm:inline">3.1 mi away</span>
              </div>
            </div>
          </div>

          {/* BEFORE (Left side - Clipped Overlay) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden bg-slate-100 border-r-2 border-white/80 shadow-2xl transition-none"
            style={{ width: `${sliderPos}%` }}
          >
            <div
              className="h-full p-6 sm:p-8 bg-slate-100"
              style={{ width: containerRef.current?.clientWidth || '100%' }}
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center">
                    <Search className="w-4 h-4 text-slate-500" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400">Target Patient Search</div>
                    <div className="text-sm font-bold text-slate-600">"best medical clinic near me"</div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full border border-red-200 flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
                  Before MediSync (Invisible)
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-slate-300 text-slate-700 font-bold flex items-center justify-center text-xs">1</div>
                    <div>
                      <div className="font-display font-bold text-sm text-slate-700">Metro Healthcare Center</div>
                      <div className="text-xs text-slate-500">4.3 ★ (58 reviews) · Stealing 70% clicks</div>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-600 font-semibold hidden sm:inline">Capturing your patients</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-slate-300 text-slate-700 font-bold flex items-center justify-center text-xs">2</div>
                    <div>
                      <div className="font-display font-bold text-sm text-slate-700">Premier Family Clinic</div>
                      <div className="text-xs text-slate-500">4.1 ★ (32 reviews)</div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 hidden sm:inline">Active Google Ads</span>
                </div>

                {/* Buried Clinic */}
                <div className="p-4 rounded-xl bg-red-50 border-2 border-dashed border-red-300 text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-200 text-red-800 font-black flex items-center justify-center text-sm shrink-0">9</div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-base text-red-950">Your Medical Practice</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-200 text-red-900 uppercase tracking-wider">
                          Buried on Page 2
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 mt-1">2.4 ★ (Only 3 reviews · Last updated 2 yrs ago)</div>
                      <p className="text-xs text-red-700 mt-1.5 flex items-center gap-1 font-medium">
                        <AlertTriangle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        Zero online booking · Losing ~35 patient leads every month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DRAGGABLE DIVIDER HANDLE */}
          <div
            className="absolute inset-y-0 w-1 bg-white shadow-[0_0_20px_rgba(214,40,40,0.8)] cursor-ew-resize flex items-center justify-center z-20"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-11 h-11 rounded-full bg-[#D62828] text-white flex items-center justify-center shadow-xl border-2 border-white hover:scale-110 active:scale-95 transition-transform">
              <ArrowLeftRight className="w-4 h-4" />
            </div>
          </div>

          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[11px] font-bold text-red-700 border border-red-200 shadow-sm uppercase tracking-wide">
              Before
            </span>
          </div>
          <div className="absolute top-3 right-3 z-10 pointer-events-none">
            <span className="px-3 py-1 bg-[#0A2E5C]/90 backdrop-blur-md rounded-full text-[11px] font-bold text-white border border-white/20 shadow-sm uppercase tracking-wide">
              After
            </span>
          </div>
        </div>
      ) : (
        /* Side-by-Side Dual View */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Before */}
          <div className="p-6 rounded-3xl bg-white border-2 border-red-200 shadow-sm">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-red-100">
              <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-bold rounded-full">
                Before MediSync
              </span>
              <span className="text-xs text-red-600 font-semibold">Page 2 (#9)</span>
            </div>
            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-950">
              <div className="font-display font-bold text-base">Your Medical Practice</div>
              <div className="text-xs text-slate-500 mt-1">2.4 ★ (3 reviews) · Incomplete Google Profile</div>
              <p className="text-xs text-red-700 mt-2">Buried below competitors. No direct booking calendar. Losing 70%+ of local patients searching your zip code.</p>
            </div>
          </div>

          {/* Card After */}
          <div className="p-6 rounded-3xl bg-[#0A2E5C] text-white border-2 border-[#D62828] shadow-card-hover relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D62828]/30 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full border border-emerald-500/30">
                With MediSync Solution
              </span>
              <span className="text-xs text-amber-300 font-bold">Position #1 3-Pack</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-white">
              <div className="font-display font-bold text-base flex items-center justify-between">
                <span>Your Medical Practice</span>
                <span className="text-xs bg-[#D62828] px-2 py-0.5 rounded font-bold">#1 Choice</span>
              </div>
              <div className="text-xs text-amber-300 mt-1">4.9 ★★★★★ (148 reviews) · Open Now</div>
              <p className="text-xs text-slate-200 mt-2">Rank #1 on Google Maps. AI search cited in ChatGPT & Gemini. Direct HIPAA online booking driving +320% inquiries.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
