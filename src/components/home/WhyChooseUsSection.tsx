import React from 'react';
import { 
  Target, 
  Terminal, 
  Layers, 
  Compass, 
  Cpu, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { TRUST_PILLARS } from '../../data/researchData';
import { PageView } from '../../types';

interface WhyChooseUsSectionProps {
  onNavigate: (view: PageView, anchorId?: string) => void;
  onOpenConsultation: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />;
      case 'Terminal': return <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />;
      case 'Layers': return <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />;
      case 'Compass': return <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />;
      case 'Cpu': return <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700" />;
      default: return <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-8 sm:py-10 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-semibold uppercase tracking-wider mb-2 border border-blue-200/60">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            Our Foundation & Principles
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Why Researchers Choose Researcho
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Built by researchers for researchers, combining academic rigor from premier institutes with practical software training and technical research solutions.
          </p>
        </div>

        {/* 6 Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-lg p-3 sm:p-3.5 border border-slate-200 shadow-3xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center mb-2">
                  {getPillarIcon(pillar.icon)}
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                  {pillar.title}
                </h3>

                <p className="text-[11px] sm:text-xs text-slate-600 leading-normal line-clamp-3">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-slate-500">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>Verified Scientific Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
