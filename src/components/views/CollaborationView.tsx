import React from 'react';
import { 
  Users, 
  Building2, 
  Globe2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Network, 
  Microscope, 
  FileText, 
  Cpu, 
  MessageSquare,
  FlaskConical,
  Database,
  MapPin,
  ShieldCheck,
  FileCheck,
  Lightbulb,
  Award,
  Scale
} from 'lucide-react';
import { PageView } from '../../types';

interface CollaborationViewProps {
  onNavigate: (view: PageView, anchorId?: string) => void;
  onOpenConsultation: (researchArea?: string, projectType?: string) => void;
}

export const CollaborationView: React.FC<CollaborationViewProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header / Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-700 text-xs sm:text-sm font-semibold tracking-wide">
            <Users className="w-4 h-4 text-purple-600" />
            <span>COLLABORATE</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Research Collaboration Across Leading Institutions
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Connect and collaborate with researchers across leading research institutions and universities in India and abroad.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenConsultation('Research Collaboration', 'Interdisciplinary Research Matchmaking')}
              className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Users className="w-4 h-4" />
              <span>Start Collaborating</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('mentors')}
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-sm shadow-2xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Research Mentors</span>
            </button>
          </div>
        </div>

        {/* Highlight Banner / Institutional Partnerships */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-sm space-y-8">
          <div className="max-w-3xl">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Build interdisciplinary partnerships with researchers from:
            </h2>
            <p className="text-sm text-slate-600">
              Find collaborators, exchange expertise, build research teams, and work together on impactful scientific problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Institution Category 1 */}
            <div className="p-5 rounded-xl bg-purple-50/50 border border-purple-100 hover:border-purple-200 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-purple-600 text-white flex items-center justify-center mb-3 shadow-2xs">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                  IISc, IITs, IISERs & NITs
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Premier national institutes specializing in advanced computation, molecular biophysics, and experimental sciences.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-purple-100/60 flex items-center gap-1.5 text-xs text-purple-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Premier Premier Networks</span>
              </div>
            </div>

            {/* Institution Category 2 */}
            <div className="p-5 rounded-xl bg-blue-50/50 border border-blue-100 hover:border-blue-200 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-3 shadow-2xs">
                  <Microscope className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                  CSIR Labs & National Institutes
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Specialized government labs focusing on drug development, genomics, chemical research, and biotechnology.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-blue-100/60 flex items-center gap-1.5 text-xs text-blue-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>CSIR & ICMR Labs</span>
              </div>
            </div>

            {/* Institution Category 3 */}
            <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-100 hover:border-emerald-200 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-2xs">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                  Leading Indian Universities
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Top central & state universities, pharmacy colleges, and autonomous research centres across India.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-100/60 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>University Collaborations</span>
              </div>
            </div>

            {/* Institution Category 4 */}
            <div className="p-5 rounded-xl bg-amber-50/50 border border-amber-100 hover:border-amber-200 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-600 text-white flex items-center justify-center mb-3 shadow-2xs">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                  International Universities
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Global research communities and overseas universities for international co-authorship and joint grant proposals.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-amber-100/60 flex items-center gap-1.5 text-xs text-amber-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Global Networks</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lab Access & Experimental Infrastructure Section */}
        <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50/30 rounded-2xl p-6 sm:p-8 lg:p-10 border border-indigo-100 shadow-xs space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold">
                <FlaskConical className="w-3.5 h-3.5 text-indigo-600" />
                <span>EXPERIMENTAL INFRASTRUCTURE</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Experimental Facilities & Lab Matchmaking
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect with the right research labs, premier universities, and CSIR national institutes to perform high-end experiments, access specialized instrumentation, and systematically collect experimental data for your research.
              </p>
            </div>
            <button
              onClick={() => onOpenConsultation('Research Collaboration', 'Lab Space & Experimental Access')}
              className="shrink-0 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <FlaskConical className="w-4 h-4" />
              <span>Submit Lab/Experimental Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-xs transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <FlaskConical className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                1. Infrastructure & Equipment Access
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Gain entry to state-of-the-art facilities hosting specialized equipment like NMR spectrometers, high-performance liquid chromatography (HPLC), advanced mass spectrometry, SEM/TEM imaging, genomics sequencers, or clean rooms.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-xs transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                2. Lab Venue Matchmaking
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We bridge the gap by matching academic students, PhD scholars, and early-career scientists with hosting principal investigators at IITs, IISc, CSIR labs, or partner R&D institutions looking for project associates or visiting researchers.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-xs transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                3. Guided Experimental Data Collection
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ensure scientific rigor with professional guidance on sample preparation, dataset collection protocols, clinical research parameters, agricultural trial coordination, survey designs, and high-fidelity survey validation.
              </p>
            </div>
          </div>
        </div>

        {/* Patent Guidance, Search & Filing Section */}
        <div className="bg-gradient-to-br from-amber-50/70 via-white to-orange-50/30 rounded-2xl p-6 sm:p-8 lg:p-10 border border-amber-200/80 shadow-xs space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>INTELLECTUAL PROPERTY & PATENTS</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Patent Search, Drafting & Filing Assistance
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Protect your scientific innovations, novel pharmaceutical molecules, biotechnology processes, diagnostic kits, and computational algorithms with end-to-end patent assistance and formal filing support.
              </p>
            </div>
            <button
              onClick={() => onOpenConsultation('Patent & IP Protection', 'Patent Drafting & Filing Support')}
              className="shrink-0 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Submit Patent Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-3">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  1. Prior Art & Novelty Search
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Comprehensive novelty searches and Freedom-To-Operate (FTO) analysis across Indian Patent Office (IPO), USPTO, EPO, and WIPO databases to evaluate patentability prior to public disclosure.
                </p>
              </div>
              <div className="pt-2 text-[11px] text-amber-800 font-semibold flex items-center gap-1 border-t border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Global Patent Database Search</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-3">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  2. Specification Drafting
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Professional drafting of provisional and complete specifications, including technical claims, detailed descriptions, chemical structures, sequence listings, and process flow diagrams.
                </p>
              </div>
              <div className="pt-2 text-[11px] text-purple-800 font-semibold flex items-center gap-1 border-t border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span>Biotech & Pharma Claims Drafting</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-3">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  3. Indian & PCT Filing Support
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Complete assistance with Indian patent filing (Form 1, Form 2, Form 3, Form 5, Form 18 for Expedited Examination for startups & academics) as well as PCT international applications.
                </p>
              </div>
              <div className="pt-2 text-[11px] text-emerald-800 font-semibold flex items-center gap-1 border-t border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Expedited Academic & PCT Filing</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-3">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  4. FER Responses & IP Strategy
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Expert response drafting for First Examination Reports (FER), objections handling, hearing preparation, and building IP commercialization strategies for academic spin-offs.
                </p>
              </div>
              <div className="pt-2 text-[11px] text-blue-800 font-semibold flex items-center gap-1 border-t border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>FER Objections & Hearing Prep</span>
              </div>
            </div>
          </div>
        </div>

        {/* How Collaboration Works / Pillars */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              How We Drive Research Collaboration
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Exchange expertise, build multi-investigator teams, and work together on impactful scientific problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:shadow-md transition-all">
              <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">
                Interdisciplinary Co-Authoring
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Combine experimental validation with state-of-the-art computational modeling for high-impact journal submissions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:shadow-md transition-all">
              <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">
                Shared Computational Resources
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Access high-performance GPU clusters for molecular dynamics simulations, docking screening, and multi-omics pipelines.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:shadow-md transition-all">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">
                Academic & Industry Matchmaking
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect university lab projects with industry R&D teams seeking specialized computational or biological insights.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:shadow-md transition-all">
              <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">
                Peer Review & Working Groups
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Participate in peer discussion groups to present preliminary findings, refine hypotheses, and receive constructive feedback.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold border border-purple-400/30">
              Collaborate With Us
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Ready to build a high-impact research partnership?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Find collaborators, exchange expertise, build research teams, and work together on impactful scientific problems.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('Research Collaboration', 'Institutional & Academic Collaboration')}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-bold text-sm shadow-lg transition-all flex items-center gap-2 cursor-pointer"
          >
            <Users className="w-4 h-4" />
            <span>Initiate Collaboration</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
