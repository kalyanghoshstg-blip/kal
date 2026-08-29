import React, { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  GraduationCap, 
  Sparkles, 
  ExternalLink, 
  FileText, 
  Globe2, 
  ShieldCheck, 
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Mail,
  Building2,
  Atom,
  FlaskConical,
  Dna,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Users,
  Search,
  Filter,
  Video,
  Clock,
  UserCheck,
  MessageSquare,
  Radio,
  Target,
  Layers,
  Briefcase,
  Paperclip,
  Camera
} from 'lucide-react';
import kalyanRegImage from '../../assets/images/regenerated_image_1787810289863.png';
import regAnanyaImg from '../../assets/images/regenerated_image_1787810295222.png';
import drSubhashisMImg from '../../assets/images/regenerated_image_1787810299659.png';
import drPremPalSinghImg from '../../assets/images/regenerated_image_1787814909685.png';
import { PageView } from '../../types';

interface FoundingMembersSectionProps {
  onNavigate: (view: PageView, anchorId?: string) => void;
  onOpenConsultation: (researchArea?: string, projectType?: string) => void;
  showDomainMentorsNetwork?: boolean;
  showMarketingChair?: boolean;
}

export interface MentorProfile {
  id: string;
  name: string;
  degrees: string;
  role: string;
  institute: string;
  image: string;
  badge: string;
  shortBio: string;
  fullBio: string;
  highlights: string[];
  keySpecializations: string[];
  upcomingAffiliation?: string;
  publicationsCount: string;
  fellowships: string[];
}

export interface DomainMentor {
  id: string;
  name: string;
  degrees: string;
  affiliation: string;
  domain: string;
  specialization: string;
  expertisePills: string[];
  bio: string;
  image: string;
}

