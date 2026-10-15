import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smile, Heart, Brain, Bone, Sparkles, UserCheck, Droplet, Stethoscope,
  CheckCircle, ArrowRight, TrendingUp, Search
} from 'lucide-react';

const SPECIALTIES = [
  {
    id: 'dental',
    name: 'Dental Practices',
    icon: Smile,
    subtitle: 'High-Value Implant & Cosmetic Demand',
    avgGrowth: '+42% New Patients',
    avgCase: '$850 - $4,200',
    topKeywords: ['emergency dentist near me', 'all on 4 dental implants cost', 'invisalign certified provider'],
    strategy: 'Google 3-Pack domination combined with instant online booking for urgent & elective cases.',
    roiMultiple: '12.4×',
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    icon: Heart,
    subtitle: 'Clinical Authority & Referral Capture',
    avgGrowth: '+28% Consultations',
    avgCase: '$1,400 - $3,800',
    topKeywords: ['top cardiologist near me', 'heart rhythm specialist', 'echocardiogram clinic dallas'],
    strategy: 'Deep condition-specific schema and hospital affiliation trust badges that drive direct patient inquiries.',
    roiMultiple: '14.1×',
  },
  {
    id: 'dermatology',
    name: 'Dermatology & Skin',
    icon: Droplet,
    subtitle: 'Medical & Aesthetic Volume',
    avgGrowth: '+48% Appointment Slots',
    avgCase: '$750 - $2,600',
    topKeywords: ['dermatologist accepting new patients', 'cystic acne treatment specialist', 'mohs surgery clinic'],
    strategy: 'Before/after procedure visual galleries with local geo-tagging and high-intent Google Ads.',
    roiMultiple: '11.8×',
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics & Spine',
    icon: Bone,
    subtitle: 'Surgical & Sports Injury Demand',
    avgGrowth: '+34% Surgical Consults',
    avgCase: '$2,800 - $7,500',
    topKeywords: ['knee replacement surgeon near me', 'sports medicine doctor', 'rotator cuff repair specialist'],
    strategy: 'Targeted injury symptom funnels and second-opinion consultation booking engines.',
    roiMultiple: '15.6×',
  },
  {
    id: 'neurology',
    name: 'Neurology',
    icon: Brain,
    subtitle: 'Patient Education & Specialized Trust',
    avgGrowth: '+26% Patient Volume',
    avgCase: '$1,200 - $3,500',
    topKeywords: ['neurologist for migraines near me', 'neuropathy treatment specialist', 'memory care clinic'],
    strategy: 'AEO generative AI optimization so AI chatbots cite your neurologists as premier local authorities.',
    roiMultiple: '10.5×',
  },
  {
    id: 'mental-health',
    name: 'Mental Health & Psychiatry',
    icon: UserCheck,
    subtitle: 'Trust-First Empathetic Web Intake',
    avgGrowth: '+52% Inflow Capacity',
    avgCase: '$450 - $1,800',
    topKeywords: ['psychiatrist accepting insurance', 'anxiety therapist near me', 'adhd testing clinic'],
    strategy: 'Warm, compassionate digital front doors with discreet HIPAA-compliant online consultation forms.',
    roiMultiple: '9.8×',
  },
  {
    id: 'medspa',
    name: 'Med Spa & Aesthetics',
    icon: Sparkles,
    subtitle: 'Recurring High-LTV Patient Retention',
    avgGrowth: '+64% Monthly Inquiries',
    avgCase: '$950 - $3,400',
    topKeywords: ['botox and fillers special', 'morpheus8 provider near me', 'laser hair removal top rated'],
    strategy: 'Vibrant local Map dominance coupled with retargeting on Meta & Instagram to re-engage recurring clients.',
    roiMultiple: '13.2×',
  },
  {
    id: 'primary-care',
    name: 'Primary Care & Family Medicine',
    icon: Stethoscope,
    subtitle: 'Local Zip Code Household Growth',
    avgGrowth: '+38% Household Inflow',
    avgCase: '$350 - $1,200',
    topKeywords: ['family doctor near me', 'walk-in clinic same day appointment', 'pediatrician accepting new patients'],
    strategy: 'High-frequency local directory syncing, same-day scheduling integration, and family care packages.',
    roiMultiple: '11.0×',
  },
];

