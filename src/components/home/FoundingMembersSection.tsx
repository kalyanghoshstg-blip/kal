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
import nishantRegImage from '../../assets/images/nishant_ranjan_avatar_1789306713313.jpg';
import biswadipAvatarImg from '../../assets/images/regenerated_image_1789354049254.png';
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
  category: 'Global Mentors' | 'National Mentors' | 'R&D & Industry Specialists' | 'Government & Public Sector Experts';
  badge?: string;
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
    shortBio: 'Researcher in pharmaceutical sciences, biochemistry, and structural biology with 15+ peer-reviewed publications. Recipient of PMRF from Govt. of India and CIRTA 2026 award from CIHR, Govt. of Canada.',
    fullBio: `Dr. Kalyan Ghosh completed his PhD from the Department of Biosciences and Bioengineering, Indian Institute of Technology (IIT) Guwahati under the Prime Minister's Research Fellowship (PMRF). His research centers on antimicrobial resistance, membrane protein biology, protein-ligand interactions, and structure-based drug discovery. Recipient of the prestigious CIRTA 2026 award from CIHR, Government of Canada, and Postdoctoral Fellow at University of British Columbia (UBC), Vancouver.`,
    highlights: [
      'PhD from Dept. of Biosciences & Bioengineering, IIT Guwahati',
      'Prime Minister\'s Research Fellowship (PMRF) by Govt. of India',
      'CIRTA 2026 Award (Canadian Institutes of Health Research, CIHR)',
      'Postdoctoral Fellow at University of British Columbia (UBC), Canada',
      'Author of 15+ Peer-Reviewed International Scientific Publications'
    ],
    keySpecializations: [
      'Structural Biology & Cryo-EM / Crystallography',
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
    institute: 'PhD IIT Hyderabad (Chemistry)',
    image: regAnanyaImg,
    badge: 'PMRF Fellow (Govt. of India) • IIT Hyderabad Scholar',
    shortBio: 'Specializing in organic chemistry, medicinal chemistry, drug discovery, supramolecular chemistry and chemical biology. Recipient of PMRF from Govt. of India',
    fullBio: `Dr. Dipayan Mondal completed his PhD in Chemistry from IIT Hyderabad as a Prime Minister's Research Fellow (PMRF). His research focuses on organic chemistry, medicinal chemistry, drug discovery, supramolecular chemistry, flavin chemistry, and chemical biology. Author of 15+ peer-reviewed international publications and 2 patent applications.`,
    highlights: [
      'PhD in Chemistry from IIT Hyderabad',
      'Prime Minister\'s Research Fellowship (PMRF) by Govt. of India',
      '15+ Peer-Reviewed International Research Publications',
      'Contributor to 2 Patent Applications'
    ],
    keySpecializations: [
      'Organic Chemistry & Medicinal Chemistry',
      'Drug Discovery & Chemical Biology',
      'Supramolecular Chemistry & Assemblies',
      'Flavin Chemistry & Spectroscopy'
    ],
    publicationsCount: '15+ Publications',
    fellowships: ['PMRF (Govt. of India)']
  },
  {
    id: 'hanuman-singh-dagur',
    name: 'Dr. Hanuman Singh Dagur',
    degrees: 'BS-MS, M-Tech, PhD (IIT Hyderabad)',
    role: 'Co-Founder & Lead Scientific Advisor',
    institute: 'IIT Hyderabad (PhD) • Former Assistant Professor, Jaipur National University',
    image: drSubhashisMImg,
    badge: 'PMRF Fellow (Govt. of India) • IIT Hyderabad Scholar',
    shortBio: 'Researcher in molecular biology, pharmaceutical biotechnology, biochemistry, and structural biology. PMRF fellow from Dept. of Biotechnology, IIT Hyderabad.',
    fullBio: `Dr. Hanuman Singh Dagur completed his PhD in Biotechnology from IIT Hyderabad under the Prime Minister's Research Fellowship (PMRF). His research investigates protein-nucleic acid recognition, enzyme active-site architecture, and molecular catalysis and regulation mechanisms. Author of 7 peer-reviewed publications and former Assistant Professor at Jaipur National University.`,
    highlights: [
      'PhD from Dept. of Biotechnology, IIT Hyderabad',
      'Prime Minister\'s Research Fellowship (PMRF) by Ministry of Education, Govt. of India',
      '7 Peer-Reviewed Research Articles in Reputed National & International Journals',
      'Former Assistant Professor at Jaipur National University, Jaipur',
      'Specialist in Protein-Nucleic Acid Recognition & Enzyme Catalysis'
    ],
    keySpecializations: [
      'Molecular Biology & Primer Engineering',
      'Pharmaceutical Biotechnology & Biochemistry',
      'Protein-Nucleic Acid Recognition & Interactions',
      'Enzyme Active Site Architecture & Catalysis',
      'Chemical Biology & Structural Biology'
    ],
    publicationsCount: '7 Publications',
    fellowships: ['PMRF (Govt. of India)']
  }
];

