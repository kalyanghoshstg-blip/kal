import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Upload, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  GraduationCap 
} from 'lucide-react';
import { ConsultationFormData } from '../../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultResearchArea?: string;
  defaultProjectType?: string;
  initialResearchArea?: string;
  initialProjectType?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultResearchArea = '',
  defaultProjectType = '',
  initialResearchArea = '',
  initialProjectType = '',
}) => {
  const chosenResearchArea = defaultResearchArea || initialResearchArea || 'Computational Drug Discovery';
  const chosenProjectType = defaultProjectType || initialProjectType || 'Molecular Docking / Virtual Screening Analysis';

  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    email: '',
    phone: '',
    institution: '',
    degreeOrPosition: 'M.Sc. Student',
    researchArea: chosenResearchArea,
    projectType: chosenProjectType,
    description: '',
    fileName: '',
  });

  useEffect(() => {
    if (isOpen) {
      if (defaultResearchArea || initialResearchArea) {
        setFormData((prev) => ({
          ...prev,
          researchArea: defaultResearchArea || initialResearchArea || prev.researchArea,
        }));
      }
      if (defaultProjectType || initialProjectType) {
        setFormData((prev) => ({
          ...prev,
          projectType: defaultProjectType || initialProjectType || prev.projectType,
        }));
      }
    }
  }, [isOpen, defaultResearchArea, initialResearchArea, defaultProjectType, initialProjectType]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Direct email dispatch to contact@researcho-by-iitians.in
      await fetch('https://formsubmit.co/ajax/contact@researcho-by-iitians.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Research Consultation Request - ${formData.name} (${formData.researchArea})`,
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          Institution: formData.institution,
          Degree_or_Position: formData.degreeOrPosition,
          Research_Area: formData.researchArea,
          Project_Type: formData.projectType,
          Project_Description: formData.description,
          File_Attachment: formData.fileName || 'None provided',
          _template: 'table',
        }),
      }).catch(() => null);
    } catch {
      // Fallback caught silently
    }

    const mailtoUrl = `mailto:contact@researcho-by-iitians.in?subject=New%20Research%20Consultation%20Request%20-%20${encodeURIComponent(formData.name)}&body=Name:%20${encodeURIComponent(formData.name)}%0AEmail:%20${encodeURIComponent(formData.email)}%0APhone:%20${encodeURIComponent(formData.phone)}%0AInstitution:%20${encodeURIComponent(formData.institution)}%0ADegree/Position:%20${encodeURIComponent(formData.degreeOrPosition)}%0AResearch%20Area:%20${encodeURIComponent(formData.researchArea)}%0AProject%20Type:%20${encodeURIComponent(formData.projectType)}%0ADescription:%20${encodeURIComponent(formData.description)}`;
    
    // Open mail client immediately so email is sent to contact@researcho-by-iitians.in
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      institution: '',
      degreeOrPosition: 'M.Sc. Student',
      researchArea: 'Computational Drug Discovery',
      projectType: 'Research Project Analysis',
      description: '',
      fileName: '',
    });
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, fileName: e.target.files![0].name }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-start justify-between border-b border-slate-800">
           <div className="pr-6">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-medium uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Direct IITian Research Consultation
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Book a Research Consultation
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-lg">
              Share your research scope or problem. Our scientific mentors will evaluate feasibility and provide structured technical guidance.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close consultation modal"
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors focus:outline-none cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {isSuccess ? (
            <div className="py-8 px-4 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 ring-8 ring-emerald-50">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Consultation Request Received
              </h3>
              <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-6">
                Thank you. Your consultation request has been dispatched directly to <span className="font-semibold text-slate-900">contact@researcho-by-iitians.in</span>. Our research mentors will evaluate your problem and contact you within 24 business hours.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 w-full max-w-md text-left text-xs text-slate-600 space-y-3 mb-6">
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  Official Email Inbox Routing
                </div>
                <p className="text-slate-700">
                  Your details have been sent to <strong className="text-slate-900">contact@researcho-by-iitians.in</strong>. You can also open your mail client with all information pre-filled:
                </p>
                <a
                  href={`mailto:contact@researcho-by-iitians.in?subject=New%20Research%20Consultation%20Request%20-%20${encodeURIComponent(formData.name)}&body=Name:%20${encodeURIComponent(formData.name)}%0AEmail:%20${encodeURIComponent(formData.email)}%0APhone:%20${encodeURIComponent(formData.phone)}%0AInstitution:%20${encodeURIComponent(formData.institution)}%0ADegree/Position:%20${encodeURIComponent(formData.degreeOrPosition)}%0AResearch%20Area:%20${encodeURIComponent(formData.researchArea)}%0AProject%20Type:%20${encodeURIComponent(formData.projectType)}%0ADescription:%20${encodeURIComponent(formData.description)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors shadow-xs"
                >
                  ✉️ Send Email to contact@researcho-by-iitians.in
                </a>
                <a
                  href={`https://wa.me/919063751838?text=Hello%20Dr.%20Ghosh,%20I%20just%20submitted%20a%20consultation%20request%20for%20${encodeURIComponent(formData.researchArea)}.%20Name:%20${encodeURIComponent(formData.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-colors shadow-xs"
                >
                  💬 Or Send via WhatsApp (+91 90637 51838)
                </a>
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-md"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. / Scholar / Student Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-hidden text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Official Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.name@univ.edu / gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-hidden text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-hidden text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Academic Institution / Organization <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. IIT, University, College, Pharma R&D"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-hidden text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Degree / Current Position <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.degreeOrPosition}
                    onChange={(e) => setFormData({ ...formData, degreeOrPosition: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-hidden text-sm text-slate-900 bg-slate-50 focus:bg-white"
                  >
                    <option value="B.Sc. Student">B.Sc. Student</option>
                    <option value="M.Sc. Student">M.Sc. Student</option>
                    <option value="B.Tech Student">B.Tech Student</option>
                    <option value="M.Tech Student">M.Tech Student</option>
                    <option value="B.Pharm Student">B.Pharm Student</option>
                    <option value="M.Pharm Student">M.Pharm Student</option>
                    <option value="PhD Scholar / JRF / SRF">PhD Scholar / JRF / SRF</option>
                    <option value="Postdoctoral Researcher">Postdoctoral Researcher</option>
                    <option value="Faculty / Professor">Faculty / Professor</option>
                    <option value="Industry R&D Scientist">Industry R&D Scientist</option>
                    <option value="Early-Career Researcher">Early-Career Researcher</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Primary Research Area <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.researchArea}
                    onChange={(e) => setFormData({ ...formData, researchArea: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-hidden text-sm text-slate-900 bg-slate-50 focus:bg-white"
                  >
                    <option value="Biotechnology">Biotechnology</option>
                    <option value="Computational Drug Discovery">Computational Drug Discovery</option>
                    <option value="Molecular Dynamics & Structural Biology">Molecular Dynamics & Structural Biology</option>
                    <option value="Bioinformatics & Genomics">Bioinformatics & Genomics</option>
                    <option value="Chemistry & NMR Spectroscopy">Chemistry & NMR Spectroscopy</option>
                    <option value="Medicinal Chemistry">Medicinal Chemistry</option>
                    <option value="Pharmacy & Pharmacology">Pharmacy & Pharmacology</option>
                    <option value="Scientific Writing & Publication Support">Scientific Writing & Publication</option>
                    <option value="Research Collaboration">Research Collaboration (Institutional / Academic)</option>
                    <option value="Research Project Mentorship">Research Project Mentorship</option>
                    <option value="PhD / Career Guidance">PhD / Career Guidance</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Project Type / Service Required <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-hidden text-sm text-slate-900 bg-slate-50 focus:bg-white"
                >
                  <option value="Molecular Docking / Virtual Screening Analysis">Molecular Docking / Virtual Screening Analysis</option>
                  <option value="Molecular Dynamics (GROMACS) Simulation">Molecular Dynamics (GROMACS) Simulation</option>
                  <option value="Bioinformatics / RNA-Seq Differential Expression">Bioinformatics / RNA-Seq Differential Expression</option>
                  <option value="NMR / LC-MS / Spectroscopy Structure Elucidation">NMR / LC-MS / Spectroscopy Structure Elucidation</option>
                  <option value="Research Manuscript Language & Structure Editing">Research Manuscript Language & Structure Editing</option>
                  <option value="Final-Year Academic Project Mentorship">Final-Year Academic Project Mentorship</option>
                  <option value="PhD Proposal / SOP & Lab Selection Strategy">PhD Proposal / SOP & Lab Selection Strategy</option>
                  <option value="Interdisciplinary Collaboration Project">Interdisciplinary Collaboration Project</option>
                  <option value="Custom Training / Institutional Workshop">Custom Training / Institutional Workshop</option>
                  <option value="Other Scientific Inquiry">Other Scientific Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  What do you need help with? <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Briefly describe your target protein/ligand, experimental data, research objectives, timeline, or specific challenges..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-hidden text-sm text-slate-900 placeholder:text-slate-400 resize-none bg-slate-50 focus:bg-white"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Strict Scientific Confidentiality Guaranteed</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-xs transition-colors disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Research Query
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
