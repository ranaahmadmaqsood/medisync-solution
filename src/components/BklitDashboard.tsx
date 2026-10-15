import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AreaChart, Area, BarChart, Bar, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { Activity, TrendingUp, Users, Award, Eye, Calendar, Sparkles, Filter, ChevronRight } from 'lucide-react';

const PATIENT_TRAJECTORY_DATA = [
  { month: 'Month 1', organicSEO: 45, aiSearch: 12, googleMaps: 38, paidAds: 25 },
  { month: 'Month 2', organicSEO: 88, aiSearch: 34, googleMaps: 72, paidAds: 48 },
  { month: 'Month 3', organicSEO: 142, aiSearch: 85, googleMaps: 130, paidAds: 65 },
  { month: 'Month 4', organicSEO: 215, aiSearch: 148, googleMaps: 195, paidAds: 80 },
  { month: 'Month 5', organicSEO: 295, aiSearch: 220, googleMaps: 270, paidAds: 95 },
  { month: 'Month 6', organicSEO: 385, aiSearch: 310, googleMaps: 360, paidAds: 110 },
];

const COMPARISON_BAR_DATA = [
  { metric: 'New Patient Calls', before: 24, after: 108 },
  { metric: 'Online Bookings', before: 11, after: 74 },
  { metric: 'Google Map Visits', before: 85, after: 490 },
  { metric: '5-Star Reviews/Mo', before: 1, after: 18 },
  { metric: 'Search Impressions (k)', before: 4, after: 38 },
];

const RADAR_METRICS_DATA = [
  { subject: 'Local 3-Pack', standard: 30, medisync: 96 },
  { subject: 'AI Overviews (AEO)', standard: 15, medisync: 92 },
  { subject: 'Web Speed / UX', standard: 45, medisync: 98 },
  { subject: 'Review Velocity', standard: 22, medisync: 94 },
  { subject: 'HIPAA Form CVR', standard: 28, medisync: 88 },
  { subject: 'Search Keywords', standard: 35, medisync: 95 },
];

const CAPACITY_CANDLE_DATA = [
  { week: 'Wk 1', minDemand: 18, targetDemand: 28, actualBooked: 32, maxCapacity: 40 },
  { week: 'Wk 2', minDemand: 22, targetDemand: 30, actualBooked: 35, maxCapacity: 40 },
  { week: 'Wk 3', minDemand: 25, targetDemand: 34, actualBooked: 38, maxCapacity: 40 },
  { week: 'Wk 4', minDemand: 30, targetDemand: 38, actualBooked: 40, maxCapacity: 40 },
  { week: 'Wk 5', minDemand: 35, targetDemand: 42, actualBooked: 42, maxCapacity: 45 },
  { week: 'Wk 6', minDemand: 38, targetDemand: 45, actualBooked: 45, maxCapacity: 45 },
];

