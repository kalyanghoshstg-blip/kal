import React, { useState } from 'react';
import { 
  Sparkles, 
  Activity, 
  Cpu, 
  FlaskConical, 
  Network, 
  TestTube2, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  ChevronRight,
  Target
} from 'lucide-react';
import { RESEARCH_SERVICES } from '../../data/researchData';
import { PageView } from '../../types';

interface ResearchServicesSectionProps {
  onNavigate: (view: PageView, anchorId?: string) => void;
  onOpenConsultation: (serviceTitle?: string, projectType?: string) => void;
}

export const ResearchServicesSection: React.FC<ResearchServicesSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>('computational-drug-discovery');

  const activeService = RESEARCH_SERVICES.find((s) => s.id === activeServiceId) || RESEARCH_SERVICES[0];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-blue-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-sky-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-600" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5 text-cyan-600" />;
      case 'Network': return <Network className="w-5 h-5 text-blue-600" />;
      case 'TestTube2': return <TestTube2 className="w-5 h-5 text-emerald-600" />;
      case 'FileText': return <FileText className="w-5 h-5 text-blue-700" />;
      default: return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="research-services-hub" className="py-10 sm:py-14 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2.5 border border-blue-200/60">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Specialized Technical Support
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Advanced Research Services
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
            Technical research support for biotechnology, drug discovery, computational biology, chemistry and pharmacy.
          </p>
        </div>

        {/* Layout: Left category tabs, Right active rich preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
          
          {/* Left Column: Service Category Tabs */}
          <div className="lg:col-span-4 space-y-1 bg-white p-2 rounded-2xl border border-slate-200 shadow-xs">
            <div className="px-2.5 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Research Service Lines
            </div>
            {RESEARCH_SERVICES.map((service) => {
              const isSelected = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full text-left p-2 sm:p-2.5 rounded-xl transition-all duration-150 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-xs font-medium'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                  }`}
                >
                  <div className="flex items-center gap-2.5 pr-1.5">
                    <div className={`p-1.5 rounded-lg shrink-0 ${isSelected ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'}`}>
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <div className="text-xs font-semibold line-clamp-1">
                        {service.title}
                      </div>
                      {service.isFlagship && (
                        <span className={`text-[9px] font-semibold uppercase tracking-wider ${isSelected ? 'text-cyan-200' : 'text-blue-600'}`}>
                          Flagship
                        </span>
                      )}
                    </div>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isSelected ? 'text-white translate-x-0.5' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Active Service Pane */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-3.5 sm:p-5 shadow-xs">
            
            {/* Header & Badges */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {activeService.title}
                  </h3>
                  {activeService.isFlagship && (
                    <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60 text-[9px] font-bold uppercase tracking-wider">
                      Flagship
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {activeService.subtitle}
                </p>
              </div>

              <button
                onClick={() => onOpenConsultation(activeService.title, 'Project Support')}
                className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-2xs flex items-center gap-1 cursor-pointer"
              >
                <span>Consult</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Description */}
            <div className="py-2">
              <p className="text-xs text-slate-600 leading-relaxed">
                {activeService.description}
              </p>
            </div>

            {/* Medicinal Chemistry Workflow Stepper if applicable */}
            {activeService.workflowSteps && (
              <div className="mb-2.5 p-2 rounded-xl bg-gradient-to-r from-blue-50/80 via-slate-50 to-cyan-50/80 border border-blue-200/60">
                <div className="text-[10px] font-bold text-blue-900 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <Target className="w-3 h-3 text-blue-600" />
                  <span>Drug Design Pipeline:</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1 text-center">
                  {activeService.workflowSteps.map((wf, idx) => (
                    <div key={idx} className="bg-white p-1.5 rounded-lg border border-slate-200/80 shadow-2xs">
                      <div className="text-[8px] font-mono font-bold text-blue-600">{wf.step}</div>
                      <div className="text-[10px] font-bold text-slate-900 leading-tight">{wf.title}</div>
                      <div className="text-[8px] text-slate-500 mt-0.5 leading-tight line-clamp-2">{wf.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Services List Breakdown */}
            <div className="mb-2.5">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-900 mb-1.5 flex items-center gap-1">
                <Layers className="w-3 h-3 text-blue-600" />
                Technical Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 max-h-[180px] overflow-y-auto pr-1">
                {activeService.servicesList.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-1 px-1.5 py-1 rounded bg-slate-50 border border-slate-100 text-[10px] text-slate-800"
                  >
                    <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0 mt-0.5" />
                    <span className="leading-tight text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Deliverables Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-100">
              {/* Deliverables */}
              {activeService.deliverables && (
                <div>
                  <div className="text-[10px] font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Deliverables
                  </div>
                  <ul className="space-y-0.5 text-[11px] text-slate-600">
                    {activeService.deliverables.map((del, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span className="leading-tight">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tools Used */}
              {activeService.toolsUsed && (
                <div>
                  <div className="text-[10px] font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Computational Tools
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {activeService.toolsUsed.map((tool, i) => (
                      <span
                        key={i}
                        className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200/60 text-[9px] font-mono font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom CTA for active service */}
            <div className="mt-3 p-2.5 rounded-xl bg-slate-900 text-white flex items-center justify-between gap-2">
              <div className="min-w-0">
                <div className="text-[9px] font-bold text-cyan-300 uppercase tracking-wider">
                  Need custom research support?
                </div>
                <div className="text-[11px] font-semibold text-slate-200 truncate">
                  Methodology & feasibility for {activeService.title}
                </div>
              </div>
              <button
                onClick={() => onOpenConsultation(activeService.title)}
                className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-xs transition-colors shrink-0 cursor-pointer"
              >
                Book
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
