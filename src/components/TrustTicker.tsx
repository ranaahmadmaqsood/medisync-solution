import React from 'react';
import { Activity, ShieldCheck, CheckCircle2, Award, Sparkles } from 'lucide-react';

const TRUST_ITEMS = [
  'Healthcare-Only Digital Growth',
  'Google Business Profile #1 Specialists',
  'AI Search & Generative Engine Optimization (AEO)',
  '100% HIPAA-Compliant Architecture',
  'Sub-Second Medical Web Speed',
  'Transparent Revenue & ROI Attribution',
  'Physician Reputation & Review Shielding',
  'Zero Long-Term Lock-in Contracts',
];

export const TrustTicker: React.FC = () => {
  return (
    <div className="w-full bg-[#071F42] text-white border-y border-[#0A2E5C] py-4 overflow-hidden select-none relative">
      {/* Animated Medical ECG Heartbeat SVG Background Line */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none overflow-hidden h-12 flex items-center">
        <svg className="w-full h-8" viewBox="0 0 1200 40" fill="none" preserveAspectRatio="none">
          <path
            d="M0 20 L200 20 L220 5 L230 35 L245 10 L255 25 L265 20 L500 20 L520 5 L530 35 L545 10 L555 25 L565 20 L800 20 L820 5 L830 35 L845 10 L855 25 L865 20 L1200 20"
            stroke="#D62828"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ecg-line"
          />
        </svg>
      </div>

      <div className="flex items-center gap-8 whitespace-nowrap animate-marquee relative z-10">
        {[...TRUST_ITEMS, ...TRUST_ITEMS].map((item, index) => (
          <div key={index} className="inline-flex items-center gap-3 text-xs font-display font-bold uppercase tracking-wider text-slate-300">
            <span className="w-2 h-2 rounded-full bg-[#D62828] shadow-[0_0_8px_#D62828] shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
