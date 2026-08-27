import React from 'react';
import { 
  BookOpen, 
  FlaskConical, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  Cpu,
  Users
} from 'lucide-react';
import { PageView } from '../../types';

interface JourneyPillarsSectionProps {
  onNavigate: (view: PageView, anchorId?: string) => void;
}

export const JourneyPillarsSection: React.FC<JourneyPillarsSectionProps> = ({
  onNavigate,
}) => {
  return (
    <section className="py-8 sm:py-10 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-semibold uppercase tracking-wider mb-2 border border-blue-200/60">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Unified Research Ecosystem
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            One Platform. Four Research Journeys.
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Whether you are building foundational software competence, solving a complex experimental problem, collaborating across domains, or targeting premier academic and industrial roles.
          </p>

          {/* Visual flow indicator */}
          <div className="mt-3 inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-700">
            <span className="text-blue-600">LEARN</span>
            <span className="text-slate-400">→</span>
            <span className="text-indigo-600">RESEARCH</span>
            <span className="text-slate-400">→</span>
            <span className="text-purple-600">COLLABORATE</span>
            <span className="text-slate-400">→</span>
            <span className="text-emerald-600">CAREER</span>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative">
          
          {/* Pillar 1: LEARN */}
          <div className="relative rounded-xl bg-white p-4 sm:p-5 border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-semibold uppercase tracking-wider border border-blue-200/60">
                  Stage 01
                </span>
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-1">
                LEARN
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Live classes, workshops, webinars and hands-on research training designed around real scientific workflows.
              </p>

              <ul className="space-y-1.5 text-xs text-slate-700 mb-4">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-600">Molecular Docking (AutoDock & PyMOL)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-600">Molecular Dynamics with GROMACS</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-600">Python & R for Life Science Data</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-600">1D & 2D NMR Structure Elucidation</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onNavigate('training')}
              className="w-full py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs shadow-2xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Explore Training</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pillar 2: RESEARCH */}
          <div className="relative rounded-xl bg-white p-4 sm:p-5 border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[10px] font-semibold uppercase tracking-wider border border-indigo-200/60">
                  Stage 02
                </span>
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <FlaskConical className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-1">
                RESEARCH
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Computational research, scientific data analysis, bioinformatics, drug discovery and advanced technical support.
              </p>

              <ul className="space-y-1.5 text-xs text-slate-700 mb-4">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-600">Virtual Screening & SBDD Lead Design</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-600">RMSD/RMSF & MM/PBSA Trajectories</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-600">RNA-seq & Differential Gene Expression</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-600">Peer-Review Manuscript Substantive Editing</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs shadow-2xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Explore Research Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pillar 3: COLLABORATE */}
          <div className="relative rounded-xl bg-white p-4 sm:p-5 border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 text-[10px] font-semibold uppercase tracking-wider border border-purple-200/60">
                  Stage 03
                </span>
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-1">
                COLLABORATE
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Connect and collaborate with researchers across leading research institutions and universities in India and abroad. Build interdisciplinary partnerships with researchers from:
              </p>

              <ul className="space-y-1.5 text-xs text-slate-700 mb-4">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-600">IISc, IITs, IISERs & NITs</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-600">CSIR Research Laboratories & National Institutes</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-600">Leading Indian Universities & Research Centres</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-600">International Universities & Global Research Communities</span>
                </li>
              </ul>
              

            </div>

            <button
              onClick={() => onNavigate('collaboration')}
              className="w-full py-2 px-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium text-xs shadow-2xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Explore Collaboration</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pillar 4: CAREER */}
          <div className="relative rounded-xl bg-white p-4 sm:p-5 border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-semibold uppercase tracking-wider border border-emerald-200/60">
                  Stage 04
                </span>
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-1">
                CAREER
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                PhD guidance, postdoc guidance, research mentoring and academic career development for researchers.
              </p>

              <ul className="space-y-1.5 text-xs text-slate-700 mb-4">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-600">Degree Transitions (MSc/BTech → PhD)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-600">PI Lab Selection & Research Proposal SOP</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-600">International Fellowships (MSCA, EMBO)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-600">Industry R&D & Bioinformatics Transition</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onNavigate('career-guidance')}
              className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs shadow-2xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Explore Career Guidance</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
