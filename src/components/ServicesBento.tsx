import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bot, Globe, MapPin, Target, BarChart3, Check, ArrowUpRight, Zap, ShieldCheck } from 'lucide-react';

const SERVICES = [
  {
    id: 'seo',
    icon: Search,
    title: 'Healthcare SEO & Search Domination',
    badge: 'Core Engine',
    description: 'Dominate organic search for high-value treatments, symptoms, and surgical procedures in your immediate market.',
    points: ['Condition & treatment authority pages', 'Medical schema markup (physician JSON-LD)', 'Top 3 positions for local high-intent keywords'],
    color: 'from-blue-600/10 to-navy/5',
    borderGlow: 'hover:border-navy/40',
    iconBg: 'bg-navy text-white',
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
  },
  {
    id: 'aeo',
    icon: Bot,
    title: 'AI Search & AEO (Generative Engine Optimization)',
    badge: 'Next-Gen 2026',
    description: 'Ensure your practice is the #1 recommended clinic when patients ask ChatGPT, Google Gemini, and Perplexity for medical care.',
    points: ['AI entity citation architecture', 'Generative answer optimization', 'Semantic medical graph linking'],
    color: 'from-brandRed/10 to-brandRed/5',
    borderGlow: 'hover:border-brandRed/40',
    iconBg: 'bg-brandRed text-white',
    span: 'col-span-1 md:col-span-1 lg:col-span-1',
  },
  {
    id: 'web',
    icon: Globe,
    title: 'High-Converting Medical Websites',
    badge: 'Digital Front Desk',
    description: 'Ultra-fast, mobile-first websites designed specifically to build instant clinical trust and convert visitors into confirmed appointments.',
    points: ['Frictionless 2-click patient booking', 'ADA accessible & HIPAA-ready forms', 'Sub-second 99+ Google PageSpeed score'],
    color: 'from-emerald-500/10 to-teal-500/5',
    borderGlow: 'hover:border-emerald-500/40',
    iconBg: 'bg-emerald-600 text-white',
    span: 'col-span-1 md:col-span-1 lg:col-span-1',
  },
  {
    id: 'local',
    icon: MapPin,
    title: 'Local Google 3-Pack & Review Velocity',
    badge: 'Highest Patient Volume',
    description: 'Own Google Maps in your zip codes. Automate steady 5-star reviews and eliminate bad review fallout with proactive reputation shielding.',
    points: ['Google Business Profile daily optimization', 'Automated post-appointment review SMS', 'Geo-grid local map rank tracking'],
    color: 'from-amber-500/10 to-orange-500/5',
    borderGlow: 'hover:border-amber-500/40',
    iconBg: 'bg-amber-600 text-white',
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
  },
  {
    id: 'ads',
    icon: Target,
    title: 'Precision Healthcare Paid Ads (Google & Meta)',
    badge: 'Immediate Inflow',
    description: 'Capture active patients searching for emergency or elective procedures right now, eliminating wasted budget on irrelevant clicks.',
    points: ['Negative keyword medical filtering', 'Geo-fenced demographic targeting', 'Direct-to-calendar booking funnels'],
    color: 'from-purple-500/10 to-indigo-500/5',
    borderGlow: 'hover:border-purple-500/40',
    iconBg: 'bg-purple-600 text-white',
    span: 'col-span-1 md:col-span-1 lg:col-span-1',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Patient Intelligence & Growth Analytics',
    badge: 'Executive Clarity',
    description: 'Transparent reporting connecting marketing investment directly to booked patients, revenue collected, and cost-per-acquisition.',
    points: ['HIPAA-compliant dynamic call tracking', 'Real-time booking revenue attribution', 'Monthly executive strategy reviews'],
    color: 'from-slate-600/10 to-navy/5',
    borderGlow: 'hover:border-navy/40',
    iconBg: 'bg-navy-dark text-white',
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
  },
];

export const ServicesBento: React.FC = () => {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandRed/10 text-brandRed font-display text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-brandRed" />
            Complete Growth Infrastructure
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy">
            Everything Your Practice Needs To <br />
            <span className="text-brandRed">Dominate Your Market</span>
          </h2>
          <p className="mt-4 text-ink-soft text-base sm:text-lg">
            Built strictly for doctors and healthcare practices. No generic agency fluff — only proven systems engineered to fill your appointment calendar.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, index) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative rounded-3xl p-7 bg-gradient-to-br ${svc.color} bg-white border border-slate-200/90 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between ${svc.span} ${svc.borderGlow}`}
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${svc.iconBg} flex items-center justify-center shadow-md transition-transform group-hover:scale-105`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold font-display uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80">
                      {svc.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-xl text-navy mb-2.5 group-hover:text-brandRed transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-ink-soft text-sm leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2 mb-6">
                    {svc.points.map((pt, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold font-display text-navy group-hover:text-brandRed">
                  <span>Explore Strategy</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* HIPAA Compliance Assurance Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-navy text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-navy-light shadow-md">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-brandRed flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-display font-bold text-sm">100% HIPAA-Compliant & Healthcare Specific</div>
              <div className="text-xs text-slate-300">All marketing channels, patient intake forms, tracking and analytics adhere strictly to BAA guidelines.</div>
            </div>
          </div>
          <a
            href="#audit"
            className="px-5 py-2 bg-white text-navy font-bold font-display text-xs rounded-full hover:bg-slate-100 transition-colors shrink-0"
          >
            Review Security Protocols
          </a>
        </div>
      </div>
    </section>
  );
};
