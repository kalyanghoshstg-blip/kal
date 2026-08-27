import React from 'react';
import { Mail, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { PageView } from '../../types';

interface FinalCTASectionProps {
  onNavigate: (view: PageView, anchorId?: string) => void;
  onOpenConsultation: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <section className="py-10 sm:py-14 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-medium mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bridging Academic Knowledge to Research Discovery</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
          Have a Research Problem?{' '}
          <span className="text-blue-400">
            Let's Solve It Together.
          </span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
          Whether you need research analysis, computational support, scientific editing, practical training or career guidance, Researcho can help you take the next step.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Book a Research Consultation</span>
          </button>

          <button
            onClick={() => onNavigate('services')}
            className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm sm:text-base border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Research Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Strict Scientific Confidentiality</span>
          </div>
          <span>•</span>
          <div>IITian Technical Guidance</div>
          <span>•</span>
          <div>Feasibility & Roadmap Response within 24h</div>
        </div>

      </div>
    </section>
  );
};
