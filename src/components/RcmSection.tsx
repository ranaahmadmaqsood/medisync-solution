import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ShieldAlert, CheckCircle, CreditCard, Sparkles, ArrowRight, Clock, Bell } from 'lucide-react';
import confetti from 'canvas-confetti';

const RCM_FEATURES = [
  { name: 'End-to-End Medical Billing', desc: 'Accelerate clean claims submission to 98.4%' },
  { name: 'Proactive Denial Management', desc: 'Automated appeal workflows & root-cause audits' },
  { name: 'Prior Authorization & Eligibility', desc: 'Real-time 30-second patient benefit verification' },
  { name: 'Certified Medical Coding (ICD-10)', desc: 'Maximizing reimbursement without audit risks' },
  { name: 'Patient Payment Portals', desc: 'Frictionless digital co-pay & balance collection' },
  { name: 'Full Revenue Cycle Intelligence', desc: 'Days in A/R reduction down to under 26 days' },
];

export const RcmSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsJoined(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#D62828', '#0A2E5C', '#10B981']
    });
  };

  return (
    <section id="rcm" className="py-24 px-4 sm:px-6 lg:px-8 bg-paper relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl bg-navy text-white p-8 sm:p-14 overflow-hidden border border-navy-light shadow-2xl">
          {/* Futuristic Ribbon */}
          <div className="absolute top-8 right-[-50px] bg-brandRed text-white font-display font-extrabold text-[11px] uppercase tracking-widest py-1.5 px-16 rotate-45 shadow-lg">
            Coming Soon 2026
          </div>

          {/* Background glowing orbs */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brandRed/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brandRed-soft font-display text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-brandRed" />
                The Next Frontier of Healthcare Operations
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                Medical Billing & <br />
                <span className="text-brandRed">Revenue Cycle Management (RCM)</span>
              </h2>
              <p className="mt-4 text-slate-300 text-base leading-relaxed max-w-xl">
                MediSync is expanding from patient acquisition to complete practice financial health. Eliminate denied claims, reduce A/R days, and ensure every patient booked is paid in full.
              </p>

              {/* RCM Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8">
                {RCM_FEATURES.map((item, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-brandRed text-white flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-xs text-white leading-tight">{item.name}</div>
                      <div className="text-[11px] text-slate-300 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card: Waitlist Intake */}
            <div className="lg:col-span-5 bg-white text-navy rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold font-display uppercase tracking-wider text-brandRed mb-2">
                <Bell className="w-4 h-4 text-brandRed" />
                Early Access Priority
              </div>
              <h3 className="font-display font-black text-2xl text-navy">
                Join the Private RCM Beta
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-6 leading-relaxed">
                Be the first practice in your specialty to integrate MediSync’s next-gen billing & denial prevention engine.
              </p>

              {isJoined ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center">
                  <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="font-display font-bold text-sm">You are on the VIP Waitlist!</div>
                  <div className="text-xs text-emerald-700 mt-1">We’ll notify you when the initial beta cohort opens for your specialty.</div>
                </div>
              ) : (
                <form onSubmit={handleJoin} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-display">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="doctor@practice.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:bg-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-brandRed hover:bg-brandRed-hover text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md"
                  >
                    <span>Request Early Beta Access</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    Launching Q1 2026 · Limited to 50 clinics
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
