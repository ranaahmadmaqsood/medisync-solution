import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, ChevronDown, CheckCircle2, TrendingUp, Star, Play } from 'lucide-react';
import { HeroCanvas } from './HeroCanvas';
import { AiSearchBox } from './AiSearchBox';
import { CompareSlider } from './CompareSlider';

const STATS = [
  { value: '92%', label: 'Local Visibility Score', sub: 'Across high-intent zip codes' },
  { value: '3.2×', label: 'More Patient Inquiries', sub: 'Verified calls & online bookings' },
  { value: '48+', label: 'Medical Practices Scaled', sub: 'Across 14 US healthcare disciplines' },
  { value: '#1', label: 'Avg. Google 3-Pack Rank', sub: 'Within 60-90 day deployment' },
];

export const Hero: React.FC = () => {
  return (
    <header className="relative pt-32 sm:pt-40 pb-20 overflow-hidden bg-white">
      {/* Anime.js Background Canvas */}
      <HeroCanvas />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Eyebrow */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 text-navy border border-navy/10 text-xs font-bold font-display uppercase tracking-widest mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-brandRed animate-pulse" />
            Healthcare Digital Growth Infrastructure
          </motion.div>

          {/* Masterpiece Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-navy tracking-tight leading-[0.95] mb-6"
          >
            GET FOUND. <br className="hidden sm:inline" />
            GET CHOSEN. <br className="hidden sm:inline" />
            GET <span className="text-brandRed relative inline-block">
              BOOKED.
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C40 2 160 2 199 5.5" stroke="#D62828" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ink-soft text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8"
          >
            MediSync Solution turns your practice’s Google & AI presence from invisible into unmissable — capturing patients right when they search for care.
          </motion.p>

          {/* Hero Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-6"
          >
            <a
              href="#audit"
              className="px-7 sm:px-9 py-4 rounded-full bg-brandRed hover:bg-brandRed-hover text-white font-display text-sm sm:text-base font-extrabold uppercase tracking-wider flex items-center gap-2 shadow-glow-red hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>Get My Free Growth Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#compare"
              className="px-7 sm:px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-navy font-display text-sm sm:text-base font-bold border-2 border-navy/20 hover:border-navy flex items-center gap-2 transition-all active:scale-95 shadow-sm"
            >
              <span>See It Work</span>
              <ChevronDown className="w-4 h-4 text-brandRed" />
            </a>
          </motion.div>

          <div className="flex items-center justify-center gap-4 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Free 24-hr Analysis
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> No Obligation
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 100% HIPAA Safe
            </span>
          </div>
        </div>

        {/* Kokonut AI Search Simulator Widget */}
        <AiSearchBox />

        {/* Interactive Before & After Slider */}
        <div id="compare">
          <CompareSlider />
        </div>

        {/* Hero Bottom Stats Grid */}
        <div className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {STATS.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-4"
            >
              <div className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-navy">
                {s.value}
              </div>
              <div className="font-display font-bold text-xs sm:text-sm text-ink mt-1">
                {s.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {s.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </header>
  );
};
