import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, AlertOctagon, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

const WITHOUT_POINTS = [
  'Buried on Page 2+ of Google Maps where 88% of patients never look',
  'Incomplete, unverified Google Business Profile losing trust instantly',
  'Website visitors bounce due to slow loading and no direct online booking',
  'Sparse, unmanaged patient reviews allowing competitors to dominate the 3-Pack',
  'Managing 4 separate disconnected agencies with zero accountability',
  'Zero presence in next-gen AI search answers (ChatGPT, Perplexity & Gemini)',
];

const WITH_POINTS = [
  'Dominating Position #1 on Google Local 3-Pack for your specialty zip codes',
  'Fully optimized Google Business Profile with active posts, Q&A & appointment links',
  'Sub-second medical website turning 14%+ of visitors into scheduled consults',
  'Automated review capture system collecting 15+ verified 5-star reviews every month',
  'One dedicated healthcare growth partner handling search, web, ads & analytics',
  'Optimized AEO schema ensuring your doctors are recommended by AI assistants',
];

export const WithoutWith: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'without' | 'with'>('both');

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandRed/10 text-brandRed font-display text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brandRed" />
            The Definitive Difference
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy">
            Same Medical Practice. <br />
            <span className="text-brandRed">Two Radically Different Futures.</span>
          </h2>
          <p className="mt-3 text-ink-soft text-base">
            See the concrete reality of continuing with fragmented marketing versus deploying MediSync's proven growth infrastructure.
          </p>
        </div>

        {/* Interactive Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: WITHOUT MEDISYNC */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-7 sm:p-9 bg-white border-2 border-red-200/90 shadow-sm relative overflow-hidden"
          >
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-red-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-red-950">Without MediSync</h3>
                  <div className="text-xs text-red-500 font-medium">Invisible, leaking patient inquiries</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold border border-red-200">
                Losing ~$180k/yr
              </span>
            </div>

            <ul className="space-y-4">
              {WITHOUT_POINTS.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-600 leading-snug">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="w-3.5 h-3.5" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-red-50/60 border border-red-100 text-xs text-red-800 flex items-center gap-2">
              <AlertOctagon className="w-4 h-4 text-red-600 shrink-0" />
              <span>Result: Patients in your neighborhood book with your competitors instead.</span>
            </div>
          </motion.div>

          {/* Card 2: WITH MEDISYNC */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-7 sm:p-9 bg-navy text-white border-2 border-navy-light shadow-card-hover relative overflow-hidden"
          >
            {/* Background radiant aura */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brandRed/25 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brandRed text-white flex items-center justify-center font-bold shadow-md">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">With MediSync Solution</h3>
                  <div className="text-xs text-brandRed-soft font-medium">Rank #1, automated patient flow</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                +318% Growth
              </span>
            </div>

            <ul className="space-y-4">
              {WITH_POINTS.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-200 leading-snug">
                  <span className="w-5 h-5 rounded-full bg-brandRed text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-white/10 border border-white/15 text-xs text-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>One strategy. One partner. Total local market ownership.</span>
              </div>
              <a href="#audit" className="font-bold text-white hover:text-brandRed flex items-center gap-1 shrink-0">
                <span>Join</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