export const FOUNDING_MENTORS: MentorProfile[] = [
  {
    id: 'kalyan-ghosh',
    name: 'Dr. Kalyan Ghosh',
    degrees: 'B.Pharm., M.Pharm., PhD (IIT Guwahati)',
    role: 'Co-Founder & Lead Scientific Advisor',
    institute: 'IIT Guwahati (PhD) • Postdoctoral Fellow (University of British Columbia, Vancouver, Canada)',
    image: kalyanRegImage,
    badge: 'PMRF Fellow (Govt. of India) & CIRTA 2026 (CIHR, Canada)',
    shortBio: 'Researcher in pharmaceutical sciences, biochemistry, and structural biology with 15 peer-reviewed publications. Recipient of PMRF from Govt. of India and CIRTA 2026 award from CIHR, Govt. of Canada.',
    fullBio: `Dr. Kalyan Ghosh completed his PhD from the Department of Biosciences and Bioengineering, Indian Institute of Technology (IIT) Guwahati under the Prime Minister's Research Fellowship (PMRF). His research centers on antimicrobial resistance, membrane protein biology, protein-ligand interactions, and structure-based drug discovery. Recipient of the prestigious CIRTA 2026 award from CIHR, Government of Canada, and Postdoctoral Fellow at University of British Columbia (UBC), Vancouver.`,
    highlights: [
      'PhD from Dept. of Biosciences & Bioengineering, IIT Guwahati',
      'Prime Minister\'s Research Fellowship (PMRF) by Govt. of India',
      'CIRTA 2026 Award (Canadian Institutes of Health Research, CIHR)',
      'Postdoctoral Fellow at University of British Columbia (UBC), Canada',
      'Author of 15 Peer-Reviewed International Scientific Publications'
    ],
    keySpecializations: [
      'Structural Biology & Cryo-EM / Crystallography Analysis',
      'Antimicrobial Resistance Molecular Mechanisms',
      'Membrane Protein Biology & Cardiac Transporters',
      'Protein-Ligand Interactions & Structure-Based Drug Discovery'
    ],
    publicationsCount: '15+ Publications',
    fellowships: ['PMRF (Govt. of India)', 'CIHR CIRTA 2026 (Canada)']
  },
  {
    id: 'dipayan-mondal',
    name: 'Dr. Dipayan Mondal',
    degrees: 'B.Pharm., M.Pharm., PhD (IIT Hyderabad)',
    role: 'Co-Founder & Lead Scientific Advisor',
    institute: 'IIT Hyderabad (PhD) • Assistant Professor, Department of Pharmacy, Parul University',
    image: regAnanyaImg,
    badge: 'PMRF Fellow (Govt. of India) • IIT Hyderabad Scholar',
    shortBio: 'Medicinal chemist and chemical biologist specializing in functional organic molecules, targeted protein degradation (PROTACs), and drug discovery. Recipient of PMRF from Govt. of India',
    fullBio: `Dr. Dipayan Mondal completed his PhD in Chemistry from IIT Hyderabad as a Prime Minister's Research Fellow (PMRF). His research focuses on functional organic synthesis, flavin chemistry, supramolecular assemblies, and targeted protein degradation (PROTACs) for innovative drug discovery. Author of 15+ peer-reviewed international publications and 2 patent applications.`,
    highlights: [
      'PhD in Chemistry from IIT Hyderabad',
      'Prime Minister\'s Research Fellowship (PMRF) by Govt. of India',
      '15+ Peer-Reviewed International Research Publications',
      'Contributor to 2 Patent Applications'
    ],
    keySpecializations: [
      'Medicinal Chemistry & Rational Drug Discovery',
      'Chemical Biology, Targeted Protein Degradation & PROTACs',
      'Supramolecular Assemblies, Hydrogels & Bioimaging',
      'Organic Synthesis, DFT Calculations & Spectroscopy'
    ],
    publicationsCount: '15+ Publications',
    fellowships: ['PMRF (Govt. of India)']
  },
  {
    id: 'hanuman-singh-dagur',
    name: 'Dr. Hanuman Singh Dagur',
    degrees: 'B.Sc., M.Sc., PhD (IIT Hyderabad)',
    role: 'Co-Founder & Lead Scientific Advisor',
    institute: 'IIT Hyderabad (PhD) • Research Associate (IIT Hyderabad)',
    image: drSubhashisMImg,
    badge: 'PMRF Fellow (Govt. of India) • IIT Hyderabad Scholar',
    shortBio: 'Medicinal chemist and spectroscopic analyst specializing in rational small-molecule design, high-field 2D NMR interpretation, and virtual library screening.',
    fullBio: `Dr. Hanuman Singh Dagur holds a PhD in Chemistry from IIT Hyderabad, focusing on synthetic organic chemistry, natural product analogues, and chemoinformatics. He leads spectral validation (1D/2D NMR, HRMS) and rational pharmacophore design across Researcho drug discovery initiatives.`,
    highlights: [
      'PhD in Chemistry from IIT Hyderabad',
      'Expert in High-Resolution 2D NMR (COSY, HSQC, HMBC) Elucidation',
      'Virtual Screening & Pharmacophore Design Specialist',
      '10+ Peer-Reviewed Publications in Organic & Medicinal Chemistry'
    ],
    keySpecializations: [
      'Medicinal Chemistry & Rational Drug Design',
      '2D NMR & Mass Spectrometry Structure Verification',
      'Chemoinformatics, Pharmacophore Mapping & QSAR',
      'ADMET In Silico Profiling & Lead Optimization'
    ],
    publicationsCount: '10+ Publications',
    fellowships: ['PMRF (Govt. of India)']
  }
];

