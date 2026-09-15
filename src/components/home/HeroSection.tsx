import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  FlaskConical, 
  ShieldCheck, 
  GraduationCap, 
  Activity,
  Layers,
  BookOpen,
  Users,
  Clock
} from 'lucide-react';
import { SearchBar } from '../common/SearchBar';
import { PageView } from '../../types';

interface HeroSectionProps {
  onNavigate: (view: PageView, anchorId?: string) => void;
  onOpenConsultation: (researchArea?: string, projectType?: string) => void;
  onOpenSearch?: (query?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenSearch,
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-900 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white pt-10 pb-12 lg:pt-14 lg:pb-16">
      {/* Background Molecular Grid & Glow Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Tag / Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-xs italic text-[14px] w-full max-w-[686px] min-h-[36px] h-auto justify-center mx-auto">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-[13px] italic leading-tight text-center">Researcho by IITians - Connecting Researchers & Empowering Collaboration Across Research Domains</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[43px] lg:leading-[58px] w-full max-w-4xl mx-auto text-center font-bold tracking-tight text-white px-2">
            One-Stop Research, Collaboration & Training Solutions for Life Sciences, Biotechnology, Chemistry, Pharmacy & Engineering
          </h1>

          {/* Supporting Headline */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            From learning new research skills and solving complex scientific problems to building research careers and fostering scientific collaboration, Researcho connects knowledge, researchers, and opportunities.
          </p>

          {/* Core Philosophy Banner: LEARN → RESEARCH → CAREER */}
          <div className="pt-2 flex items-center justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 pl-2">Philosophy:</span>
              
              <button
                onClick={() => onNavigate('training')}
                className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-cyan-200" />
                LEARN
              </button>
              <span className="text-slate-500 font-bold text-xs">→</span>

              <button
                onClick={() => onNavigate('services')}
                className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <FlaskConical className="w-3.5 h-3.5 text-sky-300" />
                RESEARCH
              </button>
              <span className="text-slate-500 font-bold text-xs">→</span>

              <button
                onClick={() => onNavigate('collaboration')}
                className="px-3 py-1 rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white font-medium text-xs flex items-center gap-1.5 transition-colors cursor-pointer border border-indigo-600"
              >
                <Users className="w-3.5 h-3.5 text-indigo-200" />
                COLLABORATE
              </button>
              <span className="text-slate-500 font-bold text-[18px] animate-pulse">→</span>

              <button
                onClick={() => onNavigate('career-guidance')}
                className="px-3 py-1 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-xs flex items-center gap-1.5 transition-colors cursor-pointer border border-emerald-600"
              >
                <GraduationCap className="w-3.5 h-3.5 text-emerald-200" />
                CAREER
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('services')}
              className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Research Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('training')}
              className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/15 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Join Our Courses</span>
            </button>

            <button
              onClick={() => onOpenConsultation()}
              className="px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium text-sm border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Book a Consultation</span>
            </button>
          </div>

          {/* Credibility Badges */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 border-t border-white/10 text-slate-300 text-xs max-w-2xl mx-auto">
            <div className="flex items-center gap-2 justify-center">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Built by researchers and IITians</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Activity className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Real Research Workflows</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Clock className="w-4 h-4 text-sky-400 shrink-0" />
              <span>24x7 Mentor Support</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
