import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  QrCode, 
  Download, 
  ExternalLink 
} from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';

export const CertificateSection: React.FC = () => {
  const [candidateName, setCandidateName] = useState('Ananya Sharma');

  return (
    <section className="py-16 sm:py-24 bg-white relative border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-200/60">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            Verified Skill Recognition
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Researcho Certificate
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Every masterclass and training program includes project evaluation, practical assessment, and a digitally verifiable certificate of completion.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Complete Package: <span className="font-semibold text-blue-900">Hands-on Training + Capstone Project + 1-on-1 Mentorship + Certificate</span>
          </div>
        </div>

        {/* Certificate Mockup & Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Certificate Features */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Project-Based Validation</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Issued only upon successful submission and technical evaluation of capstone computational/analytical assignments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                  <QrCode className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Unique Verification Hash & QR</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Each credential carries a unique cryptographic ID verifiable by employers, PIs, and academic institutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">IITian Mentor Endorsement</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Highlights specific software competence (e.g. AutoDock Vina, GROMACS, DESeq2, MestReNova).
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive name preview input */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 shadow-xs">
              <label className="block text-xs font-medium text-slate-700">
                Preview your name on certificate:
              </label>
              <input
                type="text"
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs font-medium text-slate-800 focus:ring-2 focus:ring-blue-600 outline-hidden"
              />
            </div>
          </div>

          {/* Right: Certificate Graphical Canvas Preview */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-slate-900 p-3 sm:p-4 border border-slate-800 shadow-xl">
              
              {/* Inner Certificate Parchment */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 relative overflow-hidden text-center text-slate-900 shadow-xs">
                
                {/* Background watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                  <BrandLogo size="xl" />
                </div>

                {/* Top Logo */}
                <div className="mb-4 flex justify-center scale-90">
                  <BrandLogo size="sm" showTagline={false} />
                </div>

                {/* Certificate Title */}
                <div className="text-[10px] font-semibold font-mono uppercase tracking-[0.25em] text-blue-800 mb-1">
                  Certificate of Completion
                </div>

                <div className="text-xs text-slate-500 italic mb-3">
                  This is proudly presented to
                </div>

                {/* Candidate Name */}
                <div className="text-xl sm:text-2xl font-serif font-bold text-slate-900 border-b border-slate-200 pb-2 mb-3 inline-block min-w-[240px]">
                  {candidateName || 'Candidate Name'}
                </div>

                <div className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed mb-4">
                  for successfully completing the advanced intensive research masterclass in
                  <div className="font-bold text-slate-900 text-sm sm:text-base mt-1 text-blue-900">
                    Molecular Docking & Structure-Based Drug Discovery
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    including hands-on protein preparation, grid box optimization, virtual screening, and binding interaction modeling.
                  </div>
                </div>

                {/* Bottom Footer Details */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 items-end text-[10px] text-slate-600">
                  <div className="text-left">
                    <div className="font-mono font-semibold text-slate-800">ID: RO-2026-8842</div>
                    <div className="text-[9px] text-slate-400">Issued: Academic Batch 2026</div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-semibold text-blue-800 mt-0.5">RESEARCHO VERIFIED</span>
                  </div>

                  <div className="text-right">
                    <div className="font-semibold text-slate-900 font-serif border-b border-slate-300 pb-0.5 inline-block">
                      IITian Mentor Board
                    </div>
                    <div className="text-[9px] text-slate-500 mt-0.5">Researcho by IITians</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