export const DOMAIN_MENTORS_DATA: DomainMentor[] = [
  {
    id: 'dm-1',
    name: 'Dr. Debanjan Sarkar',
    degrees: 'PhD (IIT Kharagpur)',
    affiliation: 'IIT Kharagpur Alumnus • Postdoctoral Researcher',
    domain: 'Computational Biophysics',
    specialization: 'Microsecond Molecular Dynamics & Membrane Protein Transport',
    expertisePills: ['GROMACS', 'Free Energy Perturbation', 'Membrane Channels', 'PCA Landscapes'],
    bio: 'Specialist in simulating conformational dynamics of ion channels and ABC transporters using GPU-parallelized all-atom simulations.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dm-2',
    name: 'Dr. Priyadarshini Mukherjee',
    degrees: 'PhD (IISc Bangalore)',
    affiliation: 'IISc Bangalore • Structural Virology Specialist',
    domain: 'Structural Biology & Cryo-EM',
    specialization: 'Single-Particle Cryo-EM & Viral Glycoprotein Modeling',
    expertisePills: ['Cryo-EM Map Fitting', 'ChimeraX', 'Relion Processing', 'Epitope Design'],
    bio: 'Directs atomic resolution structure refinement, cryo-EM map fitting, and neutralizing antibody-antigen interaction modeling.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dm-3',
    name: 'Dr. Sourav Bhattacharya',
    degrees: 'M.Pharm., PhD (NIPER Mohali)',
    affiliation: 'NIPER Mohali Alumnus • Formulation Scientist',
    domain: 'Pharmaceutics & Drug Delivery',
    specialization: 'Lipid Nanoparticles (LNPs) & Targeted Nano-Formulations',
    expertisePills: ['Lipid Nanoparticles', 'Pharmacokinetics (PK/PD)', 'DLS & Zeta Potential', 'Controlled Release'],
    bio: 'Guides scholars in formulation optimization of lipid and polymeric nanocarriers for oncology and gene delivery applications.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dm-6',
    name: 'Dr. Abhijit Das',
    degrees: 'PhD (IIT Madras)',
    affiliation: 'IIT Madras • Computational Enzymologist',
    domain: 'Enzymology & Biocatalysis',
    specialization: 'QM/MM Reaction Mechanisms & Transition State Modeling',
    expertisePills: ['QM/MM Calculations', 'Enzyme Kinetics', 'Active Site Docking', 'Gaussian'],
    bio: 'Leads hybrid quantum mechanical / molecular mechanical investigations into catalytic reaction pathways of novel industrial enzymes.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dm-7',
    name: 'Dr. Sharmistha Paul',
    degrees: 'PhD (IIT Roorkee)',
    affiliation: 'IIT Roorkee Alumnus • Synthetic Chemist',
    domain: 'Medicinal & Organic Chemistry',
    specialization: 'Heterocyclic Synthesis & 2D NMR Structure Verification',
    expertisePills: ['2D NMR (HSQC/HMBC)', 'HRMS Fragmentation', 'Multi-Step Synthesis', 'Structure Elucidation'],
    bio: 'Advises postgraduate and PhD students on multi-step synthetic routes, reaction mechanisms, and spectral characterization proofs.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dm-8',
    name: 'Dr. Arindam Mitra',
    degrees: 'PhD (IIT Guwahati)',
    affiliation: 'IIT Guwahati • Mass Spectrometry Specialist',
    domain: 'Proteomics & Analytical Chemistry',
    specialization: 'LC-MS/MS Proteomics & Post-Translational Modifications',
    expertisePills: ['MaxQuant', 'Proteome Discoverer', 'PTM Mapping', 'Label-Free Quantification'],
    bio: 'Focuses on bottom-up proteomics workflows, phosphoproteomics analysis, and validating biomarker candidates using LC-MS/MS.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80'
  }
];