export const DOMAIN_MENTORS_DATA: DomainMentor[] = [
  // 1. National Mentors (Verified)
  {
    id: 'dm-nat-nishant',
    name: 'Mr. Nishant Ranjan',
    degrees: 'PhD Scholar (IISER Berhampur) • M.Tech (IIT Hyderabad)',
    affiliation: 'IISER Berhampur • M.Tech Alumnus IIT Hyderabad',
    domain: 'Structural Biology & Cryo-EM',
    category: 'National Mentors',
    badge: 'IISER Berhampur • IIT Hyderabad',
    specialization: 'Structural Biology, Protein Biochemistry, Molecular Biology & Biophysical Characterization of Proteins, Protein–Ligand / Protein–Protein Interactions',
    expertisePills: ['Structural Biology', 'Protein Biochemistry', 'Cryo-EM', 'Protein–Ligand Interactions', 'Biophysical Characterization', 'Drug Discovery', 'IIT Hyderabad', 'IISER Berhampur'],
    bio: 'Completed M.Tech in Medical Biotechnology at IIT Hyderabad with research in molecular biology, protein biochemistry, and structural biology. Currently pursuing PhD at IISER Berhampur, focusing on structural biology and drug discovery with an emphasis on understanding protein structure, function, and molecular interactions using biochemical, biophysical, and structural biology approaches.',
    image: nishantRegImage
  },
  {
    id: 'dm-nat-biswadip',
    name: 'Mr. Biswadip Chakraborty',
    degrees: 'PhD Scholar (DST INSPIRE Fellow) • M.Pharm (Gold Medalist)',
    affiliation: 'CSIR-Indian Institute of Chemical Biology (CSIR-IICB)',
    domain: 'Medicinal & Organic Chemistry',
    category: 'National Mentors',
    badge: 'CSIR-IICB • DST INSPIRE Fellow',
    specialization: 'Organic Synthesis, Medicinal Chemistry, Chemical Biology, In Silico Studies (Pharmacophore Hypothesis & Modeling, 2D & 3D QSAR, Molecular Docking, MD Simulation, Virtual Screening, Target Identification, ADMET Profiling, Lead Discovery & Optimization)',
    expertisePills: ['DST INSPIRE Fellow', 'CSIR-IICB', 'Medicinal Chemistry', 'Organic Synthesis', 'Chemical Biology', 'In Silico Drug Design', 'Molecular Docking & MD', '2D & 3D QSAR', 'Lead Optimization', 'Gold Medalist (M.Pharm)'],
    bio: 'B.Pharm and M.Pharm in Pharmaceutical Chemistry (Gold Medalist), currently pursuing PhD as a DST INSPIRE Fellow at CSIR-Indian Institute of Chemical Biology (CSIR-IICB) with 4 years of research experience across 3 handled projects. Specializes in in silico lead design followed by organic synthesis and biological evaluation of developed molecules to target disease-relevant receptors.\n\nMaster\'s Dissertation: In silico study including pharmacophore hypothesis model generation, 2D & 3D QSAR, molecular docking, virtual screening, target identification, and ADMET profiling of a congeneric series of benzimidazole-based derivatives for activity against gastric cancer, leading to EGFR-targeted lead optimization and chemical synthesis of benzimidazole derivatives.\n\nOngoing PhD Research: Development of heterocyclic glycoconjugated mTOR inhibitors, design and synthesis of non-cytotoxic compounds targeting the internal ribosome entry site (IRES) of HCV, heterocycle-fluoroquinolone conjugates and novel bacterial topoisomerase inhibitor (NBTI) synthesis to combat antimicrobial resistance (AMR), and targeting the G-quadruplex forming domain of SARS-CoV-2 RNA.',
    image: biswadipAvatarImg
  }
];

