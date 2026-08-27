import React from 'react';
import { 
  ArrowRight, 
  Dna, 
  Pill, 
  FlaskConical, 
  Microscope, 
  Binary, 
  Target 
} from 'lucide-react';
import { SCIENTIFIC_DOMAINS } from '../../data/researchData';
import { PageView } from '../../types';

interface ScientificDomainsSectionProps {
  onNavigate: (view: PageView, anchorId?: string) => void;
  onOpenConsultation: (domainName: string) => void;
}

export const ScientificDomainsSection: React.FC<ScientificDomainsSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dna': return <Dna className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'Pill': return <Pill className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'FlaskConical': return <FlaskConical className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'Microscope': return <Microscope className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'Binary': return <Binary className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'Target': return <Target className="w-4 h-4 sm:w-5 sm:h-5" />;
      default: return <FlaskConical className="w-4 h-4 sm:w-5 sm:h-5" />;
    }
  };

  return (
    <section className="py-8 sm:py-10 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-semibold uppercase tracking-wider mb-2 border border-blue-200/60">
            Core Scientific Specializations
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Explore Our Scientific Domains
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Focused, high-rigor research capabilities across computational biology, synthetic and analytical chemistry, pharmacology, and molecular life sciences.
          </p>
        </div>

        {/* 6 Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SCIENTIFIC_DOMAINS.map((domain) => (
            <div
              key={domain.id}
              className="group bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header with Badge & Icon */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {getIcon(domain.icon)}
                  </div>
                  <span className="text-xl" role="img" aria-label={domain.name}>
                    {domain.badge}
                  </span>
                </div>

                {/* Domain Title */}
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {domain.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-2.5 line-clamp-2">
                  {domain.description}
                </p>

                {/* Key Topics Tag Cloud */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {domain.keyTopics.map((topic, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-700 border border-slate-200/70 group-hover:border-blue-200 group-hover:text-blue-700 transition-colors"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('services', domain.id)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                >
                  <span>Explore Domain</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenConsultation(domain.name)}
                  className="text-xs text-slate-500 hover:text-blue-700 font-medium transition-colors cursor-pointer"
                >
                  Consult
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
