import React, { useState, useRef, useEffect } from 'react';
import { 
  GraduationCap, 
  ShieldCheck, 
  ArrowRight, 
  BookOpen, 
  Cpu, 
  FileText, 
  Sparkles,
  Layers,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { PageView } from '../../types';

interface ProjectMentorshipSectionProps {
  onNavigate: (view: PageView, anchorId?: string) => void;
  onOpenConsultation: (topic?: string, projectType?: string) => void;
}

const MENTORSHIP_PILLARS = [
  {
    id: 'topic-feasibility',
    title: 'Topic Selection & Feasibility',
    icon: <BookOpen className="w-5 h-5 text-blue-600" />,
    iconBg: 'bg-blue-50',
    description: 'Assisting students in identifying novel, publishable research gaps in drug design, cancer biology, antimicrobial resistance, or enzyme kinetics.',
    tag: 'Phase 1'
  },
  {
    id: 'literature-guidance',
    title: 'Literature Review Guidance',
    icon: <FileText className="w-5 h-5 text-indigo-600" />,
    iconBg: 'bg-indigo-50',
    description: 'Structured methodology to search PubMed, Scopus, and SciFinder, organizing literature matrix frameworks and synthesizing state-of-the-art background.',
    tag: 'Phase 2'
  },
  {
    id: 'computational-docking',
    title: 'Computational & Docking Analysis',
    icon: <Cpu className="w-5 h-5 text-cyan-600" />,
    iconBg: 'bg-cyan-50',
    description: 'Step-by-step guidance setting up AutoDock Vina, GROMACS, or RNA-seq pipelines, generating verifiable raw trajectory data and affinity matrices.',
    tag: 'Phase 3'
  },
  {
    id: 'data-interpretation',
    title: 'Scientific Data Interpretation',
    icon: <Layers className="w-5 h-5 text-emerald-600" />,
    iconBg: 'bg-emerald-50',
    description: 'Transforming complex outputs (RMSD plots, PCA landscapes, 2D interaction maps, DESeq2 volcano plots) into coherent scientific arguments.',
    tag: 'Phase 4'
  },
  {
    id: 'dissertation-editing',
    title: 'Dissertation & Report Editing',
    icon: <FileText className="w-5 h-5 text-sky-600" />,
    iconBg: 'bg-sky-50',
    description: 'Professional language editing, figure formatting, bibliography cross-validation, and structural refinement ensuring university guideline compliance.',
    tag: 'Phase 5'
  },
  {
    id: 'defense-viva',
    title: 'Defense & Viva Preparation',
    icon: <Sparkles className="w-5 h-5 text-blue-600" />,
    iconBg: 'bg-blue-50',
    description: 'Presentation slide design support, mock question coaching, and technical articulation practice to defend your dissertation with confidence.',
    tag: 'Phase 6'
  },
];

export const ProjectMentorshipSection: React.FC<ProjectMentorshipSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
      const cardWidth = 360; // approximate card width + gap
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="project-mentorship-hub" className="py-10 sm:py-14 bg-white relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2.5 border border-blue-200/60">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            Final-Year Project Guidance
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Research Project Mentorship
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
            Hands-on technical mentorship, in silico research design, computational data analysis, and scientific report structuring for dissertation students.
          </p>

          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-slate-700">
            <span className="bg-slate-50 px-3 py-1 rounded-md border border-slate-200">B.Sc. & M.Sc.</span>
            <span className="bg-slate-50 px-3 py-1 rounded-md border border-slate-200">B.Tech & M.Tech</span>
            <span className="bg-slate-50 px-3 py-1 rounded-md border border-slate-200">B.Pharm & M.Pharm</span>
            <span className="bg-slate-50 px-3 py-1 rounded-md border border-slate-200">Life Sciences & Biotech</span>
          </div>
        </div>

        {/* Ethical Framework Banner */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-300 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                Our Ethical Mentorship Commitment
                <span className="text-[10px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded font-mono font-medium">
                  Strict Academic Integrity
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Researcho operates strictly under the model of <strong className="text-cyan-300 font-semibold">Mentorship + Practical Training + Data Analysis Support</strong>. We empower students to learn the underlying science and perform computational workflows themselves — we do not complete or ghostwrite students' graded academic assessments.
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Header with Arrow Controls */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Mentorship Modules & Workflow
            </span>
            <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold">
              {MENTORSHIP_PILLARS.length} Stages
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll mentorship stages left"
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
              aria-label="Scroll mentorship stages right"
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

        {/* Single-Line Animated Carousel Viewport */}
        <div className="relative group mb-12">
          {/* Left Edge Floating Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => handleScroll('left')}
              aria-label="Previous mentorship modules"
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-slate-200 items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Right Edge Floating Arrow */}
          {canScrollRight && (
            <button
              onClick={() => handleScroll('right')}
              aria-label="Next mentorship modules"
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
            {MENTORSHIP_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="w-[290px] sm:w-[330px] md:w-[350px] shrink-0 snap-start bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group/card"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl ${pillar.iconBg} flex items-center justify-center group-hover/card:scale-110 transition-transform`}>
                      {pillar.icon}
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/60 font-mono">
                      {pillar.tag}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-2.5 leading-snug group-hover/card:text-blue-600 transition-colors">
                    {pillar.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">1-on-1 Guidance</span>
                  <button
                    onClick={() => onOpenConsultation(pillar.title, 'Project Mentorship')}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 group-hover/card:translate-x-0.5 transition-transform cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Helper Scroll Hint on mobile */}
        <div className="flex sm:hidden items-center justify-center gap-1 text-[11px] text-slate-400 mb-8 -mt-6">
          <span>Swipe horizontally or use arrows to view all modules</span>
        </div>

        {/* CTA Box */}
        <div className="text-center bg-slate-50 border border-slate-200 rounded-2xl p-8 max-w-2xl mx-auto shadow-xs">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
            Planning Your Final-Year Project or Dissertation?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Get personalized guidance on research feasibility, computational software tools, and data interpretation from IITian researchers.
          </p>
          <button
            onClick={() => onOpenConsultation('Final-Year Project Mentorship', 'Academic Project')}
            className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm shadow-xs transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Discuss Your Research Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
