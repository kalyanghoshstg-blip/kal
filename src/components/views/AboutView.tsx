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
  Award
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            About Researcho
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Researcho is a research and training platform focused on biotechnology, drug discovery, computational biology, chemistry, pharmacy and life sciences.
          </p>
          <div className="mt-4 inline-block font-mono text-xs font-semibold text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60">
            Learn. Research. Grow.
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
            <p className="text-xs sm:text-sm text-slate-600">
              Our primary goal is to systematically bridge the gap between:
            </p>
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
              Founded and mentored by researchers from premier Indian Institutes of Technology (IITs), Researcho provides practical, reproducible, and rigorous scientific support for undergraduate students, postgraduates, doctoral scholars, faculty members, and research institutions.
            </p>
          </div>
        </div>

        {/* Mission, Vision, and Approach */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs space-y-3">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To democratize high-level computational, analytical, and drug discovery research capabilities, equipping life science students and researchers with hands-on technical competence.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs space-y-3">
            <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To become the world's most trusted one-stop research and training ecosystem for life sciences, connecting foundational discovery to global research careers.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs space-y-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Our Approach</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Evidence-informed, reproducible research workflows combining physics-based simulation algorithms, multi-omics pipelines, spectroscopic rigor, and ethical mentorship.
            </p>
          </div>
        </div>

        {/* Research Areas & Training Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FlaskConical className="w-5 h-5 text-blue-600" />
              Core Research Focus Areas
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Computational Drug Discovery:</strong> Target identification, AutoDock docking, HTVS, ADMET & QSAR.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Molecular Dynamics:</strong> All-atom GROMACS trajectories, MM/PBSA free energy binding calculations.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Bioinformatics:</strong> RNA-seq differential expression, DESeq2 pipelines, proteomics & phylogenetics.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Analytical Chemistry:</strong> 1D/2D NMR (COSY/HSQC/HMBC), LC-MS, GC-MS and structure proof.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Scientific Writing:</strong> High-impact journal manuscript language editing and peer-review rebuttal support.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-emerald-600" />
              Our Training Philosophy
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We reject passive, theory-only video lectures. Our educational model is built on active, project-driven learning:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Hands-on from Day 1:</strong> Students execute actual software runs on their own systems or cloud servers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Real Scientific Datasets:</strong> Practicing on real PDB crystal structures, raw FASTQ reads, and NMR FID files.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Publication Standard:</strong> Learning to generate figures, tables, and scripts suitable for indexed journals.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Direct Faculty Interaction:</strong> Small batch sizes with dedicated doubt-clearing sessions.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center p-8 sm:p-10 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xs">
          <h3 className="text-2xl font-bold text-white mb-2">
            Collaborate With Researcho
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
