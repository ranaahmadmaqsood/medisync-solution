import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, ShieldCheck, CheckCircle2, ArrowRight, ExternalLink, 
  FileText, Clock, Zap, Phone, Mail, Award, Lock
} from 'lucide-react';

// You can customize this link to your exact Google Form URL
const GOOGLE_FORMS_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc_EXAMPLE_MEDISYNC/viewform";

export const AuditForm: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@medisyncsolution.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="audit" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#041328] text-white relative overflow-hidden">
      {/* Dynamic Animated Radiant Auras */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-[#D62828]/25 via-[#0A2E5C]/40 to-transparent rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#D62828]/20 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#0A2E5C]/60 rounded-full blur-[120px] pointer-events-none -z-0" />

      {/* Subtle Grid Backdrop */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Eyebrow */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-brandRed-soft border border-white/15 text-xs font-bold font-display uppercase tracking-widest mb-6 backdrop-blur-md"
          >
            <Zap className="w-3.5 h-3.5 text-[#D62828]" />
            Fast 60-Second Practice Growth Evaluation
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05] mb-6"
          >
            Will Your Next 50 Patients Book With <br />
            <span className="text-[#D62828] underline decoration-[#D62828]/50 underline-offset-8">You</span> — Or Your Competitor?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Take 60 seconds to submit your practice info via our official Google Form. We’ll analyze your Google 3-Pack, AI search engine citations, and local competitor keyword gaps for free.
          </motion.p>
        </div>

        {/* Masterpiece CTA Command Center Box */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-[#D62828] via-[#0A2E5C] to-[#D62828] shadow-[0_20px_70px_rgba(214,40,40,0.35)]">
          <div className="rounded-[23px] bg-[#071F42]/95 backdrop-blur-xl p-8 sm:p-12 lg:p-16 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: What You Get in Your Audit */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold font-display uppercase tracking-wider text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  14-Point Executive Practice Growth Report
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-white leading-snug">
                  What You Receive In Your Free Audit:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#D62828] text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-md">
                      01
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-white">Google 3-Pack Heatmap</div>
                      <div className="text-xs text-slate-300 mt-1">Geo-grid ranking across your target zip codes vs. top 3 competitors.</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#D62828] text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-md">
                      02
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-white">AI Search (AEO) Citation Score</div>
                      <div className="text-xs text-slate-300 mt-1">How ChatGPT, Perplexity & Google Gemini recommend your clinic.</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#D62828] text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-md">
                      03
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-white">Website Patient Leak Audit</div>
                      <div className="text-xs text-slate-300 mt-1">Mobile speed, conversion drop-offs, and HIPAA booking UX review.</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#D62828] text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-md">
                      04
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-white">Revenue Lift Roadmap</div>
                      <div className="text-xs text-slate-300 mt-1">Projected dollar return on filling your doctor's monthly appointment capacity.</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-3 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-emerald-400" /> Takes 60 Seconds
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Confidential
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-400" /> Zero Obligation
                  </span>
                </div>
              </div>

              {/* Right Column: Google Forms Redirect Command Button */}
              <div className="lg:col-span-5 bg-white/5 rounded-2xl p-7 sm:p-9 border border-white/15 text-center flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-md">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#D62828] to-[#B31E1E] text-white flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(214,40,40,0.5)]">
                  <FileText className="w-8 h-8" />
                </div>

                <h4 className="font-display font-black text-2xl text-white mb-2">
                  Official Audit Request
                </h4>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed max-w-xs">
                  Click the button below to open our Google Form intake in a secure new tab.
                </p>

                {/* THE REDIRECT BUTTON TO GOOGLE FORMS */}
                <a
                  href={GOOGLE_FORMS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group py-4 px-6 rounded-2xl bg-[#D62828] hover:bg-[#B31E1E] text-white font-display font-extrabold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_10px_35px_rgba(214,40,40,0.45)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-white/20"
                >
                  <span>Open Audit Google Form</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <div className="mt-4 text-[11px] text-slate-400 flex items-center gap-1">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>Hosted securely on Google Forms</span>
                </div>

                {/* Direct Concierge Contact Option */}
                <div className="mt-6 pt-5 border-t border-white/10 w-full flex flex-col gap-2 text-xs">
                  <div className="text-slate-400 font-medium">Or prefer direct doctor consultation?</div>
                  <div className="flex items-center justify-center gap-4 text-white font-semibold">
                    <a href="tel:+18005551234" className="hover:text-[#D62828] transition-colors flex items-center gap-1">
                      <Phone className="w-3 h-3 text-[#D62828]" /> (800) 555-1234
                    </a>
                    <span>•</span>
                    <button onClick={handleCopy} className="hover:text-[#D62828] transition-colors flex items-center gap-1 cursor-pointer">
                      <Mail className="w-3 h-3 text-[#D62828]" /> {copied ? 'Copied Email! ✓' : 'hello@medisyncsolution.com'}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
