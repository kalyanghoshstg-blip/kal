import React from 'react';
import { HelpCircle, BookOpen, Users, Layers, MessageSquare, ShieldCheck } from 'lucide-react';
import { PageView } from '../../types';

interface ResearchoFaqSectionProps {
  onNavigate: (view: PageView, anchorId?: string) => void;
  onOpenConsultation: () => void;
}

export const ResearchoFaqSection: React.FC<ResearchoFaqSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <section id="faq-foundation" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Official Knowledge Base & Platform Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-serif">
            About Researcho by IITians
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A comprehensive overview of our research-support, expert-guidance, and professional training solutions.
          </p>
        </div>

        {/* Dynamic Rich Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: What is Researcho by IITians? */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  What is Researcho by IITians?
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  <strong>Researcho by IITians</strong> is a research support, training and expert guidance platform connecting students, researchers, PhD scholars and professionals with experienced researchers, mentors and subject-matter experts. We bridge the gap between academic theories and cutting-edge industrial practices. 
                </p>
                <p className="text-xs sm:text-sm text-slate-500 italic">
                  *Please note: Researcho by IITians is an independent training and support organization. We are not officially affiliated with, endorsed by, or representing any Indian Institute of Technology (IIT).
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: What services does Researcho provide? */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  What services does Researcho provide?
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  We provide a holistic ecosystem of professional research-support services:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Advanced Scientific Training
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Project Mentorship & Styling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Manuscript Drafting Support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Computational Simulations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    In-Silico Drug Discovery
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Biostatistics & Analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3: Who is Researcho for? */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-xl shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  Who is Researcho for?
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Researcho is designed to meet the high standards of a diverse spectrum of researchers and scientific minds:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['Students', 'Researchers', 'PhD Scholars', 'Faculty Members', 'Research Professionals', 'Industry Professionals'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-semibold text-purple-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: What types of research support are available? */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-xl shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  What types of research support are available?
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  We provide expert help at every stage of the research lifecycle:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-500 shrink-0" />
                    <span><strong>Pre-Research Support:</strong> Literature review analysis, gap finding, and scientific hypothesis formulation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-500 shrink-0" />
                    <span><strong>Computational Work:</strong> Molecular docking, structural dynamics, protein-ligand interactions, and computational genomics.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-500 shrink-0" />
                    <span><strong>Publishing Assistance:</strong> Plagiarism reports, proofreading, format alignments, and selection of reputed high-impact journals.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 5: How can students/researchers connect with mentors? */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-md transition-shadow duration-300 lg:col-span-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-rose-50 text-rose-600 rounded-xl shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 font-serif">
                    How can students & researchers connect with mentors?
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
                    Connecting with our academic mentors is simple. You can easily schedule an online 1-on-1 counseling consultation, join our interactive live masterclasses, or submit your abstract for expert feedback. Our matchmakers will map your domain with a relevant PMRF fellow or IIT researcher.
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-auto shrink-0 pt-4 sm:pt-0">
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Schedule Expert Consultation
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Transparent & Trustworthy Official Link Footnote */}
        <div className="mt-16 text-center text-xs text-slate-500 bg-white border border-slate-200 rounded-xl p-4 max-w-4xl mx-auto">
          Official Domain: <a href="https://researcho-by-iitians.in/" className="text-blue-600 hover:underline font-semibold font-mono">https://researcho-by-iitians.in/</a> • Focused strictly on high-integrity educational, support, and scientific training parameters. We strictly protect intellectual property and research integrity in all interactions.
        </div>

      </div>
    </section>
  );
};
