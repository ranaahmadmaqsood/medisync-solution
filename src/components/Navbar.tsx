import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, Shield, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'See It Work', href: '#compare' },
    { label: 'Analytics', href: '#analytics' },
    { label: 'Solutions', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Specialties', href: '#specialties' },
    { label: 'RCM Billing', href: '#rcm' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-3'
            : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 shrink-0 group">
              <img
                src="/assets/medisync-logo-full.png"
                alt="MediSync Solution Logo"
                className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-1.5 rounded-lg font-display text-xs xl:text-sm font-semibold text-slate-700 hover:text-navy hover:bg-slate-100/80 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Status & CTA Action Button */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Q4 Practice Audits Active</span>
              </div>

              <a
                href="#audit"
                className="px-5 py-2.5 rounded-full bg-brandRed hover:bg-brandRed-hover text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md hover:shadow-glow-red transition-all active:scale-95 cursor-pointer"
              >
                <span>Get Free Audit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-navy hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 p-6 z-40 lg:hidden shadow-2xl space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-display font-semibold text-navy hover:text-brandRed py-2 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#audit"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3.5 rounded-xl bg-brandRed text-white font-display text-center font-bold text-sm uppercase tracking-wider block shadow-md"
          >
            Get Free Practice Growth Audit →
          </a>
        </div>
      )}
    </>
  );
};