export const FoundingMembersSection: React.FC<FoundingMembersSectionProps> = ({
  onNavigate,
  onOpenConsultation,
  showDomainMentorsNetwork = false,
  showMarketingChair = false,
}) => {
  const [selectedDomainFilter, setSelectedDomainFilter] = useState<string>('All');
  const [expandedMentors, setExpandedMentors] = useState<Record<string, boolean>>({});
  const [showMentorModal, setShowMentorModal] = useState<boolean>(false);
  const [mentorSubmitted, setMentorSubmitted] = useState<boolean>(false);
  const [mentorForm, setMentorForm] = useState({
    name: '',
    designation: '',
    whatsappNo: '',
    researchArea: '',
    researchAreaDetails: '',
    bio: '',
    displayOnWebsite: 'Yes'
  });

  const handleMentorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMentorSubmitted(true);
    const subject = encodeURIComponent(`New Mentor Application: ${mentorForm.name} (${mentorForm.researchArea})`);
    const body = encodeURIComponent(
      `New Mentor Application Details:\n\nName: ${mentorForm.name}\nDesignation: ${mentorForm.designation}\nWhatsApp No: ${mentorForm.whatsappNo}\nResearch Area: ${mentorForm.researchArea}\nFull Research Area Details: ${mentorForm.researchAreaDetails}\nDisplay Profile on Website: ${mentorForm.displayOnWebsite}\nBio/Experience: ${mentorForm.bio}\n\n* Kindly note: I have attached my profile photo to this email.\n\nBest regards,\n${mentorForm.name}`
    );
    setTimeout(() => {
      window.location.href = `mailto:contact@researcho-by-iitians.in?subject=${subject}&body=${body}`;
    }, 500);
  };

  const toggleMentorExpanded = (mentorId: string) => {
    setExpandedMentors(prev => ({
      ...prev,
      [mentorId]: !prev[mentorId]
    }));
  };

  const domainCategories = [
    'All',
    'Computational Biophysics',
    'Structural Biology & Cryo-EM',
    'Pharmaceutics & Drug Delivery',
    'Chemoinformatics & AI in Chemistry',
    'Bioinformatics & Transcriptomics',
    'Enzymology & Biocatalysis',
    'Medicinal & Organic Chemistry',
    'Proteomics & Analytical Chemistry'
  ];

  const filteredDomainMentors = selectedDomainFilter === 'All'
    ? DOMAIN_MENTORS_DATA
    : DOMAIN_MENTORS_DATA.filter(m => m.domain === selectedDomainFilter);

  return (
    <section id="mentors" className="py-10 sm:py-14 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* 1. FOUNDING MENTORS SECTION                                */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2.5 border border-blue-200/60">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            IITians Scientific Leadership
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Meet Our Founding Mentors
          </h2>
        </div>

        {/* 3 Founding Mentors Cards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 ${showDomainMentorsNetwork ? 'mb-12' : 'mb-0'}`}>
          {FOUNDING_MENTORS.map((founder) => {
            const isExpanded = !!expandedMentors[founder.id];
            return (
              <div
                key={founder.id}
                className="rounded-2xl border border-slate-200/90 bg-white hover:border-blue-400 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Photo */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="px-1.5 py-0.5 rounded bg-slate-700 text-white text-[11px] font-normal shadow-xs tracking-wide inline-block leading-tight">
                        PMRF (Govt. of India)
                      </span>
                    </div>
                    <img
                      src={founder.image}
                      alt={founder.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-103"
                    />
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-3.5">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {founder.name}
                      </h3>
                      <div className="text-xs font-semibold text-blue-700 mt-0.5">
                        {founder.degrees}
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                        {founder.role}
                      </div>
                      <div className="text-[11px] text-slate-600 font-medium mt-0.5">
                        {founder.institute}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {founder.shortBio}
                    </p>

                    {/* Show More / Show Less Details Container */}
                    {isExpanded ? (
                      <div className="space-y-3.5 pt-2 border-t border-slate-100 transition-all duration-300">
                        {/* Full Bio */}
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 leading-relaxed">
                          {founder.fullBio}
                        </div>

                        {/* Highlights Bullet List */}
                        <div className="space-y-1.5 text-xs text-slate-700">
                          <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                            Key Highlights:
                          </div>
                          {founder.highlights.map((hl, i) => (
                            <div key={i} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                              <span className="leading-snug text-slate-600 text-[11px]">{hl}</span>
                            </div>
                          ))}
                        </div>

                        {/* Specialization Tags */}
                        <div>
                          <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                            Core Specializations:
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {founder.keySpecializations.map((spec, i) => (
                              <span 
                                key={i} 
                                className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-medium border border-blue-100"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {/* Toggle Show More / Show Less Button */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => toggleMentorExpanded(founder.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer py-1 px-2 -ml-2 rounded-md hover:bg-blue-50"
                      >
                        <span>{isExpanded ? 'Show Less' : 'Show More Details'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* MARKETING CHAIR SECTION                                  */}
        {/* ========================================================= */}
        {showMarketingChair && (
          <div className="my-12 p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center lg:items-start">
              
              {/* Enlarged Portrait Image */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-100 shrink-0 group">
                <img
                  src={drPremPalSinghImg}
                  alt="Dr. Prem Pal Singh - Marketing Chair"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-0.5 rounded-md bg-blue-600 text-white text-[10px] font-bold shadow-xs">
                    Marketing & Outreach Chair
                  </span>
                </div>
              </div>

              {/* Comprehensive Bio & Information */}
              <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-2.5 border border-blue-200">
                    <Briefcase className="w-3.5 h-3.5 text-blue-700" />
                    Marketing Chair & Strategic Outreach
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Dr. Prem Pal Singh
                  </h3>
                  <div className="text-sm font-semibold text-blue-700 mt-1">
                    Assistant Professor, Department of Electronics & Communication Engineering
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Faculty of Engineering and Technology, Parul University
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                  Leading strategic marketing campaigns, academic partnerships, and interactive international webinar series at Researcho. Driving global researcher engagement while contributing deep technical expertise in RF antennas, metamaterials, and wireless healthcare sensors.
                </p>

                {/* Core Research Specializations Pills */}
                <div className="w-full pt-1">
                  <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center justify-center lg:justify-start gap-1.5">
                    <Radio className="w-3.5 h-3.5 text-blue-600" />
                    Key Focus Areas & Research Domains
                  </div>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                    {[
                      'Scientific Marketing & Brand Growth',
                      'Webinars & Research Masterclasses',
                      'Biomedical Telemetry & Healthcare Sensors'
                    ].map((spec, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-blue-50/80 text-blue-800 text-xs font-medium border border-blue-200/70"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Roles & Academic Contributions Grid */}
                <div className="w-full pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left">
                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/70 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">Academic & Institutional Outreach:</span>{' '}
                      <span className="text-slate-600">Forging university alliances, student research awareness programs, and joint engineering-bioscience symposiums.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-blue-50/70 border border-blue-200/80 text-xs">
                    <Video className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">Marketing & Webinar Leadership:</span>{' '}
                      <span className="text-slate-600">Spearheading digital marketing campaigns, organizing international technical webinars, and conducting live faculty & scholar masterclasses.</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 2. NEW SECTION: MENTORS & SPECIALIZATIONS NETWORK        */}
        {/* ========================================================= */}
        {showDomainMentorsNetwork && (
          <div id="domain-mentors-network" className="pt-8 border-t border-slate-200">
            
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-2.5 border border-indigo-200/60">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                Faculty & Domain Specialists
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Research Mentors & Scientific Specializations
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Explore our specialized faculty and research mentor network spanning structural biology, computational genomics, medicinal chemistry, biophysics, and drug delivery systems.
              </p>

              {/* Filter Pills */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 max-w-4xl mx-auto">
                {domainCategories.slice(0, 6).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedDomainFilter(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      selectedDomainFilter === cat
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Mentors Specialization Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {filteredDomainMentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className="bg-slate-50 hover:bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Mentor Photo Thumbnail */}
                    <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 mb-3.5 shadow-2xs">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-104"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="px-2 py-0.5 rounded-md bg-slate-900/85 text-white text-[10px] font-semibold backdrop-blur-xs shadow-2xs">
                          {mentor.domain}
                        </span>
                      </div>
                      <div className="absolute bottom-2 right-2">
                        <span className="px-1.5 py-0.5 rounded bg-white/95 text-slate-800 text-[10px] font-bold font-mono shadow-2xs">
                          {mentor.degrees}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {mentor.name}
                    </h4>

                    <div className="text-[11px] text-slate-500 font-medium mb-3">
                      {mentor.affiliation}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-3.5 line-clamp-3">
                      {mentor.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {mentor.expertisePills.map((pill, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-200/70 text-slate-700 font-medium"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200/70 mt-auto">
                    <button
                      onClick={() => onOpenConsultation(`Guidance with ${mentor.name} (${mentor.domain})`, 'Domain Mentorship')}
                      className="w-full py-2 px-3 rounded-lg bg-white group-hover:bg-blue-600 group-hover:text-white border border-slate-200 group-hover:border-blue-600 text-slate-700 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <span>Connect for Guidance</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Combined Interested to be a Mentor & Why to join Section */}
            <div className="mt-14 rounded-3xl bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white p-6 sm:p-8 md:p-10 shadow-2xl border border-blue-900/50 relative overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider border border-blue-400/30">
                    <UserCheck className="w-3.5 h-3.5 text-blue-400" />
                    Join Our Expert Panel
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                    Interested to be a Mentor?
                  </h3>
                  <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                    Join Researcho by IITians as a mentor and become part of a growing community of researchers, students, academicians, and scientific professionals.
                  </p>
                </div>
                <a
                  href="https://forms.gle/WKCS37wV8w4R1Ekj8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer shrink-0 self-start lg:self-auto"
                >
                  <span>Apply as a Mentor</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Why to join details */}
              <div className="pt-6">
                <h4 className="text-base sm:text-lg font-bold text-blue-200 mb-2">
                  Why to join as a Mentor?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mb-5">
                  As a Researcho Mentor, you can:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                    <span className="text-base shrink-0">🔬</span>
                    <span>Connect & collaborate with researchers across diverse scientific domains.</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                    <span className="text-base shrink-0">💡</span>
                    <span>Exchange research ideas, perspectives, and expertise.</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                    <span className="text-base shrink-0">🎓</span>
                    <span>Conduct webinars & masterclasses in your area of specialization.</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                    <span className="text-base shrink-0">🌱</span>
                    <span>Share your research journey and inspire emerging researchers.</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                    <span className="text-base shrink-0">🧭</span>
                    <span>Participate in career counselling & research mentoring.</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                    <span className="text-base shrink-0">📚</span>
                    <span>Provide publication and scientific guidance within your area of expertise.</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                    <span className="text-base shrink-0">🤝</span>
                    <span>Expand your professional network and visibility within the research community.</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-500/20 border border-emerald-400/50 text-emerald-200 backdrop-blur-xs animate-pulse shadow-md shadow-emerald-500/10">
                    <span className="text-base shrink-0">💰</span>
                    <span className="font-medium text-emerald-100">Earn attractive compensation on every task, opportunities for recognition and rewards.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Mentor Application Modal */}
      {showMentorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowMentorModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              ✕
            </button>

            {mentorSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl shadow-inner font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-slate-900">Application Submitted Successfully</h3>
                <p className="text-sm text-slate-600 leading-relaxed px-4">
                  Your mentorship application is under process. Our coordination committee will review your credentials and contact you within 24-48 business hours. Your details have also been dispatched to <span className="font-semibold text-slate-900">contact@researcho-by-iitians.in</span>.
                </p>
                <button
                  onClick={() => setShowMentorModal(false)}
                  className="mt-4 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors shadow-sm cursor-pointer"
                >
                  Close & Return
                </button>
              </div>
            ) : (
              <form onSubmit={handleMentorSubmit} className="space-y-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-semibold uppercase tracking-wider mb-2 border border-blue-200/60">
                    <GraduationCap className="w-3 h-3 text-blue-600" />
                    Mentor Onboarding Form
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Apply to Join as a Research Mentor</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fill in your details below. Details will be sent instantly to our administration desk.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={mentorForm.name}
                      onChange={(e) => setMentorForm({ ...mentorForm, name: e.target.value })}
                      placeholder="e.g. Dr. Rajesh Kumar"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Designation & Affiliation *
                    </label>
                    <input
                      type="text"
                      required
                      value={mentorForm.designation}
                      onChange={(e) => setMentorForm({ ...mentorForm, designation: e.target.value })}
                      placeholder="e.g. PhD (IIT Delhi) • Postdoctoral Researcher"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="text"
                        required
                        value={mentorForm.whatsappNo}
                        onChange={(e) => setMentorForm({ ...mentorForm, whatsappNo: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
                      />
                    </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Research Area / Domain *
                    </label>
                    <input
                      type="text"
                      required
                      value={mentorForm.researchArea}
                      onChange={(e) => setMentorForm({ ...mentorForm, researchArea: e.target.value })}
                      placeholder="e.g. Structural Biology / Chemoinformatics"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Research experties like the instruments that u can handel, in silico/wetlab experiments that u can perform etc. *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={mentorForm.researchAreaDetails}
                    onChange={(e) => setMentorForm({ ...mentorForm, researchAreaDetails: e.target.value })}
                    placeholder="Provide full details regarding your research focus, methodologies, tools, and past projects..."
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 resize-none"
                  />
                </div>

                  <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200/80 flex items-start gap-2.5 text-xs text-blue-900">
                    <Paperclip className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-blue-950 block mb-0.5">Profile Photo Requirement:</span>
                      <p className="text-slate-700 leading-relaxed">
                        Kindly attach a profile photo in your submission email.
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Short Bio / Expertise Summary *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={mentorForm.bio}
                      onChange={(e) => setMentorForm({ ...mentorForm, bio: e.target.value })}
                      placeholder="Briefly describe your academic background, publications, and mentorship experience..."
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Do you want your mentor profile to get displayed under our researcho mentor section? *
                    </label>
                    <select
                      value={mentorForm.displayOnWebsite}
                      onChange={(e) => setMentorForm({ ...mentorForm, displayOnWebsite: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 font-medium"
                    >
                      <option value="Yes">Yes, display my profile</option>
                      <option value="No">No, keep confidential</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => setShowMentorModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors shadow-md cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Click here to submit your application via email</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
