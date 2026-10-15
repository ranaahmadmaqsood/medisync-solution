import React, { useState, useId } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, TrendingUp, Users, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

const SPECIALTY_PRESETS = [
  { name: 'Dental Practice', avgValue: 650, defaultPatients: 120, growthFactor: 0.35 },
  { name: 'Cardiology / Specialty', avgValue: 1200, defaultPatients: 80, growthFactor: 0.28 },
  { name: 'Dermatology & Skin', avgValue: 850, defaultPatients: 140, growthFactor: 0.38 },
  { name: 'Orthopedic Clinic', avgValue: 2400, defaultPatients: 65, growthFactor: 0.30 },
  { name: 'Med Spa & Aesthetics', avgValue: 950, defaultPatients: 95, growthFactor: 0.45 },
  { name: 'Primary Care / Family', avgValue: 350, defaultPatients: 220, growthFactor: 0.32 },
  { name: 'Mental Health Practice', avgValue: 480, defaultPatients: 75, growthFactor: 0.40 },
];

export const RoiCalculator: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState(SPECIALTY_PRESETS[0]);
  const [monthlyPatients, setMonthlyPatients] = useState(selectedSpecialty.defaultPatients);
  const [patientValue, setPatientValue] = useState(selectedSpecialty.avgValue);

  const specialtySelectId = useId();
  const monthlyPatientsId = useId();
  const patientValueId = useId();

  // Calculations
  const newPatientsPerMonth = Math.round(monthlyPatients * selectedSpecialty.growthFactor);
  const monthlyRevenueLift = newPatientsPerMonth * patientValue;
  const annualRevenueLift = monthlyRevenueLift * 12;
  const estimatedRoiMultiple = ((monthlyRevenueLift / 2500)).toFixed(1);

  const handleSpecialtyChange = (specName: string) => {
    const found = SPECIALTY_PRESETS.find(s => s.name === specName);
    if (found) {
      setSelectedSpecialty(found);
      setMonthlyPatients(found.defaultPatients);
      setPatientValue(found.avgValue);
    }
  };

  return (
    <section id="roi-calculator" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/5 text-navy font-display text-xs font-bold uppercase tracking-wider mb-4 border border-navy/10">
            <Calculator className="w-3.5 h-3.5 text-brandRed" />
            Kokonut UI Practice Growth Simulator
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy">
            Calculate Your Practice’s <br />
            <span className="text-brandRed">Revenue Lift Potential</span>
          </h2>
          <p className="mt-3 text-ink-soft text-sm sm:text-base">
            Adjust the sliders below to see what capturing top local & AI search positions generates for your clinic.
          </p>
        </div>

        {/* Kokonut-styled Interactive Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-paper rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-card-hover">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Specialty Selector */}
            <div>
              <label htmlFor={specialtySelectId} className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 font-display">
                Select Your Specialty
              </label>
              <select
                id={specialtySelectId}
                value={selectedSpecialty.name}
                onChange={(e) => handleSpecialtyChange(e.target.value)}
                className="w-full bg-white border border-slate-200 text-navy font-semibold text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navy/20 cursor-pointer shadow-sm"
              >
                {SPECIALTY_PRESETS.map((spec) => (
                  <option key={spec.name} value={spec.name}>
                    {spec.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Slider 1: Monthly Patients */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={monthlyPatientsId} className="text-xs font-bold uppercase tracking-wider text-slate-500 font-display">
                  Current Monthly Patients
                </label>
                <span className="font-display font-extrabold text-lg text-navy">
                  {monthlyPatients} <span className="text-xs font-normal text-slate-400">pts/mo</span>
                </span>
              </div>
              <input
                id={monthlyPatientsId}
                type="range"
                min="20"
                max="500"
                step="5"
                value={monthlyPatients}
                onChange={(e) => setMonthlyPatients(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brandRed"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>20 pts</span>
                <span>250 pts</span>
                <span>500 pts</span>
              </div>
            </div>

            {/* Slider 2: Patient Lifetime Value */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={patientValueId} className="text-xs font-bold uppercase tracking-wider text-slate-500 font-display">
                  Avg. Patient Value / Treatment ($)
                </label>
                <span className="font-display font-extrabold text-lg text-brandRed">
                  ${patientValue.toLocaleString()}
                </span>
              </div>
              <input
                id={patientValueId}
                type="range"
                min="150"
                max="4500"
                step="50"
                value={patientValue}
                onChange={(e) => setPatientValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-navy"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>$150</span>
                <span>$2,500</span>
                <span>$4,500</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Sparkles className="w-4 h-4 text-brandRed shrink-0" />
              <span>Conservative projection based on MediSync’s historical 32% - 45% local demand capture.</span>
            </div>
          </div>

          {/* Projected Outcome Card (Kokonut Dial / Glass Panel) */}
          <div className="lg:col-span-5">
            <motion.div
              layout
              className="bg-navy text-white rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-xl border border-navy-light"
            >
              {/* Radial gradient glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-brandRed/30 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-bold font-display uppercase tracking-wider text-brandRed-soft">
                  Projected Return
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-brandRed text-white text-[11px] font-bold">
                  {estimatedRoiMultiple}× ROI Multiple
                </span>
              </div>

              {/* Annual Number Hero */}
              <div className="my-6">
                <div className="text-xs text-slate-300 font-medium">Estimated Annual Revenue Lift</div>
                <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mt-1 flex items-baseline gap-1">
                  <span className="text-brandRed">+</span>
                  ${annualRevenueLift.toLocaleString()}
                </div>
                <div className="text-xs text-emerald-400 font-semibold mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  +${monthlyRevenueLift.toLocaleString()} new billing per month
                </div>
              </div>

              {/* Patient Breakdown */}
              <div className="space-y-3 bg-white/5 rounded-xl p-4 border border-white/10 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-brandRed" />
                    New Patients / Month:
                  </span>
                  <span className="font-bold text-white font-display text-sm">
                    +{newPatientsPerMonth} patients
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    Google 3-Pack Target:
                  </span>
                  <span className="font-bold text-white">Position #1</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-brandRed" />
                    New Patient Inflow Value:
                  </span>
                  <span className="font-bold text-white">${monthlyRevenueLift.toLocaleString()} / mo</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#audit"
                className="mt-6 w-full py-3 px-4 rounded-xl bg-brandRed hover:bg-brandRed-hover text-white text-xs font-bold font-display uppercase tracking-wider flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md"
              >
                <span>Claim This Growth For Your Practice</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
