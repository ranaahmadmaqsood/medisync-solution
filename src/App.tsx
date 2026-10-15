import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PracticeRadar } from './components/PracticeRadar';
import { TrustTicker } from './components/TrustTicker';
import { BklitDashboard } from './components/BklitDashboard';
import { RoiCalculator } from './components/RoiCalculator';
import { ServicesBento } from './components/ServicesBento';
import { WithoutWith } from './components/WithoutWith';
import { PatientJourney } from './components/PatientJourney';
import { SpecialtiesGrid } from './components/SpecialtiesGrid';
import { CaseStudies } from './components/CaseStudies';
import { RcmSection } from './components/RcmSection';
import { FaqSection } from './components/FaqSection';
import { AuditForm } from './components/AuditForm';
import { Footer } from './components/Footer';
import { LiveToast } from './components/LiveToast';

export function App() {
  return (
    <div id="home" className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-[#D62828] selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Masterpiece (Anime.js Canvas + AI Search Simulator + Compare Slider) */}
      <Hero />

      {/* Live Market Local Radar Scanner */}
      <PracticeRadar />

      {/* Infinite Trust Marquee with ECG Pulse */}
      <TrustTicker />

      {/* Bklit UI Recharts Analytics Engine */}
      <BklitDashboard />

      {/* Kokonut UI Practice Growth & ROI Simulator */}
      <RoiCalculator />

      {/* Kokonut UI 3D Animated Bento Grid */}
      <ServicesBento />

      {/* Without vs With MediSync Transformation */}
      <WithoutWith />

      {/* 5-Step Patient Acquisition Funnel */}
      <PatientJourney />

      {/* Healthcare Specialties Grid & Strategic Blueprints */}
      <SpecialtiesGrid />

      {/* Verified Doctor Case Studies & Outcomes */}
      <CaseStudies />

      {/* Futuristic RCM & Medical Billing Module */}
      <RcmSection />

      {/* Searchable FAQ Accordion */}
      <FaqSection />

      {/* Masterpiece Google Forms Audit Command Center */}
      <AuditForm />

      {/* Brand Footer */}
      <Footer />

      {/* Live Social Proof Toast */}
      <LiveToast />
    </div>
  );
}

export default App;
