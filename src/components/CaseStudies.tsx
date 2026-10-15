import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, TrendingUp, CheckCircle, Quote, ArrowRight, ChevronLeft, ChevronRight, MapPin, Building } from 'lucide-react';

const CASE_STUDIES = [
  {
    doctor: 'Dr. Marcus Vance, DDS',
    role: 'Founder & Lead Surgeon',
    clinic: 'Vance Family Dental & Implants',
    location: 'Dallas, TX',
    specialty: 'Dental & Cosmetic Implants',
    quote: 'Before MediSync, we were spending thousands on agencies that couldn’t explain where the money went while our chairs were empty on Thursdays. Within 90 days with MediSync, we ranked #1 on Google Maps for full-arch implants and our new patient volume tripled.',
    stats: [
      { label: 'Patient Calls / Mo', before: '14 calls', after: '68 calls', change: '+385%' },
      { label: 'Google Search Rank', before: 'Page 3 (#24)', after: 'Position #1', change: 'Top 3-Pack' },
      { label: '5-Star Reviews', before: '9 reviews', after: '194 reviews', change: '4.9 ★ Rating' },
      { label: 'Added Annual Revenue', before: '$0 baseline', after: '+$310,000', change: '12.4× ROI' },
    ],
  },
  {
    doctor: 'Dr. Aris Thorne, MD, FACC',
    role: 'Managing Partner',
    clinic: 'Lone Star Heart & Vascular Clinic',
    location: 'Houston, TX',
    specialty: 'Cardiology',
    quote: 'Hospital systems used to monopolize all local patient searches in our county. MediSync implemented medical schema and generative AI search optimization. Now, ChatGPT, Google Gemini, and local map searches recommend our clinic first for specialized arrhythmia care.',
    stats: [
      { label: 'Consult Inquiries / Mo', before: '18 inquiries', after: '52 inquiries', change: '+188%' },
      { label: 'AI Search Citation', before: '0% presence', after: '96% cited', change: 'AEO Verified' },
      { label: 'Website Conversion Rate', before: '1.2%', after: '6.8%', change: '5.6× lift' },
      { label: 'Added Annual Revenue', before: '$0 baseline', after: '+$420,000', change: '15.2× ROI' },
    ],
  },
  {
    doctor: 'Dr. Elena Rostova, MD',
    role: 'Chief of Orthopedic Surgery',
    clinic: 'Apex Spine & Sports Medicine',
    location: 'Austin, TX',
    specialty: 'Orthopedics & Spine Care',
    quote: 'We were burning over $6,500 every month on pay-per-click ads with high bounce rates and unqualified clicks. MediSync revamped our patient landing funnels and organic search. Our cost per booked surgical consultation dropped by 58% in 60 days.',
    stats: [
      { label: 'Surgical Consults / Mo', before: '12 consults', after: '38 consults', change: '+216%' },
      { label: 'Cost Per Acquisition', before: '$340 / lead', after: '$110 / lead', change: '-68% CPA' },
      { label: 'Google 3-Pack Zip Codes', before: '1 zip code', after: '8 zip codes', change: 'Regional #1' },
      { label: 'Added Annual Revenue', before: '$0 baseline', after: '+$560,000', change: '16.8× ROI' },
    ],
  },
];

export const CaseStudies: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = CASE_STUDIES[currentIndex];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);

  return (
    <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandRed/10 text-brandRed font-display text-xs font-bold uppercase tracking-wider mb-4">
              <Star className="w-3.5 h-3.5 text-brandRed fill-brandRed" />
              Verified Doctor Outcomes
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy">
              Proven Results For <br />
              <span className="text-brandRed">Real Medical Practices.</span>
            </h2>
          </div>

          {/* Slider Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous case study"
              className="w-12 h-12 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-navy transition-colors shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next case study"
              className="w-12 h-12 rounded-full bg-navy hover:bg-navy-dark text-white flex items-center justify-center transition-colors shadow-md active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 text-brandRed" />
            </button>
          </div>
        </div>

        {/* Case Study Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-paper border border-slate-200/90 p-7 sm:p-10 shadow-card-hover"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Quote & Doctor Bio */}
              <div className="lg:col-span-7">
                {/* Clinic Header Strip */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 mb-4">
                  <span className="px-3 py-1 rounded-full bg-navy text-white font-display text-[11px] font-bold">
                    {current.specialty}
                  </span>
                  <span className="flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-navy" />
                    {current.clinic}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-brandRed" />
                    {current.location}
                  </span>
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="w-10 h-10 text-brandRed/20 absolute -top-4 -left-3 -z-0" />
                  <p className="font-display font-medium text-lg sm:text-xl text-navy leading-relaxed relative z-10 italic">
                    "{current.quote}"
                  </p>
                </div>

                {/* Doctor Bio */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy to-navy-dark text-white font-extrabold font-display flex items-center justify-center text-base shadow-sm border-2 border-brandRed/30">
                    {current.doctor.split(' ')[1]?.[0] || 'D'}
                  </div>
                  <div>
                    <div className="font-display font-bold text-navy text-base">{current.doctor}</div>
                    <div className="text-xs text-ink-soft">{current.role} · {current.clinic}</div>
                  </div>
                </div>
              </div>

              {/* Right Stats Grid */}
              <div className="lg:col-span-5 bg-navy text-white rounded-2xl p-6 sm:p-7 shadow-lg border border-navy-light relative overflow-hidden">
                <div className="text-xs font-bold font-display uppercase tracking-wider text-brandRed-soft mb-4 flex items-center justify-between">
                  <span>Verified 90-Day Metrics</span>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {current.stats.map((s, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[11px] text-slate-300 font-medium">{s.label}</div>
                      <div className="font-display font-black text-xl text-white mt-1">
                        {s.after}
                      </div>
                      <div className="flex items-center justify-between text-[10.5px] mt-1 pt-1 border-t border-white/10">
                        <span className="text-slate-400 line-through">{s.before}</span>
                        <span className="text-emerald-400 font-bold">{s.change}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#audit"
                  className="mt-5 w-full py-2.5 px-4 rounded-xl bg-brandRed hover:bg-brandRed-hover text-white text-xs font-bold font-display uppercase tracking-wider flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-sm"
                >
                  <span>Get Similar Results For Your Practice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
