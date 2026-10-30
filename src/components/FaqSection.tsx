import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Search, Sparkles } from 'lucide-react';

const FAQS = [
  {
    q: 'Do you work with solo practitioners or larger multi-location medical groups?',
    a: 'Both. Our systems are built around your medical specialty, local zip code radius, competitive landscape, and patient capacity goals rather than practice size. We support solo surgeons, private boutique clinics, and multi-location regional healthcare networks.',
    category: 'General',
  },
  {
    q: 'Can you redesign our existing medical website without losing our search rankings?',
    a: 'Yes, seamlessly. We execute a comprehensive 1-to-1 301 redirect map, preserve existing high-ranking page equity, and upgrade the technical infrastructure to sub-second load times, mobile-first UX, and modern HIPAA-compliant appointment booking.',
    category: 'Web',
  },
  {
    q: 'What exactly is AI Search Optimization (AEO) and why does it matter?',
    a: 'AI Search Optimization (or Answer Engine Optimization) is the process of structuring your practice data, physician credentials, and medical condition content so generative engines (like ChatGPT, Google Gemini, and Perplexity) directly cite and recommend your practice when patients ask health queries.',
    category: 'AI Search',
  },
  {
    q: 'How fast do practices see movement in Google Local 3-Pack rankings?',
    a: 'Initial velocity typically occurs within 30 to 45 days as Google processes profile category realignments, citation cleanups, and schema deployments. Most practices enter the top 3-pack within 60 to 90 days, followed by sustained compounding growth.',
    category: 'Local SEO',
  },
  {
    q: 'Is MediSync fully HIPAA compliant with patient data and call tracking?',
    a: 'Absolutely. We provide signed Business Associate Agreements (BAAs). All call tracking, online scheduling forms, patient intake workflows, and analytics are encrypted end-to-end and adhere strictly to HIPAA guidelines.',
    category: 'Compliance',
  },
  {
    q: 'Do we need to buy all of your services at once, or can we start targeted?',
    a: 'You do not need everything on day one. Our free Growth Audit identifies the single highest-value bottleneck costing you patients right now (whether that is Google Maps visibility, website drop-off, or lack of reviews). We fix the highest ROI lever first.',
    category: 'General',
  },
  {
    q: 'How do we get started with MediSync?',
    a: 'Simply request your Free Practice Growth Audit below. Our medical growth analysts will evaluate your local competition, current search rankings, and patient capture rate, presenting you with a clear roadmap in 24 hours.',
    category: 'General',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandRed/10 text-brandRed font-display text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-brandRed" />
            Frequently Asked Questions
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy">
            Clear Answers Before <br />
            <span className="text-brandRed">You Get Started.</span>
          </h2>
          <p className="mt-4 text-ink-soft text-base">
            Everything you need to know about partnering with MediSync to scale your medical practice.
          </p>
        </div>

        {/* Live Search Filter */}
        <div className="relative mb-8">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. 'AI', 'HIPAA', 'Google Maps', 'Website')..."
            className="w-full pl-11 pr-4 py-3 bg-paper rounded-2xl border border-slate-200 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-navy/20 focus:bg-white transition-all"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm transition-all hover:border-slate-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-navy pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-brandRed text-white rotate-180' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-ink-soft leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-10 text-sm text-slate-400">
              No questions found matching "{searchQuery}". Email us directly at medisyncsolution@gmail.com!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