export const FoundingMembersSection: React.FC<FoundingMembersSectionProps> = ({
  onNavigate,
  onOpenConsultation,
  showDomainMentorsNetwork = false,
  showMarketingChair = false,
}) => {
  const [selectedDomainFilter, setSelectedDomainFilter] = useState<string>('All');
  const [selectedMentorCategoryTab, setSelectedMentorCategoryTab] = useState<string>('All');
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
        {/* 2. MENTOR & EXPERT NETWORK SECTION                        */}
        {/* ========================================================= */}
        {showDomainMentorsNetwork && (
          <div id="domain-mentors-network" className="pt-10 border-t border-slate-200">
            
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-2.5 border border-indigo-200/60">
                <Users className="w-3.5 h-3.5 text-indigo-600" />
                Mentor & Expert Network
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Global, National & Industrial Expert Panel
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect with our world-class mentor network divided into international postdocs, national IITians & PMRF scholars, pharmaceutical R&D specialists, and public sector advisors.
              </p>

              {/* Category Filter Tabs */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
                {[
                  { id: 'All', label: 'All Mentor Networks', icon: Layers },
                  { id: 'Global Mentors', label: 'Global Mentors', icon: Globe2 },
                  { id: 'National Mentors', label: 'National Mentors', icon: GraduationCap },
                  { id: 'R&D & Industry Specialists', label: 'R&D & Industry Specialists', icon: Briefcase },
                  { id: 'Government & Public Sector Experts', label: 'Government & Public Sector Experts', icon: ShieldCheck }
                ].map((tab) => {
                  const IconComp = tab.icon;
                  const isActive = selectedMentorCategoryTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedMentorCategoryTab(tab.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                      }`}
                    >
                      <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Categorized Mentor Networks */}
            <div className="space-y-12 mb-12">
              {[
                {
                  category: 'Global Mentors',
                  title: 'Global Mentors',
                  tags: ['Postdoctoral Fellows', 'International Researchers', 'Global Research Advisors'],
                  icon: Globe2,
                  badgeBg: 'bg-blue-100 text-blue-800 border-blue-200',
                  headerBg: 'from-blue-50/70 via-indigo-50/30 to-white'
                },
                {
                  category: 'National Mentors',
                  title: 'National Mentors',
                  tags: ['National Academic Alumni', 'PMRF Fellows & Scholars', 'Premier Institute Advisors'],
                  icon: GraduationCap,
                  badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
                  headerBg: 'from-emerald-50/70 via-teal-50/30 to-white'
                },
                {
                  category: 'R&D & Industry Specialists',
                  title: 'R&D & Industry Specialists',
                  tags: ['Pharmaceutical R&D Directors', 'Formulation Lead Scientists', 'Chemoinformatics VPs', 'Biotech CRO Leaders'],
                  icon: Briefcase,
                  badgeBg: 'bg-amber-100 text-amber-800 border-amber-200',
                  headerBg: 'from-amber-50/70 via-orange-50/30 to-white'
                },
                {
                  category: 'Government & Public Sector Experts',
                  title: 'Government & Public Sector Experts',
                  tags: ['Government Jobs', 'National Lab Scientists', 'Public Sector Research Leaders'],
                  icon: ShieldCheck,
                  badgeBg: 'bg-purple-100 text-purple-800 border-purple-200',
                  headerBg: 'from-purple-50/70 via-fuchsia-50/30 to-white'
                }
              ]
                .filter((catSection) => selectedMentorCategoryTab === 'All' || selectedMentorCategoryTab === catSection.category)
                .map((catSection) => {
                  const sectionMentors = DOMAIN_MENTORS_DATA.filter(m => m.category === catSection.category);
                  const IconComp = catSection.icon;

                  return (
                    <div key={catSection.category} className="rounded-3xl border border-slate-200 bg-slate-50/30 p-6 sm:p-8 hover:bg-slate-50/70 transition-all duration-300">
                      {/* Category Header Banner */}
                      <div className={`p-5 sm:p-6 rounded-2xl bg-gradient-to-r ${catSection.headerBg} border border-slate-200/90 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4`}>
                        <div className="space-y-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border flex items-center gap-1.5 ${catSection.badgeBg}`}>
                              <IconComp className="w-3.5 h-3.5" />
                              {catSection.category}
                            </span>
                          </div>
                          <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                            {catSection.title} Network
                          </h4>
                          
                          {/* Render tags directly instead of listing specific institute names */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {catSection.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center text-xs px-2.5 py-1 rounded-lg bg-white/85 border border-slate-200 text-slate-700 font-semibold shadow-3xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Mentor Cards Grid for this category */}
                      {sectionMentors.length > 0 ? (
                        <div>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sectionMentors.map((mentor) => (
                              <div
                                key={mentor.id}
                                className="rounded-2xl border border-slate-200/90 bg-white hover:border-blue-400 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                              >
                                <div>
                                  {/* Photo Container */}
                                  <div className="relative aspect-4/3 sm:aspect-square w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                                    {mentor.badge && (
                                      <div className="absolute top-2.5 left-2.5 z-10">
                                        <span className="px-2 py-0.5 rounded-md bg-slate-900/85 backdrop-blur-xs text-white text-[10px] font-semibold tracking-wide inline-block shadow-xs border border-white/10">
                                          {mentor.badge}
                                        </span>
                                      </div>
                                    )}
                                    <img
                                      src={mentor.image}
                                      alt={mentor.name}
                                      referrerPolicy="no-referrer"
                                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-103"
                                    />
                                  </div>

                                  {/* Body Info */}
                                  <div className="p-5 space-y-3">
                                    <div>
                                      <h5 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {mentor.name}
                                      </h5>
                                      <div className="text-xs font-semibold text-blue-700 mt-0.5">
                                        {mentor.degrees}
                                      </div>
                                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                                        {mentor.affiliation}
                                      </div>
                                    </div>

                                    <div className="pt-2 border-t border-slate-100">
                                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                                        Specialization
                                      </span>
                                      <p className="text-xs text-slate-700 font-medium leading-relaxed">
                                        {mentor.specialization}
                                      </p>
                                    </div>

                                    <div>
                                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                                        Research Background
                                      </span>
                                      <div className={`text-xs text-slate-600 leading-relaxed whitespace-pre-line ${expandedMentors[mentor.id] ? '' : 'line-clamp-3'}`}>
                                        {mentor.bio}
                                      </div>
                                      {mentor.bio.length > 140 && (
                                        <button
                                          type="button"
                                          onClick={() => toggleMentorExpanded(mentor.id)}
                                          className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 transition-colors mt-1 inline-flex items-center gap-1 cursor-pointer"
                                        >
                                          {expandedMentors[mentor.id] ? 'Show less' : 'Read full background...'}
                                        </button>
                                      )}
                                    </div>

                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                      {(expandedMentors[mentor.id] ? mentor.expertisePills : mentor.expertisePills.slice(0, 5)).map((pill, idx) => (
                                        <span
                                          key={idx}
                                          className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60"
                                        >
                                          {pill}
                                        </span>
                                      ))}
                                      {!expandedMentors[mentor.id] && mentor.expertisePills.length > 5 && (
                                        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-100">
                                          +{mentor.expertisePills.length - 5} more
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                <div className="p-5 pt-0">
                                  <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1.5">
                                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                      Open for Mentorship
                                    </span>
                                    <button
                                      type="button"
                                      onClick={() => onOpenConsultation(mentor.name, 'Mentor Guidance')}
                                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                                    >
                                      <span>Connect</span>
                                      <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="mt-4 p-3.5 rounded-xl bg-slate-100/80 border border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
                            <span className="flex items-center gap-2 font-medium">
                              <Clock className="w-4 h-4 text-blue-600 shrink-0 animate-pulse" />
                              More mentor onboarding is in process for this panel.
                            </span>
                            <a
                              href="https://forms.gle/WKCS37wV8w4R1Ekj8"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-bold text-blue-600 hover:text-blue-800 transition-colors shrink-0 flex items-center gap-1"
                            >
                              <span>Apply as a Mentor</span>
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center py-12 px-6 border border-dashed border-slate-300/90 rounded-2xl bg-white text-center shadow-2xs">
                          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-3.5 shadow-2xs">
                            <Clock className="w-6 h-6 text-blue-600 animate-pulse" />
                          </div>
                          <h5 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                            Mentor onboarding is in process
                          </h5>
                          <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed">
                            Mentor applications and institutional credential verifications are currently underway. Verified mentor profiles will be published here soon.
                          </p>
                          <a
                            href="https://forms.gle/WKCS37wV8w4R1Ekj8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-blue-600 transition-colors cursor-pointer shadow-xs"
                          >
                            <UserCheck className="w-3.5 h-3.5 text-blue-400" />
                            <span>Apply to Join as a Mentor</span>
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}
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
