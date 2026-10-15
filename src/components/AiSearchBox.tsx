import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, CheckCircle2, ArrowRight, Bot, Star, MapPin } from 'lucide-react';

const SAMPLE_QUERIES = [
  {
    prompt: "Best pediatric dentist in Dallas open Saturday with 5-star reviews",
    engine: "Google AI Overview & Gemini",
    doctorResult: "BrightSmile Pediatric Dental",
    specialty: "Pediatric Dentistry",
    rating: "4.9 ★ (218 reviews)",
    status: "MediSync Verified Rank #1",
    insight: "AI Citation Score: 98% · Google 3-Pack Position #1"
  },
  {
    prompt: "Top board-certified cardiologist near me accepting new patient consults",
    engine: "Perplexity & ChatGPT Search",
    doctorResult: "Apex Heart & Vascular Institute",
    specialty: "Cardiology",
    rating: "5.0 ★ (142 reviews)",
    status: "MediSync Verified Rank #1",
    insight: "Schema Structured Data synced across 42 medical directories"
  },
  {
    prompt: "Highest rated dermatology clinic for laser skin rejuvenation",
    engine: "Apple Maps & Google Local Search",
    doctorResult: "Lumina Dermatology & Aesthetics",
    specialty: "Dermatology",
    rating: "4.9 ★ (304 reviews)",
    status: "MediSync Verified Rank #1",
    insight: "Local Search Velocity: +340% appointment conversion"
  }
];

export const AiSearchBox: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [customQuery, setCustomQuery] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (hasInteracted) return;

    const currentPrompt = SAMPLE_QUERIES[currentIndex].prompt;
    let charIndex = 0;
    setIsTyping(true);
    setDisplayedText("");

    const typingInterval = setInterval(() => {
      if (charIndex <= currentPrompt.length) {
        setDisplayedText(currentPrompt.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % SAMPLE_QUERIES.length);
        }, 3600);
        return () => clearTimeout(timeout);
      }
    }, 42);

    return () => clearInterval(typingInterval);
  }, [currentIndex, hasInteracted]);

  const activeData = SAMPLE_QUERIES[currentIndex];

  return (
    <div className="w-full max-w-3xl mx-auto my-6 px-4">
      {/* Kokonut-style Glow Container */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative group p-[1.5px] rounded-2xl bg-gradient-to-r from-navy via-brandRed/40 to-navy shadow-xl hover:shadow-glow-red transition-all duration-300"
      >
        <div className="bg-white/95 backdrop-blur-md rounded-[15px] p-4 sm:p-5">
          {/* Top meta strip */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 text-xs">
            <div className="flex items-center gap-2 text-navy font-semibold">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandRed opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brandRed"></span>
              </span>
              <span className="flex items-center gap-1.5 font-display text-[13px]">
                <Bot className="w-3.5 h-3.5 text-brandRed" />
                Next-Gen Healthcare AI & Search Simulator
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-navy/5 text-navy-dark text-[11px] font-medium">
              <Sparkles className="w-3 h-3 text-brandRed" />
              Engine: <span className="font-semibold text-brandRed">{activeData.engine}</span>
            </div>
          </div>

          {/* Search bar input area */}
          <div className="relative flex items-center">
            <div className="absolute left-3.5 text-navy/60">
              <Search className="w-5 h-5 text-brandRed" />
            </div>
            <input
              type="text"
              value={hasInteracted ? customQuery : displayedText}
              onChange={(e) => {
                setHasInteracted(true);
                setCustomQuery(e.target.value);
              }}
              placeholder="Type any patient search e.g. 'Orthopedic surgeon near me'..."
              className="w-full pl-11 pr-28 py-3 bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-sm sm:text-base font-medium text-navy rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
            />
            {isTyping && !hasInteracted && (
              <span className="absolute right-32 w-1.5 h-5 bg-brandRed animate-pulse rounded-full" />
            )}
            <a
              href="#audit"
              className="absolute right-1.5 px-3.5 py-2 bg-navy hover:bg-navy-dark text-white text-xs font-bold font-display rounded-lg flex items-center gap-1 shadow-sm transition-transform active:scale-95"
            >
              <span>Test AI</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* AI Response Card Preview */}
          <AnimatePresence mode="wait">
            <motion.div
              key={hasInteracted ? 'custom' : currentIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mt-3.5 pt-3.5 border-t border-slate-100/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-navy to-navy-dark text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm border border-navy-light">
                  #1
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-navy text-sm">
                      {hasInteracted ? (customQuery ? `Your Practice: ${customQuery}` : "Your Practice") : activeData.doctorResult}
                    </span>
                    <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-[10.5px] border border-emerald-200">
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                      Rank #1 Choice
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5 text-slate-500">
                    <span className="flex items-center gap-1 text-amber-500 font-semibold">
                      <Star className="w-3 h-3 fill-amber-400 stroke-amber-400" />
                      {activeData.rating}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-brandRed" />
                      Immediate 0.8 mi Local Radius
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 text-slate-600">
                <span className="text-[11px] text-navy font-medium">
                  {activeData.insight}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
