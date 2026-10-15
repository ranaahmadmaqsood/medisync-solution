import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

const NOTIFICATIONS = [
  { doctor: 'Dr. Robert K.', clinic: 'Orthopedic Spine Center', city: 'Dallas, TX', action: 'Requested Practice Growth Audit', time: '2m ago' },
  { doctor: 'Dr. Sarah M.', clinic: 'Premier Pediatric Dental', city: 'Atlanta, GA', action: 'Claimed Local Google 3-Pack Blueprint', time: '5m ago' },
  { doctor: 'Dr. Anthony T.', clinic: 'Cardiology Associates', city: 'Miami, FL', action: 'Initiated AI Search Optimization', time: '9m ago' },
  { doctor: 'Dr. Jessica L.', clinic: 'Aesthetic Dermatology', city: 'Denver, CO', action: 'Joined RCM Early Beta Waitlist', time: '14m ago' },
];

export const LiveToast: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show after initial delay
    const initialTimer = setTimeout(() => setVisible(true), 3500);

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
        setVisible(true);
      }, 800);
    }, 11000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed) return null;

  const current = NOTIFICATIONS[index];

  return (
    <div className="fixed bottom-5 left-5 z-40 max-w-sm pointer-events-auto">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="p-3.5 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-xl flex items-center justify-between gap-3 text-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-bold text-navy">{current.doctor}</span>
                  <span className="text-[10px] text-slate-400">• {current.time}</span>
                </div>
                <div className="text-[11px] text-ink-soft leading-tight">
                  {current.action}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  {current.clinic} · {current.city}
                </div>
              </div>
            </div>

            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss notification"
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
