import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  X, 
  FlaskConical, 
  Users, 
  BookOpen, 
  Sparkles, 
  Compass, 
  FileText, 
  ArrowRight,
  ChevronRight,
  Filter,
  Tag
} from 'lucide-react';
import { PageView } from '../../types';

export interface SearchResultItem {
  id: string;
  title: string;
  category: 'Services' | 'Mentors' | 'Training' | 'Domains' | 'Career' | 'Resources';
  description: string;
  tags: string[];
  view: PageView;
  anchorId?: string;
  badge?: string;
  icon: 'service' | 'mentor' | 'course' | 'domain' | 'career' | 'resource';
}

// Master Search Dataset
const SEARCH_DATABASE: SearchResultItem[] = [
  // Services
  {
    id: 's1',
    title: 'Computational Drug Discovery & Virtual Screening',
    category: 'Services',
    description: 'Structure-based & ligand-based drug design, HTVS virtual screening, AutoDock Vina, PyMOL, Discovery Studio.',
    tags: ['docking', 'autodock', 'pymol', 'htvs', 'virtual screening', 'pharmacophore', 'qsar', 'drug design', 'binding affinity'],
    view: 'services',
    anchorId: 'computational-drug-discovery',
    badge: 'Flagship Service',
    icon: 'service',
  },
  {
    id: 's2',
    title: 'Molecular Dynamics (MD) & Membrane Simulation',
    category: 'Services',
    description: '100ns+ atomistic MD simulations using GROMACS, AMBER, NAMD with RMSD, RMSF, Rg, SASA, MM-PBSA free energy calculations.',
    tags: ['md', 'gromacs', 'amber', 'namd', 'rmsd', 'rmsf', 'mm-pbsa', 'membrane', 'lipid bilayer', 'trajectory', 'free energy'],
    view: 'services',
    anchorId: 'molecular-dynamics',
    badge: 'High Performance',
    icon: 'service',
  },
  {
    id: 's3',
    title: 'Structural Biology & Protein Homology Modeling',
    category: 'Services',
    description: 'AlphaFold2, ESMFold 3D protein structure prediction, homology modeling, active site identification, binding pocket validation.',
    tags: ['alphafold', 'homology modeling', 'protein structure', 'pdb', 'cryo-em', 'active site', 'esmfold', 'ramachandran'],
    view: 'services',
    anchorId: 'structural-biology',
    icon: 'service',
  },
  {
    id: 's4',
    title: 'Bioinformatics, NGS & Multi-Omics Analysis',
    category: 'Services',
    description: 'RNA-Seq differential expression, metagenomics, phylogenetic trees, BLAST, pathway enrichment (KEGG, GO).',
    tags: ['bioinformatics', 'ngs', 'rna-seq', 'transcriptomics', 'metagenomics', 'blast', 'phylo', 'kegg', 'r', 'python'],
    view: 'services',
    anchorId: 'bioinformatics',
    icon: 'service',
  },
  {
    id: 's5',
    title: 'Molecular Biology & Primer Design',
    category: 'Services',
    description: 'In silico primer design, PCR optimization, vector construction, plasmid mapping, restriction mapping.',
    tags: ['primer', 'pcr', 'molecular biology', 'cloning', 'plasmid', 'dna', 'rna', 'crispr', 'primer3'],
    view: 'services',
    anchorId: 'molecular-biology',
    icon: 'service',
  },
  {
    id: 's6',
    title: 'Chemistry, DFT & NMR Analytics',
    category: 'Services',
    description: 'Quantum chemistry calculations using Gaussian, DFT geometry optimization, 1H/13C NMR spectral interpretation, mass spec.',
    tags: ['dft', 'gaussian', 'quantum chemistry', 'nmr', 'spectroscopy', 'mass spec', 'ftir', 'reaction mechanism'],
    view: 'services',
    anchorId: 'chemistry',
    icon: 'service',
  },
  {
    id: 's7',
    title: 'Medicinal Chemistry & Drug Optimization',
    category: 'Services',
    description: 'Hit-to-lead chemical modifications, SAR analysis, ADMET predictions, Lipinski Rule of 5 validation, synthetic feasibility.',
    tags: ['medicinal chemistry', 'admet', 'sar', 'hit-to-lead', 'lipinski', 'toxicity', 'synthesis', 'pharmacokinetics'],
    view: 'services',
    anchorId: 'medicinal-chemistry',
    icon: 'service',
  },
  {
    id: 's8',
    title: 'Scientific Writing, Peer Review & Publication Support',
    category: 'Services',
    description: 'Research manuscript editing, journal selection (Elsevier, Springer, ACS, Nature), reviewer rebuttal writing, plagiarism check.',
    tags: ['paper writing', 'manuscript', 'publication', 'elsevier', 'springer', 'acs', 'review paper', 'impact factor', 'plagiarism'],
    view: 'services',
    anchorId: 'scientific-writing',
    icon: 'service',
  },

  // Mentors
  {
    id: 'm1',
    title: 'Dr. Kalyan Ghosh (PhD, IIT Bombay)',
    category: 'Mentors',
    description: 'Founder & Lead Mentor. Expert in Computational Biology, Molecular Dynamics (GROMACS), Biophysics, and PMRF Fellow.',
    tags: ['kalyan', 'ghosh', 'iit bombay', 'founder', 'pmrf', 'gromacs', 'md', 'biophysics'],
    view: 'mentors',
    anchorId: 'mentors',
    badge: 'IIT Bombay Alumnus',
    icon: 'mentor',
  },
  {
    id: 'm2',
    title: 'Dr. Dipayan Mondal (PhD, IIT Hyderabad)',
    category: 'Mentors',
    description: 'Co-Founder & Mentor. Specialist in Organic Synthesis, Medicinal Chemistry, Flavin Chemistry & PMRF Fellow.',
    tags: ['dipayan', 'mondal', 'iit hyderabad', 'pmrf', 'medicinal chemistry', 'organic synthesis', 'flavin'],
    view: 'mentors',
    anchorId: 'mentors',
    badge: 'IIT Hyderabad PMRF',
    icon: 'mentor',
  },
  {
    id: 'm3',
    title: 'Dr. Ananya Roy (PhD, IIT Kharagpur)',
    category: 'Mentors',
    description: 'Senior Research Mentor. Specialist in Structural Biology, Protein Dynamics, Enzyme Kinetics & Homology Modeling.',
    tags: ['ananya', 'roy', 'iit kharagpur', 'structural biology', 'enzyme', 'homology', 'alphafold'],
    view: 'mentors',
    anchorId: 'mentors',
    badge: 'IIT Kharagpur Alumna',
    icon: 'mentor',
  },
  {
    id: 'm4',
    title: 'Dr. Subhashis M. (PhD, IIT Madras)',
    category: 'Mentors',
    description: 'Senior Technical Mentor. Chemical Engineer specializing in DFT calculations, Fluid Dynamics & Process Modeling.',
    tags: ['subhashis', 'iit madras', 'chemical engineering', 'dft', 'gaussian', 'cfd', 'process design'],
    view: 'mentors',
    anchorId: 'mentors',
    badge: 'IIT Madras Alumnus',
    icon: 'mentor',
  },
  {
    id: 'm5',
    title: 'Dr. Prem Pal Singh (PhD, IIT Roorkee)',
    category: 'Mentors',
    description: 'Biotechnology & Genomics Specialist. Expert in NGS pipeline development, Transcriptomics & Bioinformatics.',
    tags: ['prem', 'singh', 'iit roorkee', 'biotechnology', 'ngs', 'genomics', 'rna-seq'],
    view: 'mentors',
    anchorId: 'mentors',
    badge: 'IIT Roorkee Alumnus',
    icon: 'mentor',
  },

  // Training & Courses
  {
    id: 't1',
    title: 'Molecular Docking Masterclass (AutoDock Vina & PyMOL)',
    category: 'Training',
    description: 'Hands-on weekend masterclass covering ligand preparation, grid box optimization, docking visualization, and affinity analysis.',
    tags: ['docking course', 'autodock vina', 'pymol course', 'virtual screening workshop', 'hands-on training'],
    view: 'training',
    anchorId: 'featured-course',
    badge: 'Masterclass',
    icon: 'course',
  },
  {
    id: 't2',
    title: '100ns GROMACS MD Simulation Hands-on Bootcamp',
    category: 'Training',
    description: 'Complete training from topology creation, solvation, energy minimization to trajectory analysis (RMSD, RMSF, Hydrogen bonds).',
    tags: ['gromacs course', 'md simulation bootcamp', 'trajectory analysis', 'mm-pbsa workshop'],
    view: 'training',
    anchorId: 'advanced-courses',
    badge: 'Advanced',
    icon: 'course',
  },
  {
    id: 't3',
    title: 'Next-Generation Sequencing (NGS) Data Analysis Workshop',
    category: 'Training',
    description: 'Learn FastQC quality control, STAR alignment, DESeq2 differential expression analysis in R, and pathway enrichment.',
    tags: ['ngs course', 'rna-seq course', 'r programming', 'deseq2', 'bioinformatics workshop'],
    view: 'training',
    anchorId: 'workshops-section',
    icon: 'course',
  },
  {
    id: 't4',
    title: 'Quantum Chemistry & DFT Calculations with Gaussian',
    category: 'Training',
    description: 'Practical training on input geometry optimization, vibrational frequency calculations, TS search, and HOMO-LUMO gap analysis.',
    tags: ['gaussian course', 'dft workshop', 'quantum mechanics', 'homo lumo'],
    view: 'training',
    anchorId: 'advanced-courses',
    icon: 'course',
  },

  // Research Domains
  {
    id: 'd1',
    title: 'Life Sciences & Computational Biology',
    category: 'Domains',
    description: 'In silico drug discovery, macromolecular interaction studies, protein folding analysis, disease target validation.',
    tags: ['life sciences', 'computational biology', 'drug discovery', 'target validation'],
    view: 'home',
    anchorId: 'domains',
    icon: 'domain',
  },
  {
    id: 'd2',
    title: 'Biotechnology & Industrial Fermentation',
    category: 'Domains',
    description: 'Recombinant DNA technology, gene expression profiling, enzyme engineering, bioprocess optimization.',
    tags: ['biotechnology', 'recombinant dna', 'gene expression', 'bioprocess'],
    view: 'home',
    anchorId: 'domains',
    icon: 'domain',
  },
  {
    id: 'd3',
    title: 'Medicinal Chemistry & Chemical Biology',
    category: 'Domains',
    description: 'Rational drug design, organic synthesis pathways, structure-activity relationship (SAR), chemical probes.',
    tags: ['medicinal chemistry', 'chemical biology', 'organic synthesis', 'sar'],
    view: 'home',
    anchorId: 'domains',
    icon: 'domain',
  },
  {
    id: 'd4',
    title: 'Pharmacy, Pharmacology & ADMET',
    category: 'Domains',
    description: 'Pharmaceutics, drug formulation modeling, pharmacokinetics, bioavailability, toxicology screening.',
    tags: ['pharmacy', 'pharmacology', 'admet', 'pharmacokinetics', 'formulation'],
    view: 'home',
    anchorId: 'domains',
    icon: 'domain',
  },

  // Career & Collaboration
  {
    id: 'c1',
    title: 'PMRF Fellowship Guidance (IIT PhD Admissions)',
    category: 'Career',
    description: 'One-on-one mentorship for Prime Minister\'s Research Fellowship (PMRF) proposal drafting, interview prep, and SOP review.',
    tags: ['pmrf', 'fellowship', 'phd admission', 'iit phd', 'sop', 'research proposal'],
    view: 'career-guidance',
    badge: 'Popular',
    icon: 'career',
  },
  {
    id: 'c2',
    title: 'Research Project Mentorship & Co-authorship',
    category: 'Career',
    description: 'Get step-by-step guidance from IIT mentors to complete your MTech / MSc / PhD thesis projects and publish in SCI journals.',
    tags: ['project mentorship', 'co-authorship', 'thesis guidance', 'msc project', 'phd guidance'],
    view: 'collaboration',
    icon: 'career',
  },
  {
    id: 'c3',
    title: 'International PhD & Postdoc Application Mentorship',
    category: 'Career',
    description: 'Target US, European & UK universities with high-impact emails, CV structuring, and research statement refinement.',
    tags: ['international phd', 'postdoc', 'us university', 'europe phd', 'cv review'],
    view: 'career-guidance',
    icon: 'career',
  },

  // Resources
  {
    id: 'r1',
    title: 'AutoDock Vina & PyMOL Cheatsheet Protocol',
    category: 'Resources',
    description: 'Complete step-by-step terminal command reference and visualization protocol for molecular docking.',
    tags: ['autodock protocol', 'pymol commands', 'cheatsheet', 'docking guide'],
    view: 'resources',
    icon: 'resource',
  },
  {
    id: 'r2',
    title: 'GROMACS MD Simulation Command Protocol',
    category: 'Resources',
    description: 'Ready-to-use bash scripts for system setup, equilibration (NVT/NPT), production runs, and plotting graphs.',
    tags: ['gromacs scripts', 'nvt npt', 'md protocol', 'bash scripts'],
    view: 'resources',
    icon: 'resource',
  },
  {
    id: 'r3',
    title: 'SCI Journal Impact Factor Finder & Formatting Template',
    category: 'Resources',
    description: 'Curated list of Q1/Q2 open access journals in life sciences, chemistry, and drug discovery with Word/LaTeX templates.',
    tags: ['impact factor', 'sci journal', 'latex template', 'manuscript format'],
    view: 'resources',
    icon: 'resource',
  }
];

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: PageView, anchorId?: string) => void;
  initialQuery?: string;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  initialQuery = '',
}) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setSearchQuery(initialQuery);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen, initialQuery]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Filter search items based on query and category
  const queryClean = searchQuery.trim().toLowerCase();
  const filteredResults = SEARCH_DATABASE.filter(item => {
    const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
    if (!queryClean) return categoryMatch;

    const titleMatch = item.title.toLowerCase().includes(queryClean);
    const descMatch = item.description.toLowerCase().includes(queryClean);
    const tagMatch = item.tags.some(tag => tag.toLowerCase().includes(queryClean));
    const categoryNameMatch = item.category.toLowerCase().includes(queryClean);

    return categoryMatch && (titleMatch || descMatch || tagMatch || categoryNameMatch);
  });

  const handleSelectResult = (item: SearchResultItem) => {
    onNavigate(item.view, item.anchorId);
    onClose();
  };

  const getCategoryBadgeColor = (category: SearchResultItem['category']) => {
    switch (category) {
      case 'Services': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Mentors': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Training': return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Domains': return 'bg-sky-50 text-sky-700 border-sky-200';
      case 'Career': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Resources': return 'bg-slate-100 text-slate-700 border-slate-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getItemIcon = (iconType: SearchResultItem['icon']) => {
    switch (iconType) {
      case 'service': return <FlaskConical className="w-5 h-5 text-blue-600 shrink-0" />;
      case 'mentor': return <Users className="w-5 h-5 text-emerald-600 shrink-0" />;
      case 'course': return <BookOpen className="w-5 h-5 text-purple-600 shrink-0" />;
      case 'domain': return <Sparkles className="w-5 h-5 text-sky-600 shrink-0" />;
      case 'career': return <Compass className="w-5 h-5 text-amber-600 shrink-0" />;
      case 'resource': return <FileText className="w-5 h-5 text-slate-600 shrink-0" />;
    }
  };

  const categories = ['All', 'Services', 'Mentors', 'Training', 'Domains', 'Career', 'Resources'];

  const popularSearches = [
    'Molecular Docking', 'GROMACS', 'PMRF', 'Bioinformatics', 
    'Kalyan Ghosh', 'DFT Gaussian', 'Scientific Writing', 'RNA-Seq'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-8 sm:pt-16 px-3 sm:px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Click backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden z-10 flex flex-col max-h-[85vh]">
        {/* Search Header Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/50">
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services, mentors, courses, software tools, PMRF, bioinformatics..."
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <div className="absolute right-3.5 hidden sm:flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded border border-slate-200">
                <span>ESC to close</span>
              </div>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 pt-3 overflow-x-auto no-scrollbar">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 pr-1 shrink-0">
              <Filter className="w-3 h-3" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold shrink-0 transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200/60 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Suggestion Tags when query is empty */}
        {!searchQuery && (
          <div className="px-5 py-3 bg-blue-50/40 border-b border-blue-100/60 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 font-semibold flex items-center gap-1">
              <Tag className="w-3 h-3 text-blue-600" /> Popular Keywords:
            </span>
            {popularSearches.map((term) => (
              <button
                key={term}
                onClick={() => setSearchQuery(term)}
                className="px-2.5 py-1 rounded-md bg-white border border-blue-200/80 text-blue-700 hover:bg-blue-600 hover:text-white font-medium transition-colors cursor-pointer"
              >
                {term}
              </button>
            ))}
          </div>
        )}

        {/* Search Results List */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-2.5">
          {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelectResult(item)}
                className="group p-3.5 sm:p-4 rounded-xl border border-slate-200/80 bg-white hover:bg-blue-50/50 hover:border-blue-300 transition-all cursor-pointer flex items-start gap-3.5"
              >
                <div className="p-2.5 rounded-xl bg-slate-50 group-hover:bg-white border border-slate-200/60 shadow-xs transition-colors shrink-0">
                  {getItemIcon(item.icon)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${getCategoryBadgeColor(item.category)}`}>
                      {item.category}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-1.5 py-0.5 rounded">
                        {item.badge}
                      </span>
                    )}
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-1.5 flex-wrap pt-2">
                    {item.tags.slice(0, 5).map((t, idx) => (
                      <span key={idx} className="text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded font-mono">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 self-center" />
              </div>
            ))
          ) : (
            <div className="text-center py-12 px-4 space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-800">No matching results found</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try searching with terms like <span className="font-semibold text-slate-700">"Docking"</span>, <span className="font-semibold text-slate-700">"PMRF"</span>, <span className="font-semibold text-slate-700">"GROMACS"</span>, or <span className="font-semibold text-slate-700">"Kalyan Ghosh"</span>.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="font-medium">
            Showing <strong className="text-slate-800">{filteredResults.length}</strong> results
          </span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-semibold transition-colors cursor-pointer"
          >
            Close Search
          </button>
        </div>
      </div>
    </div>
  );
};
