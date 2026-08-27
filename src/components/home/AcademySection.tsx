import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Clock, 
  Calendar, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  GraduationCap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { COURSES_DATA } from '../../data/researchData';
import { PageView } from '../../types';

interface AcademySectionProps {
  onNavigate: (view: PageView, anchorId?: string) => void;
  onOpenConsultation: (courseTitle?: string, projectType?: string) => void;
}

export const AcademySection: React.FC<AcademySectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const featuredCourse = COURSES_DATA.find((c) => c.isFeatured) || COURSES_DATA[0];
  const regularCourses = COURSES_DATA.filter((c) => !c.isFeatured);

  const categories = ['All', 'Drug Discovery', 'Structural Biology', 'Bioinformatics', 'Programming & Data Science', 'Chemistry & Pharmacy', 'Academic Development'];

  const filteredCourses = selectedCategory === 'All' 
    ? regularCourses 
    : regularCourses.filter(c => c.category === selectedCategory || c.skillsGained.some(s => s.toLowerCase().includes(selectedCategory.toLowerCase())));

  // Check scroll bounds to enable/disable arrow buttons
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
  }, [filteredCourses]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 360; // approximate card width + gap
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="academy-hub" className="py-10 sm:py-14 bg-white relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2.5 border border-blue-200/60">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            Research Training Academy
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Researcho Academy
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
            Learn practical research skills from fundamentals to advanced applications with IITian mentors.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
            <span className="px-3 py-1 rounded-lg bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200">
              Live Interactive Courses
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200">
              Hands-on Practical Lab Sessions
            </span>
          </div>
        </div>

        {/* 1. LARGE FEATURED COURSE CARD */}
        <div className="mb-10">
          <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider">
                    Featured Masterclass
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
                    {featuredCourse.level}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 text-xs font-medium border border-emerald-500/30">
                    {featuredCourse.nextBatch}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                  {featuredCourse.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {featuredCourse.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 text-xs">
                  <div className="bg-slate-800/80 border border-slate-700/60 p-2.5 rounded-lg">
                    <div className="text-slate-400 text-[11px]">Duration</div>
                    <div className="text-white font-semibold font-mono mt-0.5">{featuredCourse.duration}</div>
                  </div>
                  <div className="bg-slate-800/80 border border-slate-700/60 p-2.5 rounded-lg">
                    <div className="text-slate-400 text-[11px]">Classes</div>
                    <div className="text-cyan-300 font-semibold mt-0.5">{featuredCourse.classesCount}</div>
                  </div>
                  <div className="bg-slate-800/80 border border-slate-700/60 p-2.5 rounded-lg">
                    <div className="text-slate-400 text-[11px]">Mode</div>
                    <div className="text-white font-semibold mt-0.5">Live Online</div>
                  </div>
                  <div className="bg-slate-800/80 border border-slate-700/60 p-2.5 rounded-lg">
                    <div className="text-slate-400 text-[11px]">Credential</div>
                    <div className="text-emerald-400 font-semibold mt-0.5">Verified Cert.</div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 pt-1 text-xs">
                  <span className="flex items-center gap-1 text-slate-300 bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Live classes
                  </span>
                  <span className="flex items-center gap-1 text-slate-300 bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Hands-on practical sessions
                  </span>
                  <span className="flex items-center gap-1 text-slate-300 bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Project-based learning
                  </span>
                  <span className="flex items-center gap-1 text-slate-300 bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Verified Certificate
                  </span>
                  <span className="flex items-center gap-1 text-slate-300 bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> IITian Mentorship
                  </span>
                </div>

                <div className="pt-3 flex flex-wrap gap-3">
                  <button
                    onClick={() => onOpenConsultation(featuredCourse.title, 'Course Registration')}
                    className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>Join the Course</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onNavigate('courses')}
                    className="px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs sm:text-sm border border-slate-700 transition-colors cursor-pointer"
                  >
                    Explore All Courses
                  </button>
                </div>
              </div>

              {/* Right Curriculum Preview Box */}
              <div className="lg:col-span-5 bg-slate-800/80 rounded-xl p-5 border border-slate-700">
                <div className="text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3 flex items-center gap-1.5">
                  <Layers className="w-4 h-4" />
                  Course Curriculum Modules
                </div>
                <div className="space-y-1.5 max-h-[280px] overflow-y-auto pr-1 text-xs">
                  {featuredCourse.curriculum.map((mod, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/60 flex items-start gap-2 text-slate-200"
                    >
                      <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-semibold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-snug">{mod}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Software: AutoDock Vina, PyMOL, OpenBabel</span>
                  <span className="text-cyan-300 font-semibold">10 Modules</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. ADVANCED COURSES - SINGLE LINE ANIMATED CAROUSEL WITH LEFT/RIGHT ARROWS */}
        <div className="relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Advanced Masterclasses
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
                  {filteredCourses.length} Masterclasses
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Rigorous, project-oriented courses for postgraduates, PhD scholars, and faculty.
              </p>
            </div>

            {/* Navigation controls & Category filter */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-1.5">
                {categories.slice(0, 4).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      if (scrollContainerRef.current) {
                        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                      }
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Arrow Buttons in Header */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200">
                <button
                  onClick={() => handleScroll('left')}
                  disabled={!canScrollLeft}
                  aria-label="Scroll masterclasses left"
                  className={`p-2 rounded-lg transition-all duration-200 cursor-pointer ${
                    canScrollLeft 
                      ? 'bg-white text-slate-800 shadow-xs hover:bg-blue-600 hover:text-white active:scale-95' 
                      : 'text-slate-300 cursor-not-allowed'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleScroll('right')}
                  disabled={!canScrollRight}
                  aria-label="Scroll masterclasses right"
                  className={`p-2 rounded-lg transition-all duration-200 cursor-pointer ${
                    canScrollRight 
                      ? 'bg-white text-slate-800 shadow-xs hover:bg-blue-600 hover:text-white active:scale-95' 
                      : 'text-slate-300 cursor-not-allowed'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Viewport Container */}
          <div className="relative group">
            {/* Left Edge Floating Arrow */}
            {canScrollLeft && (
              <button
                onClick={() => handleScroll('left')}
                aria-label="Previous masterclasses"
                className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-slate-200 items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Right Edge Floating Arrow */}
            {canScrollRight && (
              <button
                onClick={() => handleScroll('right')}
                aria-label="Next masterclasses"
                className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-slate-200 items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            {/* Horizontal Single-Line Scrollable Track */}
            <div
              ref={scrollContainerRef}
              className="flex flex-nowrap gap-5 overflow-x-auto pb-6 pt-2 px-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="w-[280px] sm:w-[320px] shrink-0 snap-start bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group/card"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-100">
                        {course.category}
                      </span>
                      <span className="text-[11px] text-slate-500 font-semibold">
                        {course.level}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug group-hover/card:text-blue-600 transition-colors line-clamp-2">
                      {course.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed mb-2.5 line-clamp-2">
                      {course.description}
                    </p>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-1 mb-2">
                      {course.skillsGained.slice(0, 4).map((sk, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-medium font-mono border border-slate-200/60"
                        >
                          {sk}
                        </span>
                      ))}
                      {course.skillsGained.length > 4 && (
                        <span className="text-[9px] px-1 py-0.5 rounded text-slate-500 font-medium">
                          +{course.skillsGained.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <div className="text-[11px] text-slate-500 font-medium">
                      <span className="font-semibold text-slate-800">{course.duration}</span> • {course.classesCount}
                    </div>
                    <button
                      onClick={() => onOpenConsultation(course.title, 'Course Inquiry')}
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-all group-hover/card:translate-x-0.5 cursor-pointer"
                    >
                      <span>View</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Helper Scroll Hint on mobile */}
          <div className="flex sm:hidden items-center justify-center gap-1 text-[11px] text-slate-400 mt-2">
            <span>Swipe horizontally or use arrows to view all masterclasses</span>
          </div>
        </div>

      </div>
    </section>
  );
};
