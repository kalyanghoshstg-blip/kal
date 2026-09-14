import React from 'react';
import { 
  Target, 
  Compass, 
  Sparkles, 
  ShieldCheck, 
  GraduationCap, 
  FlaskConical, 
  CheckCircle2, 
  ArrowRight,
  BookOpen,
  Layers,
  Award,
  Users,
  Briefcase,
  HelpCircle
} from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { PageView } from '../../types';

interface AboutViewProps {
  onNavigate: (view: PageView, anchorId?: string) => void;
  onOpenConsultation: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-200/60">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Our Academic & Research Identity
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight font-serif">
            About ResearchO by IITians
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            An independent research-support, mentor-led training, and customized research guidance platform serving the global scientific community.
          </p>
          <div className="mt-4 inline-block font-mono text-xs font-semibold text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60">
            https://researcho-by-iitians.in/
          </div>
        </div>

        {/* Detailed Factual Foundations (The 6 SEO Brand Questions) */}
        <div className="space-y-8">
          
          {/* Question 1 & 2: What is ResearchO by IITians & What does "by IITians" mean? */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-2xs space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
                What is ResearchO by IITians & What does "by IITians" mean?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base text-slate-700 leading-relaxed">
              <div className="space-y-3">
                <p>
                  <strong>ResearchO by IITians</strong> is a specialized, independent research support, training, and expert guidance platform. We connect students, researchers, PhD scholars, and professionals with experienced researchers, mentors, and subject-matter experts.
                </p>
                <p>
                  Our primary mission is to democratize academic mentorship, providing access to advanced molecular simulations, computational drug discovery tools, biostatistics, and structural chemistry training that might otherwise be unavailable or difficult to master independently.
                </p>
              </div>
              <div className="space-y-3 bg-slate-50 rounded-xl p-5 border border-slate-100 text-xs sm:text-sm text-slate-600">
                <p className="font-semibold text-slate-900 uppercase tracking-wider text-xs">
                  ⚠️ Factual Transparency Disclaimer
                </p>
                <p>
                  The phrase <strong>"by IITians"</strong> represents our platform's founders and primary technical mentors, who are graduates, scholars, or PMRF fellows from prestigious Indian Institutes of Technology (specifically IIT Hyderabad).
                </p>
                <p>
                  <strong>ResearchO by IITians is a completely independent organization.</strong> We are not officially affiliated with, endorsed by, sponsored by, or representing any Indian Institute of Technology (IIT) or government academic institution.
                </p>
              </div>
            </div>
          </div>

          {/* Question 3 & 4: Who is it for & What problems does it solve? */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">
                  Who is ResearchO by IITians for?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our platform provides structured, high-integrity support across academic and professional boundaries, specifically catering to:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 font-semibold">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Students
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Researchers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  PhD Scholars
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Faculty Members
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Research Professionals
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Industry Professionals
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="p-2 bg-amber-50 text-amber-600 rounded-lg shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">
                  What problems does it solve?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Academic curriculum frequently focuses on abstract theories, leaving a massive skill gap in executing real research. ResearchO by IITians systematically solves:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Lack of Hands-on Technical Training:</strong> Most universities lack high-performance servers or direct coaching for advanced computational simulation pipelines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Ineffective Academic Writing:</strong> Good data often gets rejected by high-impact peer-reviewed journals due to poor drafting structure and presentation.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Question 5 & 6: What services are provided & Who are the mentors? */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg shrink-0">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">
                  What services are provided?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                We deliver a high-quality suite of custom academic services adhering to the highest standards of academic integrity:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Scientific Writing & Publication Support:</strong> Expert manuscript reviews, citation format alignments, and plag reports.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Advanced Scientific Training:</strong> Masterclasses covering GROMACS molecular dynamics, in-silico drug docking, and genomics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Customized Solutions:</strong> Custom mathematical modeling, structure verification via 2D NMR, and computational biology tasks.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">
                  Who are our mentors and experts?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our mentorship panel consists of verified academic researchers, prime PMRF scholars, and organic chemists with extensive track records in peer-reviewed journals.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every mentor on our platform undergoes a rigorous credentials verification process. We explicitly map incoming student abstracts to subject-matter experts with matching publication records to guarantee the highest level of relevant, accurate coaching.
              </p>
            </div>
          </div>

        </div>

        {/* Brand Display & Core Narrative */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex justify-center bg-slate-50 p-6 rounded-xl border border-slate-100">
            <BrandLogo size="lg" />
          </div>
          <div className="lg:col-span-7 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Bridging the Critical Academic-to-Research Gap
            </h2>
            <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200/60 text-xs sm:text-sm font-medium text-slate-800 flex flex-wrap items-center gap-2">
              <span>Academic Knowledge</span>
              <span className="text-blue-500">→</span>
              <span>Practical Research Skills</span>
              <span className="text-blue-500">→</span>
              <span>Scientific Research</span>
              <span className="text-blue-500">→</span>
              <span className="text-emerald-700 font-semibold">Career Development</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Founded and mentored by researchers with roots in premier Indian Institutes of Technology (IITs), ResearchO by IITians provides practical, reproducible, and rigorous scientific support for undergraduate students, postgraduates, doctoral scholars, faculty members, and research institutions.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center p-8 sm:p-10 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xs">
          <h3 className="text-2xl font-bold text-white mb-2">
            Collaborate With ResearchO by IITians
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Get personalized research support or institutional workshop arrangements.
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-xs transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Book a Research Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
