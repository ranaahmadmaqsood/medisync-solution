import React from 'react';
import { Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-dark text-white pt-20 pb-12 border-t border-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="inline-block">
              <img
                src="/assets/medisync-logo-white.png"
                alt="MediSync Solution"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </a>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Digital growth infrastructure built exclusively for doctors, clinics, and healthcare practices — helping you get found, get trusted, and fill your appointment calendar.
            </p>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a href="mailto:medisyncsolution@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-brandRed" />
                <span>medisyncsolution@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-brandRed" />
                <span>Serving Healthcare Practices Nationwide</span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Growth Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#services" className="hover:text-brandRed transition-colors">Healthcare SEO Domination</a></li>
              <li><a href="#services" className="hover:text-brandRed transition-colors">AI Search & AEO Optimization</a></li>
              <li><a href="#services" className="hover:text-brandRed transition-colors">High-Converting Medical Web Design</a></li>
              <li><a href="#services" className="hover:text-brandRed transition-colors">Google Maps 3-Pack & Review Shielding</a></li>
              <li><a href="#services" className="hover:text-brandRed transition-colors">Targeted Google & Meta Patient Ads</a></li>
              <li><a href="#analytics" className="hover:text-brandRed transition-colors">HIPAA-Compliant Analytics & Attribution</a></li>
            </ul>
          </div>

          {/* Specialties Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#specialties" className="hover:text-brandRed transition-colors">Dental & Implants</a></li>
              <li><a href="#specialties" className="hover:text-brandRed transition-colors">Cardiology</a></li>
              <li><a href="#specialties" className="hover:text-brandRed transition-colors">Dermatology & Skin</a></li>
              <li><a href="#specialties" className="hover:text-brandRed transition-colors">Orthopedics & Spine</a></li>
              <li><a href="#specialties" className="hover:text-brandRed transition-colors">Neurology</a></li>
              <li><a href="#specialties" className="hover:text-brandRed transition-colors">Med Spa & Aesthetics</a></li>
              <li><a href="#specialties" className="hover:text-brandRed transition-colors">Mental Health & Primary Care</a></li>
            </ul>
          </div>

          {/* Future / RCM Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white flex items-center gap-2">
              <span>RCM & Billing</span>
              <span className="px-2 py-0.5 rounded-full bg-brandRed text-[10px] font-bold text-white">Coming Soon</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Expanding practice growth into revenue cycle management, denial reduction, and automated claims handling.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#rcm" className="hover:text-brandRed transition-colors">End-to-End Medical Billing</a></li>
              <li><a href="#rcm" className="hover:text-brandRed transition-colors">Automated Denial Appeal Engine</a></li>
              <li><a href="#rcm" className="hover:text-brandRed transition-colors">Prior Authorization & Eligibility</a></li>
            </ul>
            <a
              href="#rcm"
              className="inline-flex items-center gap-1.5 text-xs font-bold font-display text-brandRed hover:text-white transition-colors"
            >
              <span>Join Early Waitlist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Legal & Certifications Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% HIPAA-Compliant Architecture · BAA Agreements Provided · Google & Meta Certified Partner</span>
          </div>
          <div className="flex items-center gap-4">
            <span>© 2026 MediSync Solution. All rights reserved.</span>
            <span>•</span>
            <a href="#home" className="hover:text-white transition-colors">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
