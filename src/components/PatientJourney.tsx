import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, ShieldCheck, CalendarCheck, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

const JOURNEY_STEPS = [
  {
    step: '01',
    phase: 'Search',
    title: 'The Patient Starts Searching',
    icon: Search,
    patientAction: 'A patient experiences knee pain, needs dental implants, or looks for a child pediatrician in their area.',
    medisyncAction: 'Our keyword & semantic entity architecture captures both traditional Google search & conversational AI queries.',
    metric: '92% of healthcare searches begin online',
    color: 'from-blue-600 to-navy',
  },
  {
    step: '02',
    phase: 'Discover',
    title: 'Google & AI Curate the Shortlist',
    icon: Compass,
    patientAction: 'The patient only reviews the top 3 clinics displayed in the Google Map Pack and top AI citation summary.',
    medisyncAction: 'We place your practice firmly in Position #1 with optimized GBP categories, geo-citations, and local authority.',
    metric: '76% of clicks go to the Google 3-Pack',
    color: 'from-navy to-navy-dark',
  },
  {
    step: '03',
    phase: 'Trust',
    title: 'Instant Clinical Credibility',
    icon: ShieldCheck,
    patientAction: 'The patient checks star ratings, read recent reviews, and evaluates doctor qualifications and treatment ease.',
    medisyncAction: 'Our automated reputation engine streams 5-star verified reviews and provides clear symptom-to-treatment guides.',
    metric: '84% trust online reviews as much as doctor referrals',
    color: 'from-brandRed to-brandRed-hover',
  },
  {
    step: '04',
    phase: 'Act',
    title: 'Frictionless Scheduling',
    icon: CalendarCheck,
    patientAction: 'The patient makes the call or chooses an open appointment time directly from your mobile website.',
    medisyncAction: 'Sub-second page speeds, HIPAA-compliant 2-click booking, and dynamic call routing guarantee zero drop-off.',
    metric: '+318% increase in confirmed bookings',
    color: 'from-emerald-600 to-teal-700',
  },
  {
    step: '05',
    phase: 'Grow',
    title: 'Compounding Retention & Reviews',
    icon: TrendingUp,
    patientAction: 'The patient receives world-class clinical care, receives an automated review SMS, and becomes a loyal advocate.',
    medisyncAction: 'Automated follow-up workflows create an unstoppable loop of new referrals, higher rankings, and revenue.',
    metric: '11.4× average annual practice ROI',
    color: 'from-purple-600 to-navy',
  },
];

export const PatientJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandRed/10 text-brandRed font-display text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brandRed" />
            The Patient Acquisition Funnel
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy">
            From First Search to <span className="text-brandRed">Confirmed Patient.</span>
          </h2>
          <p className="mt-4 text-ink-soft text-base sm:text-lg">
            Understand the psychological roadmap patients follow — and how MediSync optimizes every single touchpoint.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {JOURNEY_STEPS.map((item, index) => {
            const Icon = item.icon;
            const isSelected = activeStep === index;
            return (
              <motion.div
                key={item.step}
                onClick={() => setActiveStep(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 relative flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-navy text-white border-brandRed shadow-glow-navy scale-[1.02]'
                    : 'bg-paper text-ink border-slate-200/80 hover:bg-slate-100 hover:scale-[1.01]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-display font-black text-3xl ${
                        isSelected ? 'text-brandRed' : 'text-slate-300'
                      }`}
                    >
                      {item.step}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isSelected ? 'bg-brandRed text-white' : 'bg-white text-navy shadow-sm'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className={`text-[11px] font-bold font-display uppercase tracking-wider mb-1 ${
                    isSelected ? 'text-brandRed-soft' : 'text-slate-400'
                  }`}>
                    {item.phase}
                  </div>
                  <h3 className={`font-display font-bold text-base mb-3 leading-snug ${
                    isSelected ? 'text-white' : 'text-navy'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${
                    isSelected ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {item.patientAction}
                  </p>
                </div>

                <div className={`mt-5 pt-3 border-t text-[11px] font-semibold ${
                  isSelected ? 'border-white/10 text-emerald-400' : 'border-slate-200 text-brandRed'
                }`}>
                  {item.metric}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Deep Dive Active Card Preview */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brandRed text-white flex items-center justify-center font-black font-display text-lg shrink-0 shadow-sm">
                {JOURNEY_STEPS[activeStep].step}
              </div>
              <div>
                <span className="text-xs font-bold font-display uppercase tracking-wider text-brandRed">
                  MediSync System Optimization · {JOURNEY_STEPS[activeStep].phase}
                </span>
                <h4 className="font-display font-bold text-xl text-navy mt-0.5">
                  How MediSync Secures Step {JOURNEY_STEPS[activeStep].step}: {JOURNEY_STEPS[activeStep].title}
                </h4>
                <p className="text-sm text-ink-soft mt-2 leading-relaxed max-w-2xl">
                  {JOURNEY_STEPS[activeStep].medisyncAction}
                </p>
              </div>
            </div>

            <a
              href="#audit"
              className="px-6 py-3 rounded-full bg-navy hover:bg-navy-dark text-white text-xs font-bold font-display flex items-center gap-2 transition-transform active:scale-95 shrink-0 shadow-sm"
            >
              <span>Audit Your Step {JOURNEY_STEPS[activeStep].step}</span>
              <ArrowRight className="w-4 h-4 text-brandRed" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