export const BklitDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'acquisition' | 'comparison' | 'radar' | 'capacity'>('acquisition');
  const [timeRange, setTimeRange] = useState<'30d' | '90d' | '6m'>('6m');

  return (
    <section id="analytics" className="py-20 px-4 sm:px-6 lg:px-8 bg-paper relative overflow-hidden">
      {/* Decorative Brand Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gradient-to-b from-navy/5 via-brandRed/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandRed/10 text-brandRed font-display text-xs font-bold uppercase tracking-wider mb-4">
            <Activity className="w-3.5 h-3.5 text-brandRed" />
            Bklit UI Powered Analytics Engine
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy">
            Real Data. Predictable Patients. <br />
            <span className="text-brandRed">Zero Guesswork.</span>
          </h2>
          <p className="mt-4 text-ink-soft text-base sm:text-lg">
            Built on interactive Bklit & shadcn chart components. Explore how practices transform their local search, AI rankings, and patient volume.
          </p>
        </div>

        {/* Dashboard Shell */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card-hover overflow-hidden">
          {/* Dashboard Control Bar */}
          <div className="p-4 sm:p-6 bg-slate-50/80 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
            {/* Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 text-xs font-bold font-display shadow-sm">
              <button
                onClick={() => setActiveTab('acquisition')}
                className={`px-3.5 py-2 rounded-lg transition-all ${
                  activeTab === 'acquisition'
                    ? 'bg-navy text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy hover:bg-slate-50'
                }`}
              >
                Patient Acquisition
              </button>
              <button
                onClick={() => setActiveTab('comparison')}
                className={`px-3.5 py-2 rounded-lg transition-all ${
                  activeTab === 'comparison'
                    ? 'bg-navy text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy hover:bg-slate-50'
                }`}
              >
                Before vs. After
              </button>
              <button
                onClick={() => setActiveTab('radar')}
                className={`px-3.5 py-2 rounded-lg transition-all ${
                  activeTab === 'radar'
                    ? 'bg-navy text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy hover:bg-slate-50'
                }`}
              >
                Visibility Radar
              </button>
              <button
                onClick={() => setActiveTab('capacity')}
                className={`px-3.5 py-2 rounded-lg transition-all ${
                  activeTab === 'capacity'
                    ? 'bg-navy text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy hover:bg-slate-50'
                }`}
              >
                Clinic Capacity
              </button>
            </div>

            {/* Live Filter Metric */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">Range:</span>
              <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 text-xs font-semibold">
                {(['30d', '90d', '6m'] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => setTimeRange(r)}
                    className={`px-2.5 py-1 rounded transition-colors uppercase ${
                      timeRange === r ? 'bg-brandRed text-white' : 'text-slate-500 hover:text-navy'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* KPI Stat Cards Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 border-b border-slate-100 bg-white">
            <div className="p-4 sm:p-5">
              <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-1">
                <span>Avg. Google Rank</span>
                <Award className="w-4 h-4 text-brandRed" />
              </div>
              <div className="font-display font-black text-2xl sm:text-3xl text-navy">
                #1.2 <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded ml-1">Top 3-Pack</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-1">Across 18 high-intent terms</div>
            </div>

            <div className="p-4 sm:p-5">
              <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-1">
                <span>Monthly Inquiries</span>
                <Users className="w-4 h-4 text-navy" />
              </div>
              <div className="font-display font-black text-2xl sm:text-3xl text-navy">
                +318% <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded ml-1">Verified</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-1">Calls, bookings & form submits</div>
            </div>

            <div className="p-4 sm:p-5">
              <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-1">
                <span>AI Search Citations</span>
                <Sparkles className="w-4 h-4 text-brandRed" />
              </div>
              <div className="font-display font-black text-2xl sm:text-3xl text-navy">
                94.8% <span className="text-xs font-bold text-navy bg-navy/5 px-1.5 py-0.5 rounded ml-1">AEO Score</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-1">ChatGPT, Perplexity & Gemini</div>
            </div>

            <div className="p-4 sm:p-5">
              <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-1">
                <span>Avg. Practice ROI</span>
                <TrendingUp className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="font-display font-black text-2xl sm:text-3xl text-brandRed">
                11.4× <span className="text-xs font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded ml-1">Annualized</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-1">Based on patient lifetime value</div>
            </div>
          </div>

          {/* Interactive Chart Canvas Viewport */}
          <div className="p-5 sm:p-8">
            <AnimatePresence mode="wait">
              {activeTab === 'acquisition' && (
                <motion.div
                  key="acquisition"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6">
                    <div>
                      <h4 className="font-display font-bold text-lg text-navy">
                        Patient Acquisition Trajectory by Channel
                      </h4>
                      <p className="text-xs text-slate-500">
                        Monthly patient appointments generated through MediSync growth engines
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-semibold">
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-navy inline-block" /> SEO
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-brandRed inline-block" /> AI Search (AEO)
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-blue-500 inline-block" /> Google Maps
                      </span>
                    </div>
                  </div>

                  <div className="h-[320px] sm:h-[380px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={PATIENT_TRAJECTORY_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorNavy" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0A2E5C" stopOpacity={0.45}/>
                            <stop offset="95%" stopColor="#0A2E5C" stopOpacity={0.0}/>
                          </linearGradient>
                          <linearGradient id="colorRed" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#D62828" stopOpacity={0.45}/>
                            <stop offset="95%" stopColor="#D62828" stopOpacity={0.0}/>
                          </linearGradient>
                          <linearGradient id="colorMaps" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.35}/>
                            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                        <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} tickLine={false} />
                        <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#071F42',
                            color: '#FFFFFF',
                            borderRadius: '12px',
                            border: 'none',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                            fontSize: '12px'
                          }}
                        />
                        <Area type="monotone" dataKey="organicSEO" name="Healthcare SEO" stroke="#0A2E5C" strokeWidth={3} fillOpacity={1} fill="url(#colorNavy)" />
                        <Area type="monotone" dataKey="aiSearch" name="AI Search (AEO)" stroke="#D62828" strokeWidth={3} fillOpacity={1} fill="url(#colorRed)" />
                        <Area type="monotone" dataKey="googleMaps" name="Google Maps 3-Pack" stroke="#3B82F6" strokeWidth={2.5} fillOpacity={1} fill="url(#colorMaps)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              )}

              {activeTab === 'comparison' && (
                <motion.div
                  key="comparison"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6">
                    <div>
                      <h4 className="font-display font-bold text-lg text-navy">
                        90-Day Practice Transformation Comparison
                      </h4>
                      <p className="text-xs text-slate-500">
                        Baseline results prior to MediSync vs verified numbers after optimization
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-semibold">
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-slate-300 inline-block" /> Before MediSync
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-brandRed inline-block" /> With MediSync Solution
                      </span>
                    </div>
                  </div>

                  <div className="h-[320px] sm:h-[380px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={COMPARISON_BAR_DATA} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                        <XAxis dataKey="metric" stroke="#94A3B8" fontSize={12} tickLine={false} />
                        <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#071F42',
                            color: '#FFFFFF',
                            borderRadius: '12px',
                            border: 'none',
                            fontSize: '12px'
                          }}
                        />
                        <Bar dataKey="before" name="Before MediSync" fill="#CBD5E1" radius={[6, 6, 0, 0]} />
                        <Bar dataKey="after" name="With MediSync" fill="#D62828" radius={[6, 6, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              )}

              {activeTab === 'radar' && (
                <motion.div
                  key="radar"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h4 className="font-display font-bold text-lg text-navy">
                        Practice Digital Authority Radar
                      </h4>
                      <p className="text-xs text-slate-500">
                        Evaluating your practice across 6 critical digital health competitive vectors
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-semibold">
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-slate-300 inline-block" /> Average Local Clinic (32/100)
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-navy inline-block" /> MediSync Optimized (94/100)
                      </span>
                    </div>
                  </div>

                  <div className="h-[320px] sm:h-[380px] w-full flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="75%" data={RADAR_METRICS_DATA}>
                        <PolarGrid stroke="#E2E8F0" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#0A2E5C', fontSize: 11, fontWeight: 600 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#CBD5E1" />
                        <Radar name="Average Clinic" dataKey="standard" stroke="#94A3B8" fill="#94A3B8" fillOpacity={0.2} />
                        <Radar name="MediSync Practice" dataKey="medisync" stroke="#0A2E5C" fill="#D62828" fillOpacity={0.4} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#071F42',
                            color: '#FFFFFF',
                            borderRadius: '12px',
                            border: 'none',
                            fontSize: '12px'
                          }}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              )}

              {activeTab === 'capacity' && (
                <motion.div
                  key="capacity"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6">
                    <div>
                      <h4 className="font-display font-bold text-lg text-navy">
                        Weekly Appointment Capacity Utilization
                      </h4>
                      <p className="text-xs text-slate-500">
                        Eliminating empty doctor schedules and smoothing out patient demand curve
                      </p>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                      98.4% Schedule Fill Rate
                    </span>
                  </div>

                  <div className="h-[320px] sm:h-[380px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={CAPACITY_CANDLE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                        <XAxis dataKey="week" stroke="#94A3B8" fontSize={12} tickLine={false} />
                        <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#071F42',
                            color: '#FFFFFF',
                            borderRadius: '12px',
                            border: 'none',
                            fontSize: '12px'
                          }}
                        />
                        <Bar dataKey="maxCapacity" name="Total Clinic Slots" fill="#E2E8F0" radius={[6, 6, 0, 0]} />
                        <Bar dataKey="actualBooked" name="Actual Patients Booked" fill="#0A2E5C" radius={[6, 6, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Callout inside Dashboard */}
          <div className="p-4 sm:p-5 bg-navy text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-brandRed text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display font-bold text-sm">Want to see your practice's exact numbers?</div>
                <div className="text-xs text-slate-300">We'll scan your Google ranking, GBP health, and local competitors for free.</div>
              </div>
            </div>
            <a
              href="#audit"
              className="px-5 py-2.5 rounded-full bg-brandRed hover:bg-brandRed-hover text-white text-xs font-bold font-display flex items-center gap-1.5 transition-transform active:scale-95 shrink-0"
            >
              Run Free Practice Audit
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
