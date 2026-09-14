import React, { useState, useEffect } from 'react';
import { Sparkles, X, Gift } from 'lucide-react';

export const LaunchAnnouncementBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Check if banner was previously dismissed in local storage to respect user preferences
  useEffect(() => {
    const isDismissed = localStorage.getItem('researcho_launch_banner_dismissed');
    if (isDismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('researcho_launch_banner_dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div
      id="website-launch-announcement-banner"
      className="relative z-50 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white px-4 py-3 sm:py-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center border-b border-indigo-950 transition-all duration-300"
    >
      {/* Sparkle icons & text */}
      <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-wide">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/25 text-amber-300 border border-amber-400/40 text-[10px] font-bold uppercase tracking-wider animate-pulse">
          <Sparkles className="w-3 h-3 text-amber-300" />
          Official Launch
        </span>
        <span className="text-slate-300 text-xs sm:text-sm font-medium">
          🎉 Welcome to <strong className="text-white font-bold">Researcho by IITians</strong>! We are live from Ganesh Chaturthi (14 September 2026).
        </span>
      </div>

      <div className="flex items-center justify-center gap-3">
        {/* Additional launch offer highlight */}
        <div className="hidden md:flex items-center gap-1.5 text-xs text-amber-300 font-medium bg-white/5 px-2.5 py-0.5 rounded-md border border-white/10">
          <Gift className="w-3.5 h-3.5 text-amber-400" />
          <span>Launch Offer active across courses!</span>
        </div>

        {/* Small Action Link */}
        <a
          href="#explore-academy"
          onClick={(e) => {
            e.preventDefault();
            const academySec = document.getElementById('academy-section') || document.getElementById('featured-course');
            if (academySec) {
              try {
                academySec.scrollIntoView({ behavior: 'smooth' });
              } catch {
                academySec.scrollIntoView();
              }
            }
          }}
          className="text-[11px] sm:text-xs font-bold text-white underline hover:text-amber-300 transition-colors cursor-pointer"
        >
          Explore Courses
        </a>
      </div>

      {/* Dismiss Button */}
      <button
        type="button"
        onClick={handleDismiss}
        className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
        aria-label="Dismiss launch announcement"
        title="Dismiss"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