export const SpecialtiesGrid: React.FC = () => {
  const [selectedSpec, setSelectedSpec] = useState(SPECIALTIES[0]);

  return (
    <section id="specialties" className="py-24 px-4 sm:px-6 lg:px-8 bg-paper relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/5 text-navy font-display text-xs font-bold uppercase tracking-wider mb-4 border border-navy/10">
            <Stethoscope className="w-3.5 h-3.5 text-brandRed" />
            Specialized Healthcare Systems
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy">
            Tailored Specifically For <br />
            <span className="text-brandRed">Your Medical Discipline.</span>
          </h2>
          <p className="mt-4 text-ink-soft text-base sm:text-lg">
            A dental clinic does not acquire patients like an orthopedic surgery center. We build custom acquisition frameworks for each medical specialty.
          </p>
        </div>

        {/* Specialty Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {SPECIALTIES.map((spec) => {
            const Icon = spec.icon;
            const isSelected = selectedSpec.id === spec.id;
            return (
              <button
                key={spec.id}
                onClick={() => setSelectedSpec(spec)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 border flex items-center gap-3.5 ${
                  isSelected
                    ? 'bg-navy text-white border-brandRed shadow-glow-navy scale-[1.02]'
                    : 'bg-white text-ink border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-brandRed text-white' : 'bg-slate-100 text-navy'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm leading-tight">{spec.name}</div>
                  <div className={`text-[11px] truncate ${isSelected ? 'text-brandRed-soft' : 'text-slate-400'}`}>
                    {spec.avgGrowth}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Specialty Strategic Blueprint Display */}
        <motion.div
          key={selectedSpec.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-card-hover"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-brandRed font-display font-bold text-xs uppercase tracking-wider mb-2">
                <span>{selectedSpec.name} Growth Blueprint</span>
                <span>•</span>
                <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {selectedSpec.avgGrowth}
                </span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-navy mb-3">
                {selectedSpec.subtitle}
              </h3>
              <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-6">
                {selectedSpec.strategy}
              </p>

              {/* Sample patient search keywords */}
              <div className="mb-6">
                <span className="text-xs font-bold font-display uppercase tracking-wider text-slate-400 block mb-2">
                  Sample High-Intent Search Terms Targeted:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedSpec.topKeywords.map((kw, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-navy text-xs font-medium border border-slate-200"
                    >
                      <Search className="w-3 h-3 text-brandRed" />
                      "{kw}"
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#audit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brandRed hover:bg-brandRed-hover text-white text-xs font-bold font-display uppercase tracking-wider shadow-md transition-transform active:scale-95"
              >
                <span>Request {selectedSpec.name} Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right KPI Card */}
            <div className="lg:col-span-5 bg-navy text-white rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-lg border border-navy-light">
              <div className="text-xs font-bold font-display uppercase tracking-wider text-brandRed-soft mb-4">
                Specialty Performance Benchmarks
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-slate-300 text-xs">Average New Patient Growth:</span>
                  <span className="font-display font-extrabold text-lg text-emerald-400">
                    {selectedSpec.avgGrowth}
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-slate-300 text-xs">Typical Patient Treatment Value:</span>
                  <span className="font-display font-bold text-white text-sm">
                    {selectedSpec.avgCase}
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-slate-300 text-xs">Average ROI Multiple:</span>
                  <span className="font-display font-black text-xl text-brandRed">
                    {selectedSpec.roiMultiple}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 text-xs">Google 3-Pack Target:</span>
                  <span className="text-xs font-bold text-white bg-white/10 px-2 py-0.5 rounded">
                    Rank #1 Local Radius
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
