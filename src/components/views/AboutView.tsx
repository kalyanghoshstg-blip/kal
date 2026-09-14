import React from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  FlaskConical, 
  CheckCircle2, 
  ArrowRight
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
          <h1 className="text-[43px] font-bold text-slate-900 tracking-tight font-serif leading-tight">
            About Researcho by IITians
          </h1>
          <p className="mt-4 text-[17px] text-slate-600 leading-relaxed">
            An independent research-support, mentor-led training, and customized research guidance platform serving the global scientific community.
          </p>
          <div className="mt-4 inline-block font-mono text-xs font-semibold text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60">
            https://researcho-by-iitians.in/
          </div>
        </div>

        {/* Detailed Factual Foundations (The SEO Brand Questions) */}
        <div className="space-y-8">
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
              Founded and mentored by researchers with roots in premier Indian Institutes of Technology (IITs), Researcho by IITians provides practical, reproducible, and rigorous scientific support for undergraduate students, postgraduates, doctoral scholars, faculty members, and research institutions.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center p-8 sm:p-10 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xs">
          <h3 className="text-2xl font-bold text-white mb-2">
            Collaborate With Researcho by IITians
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
