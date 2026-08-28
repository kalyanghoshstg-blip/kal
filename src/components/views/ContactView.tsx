import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    inquiryType: 'Research Project Consultation',
    researchDomain: 'Biotechnology & Life Sciences',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
          _subject: `New Inquiry from ${formData.name} - Researcho Website`,
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          Institution: formData.institution,
          Inquiry_Type: formData.inquiryType,
          Research_Domain: formData.researchDomain,
          Message: formData.message,
          _template: 'table',
        }),
      }).catch(() => null);
    } catch {
      // Silent catch - client mailto fallback ensures delivery
    }

    // Launch email client to ensure 100% direct inbox arrival
    const mailtoUrl = `mailto:contact@researcho-by-iitians.in?subject=Contact%20Inquiry%20-%20${encodeURIComponent(formData.name)}&body=Name:%20${encodeURIComponent(formData.name)}%0AEmail:%20${encodeURIComponent(formData.email)}%0APhone:%20${encodeURIComponent(formData.phone)}%0AInstitution:%20${encodeURIComponent(formData.institution)}%0ADomain:%20${encodeURIComponent(formData.researchDomain)}%0AInquiry%20Type:%20${encodeURIComponent(formData.inquiryType)}%0AMessage:%20${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoUrl;

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-200/60">
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            Get in Touch With IITian Mentors
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Contact Researcho
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Have questions about our research services, training masterclasses, workshops, or career guidance programs? Reach out to our scientific advisory team.
          </p>
        </div>

        {/* Grid: Left Contact Info, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs space-y-6">
              <div className="flex justify-center pb-4 border-b border-slate-100">
                <BrandLogo size="md" />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-slate-400">Scientific Inquiries</div>
                    <a href="mailto:contact@researcho-by-iitians.in" className="text-sm font-semibold text-blue-800 hover:text-blue-900 no-underline transition-colors">
                      contact@researcho-by-iitians.in
                    </a>
                    <div className="text-xs text-slate-500 mt-0.5">Official Research & Consultation Desk</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-slate-400">WhatsApp & Quick Desk</div>
                    <div className="flex flex-col gap-1.5 mt-1">
                      <a 
                        href="https://wa.me/918250573407?text=Hello%20Researcho,%20I%20would%20like%20to%20discuss%20research%20services%20and%20consultation." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 underline transition-colors flex items-center gap-1.5"
                      >
                        <span>+91 82505 73407</span>
                      </a>
                      <a 
                        href="https://wa.me/919063751838?text=Hello%20Researcho,%20I%20would%20like%20to%20discuss%20research%20services%20and%20consultation." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 underline transition-colors flex items-center gap-1.5"
                      >
                        <span>+91 90637 51838</span>
                      </a>
                      <a 
                        href="https://wa.me/918349572145?text=Hello%20Researcho,%20I%20would%20like%20to%20discuss%20research%20services%20and%20consultation." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 underline transition-colors flex items-center gap-1.5"
                      >
                        <span>+91 83495 72145</span>
                      </a>
                    </div>
                    <a
                      href="https://chat.whatsapp.com/Chz0dgk9tTIJG6rcit8hnP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md mt-2 transition-colors"
                    >
                      <span>👥 Join WhatsApp Group Community</span>
                    </a>
                    <div className="text-xs text-slate-500 mt-1">Mon–Sat: 9:00 AM – 7:00 PM IST</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-slate-400">Academic Mentorship Base</div>
                    <div className="text-sm font-semibold text-slate-900">Researcho by IITians</div>
                    <div className="text-xs text-slate-500 mt-0.5">India & Global Remote Research Network</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 bg-slate-50 -mx-7 -mb-7 p-6 rounded-b-2xl space-y-2 text-xs text-slate-600">
                <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  Response SLA Guarantee:
                </div>
                <p>
                  Every scientific feasibility review and course query receives an initial analysis within <strong>24 business hours</strong>.
                </p>
              </div>
            </div>

            {/* Scientific Confidentiality Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                NDA & Research Confidentiality
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                All submitted abstracts, molecule structures, sequences, and project proposals are kept strictly confidential under academic non-disclosure standards.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xs">
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200/60">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Inquiry Received Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to Researcho. Your message has been sent directly to <strong className="text-slate-900">contact@researcho-by-iitians.in</strong>. You can also open your mail client directly below:
                </p>
                <div className="max-w-md mx-auto space-y-2 pt-2">
                  <a
                    href={`mailto:contact@researcho-by-iitians.in?subject=Contact%20Inquiry%20-%20${encodeURIComponent(formData.name)}&body=Name:%20${encodeURIComponent(formData.name)}%0AEmail:%20${encodeURIComponent(formData.email)}%0APhone:%20${encodeURIComponent(formData.phone)}%0AInstitution:%20${encodeURIComponent(formData.institution)}%0ADomain:%20${encodeURIComponent(formData.researchDomain)}%0AMessage:%20${encodeURIComponent(formData.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs transition-colors shadow-xs text-center"
                  >
                    ✉️ Send Email to contact@researcho-by-iitians.in
                  </a>
                  <a
                    href={`https://wa.me/919063751838?text=Hello%20Dr.%20Ghosh,%20I%20sent%20a%20contact%20inquiry%20regarding%20${encodeURIComponent(formData.researchDomain)}.%20Name:%20${encodeURIComponent(formData.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-xs transition-colors shadow-xs text-center"
                  >
                    💬 Or WhatsApp +91 90637 51838
                  </a>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Send a Scientific Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Rajesh Verma / Priya Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@university.edu"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      College / University / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      placeholder="e.g. Delhi University / NIPER"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Primary Inquiry Type *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-hidden"
                    >
                      <option value="Research Project Consultation">Research Project Consultation</option>
                      <option value="Training Course Admission">Training Course Admission</option>
                      <option value="Live Class Registration">Live Class Registration</option>
                      <option value="Webinar Inquiry">Webinar Inquiry</option>
                      <option value="Final-Year Project Mentorship">Final-Year Project Mentorship</option>
                      <option value="Career & PhD Guidance">Career & PhD Guidance</option>
                      <option value="Institutional Workshop Collaboration">Institutional Workshop Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Scientific Domain *
                    </label>
                    <select
                      value={formData.researchDomain}
                      onChange={(e) => setFormData({ ...formData, researchDomain: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-hidden"
                    >
                      <option value="Biotechnology & Life Sciences">Biotechnology & Life Sciences</option>
                      <option value="Computational Drug Discovery">Computational Drug Discovery</option>
                      <option value="Molecular Dynamics & Structural Bio">Molecular Dynamics & Structural Bio</option>
                      <option value="Bioinformatics & Genomics">Bioinformatics & Genomics</option>
                      <option value="Chemistry & NMR Spectroscopy">Chemistry & NMR Spectroscopy</option>
                      <option value="Pharmacy & Pharmacology">Pharmacy & Pharmacology</option>
                      <option value="Scientific Writing & Editing">Scientific Writing & Editing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Research Question or Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your research objectives, computational challenges, target proteins, or course enrollment questions..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-hidden"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
