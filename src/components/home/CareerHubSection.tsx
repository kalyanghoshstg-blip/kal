import React, { useState, useRef, useEffect } from 'react';
import { 
  GraduationCap, 
  Compass, 
  Globe, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { CAREER_PROGRAMS } from '../../data/researchData';
import { PageView } from '../../types';

interface CareerHubSectionProps {
  onNavigate: (view: PageView, anchorId?: string) => void;
  onOpenConsultation: (programTitle?: string, projectType?: string) => void;
}

export const CareerHubSection: React.FC<CareerHubSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const getProgramIcon = (cat: string) => {
    switch (cat) {
      case 'Academic Guidance': return <BookOpen className="w-5 h-5 text-blue-600" />;
      case 'PhD Guidance': return <GraduationCap className="w-5 h-5 text-indigo-600" />;
      case 'International Research': return <Globe className="w-5 h-5 text-emerald-600" />;
      case 'Industry Careers': return <Briefcase className="w-5 h-5 text-sky-600" />;
      default: return <Compass className="w-5 h-5 text-blue-600" />;
    }
  };

  // Check scroll bounds to enable/disable arrow controls
  const checkScrollBounds = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollBounds();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollBounds, { passive: true });
      return () => el.removeEventListener('scroll', checkScrollBounds);
    }
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 380; // approximate card width + gap
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="career-hub" className="py-10 sm:py-14 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2.5 border border-blue-200/60">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            Empowering Scientific Trajectories
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Research Career Hub
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
            Strategic mentoring for B.Sc., M.Sc., B.Pharm, M.Pharm, B.Tech, and PhD scholars transitioning toward premier doctoral, postdoctoral, and industrial biotechnology R&D roles.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-slate-700">
            <span className="bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-xs">M.Sc. → PhD</span>
            <span className="text-slate-300">•</span>
            <span className="bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-xs">B.Tech → MS/PhD</span>
            <span className="text-slate-300">•</span>
            <span className="bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-xs">M.Pharm → PhD</span>
            <span className="text-slate-300">•</span>
            <span className="bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-xs">Postdoc Abroad</span>
            <span className="text-slate-300">•</span>
            <span className="bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-xs">Pharma & Biotech R&D</span>
          </div>
        </div>

        {/* Carousel Header Bar with Arrow Controls */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Career Trajectories & Programs
            </span>
            <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold">
              {CAREER_PROGRAMS.length} Pathways
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200 shadow-xs">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll career programs left"
              className={`p-2 rounded-lg transition-all duration-200 cursor-pointer ${
                canScrollLeft 
                  ? 'bg-slate-50 text-slate-800 hover:bg-blue-600 hover:text-white active:scale-95 shadow-xs' 
                  : 'text-slate-300 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll career programs right"
              className={`p-2 rounded-lg transition-all duration-200 cursor-pointer ${
                canScrollRight 
                  ? 'bg-slate-50 text-slate-800 hover:bg-blue-600 hover:text-white active:scale-95 shadow-xs' 
                  : 'text-slate-300 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Single-Line Animated Carousel Viewport */}
        <div className="relative group">
          {/* Left Edge Floating Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => handleScroll('left')}
              aria-label="Previous career pathways"
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-slate-200 items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Right Edge Floating Arrow */}
          {canScrollRight && (
            <button
              onClick={() => handleScroll('right')}
              aria-label="Next career pathways"
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-slate-200 items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Horizontal Single-Line Scrollable Track */}
          <div
            ref={scrollContainerRef}
            className="flex flex-nowrap gap-4 sm:gap-5 overflow-x-auto pb-3 pt-1 px-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {CAREER_PROGRAMS.map((prog) => (
              <div
                key={prog.id}
                className="w-[290px] sm:w-[330px] md:w-[350px] shrink-0 snap-start bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group/card"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center group-hover/card:scale-105 transition-transform">
                      {getProgramIcon(prog.category)}
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-50 text-slate-700 border border-slate-200">
                      {prog.category}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 leading-snug group-hover/card:text-blue-600 transition-colors">
                    {prog.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">
                    {prog.summary}
                  </p>

                  {/* Target Audience pills */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {prog.targetAudience.map((aud, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-medium border border-blue-200/60"
                      >
                        {aud}
                      </span>
                    ))}
                  </div>

                  {/* Key offerings */}
                  <div className="space-y-1.5 text-[11px] text-slate-700 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="font-semibold text-slate-900 text-[10px] uppercase tracking-wider mb-1">
                      Key Mentorship Focus Areas:
                    </div>
                    {prog.keyOfferings.slice(0, 2).map((off, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug text-slate-600">{off}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-1 mt-auto">
                  <button
                    onClick={() => onOpenConsultation(prog.title, 'Career Mentorship')}
                    className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-blue-600 text-white font-medium text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Book Career Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Helper Scroll Hint on mobile */}
        <div className="flex sm:hidden items-center justify-center gap-1 text-[11px] text-slate-400 mt-2">
          <span>Swipe horizontally or use arrows to view all career programs</span>
        </div>

      </div>
    </section>
  );
};
