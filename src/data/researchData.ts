import { 
  ScientificDomain, 
  ServiceCategory, 
  CourseItem, 
  WorkshopItem, 
  LiveClassItem, 
  WebinarItem, 
  CareerProgram, 
  ResourceItem 
} from '../types';

export const SCIENTIFIC_DOMAINS: ScientificDomain[] = [
  {
    id: 'biotechnology',
    name: 'Biotechnology',
    icon: 'Dna',
    badge: '🧬',
    description: 'Molecular biology, genomics, cell biology and biotechnology research support.',
    keyTopics: ['Gene Cloning & PCR Design', 'Microbial Genome Analysis', 'Cell Culture Data Analysis', 'Recombinant Expression'],
    color: 'from-blue-600 to-cyan-600',
    gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200'
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    icon: 'Pill',
    badge: '💊',
    description: 'Pharmaceutical research, drug discovery, formulation-related research support and academic guidance.',
    keyTopics: ['Preformulation Analytics', 'Pharmacophore Modeling', 'ADMET & Bioavailability', 'Academic Dissertation Support'],
    color: 'from-sky-600 to-indigo-600',
    gradient: 'bg-gradient-to-br from-sky-50 to-blue-50 border-sky-200'
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: 'FlaskConical',
    badge: '⚗️',
    description: 'Medicinal chemistry, analytical chemistry, spectroscopy, NMR and computational chemistry.',
    keyTopics: ['1H & 13C 2D NMR Interpretation', 'Mass Spectrometry (LC-MS/GC-MS)', 'FTIR & UV-Vis Spectroscopy', 'Structure Elucidation'],
    color: 'from-indigo-600 to-blue-700',
    gradient: 'bg-gradient-to-br from-indigo-50 to-slate-50 border-indigo-200'
  },
  {
    id: 'life-sciences',
    name: 'Life Sciences',
    icon: 'Microscope',
    badge: '🔬',
    description: 'Research support, scientific data analysis and interdisciplinary life-science solutions.',
    keyTopics: ['Enzyme Kinetics & Assays', 'Biochemical Profiling', 'Statistical Experimental Design', 'Multi-omics Data Integration'],
    color: 'from-emerald-600 to-teal-700',
    gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200'
  },
  {
    id: 'computational-biology',
    name: 'Computational Biology',
    icon: 'Binary',
    badge: '💻',
    description: 'Bioinformatics, molecular modelling, molecular dynamics and computational research.',
    keyTopics: ['All-Atom Molecular Dynamics', 'RNA-seq & Differential Expression', 'Phylogenetic Reconstruction', 'Python & R Pipeline Automation'],
    color: 'from-blue-700 to-violet-700',
    gradient: 'bg-gradient-to-br from-blue-50 to-violet-50 border-blue-200'
  },
  {
    id: 'drug-discovery',
    name: 'Drug Discovery',
    icon: 'Target',
    badge: '🧪',
    description: 'Target identification, virtual screening, docking, ADMET, lead discovery and optimization.',
    keyTopics: ['High-Throughput Virtual Screening', 'Structure-Based Drug Design (SBDD)', 'MM/PBSA Free Energy Binding', 'Lead Scaffold Optimization'],
    color: 'from-cyan-700 to-blue-800',
    gradient: 'bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200'
  }
];

export const RESEARCH_SERVICES: ServiceCategory[] = [
  {
    id: 'computational-drug-discovery',
    title: 'Computational Drug Discovery',
    badge: 'Flagship Capability',
    subtitle: 'End-to-end in silico rational drug design from target validation to lead optimization.',
    iconName: 'Sparkles',
    isFlagship: true,
    description: 'Our computational drug discovery pipeline combines state-of-the-art physics-based scoring, structure-based docking algorithms, and machine learning models to accelerate candidate identification.',
    servicesList: [
      'Molecular docking (Rigid & Flexible receptor docking)',
      'High-throughput Virtual screening (HTVS) of multi-million compound libraries',
      'Molecular dynamics simulations for receptor-ligand stability',
      'ADMET analysis & pharmacokinetic profiling',
      'Drug-likeness assessment (Lipinski, Veber, Ghose rules)',
      'Molecular similarity & fingerprint clustering',
      '3D-Pharmacophore modelling and validation',
      'Quantitative Structure-Activity Relationship (QSAR/3D-QSAR)',
      'Structure-based drug design (SBDD) & Ligand-based drug design (LBDD)',
      'Ligand–protein interaction 2D/3D mapping',
      'Binding free-energy calculations (MM/GBSA & MM/PBSA)',
      'Target identification & Druggability pocket cavity detection',
      'Lead identification from natural products & synthetic databases',
      'Lead optimization & scaffold hopping strategies'
    ],
    toolsUsed: ['AutoDock Vina', 'Schrödinger Suite', 'GROMACS', 'SwissADME', 'PyMOL', 'Discovery Studio', 'PLIP'],
    deliverables: [
      'Comprehensive Docking Energy Matrix & Binding Affinity Ranks',
      'High-Resolution Publication-Grade 2D/3D Interaction Diagrams',
      'Full ADMET/Pharmacokinetic Prediction Dossier',
      'Standardized Methodology Report with Citations'
    ]
  },
  {
    id: 'molecular-dynamics',
    title: 'Molecular Dynamics & Structural Biology',
    subtitle: 'Nanosecond to microsecond conformational trajectory analysis and free energy calculations.',
    iconName: 'Activity',
    description: 'Investigate dynamic conformational transitions, protein-protein interactions, and membrane-bound complexes with high-performance GPU-accelerated molecular simulations.',
    servicesList: [
      'Molecular dynamics simulations (Solvated periodic boundary systems)',
      'Protein stability & conformational flexibility analysis',
      'Protein–ligand complex stability & residence time analysis',
      'RMSD (Root-Mean-Square Deviation) & RMSF (Fluctuation) profiling',
      'Radius of gyration (Rg) & compactness calculations',
      'Time-dependent Hydrogen-bond occupancy analysis',
      'Solvent Accessible Surface Area (SASA) dynamics',
      'Principal Component Analysis (PCA) & Free Energy Landscapes (FEL)',
      'Molecular Mechanics/Poisson-Boltzmann Surface Area (MM/PBSA)',
      'Molecular Mechanics/Generalized Born Surface Area (MM/GBSA)',
      'Protein tertiary structure analysis & active site volume mapping',
      'Homology modelling & AlphaFold-2 structure refinement',
      'Structure validation (Ramachandran plots, ERRAT, ProSa-Web)',
      'Protein–protein & Protein–peptide interface interaction mapping'
    ],
    toolsUsed: ['GROMACS', 'NAMD', 'AMBER', 'VMD', 'Bio3D', 'PyMOL', 'AlphaFold', 'Modeller'],
    deliverables: [
      'Processed Trajectory Files & Coordinate Snapshots',
      'Time-Evolution Plots (RMSD, RMSF, Rg, H-Bonds, SASA)',
      'Free Energy Landscape 2D/3D Contour Maps',
      'Binding Energy Decomposition Profiles per Residue'
    ]
  },
  {
    id: 'bioinformatics',
    title: 'Bioinformatics & Multi-Omics',
    subtitle: 'High-throughput sequence analytics, comparative genomics, transcriptomics and proteomics.',
    iconName: 'Cpu',
    description: 'Decode complex biological data into actionable scientific insights through robust computational workflows and statistical rigor.',
    servicesList: [
      'Genomics: Sequence quality trimming, assembly & variant calling',
      'Genome annotation & functional feature extraction',
      'Comparative genomics & synteny mapping across strains',
      'Transcriptomics: RNA-seq raw read alignment & quantification',
      'Differential Gene Expression (DGE) statistical modeling (DESeq2/EdgeR)',
      'Functional enrichment, Gene Ontology (GO) & KEGG Pathway analysis',
      'Volcano plots, Heatmaps & Gene set enrichment analysis (GSEA)',
      'Proteomics: Mass-spec raw data peptide identification & quantification',
      'Protein sequence alignment & conserved domain annotation',
      'Protein–protein interaction (PPI) network construction via STRING & Cytoscape',
      'Phylogenetic tree reconstruction (Maximum Likelihood, Bayesian)',
      'High-throughput BLAST searching & multiple sequence alignments (MSA)',
      'In silico primer design, specificity validation & restriction mapping',
      'Biological database mining (NCBI, UniProt, Ensembl, TCGA, GEO)'
    ],
    toolsUsed: ['R / Bioconductor', 'Python / Biopython', 'DESeq2', 'Cytoscape', 'MEGA', 'FastQC / Trimmomatic', 'BLAST+'],
    deliverables: [
      'Differential Expression Gene Tables with Log2FC & Adjusted p-values',
      'Interactive Clustered Heatmaps & Pathway Enrichment Visualizations',
      'Biological Network Topologies & Hub Protein Identification',
      'Reproducible R/Python Analysis Markdown Notebooks'
    ]
  },
  {
    id: 'chemistry',
    title: 'Chemistry & Analytical Research',
    subtitle: 'Expert spectral interpretation, structure elucidation, and chromatography analytics.',
    iconName: 'FlaskConical',
    description: 'Professional spectroscopic interpretation and analytical data breakdown for organic, synthetic, and natural product chemists.',
    servicesList: [
      '1H NMR interpretation (Chemical shifts, coupling constants, splitting patterns)',
      '13C NMR & DEPT-135/DEPT-90 structural validation',
      '2D NMR spectral interpretation: COSY, HSQC, HMBC, NOESY & ROESY',
      'Complex small-molecule & natural product structure elucidation',
      'FTIR spectrum band assignment & functional group verification',
      'UV-Vis spectroscopic wavelength analysis & bandgap assessment',
      'Mass spectrometry (HRMS / ESI-MS) fragment pattern elucidation',
      'LC-MS / HPLC chromatogram interpretation, peak purity & retention index',
      'GC-MS volatile constituent profiling & NIST library cross-validation',
      'Analytical method verification and spectral data compilation'
    ],
    toolsUsed: ['MestReNova', 'ChemDraw', 'OriginPro', 'NIST Mass Spectral Database', 'Gaussian'],
    deliverables: [
      'Peak-by-Peak Tabulated Assignment Tables',
      '2D Correlation Matrix Cross-Referenced Schematics',
      'Comprehensive Structure Elucidation Proof Report',
      'Publication-Ready Chemical Shift Summaries'
    ]
  },
  {
    id: 'medicinal-chemistry',
    title: 'Medicinal Chemistry & Drug Design',
    subtitle: 'From target validation to clinical candidate selection: Rational drug optimization workflows.',
    iconName: 'Network',
    description: 'Iterative medicinal chemistry design workflows driving hit identification, structure-activity relationship (SAR) deconvolution, and lead property optimization.',
    servicesList: [
      'Compound rational de novo design & bioisosteric replacement',
      'Structure–Activity Relationship (SAR) & Structure-Property (SPR) analysis',
      'Core scaffold analysis, R-group enumeration & library expansion',
      'Lead optimization for potency, selectivity, and metabolic stability',
      'Physicochemical property tuning (LogP, pKa, polar surface area, solubility)',
      'Early-stage toxicity & reactive metabolite prediction',
      'Chemical patent database mining & novelty cross-checks',
      'Synthetic accessibility score (SAS) evaluation'
    ],
    workflowSteps: [
      { step: '01. TARGET', title: 'Target Identification', desc: 'Biological target validation and druggable binding pocket mapping.' },
      { step: '02. HIT', title: 'Hit Discovery', desc: 'Virtual screening of diverse compound libraries to identify initial binders.' },
      { step: '03. LEAD', title: 'Lead Generation', desc: 'SAR exploration, chemical analogue design, and affinity optimization.' },
      { step: '04. OPTIMIZATION', title: 'Lead Optimization', desc: 'Refining ADMET properties, reducing toxicity, and enhancing selectivity.' },
      { step: '05. CANDIDATE', title: 'Preclinical Candidate', desc: 'Finalizing high-affinity, bioavailable small-molecule candidate profile.' }
    ],
    toolsUsed: ['RDKit', 'OpenBabel', 'SwissSimilarity', 'DataWarrior', 'ChEMBL API'],
    deliverables: [
      'SAR Roadmaps & Matched Molecular Pair Reports',
      'Optimized Analogue Library with Synthetic Feasibility Scores',
      'Multi-Parameter Optimization (MPO) Scorecard'
    ]
  },
  {
    id: 'biotechnology-lifesciences',
    title: 'Biotechnology & Life Sciences Analytics',
    subtitle: 'Specialized computational support, experimental design, and data interpretation.',
    iconName: 'TestTube2',
    description: 'Rigorous computational and data analysis support across molecular biology, microbiology, cell biology, and enzymology.',
    servicesList: [
      'Molecular Biology: Real-time qPCR data analysis (ΔΔCt method)',
      'Custom primer & probe design with thermodynamic stability check',
      'Recombinant plasmid construction & restriction enzyme mapping',
      'Microbiology: Growth curve mathematical modeling & kinetic parameter fitting',
      'Microbial whole genome annotation & metabolic pathway reconstruction',
      'Cell Biology: Quantitative cell viability, cytotoxicity & IC50 calculation',
      'Microscopy fluorescence image quantification & colocalization metrics',
      'Biochemistry: Enzyme kinetics analysis (Michaelis-Menten, Lineweaver-Burk, Ki/IC50)'
    ],
    deliverables: [
      'Statistically Verified qPCR Relative Expression Datasets',
      'Enzymatic Kinetic Profiles with Non-Linear Regression Fits',
      'ImageJ/Fiji Quantitative Cellular Image Datasets'
    ]
  },
  {
    id: 'scientific-writing',
    title: 'Scientific Writing & Research Publication Support',
    subtitle: 'Professional scientific editing, thesis refinement, and publication consulting for researchers.',
    iconName: 'FileText',
    description: 'Expert peer-level review and language editing by experienced researchers to ensure your manuscript meets rigorous international journal standards.',
    servicesList: [
      'High-Impact Research paper substantive editing',
      'Master’s thesis & PhD dissertation comprehensive editing',
      'Manuscript scientific English improvement & terminology precision',
      'Grammar, syntax, flow, and sentence correction',
      'Scientific clarity, logical transitions, and conciseness',
      'Abstract restructuring for maximum impact & indexing',
      'Introduction & Literature review critical synthesis refinement',
      'Materials & Methods reproducibility & protocol precision editing',
      'Results & Discussion logical flow and statistical narrative improvement',
      'Conclusion & future outlook sharp formulation',
      'Figure, scheme & table caption precision editing',
      'Target journal formatting (APA, IEEE, Elsevier, Nature, ACS, RSC, Springer)',
      'Reference management & bibliography citation validation (EndNote, Mendeley, Zotero)',
      'Reviewer-response letter structuring & rebuttals polishing',
      'Journal editor cover-letter drafting & highlights compilation',
      'Grant research proposal language & structure editing',
      'PhD synopsis & defense presentation slide preparation'
    ],
    deliverables: [
      'Tracked Changes Word Document + Clean Final Copy',
      'Editor Scientific Quality Review Summary & Suggestions',
      'Journal Style Compliance Certificate of Language Editing'
    ]
  }
];

export const COURSES_DATA: CourseItem[] = [
  {
    id: 'molecular-docking-featured',
    title: 'Molecular Docking: Beginner to Advanced',
    category: 'Computational Drug Discovery',
    level: 'All Levels',
    duration: '4 Weeks',
    classesCount: '8–10 Live Interactive Classes',
    mode: 'Live Online + Hands-on Lab Sessions',
    isFeatured: true,
    certificateIncluded: true,
    nextBatch: 'Upcoming Weekend Batch',
    description: 'Comprehensive, hands-on training mastering protein preparation, binding site prediction, flexible ligand docking, virtual screening workflows, and publication-ready 3D rendering.',
    curriculum: [
      'Module 1: Principles of Rational Drug Discovery & Target Selection',
      'Module 2: Protein Crystallography Basics & PDB Structure Preparation',
      'Module 3: Ligand 3D Conformer Generation & Energy Minimization',
      'Module 4: Binding Site & Catalytic Pocket Identification (CASTp/DoGSiteScorer)',
      'Module 5: Rigid & Flexible Molecular Docking with AutoDock & Vina',
      'Module 6: High-Throughput Virtual Screening of Small Molecule Libraries',
      'Module 7: 2D/3D Ligand-Receptor Interaction Mapping & Hydrogen Bonding Analysis',
      'Module 8: Free Energy of Binding Interpretation & MM/GBSA Basics',
      'Module 9: Creating Publication-Quality Visuals with PyMOL and Discovery Studio',
      'Module 10: Capstone Project: End-to-end Target Docking Case Study with Mentorship'
    ],
    skillsGained: [
      'AutoDock Vina',
      'PyMOL 3D Graphics',
      'OpenBabel',
      'SwissADME',
      'Binding Energy Scoring',
      'Publication Figure Design'
    ],
    software: ['AutoDock Vina', 'PyMOL', 'Discovery Studio Visualizer', 'OpenBabel', 'SwissDock']
  },
  {
    id: 'computational-drug-discovery-mastery',
    title: 'Computational Drug Discovery & SBDD',
    category: 'Drug Discovery',
    level: 'Intermediate',
    duration: '6 Weeks',
    classesCount: '12 Live Sessions',
    mode: 'Live Online + Projects',
    certificateIncluded: true,
    nextBatch: 'Starting Soon',
    description: 'Master structure-based and ligand-based drug design pipelines, pharmacophore modeling, QSAR, and virtual screening of chemical libraries.',
    curriculum: [
      'Target Druggability Analysis & Cavity Detection',
      'Pharmacophore Model Generation & Validation',
      '2D & 3D Quantitative Structure-Activity Relationships (QSAR)',
      'Virtual Screening on Multi-Million Compound Databases (ZINC, PubChem)',
      'ADMET Profiling & Bioavailability Scoring'
    ],
    skillsGained: ['SBDD', 'LBDD', 'Pharmacophore', '3D-QSAR', 'Compound Screening'],
    software: ['AutoDock Vina', 'RDKit', 'DataWarrior', 'SwissSimilarity']
  },
  {
    id: 'molecular-dynamics-simulation',
    title: 'Molecular Dynamics Simulation with GROMACS',
    category: 'Structural Biology',
    level: 'Advanced',
    duration: '6 Weeks',
    classesCount: '12 Live Sessions',
    mode: 'Live Online + GPU Server Access',
    certificateIncluded: true,
    nextBatch: 'Starting Soon',
    description: 'Learn step-by-step setup, equilibration, production runs, and deep trajectory analysis of protein and protein-ligand systems using GROMACS.',
    curriculum: [
      'Introduction to Classical Mechanics & Force Fields (CHARMM, AMBER, OPLS)',
      'System Setup: Solvation, Neutralization, and Topology Generation',
      'Energy Minimization & NVT/NPT Equilibration Protocols',
      'Production Runs & High-Performance GPU Acceleration',
      'Trajectory Post-Processing: RMSD, RMSF, Radius of Gyration, SASA',
      'Hydrogen Bonding Dynamics, PCA, and Free Energy Landscapes (FEL)',
      'Binding Free Energy Calculations using MM/PBSA and MM/GBSA'
    ],
    skillsGained: ['GROMACS', 'VMD', 'Linux Shell', 'Trajectory Analysis', 'MM/PBSA Free Energy'],
    software: ['GROMACS', 'VMD', 'Grace/Gnuplot', 'g_mmpbsa']
  },
  {
    id: 'bioinformatics-genomics',
    title: 'Bioinformatics & Next-Generation Sequencing (NGS)',
    category: 'Bioinformatics',
    level: 'Intermediate',
    duration: '5 Weeks',
    classesCount: '10 Live Sessions',
    mode: 'Live Online + Cloud Practice',
    certificateIncluded: true,
    nextBatch: 'Starting Soon',
    description: 'Comprehensive workflow for processing RNA-seq, differential gene expression, GO/KEGG functional enrichment, and protein-protein interaction networks.',
    curriculum: [
      'Linux Command-Line Essentials for Bioinformaticians',
      'NGS Quality Control: FastQC, Trimmomatic, and Read Alignment (HISAT2/STAR)',
      'Transcriptome Assembly & Read Quantification with FeatureCounts',
      'Differential Expression Analysis using DESeq2 in R',
      'Functional Annotation: GO Enrichment, KEGG Pathways, and GSEA',
      'Protein-Protein Interaction Networks with STRING and Cytoscape'
    ],
    skillsGained: ['RNA-seq Analysis', 'DESeq2', 'R Programming', 'Cytoscape Networks', 'Functional Enrichment'],
    software: ['RStudio', 'DESeq2', 'Cytoscape', 'FastQC', 'Samtools']
  },
  {
    id: 'python-for-biologists',
    title: 'Python for Life Sciences & Data Analysis',
    category: 'Programming & Data Science',
    level: 'Beginner',
    duration: '4 Weeks',
    classesCount: '8 Live Sessions',
    mode: 'Live Online + Code Repos',
    certificateIncluded: true,
    nextBatch: 'Starting Soon',
    description: 'Practical programming fundamentals tailored specifically for biologists and chemists—automate data parsing, manipulate sequences, and plot scientific figures.',
    curriculum: [
      'Python Basics: Variables, Loops, Conditionals, and File I/O',
      'Biopython: Parsing FASTA, GenBank, and PDB files',
      'Data Manipulation with Pandas & NumPy for Experimental Tables',
      'Publication-Quality Plotting with Matplotlib and Seaborn',
      'Building Automated Scientific Pipelines'
    ],
    skillsGained: ['Python 3', 'Biopython', 'Pandas', 'Seaborn Plotting', 'FASTA Parsing'],
    software: ['Jupyter Notebook', 'VS Code', 'Biopython', 'Pandas']
  },
  {
    id: 'nmr-data-interpretation',
    title: 'NMR & Analytical Spectral Interpretation',
    category: 'Chemistry & Pharmacy',
    level: 'Intermediate',
    duration: '4 Weeks',
    classesCount: '8 Live Sessions',
    mode: 'Live Online + Case Studies',
    certificateIncluded: true,
    nextBatch: 'Starting Soon',
    description: 'Master structure elucidation of organic molecules and pharmaceuticals using 1D (1H, 13C) and 2D NMR (COSY, HSQC, HMBC, NOESY) combined with Mass Spec.',
    curriculum: [
      'Chemical Shifts, Multiplicities, and Coupling Constants in 1H NMR',
      '13C NMR & DEPT Subspectral Editing',
      '2D Homonuclear Correlations: COSY and TOCSY',
      '2D Heteronuclear Correlations: HSQC and HMBC Interpretation',
      'Mass Spectrometry Fragmentation & FTIR Fingerprinting',
      'Solving Unknown Structures: Real-World Case Studies'
    ],
    skillsGained: ['1D/2D NMR Interpretation', 'Structure Elucidation', 'MestReNova', 'MS Fragmentation'],
    software: ['MestReNova', 'ChemDraw']
  },
  {
    id: 'ai-ml-in-drug-discovery',
    title: 'AI & Machine Learning in Drug Discovery',
    category: 'Computational Biology',
    level: 'Advanced',
    duration: '5 Weeks',
    classesCount: '10 Live Sessions',
    mode: 'Live Online + Python Notebooks',
    certificateIncluded: true,
    nextBatch: 'Starting Soon',
    description: 'Explore generative AI models for de novo molecule generation, graph neural networks (GNN) for molecular property prediction, and AlphaFold-2 modeling.',
    curriculum: [
      'Molecular Representations: SMILES, InChI, and Molecular Fingerprints (ECFP4)',
      'Supervised Learning for QSAR & Property Prediction (Scikit-Learn/XGBoost)',
      'Graph Neural Networks (GNNs) for Molecular Graphs using PyTorch Geometric',
      'Generative Deep Learning for De Novo Molecule Generation',
      'AlphaFold-2 Structure Prediction & ESMFold Protein Language Models'
    ],
    skillsGained: ['Molecular ML', 'PyTorch Geometric', 'RDKit', 'AlphaFold-2', 'Generative Chemistry'],
    software: ['PyTorch', 'RDKit', 'DeepChem', 'Google Colab GPU']
  },
  {
    id: 'scientific-writing-masterclass',
    title: 'Scientific Writing & High-Impact Publication',
    category: 'Academic Development',
    level: 'All Levels',
    duration: '3 Weeks',
    classesCount: '6 Live Sessions',
    mode: 'Live Interactive Workshop',
    certificateIncluded: true,
    nextBatch: 'Starting Soon',
    description: 'Step-by-step masterclass on drafting, structuring, and publishing peer-reviewed research papers in indexed journals (SCI/Scopus/Nature/ACS/Elsevier).',
    curriculum: [
      'Selecting High-Impact Target Journals & Understanding Aims & Scope',
      'Drafting Compelling Titles, Impactful Abstracts, and Clear Keywords',
      'Structuring the Narrative: Introduction, Methods, Results & Discussion',
      'Design Rules for Publication-Grade Figures, Schemes, and Tables',
      'Reference Management with Zotero/EndNote & Citation Ethics',
      'Navigating Peer Review: Crafting Professional Rebuttal Letters'
    ],
    skillsGained: ['Manuscript Drafting', 'Peer Review Handling', 'Journal Selection', 'Scientific English'],
    software: ['Zotero', 'Mendeley', 'Grammarly Pro', 'Overleaf / LaTeX']
  }
];

export const WORKSHOPS_DATA: WorkshopItem[] = [
  {
    id: 'ws-molecular-docking',
    title: 'Introduction to Molecular Docking & AutoDock Vina',
    category: 'Drug Discovery',
    duration: '2 Days (4 Hours)',
    mode: 'Live Online Hands-on',
    targetAudience: 'B.Sc., M.Sc., B.Pharm, M.Pharm, PhD scholars',
    priceSample: '₹499 (Example Tier)',
    funnelTier: '₹499 Workshop',
    highlights: ['Live software demonstration', 'Hands-on practice files', 'Certificate of Participation', 'Q&A with IITian Mentors']
  },
  {
    id: 'ws-protein-structure',
    title: 'How to Read & Analyze a Protein Structure in PDB',
    category: 'Structural Biology',
    duration: '1 Day (2.5 Hours)',
    mode: 'Live Interactive Session',
    targetAudience: 'Life Sciences & Biotech students',
    priceSample: '₹299 (Example Tier)',
    funnelTier: '₹499 Workshop',
    highlights: ['PDB Header analysis', 'Ramachandran validation', 'PyMOL visualization basics', 'Pocket identification']
  },
  {
    id: 'ws-nmr-analysis',
    title: 'How to Analyze 1D & 2D NMR Spectra for Structure Proof',
    category: 'Chemistry',
    duration: '2 Days (4 Hours)',
    mode: 'Live Online Hands-on',
    targetAudience: 'Chemistry & Pharmacy students & researchers',
    priceSample: '₹599 (Example Tier)',
    funnelTier: '₹499 Workshop',
    highlights: ['1H & 13C chemical shift tables', 'COSY & HSQC matching', 'Real spectral practice datasets']
  },
  {
    id: 'ws-molecular-dynamics',
    title: 'Introduction to Molecular Dynamics Simulation',
    category: 'Computational Biology',
    duration: '2 Days (5 Hours)',
    mode: 'Live Online Hands-on',
    targetAudience: 'Postgraduates, PhD Scholars & Faculty',
    priceSample: '₹799 (Example Tier)',
    funnelTier: '₹499 Workshop',
    highlights: ['GROMACS workflow breakdown', 'RMSD/RMSF calculation', 'Trajectory visualization in VMD']
  },
  {
    id: 'ws-research-topic',
    title: 'How to Find an Impactful Research Topic for MSc/PhD',
    category: 'Research Methodology',
    duration: '1 Day (2 Hours)',
    mode: 'Live Interactive',
    targetAudience: 'Graduating students & aspiring PhD scholars',
    priceSample: 'Free / ₹299',
    funnelTier: 'Free Webinar',
    highlights: ['Identifying research gaps', 'Literature matrix method', 'Feasibility evaluation framework']
  },
  {
    id: 'ws-read-paper',
    title: 'How to Critically Read & Dissect a Research Paper',
    category: 'Research Skills',
    duration: '1 Day (2 Hours)',
    mode: 'Live Interactive',
    targetAudience: 'Early-career researchers & students',
    priceSample: 'Free / ₹299',
    funnelTier: 'Free Webinar',
    highlights: ['3-pass reading methodology', 'Evaluating statistical rigor', 'Extracting actionable protocols']
  },
  {
    id: 'ws-scientific-manuscript',
    title: 'How to Write a Scientific Manuscript for Indexed Journals',
    category: 'Scientific Writing',
    duration: '2 Days (4 Hours)',
    mode: 'Live Interactive Session',
    targetAudience: 'PhD scholars, Faculty, Research Fellows',
    priceSample: '₹699 (Example Tier)',
    funnelTier: '₹499 Workshop',
    highlights: ['IMRaD structure mastery', 'Results & Discussion synthesis', 'Overcoming rejection factors']
  },
  {
    id: 'ws-research-proposal',
    title: 'How to Prepare a Winning Research Proposal for PhD & Grants',
    category: 'Career & Funding',
    duration: '2 Days (3.5 Hours)',
    mode: 'Live Interactive',
    targetAudience: 'PhD Applicants & Early-career Faculty',
    priceSample: '₹599 (Example Tier)',
    funnelTier: '₹499 Workshop',
    highlights: ['Statement of Purpose (SOP)', 'Budgeting & timeline GANTT', 'Reviewer evaluation criteria']
  },
  {
    id: 'ws-pubchem-pdb',
    title: 'Mastering Chemical & Biological Databases: PubChem & PDB',
    category: 'Bioinformatics & Chemistry',
    duration: '1 Day (2.5 Hours)',
    mode: 'Hands-on Demo',
    targetAudience: 'Biotechnology, Chemistry & Pharmacy students',
    priceSample: 'Free / ₹299',
    funnelTier: 'Free Webinar',
    highlights: ['Advanced query syntax', 'Bioassay data mining', 'Extracting ligands and co-factors']
  }
];

export const LIVE_CLASSES_SCHEDULE: LiveClassItem[] = [
  {
    id: 'lc-1',
    title: 'Receptor Cavity Mapping & Grid Generation in AutoDock',
    course: 'Molecular Docking: Beginner to Advanced',
    domain: 'Drug Discovery',
    date: 'Saturday, Upcoming Weekend',
    time: '06:30 PM – 08:30 PM IST',
    instructorRole: 'IITian Computational Biologist',
    seatsTotal: 40,
    seatsBooked: 34,
    mode: 'Live Zoom Interactive + Screen Share',
    status: 'Filling Fast'
  },
  {
    id: 'lc-2',
    title: 'Solvation and Periodic Boundary Conditions in GROMACS',
    course: 'Molecular Dynamics Simulation with GROMACS',
    domain: 'Structural Biology',
    date: 'Sunday, Upcoming Weekend',
    time: '11:00 AM – 01:00 PM IST',
    instructorRole: 'Computational Biophysicist',
    seatsTotal: 30,
    seatsBooked: 26,
    mode: 'Live Online + Terminal Coding',
    status: 'Filling Fast'
  },
  {
    id: 'lc-3',
    title: 'RNA-seq Differential Gene Expression Modeling in DESeq2',
    course: 'Bioinformatics & Next-Generation Sequencing',
    domain: 'Bioinformatics',
    date: 'Tuesday, Next Week',
    time: '07:00 PM – 09:00 PM IST',
    instructorRole: 'Genomics Data Specialist',
    seatsTotal: 35,
    seatsBooked: 20,
    mode: 'Live RStudio Hands-on',
    status: 'Open'
  },
  {
    id: 'lc-4',
    title: 'Deconstructing 2D HMBC & HSQC for Unknown Alkaloids',
    course: 'NMR & Analytical Spectral Interpretation',
    domain: 'Chemistry',
    date: 'Thursday, Next Week',
    time: '07:30 PM – 09:30 PM IST',
    instructorRole: 'Medicinal Chemist (IIT Alum)',
    seatsTotal: 30,
    seatsBooked: 18,
    mode: 'Live Spectral Interpretation',
    status: 'Open'
  },
  {
    id: 'lc-5',
    title: 'Writing Impactful Results & Discussion Sections for Q1 Journals',
    course: 'Scientific Writing Masterclass',
    domain: 'Scientific Writing',
    date: 'Saturday, Next Week',
    time: '05:00 PM – 07:00 PM IST',
    instructorRole: 'Senior Scientific Editor',
    seatsTotal: 50,
    seatsBooked: 45,
    mode: 'Live Interactive Review',
    status: 'Filling Fast'
  },
  {
    id: 'lc-6',
    title: 'PhD Application Strategy: Emailing Supervisors & SOP Framing',
    course: 'PhD Career Guidance Series',
    domain: 'Career',
    date: 'Sunday, Next Week',
    time: '04:00 PM – 06:00 PM IST',
    instructorRole: 'IIT / Postdoc Research Mentor',
    seatsTotal: 60,
    seatsBooked: 52,
    mode: 'Live Mentorship Clinic',
    status: 'Filling Fast'
  }
];

export const WEBINARS_DATA: WebinarItem[] = [
  {
    id: 'web-1',
    title: 'Modern Computational Pipelines in Small Molecule Drug Discovery',
    speaker: 'Researcho Mentor Panel (IIT & Industry)',
    speakerAffiliation: 'Researcho Technical Team',
    date: 'Upcoming Sunday',
    time: '05:00 PM – 06:30 PM IST',
    domain: 'Drug Discovery',
    type: 'Upcoming',
    summary: 'An insightful overview of high-throughput virtual screening, machine learning scoring functions, and molecular dynamics validation in modern pharmaceutical R&D.',
    registrationOpen: true
  },
  {
    id: 'web-2',
    title: 'Navigating PhD & Postdoctoral Opportunities Abroad (USA/Europe)',
    speaker: 'International Research Fellows Panel',
    speakerAffiliation: 'Researcho Career Hub',
    date: 'Upcoming Month',
    time: '07:00 PM – 08:30 PM IST',
    domain: 'Career Guidance',
    type: 'Upcoming',
    summary: 'Essential strategies for securing fully-funded PhD positions, crafting research statements, identifying compatible labs, and mastering academic interviews.',
    registrationOpen: true
  },
  {
    id: 'web-3',
    title: 'From FastQ to Biological Insight: RNA-seq Essentials',
    speaker: 'Bioinformatics Lead',
    speakerAffiliation: 'Researcho Academy',
    date: 'Previous Session Archive',
    time: 'Archive Recording Available',
    domain: 'Bioinformatics',
    type: 'Recorded',
    recordingUrl: '#',
    summary: 'Mastering the fundamental bioinformatics workflow for transcriptomic datasets: read alignment, quality control metrics, and statistical significance.',
    registrationOpen: false
  },
  {
    id: 'web-4',
    title: 'Demystifying 2D NMR Correlations in Complex Natural Products',
    speaker: 'Analytical Chemistry Consultant',
    speakerAffiliation: 'Researcho Chemistry Division',
    date: 'Previous Session Archive',
    time: 'Archive Recording Available',
    domain: 'Chemistry',
    type: 'Recorded',
    recordingUrl: '#',
    summary: 'Step-by-step case study unraveling unknown polyketide structures using COSY, HSQC, and HMBC cross-peak connectivity analysis.',
    registrationOpen: false
  }
];

export const CAREER_PROGRAMS: CareerProgram[] = [
  {
    id: 'academic-guidance',
    title: 'Academic Degree Transitions (MSc → PhD | BTech → MS/PhD | MPharm → PhD)',
    category: 'Academic Guidance',
    targetAudience: ['B.Sc. & M.Sc. Students', 'B.Tech & M.Tech Biotechnology', 'B.Pharm & M.Pharm Students', 'Early-Career Scholars'],
    summary: 'Structured roadmap guidance helping life science and pharmacy students transition smoothly into premier national and international PhD programs.',
    keyOfferings: [
      'Comprehensive research domain exploration based on candidate interests',
      'Mapping university departments and funded research groups in India & Abroad',
      'Review of fundamental academic CV and highlighting relevant project work',
      'Formulating clear research interests and initial project ideas'
    ]
  },
  {
    id: 'phd-guidance',
    title: 'PhD Journey Guidance & Lab Selection Strategy',
    category: 'PhD Guidance',
    targetAudience: ['Aspiring PhD Scholars', 'First/Second Year PhD Candidates', 'Junior Research Fellows (JRF)'],
    summary: 'Critical strategic support for selecting the right research lab, approaching prospective Principal Investigators (PIs), and structuring sound proposals.',
    keyOfferings: [
      'PI research profile analysis and recent publication trajectory review',
      'Cold email formulation with tailored academic inquiry letters',
      'Independent research proposal framing and hypothesis construction',
      'PhD defense synopsis refinement and presentation structure'
    ]
  },
  {
    id: 'international-careers',
    title: 'International Research Careers & Postdoc Pathways',
    category: 'International Research',
    targetAudience: ['PhD Candidates', 'Postdoctoral Scholars', 'Senior Research Fellows (SRF)'],
    summary: 'Expert mentoring for researchers aiming for prestigious international fellowships (Marie Skłodowska-Curie, Humboldt, NIH, JSPS, EMBO) and overseas postdocs.',
    keyOfferings: [
      'Fellowship proposal structuring and scientific narrative polish',
      'Academic CV alignment with international standards (European / US format)',
      'Cover letter tailored to international laboratory cultures',
      'Mock interview preparation for faculty and postdoc committees'
    ]
  },
  {
    id: 'industry-careers',
    title: 'Industry Pathways (Biotech, Pharma, CRO, Bioinformatics)',
    category: 'Industry Careers',
    targetAudience: ['Life Science Graduates', 'M.Pharm / M.Sc. Job Seekers', 'Transitioning PhDs'],
    summary: 'Bridge the academic-to-industry divide by aligning scientific skills with high-demand commercial R&D roles in biotechnology, pharmaceutical formulations, and computational biology.',
    keyOfferings: [
      'Industry-ready technical resume transformation highlighting computational tools',
      'Role breakdown: Computational Chemist, Bioinformatics Analyst, Clinical Data Specialist',
      'Portfolio preparation showcasing computational research projects and docking case studies',
      'Technical interview coaching on scientific methodology'
    ]
  }
];

export const RESEARCH_RESOURCES: ResourceItem[] = [
  {
    id: 'res-pdb',
    title: 'Mastering the Protein Data Bank (PDB): Advanced Querying & Validation',
    category: 'Databases & Tools',
    toolType: 'Database Guide',
    readTime: '8 min read',
    tags: ['PDB', 'Structural Biology', 'X-Ray', 'Cryo-EM'],
    description: 'Learn how to read PDB headers, verify resolution and R-factor, detect missing residues, and choose the most reliable crystal structure for docking simulations.',
    quickSnippet: 'Resolution < 2.0 Å indicates high quality. Always check Ramachandran statistics and ligand coordinate validation before running docking.',
    externalDocsUrl: 'https://www.rcsb.org'
  },
  {
    id: 'res-pubchem',
    title: 'PubChem & ChEMBL: Mining Bioactivity Data & Chemical Structures',
    category: 'Databases & Tools',
    toolType: 'Chemical Database',
    readTime: '6 min read',
    tags: ['PubChem', 'ChEMBL', 'Bioassay', 'SMILES'],
    description: 'Practical guide to querying small molecule databases, retrieving canonical SMILES strings, extracting IC50/Ki bioassay data, and downloading 3D conformers for screening.',
    quickSnippet: 'Use PubChem PUG-REST API or ChEMBL web interface to retrieve compound libraries filtered by Lipinski Rule of 5 violations.',
    externalDocsUrl: 'https://pubchem.ncbi.nlm.nih.gov'
  },
  {
    id: 'res-blast',
    title: 'BLAST & Multiple Sequence Alignment: In-Depth Parameter Guide',
    category: 'Bioinformatics',
    toolType: 'Algorithm Tutorial',
    readTime: '10 min read',
    tags: ['BLAST', 'Clustal Omega', 'E-Value', 'Homology'],
    description: 'Understanding Expectation Value (E-value), substitution matrices (BLOSUM62 vs PAM250), and gap penalty adjustments for accurate sequence homology search.',
    quickSnippet: 'Lower E-values (< 1e-5) signify statistically significant biological matches, not just random sequence similarity.',
    externalDocsUrl: 'https://blast.ncbi.nlm.nih.gov'
  },
  {
    id: 'res-docking-protocol',
    title: 'Standard Operating Protocol (SOP) for AutoDock Vina Docking',
    category: 'Drug Discovery',
    toolType: 'Protocol Cheat Sheet',
    readTime: '12 min read',
    tags: ['AutoDock Vina', 'Grid Box', 'Exhaustiveness', 'Ligand Prep'],
    description: 'A reproducible checklist covering protonation states, Gasteiger charges, receptor grid box centering, exhaustiveness settings, and root-mean-square deviation (RMSD) clustering.',
    quickSnippet: 'Set exhaustiveness=16 or 32 for thorough conformational search. Always validate the protocol by re-docking co-crystallized ligands.',
    externalDocsUrl: 'https://vina.scripps.edu'
  },
  {
    id: 'res-gromacs-commands',
    title: 'Essential GROMACS Command Reference for Protein-in-Water Simulations',
    category: 'Computational Biology',
    toolType: 'Command Reference',
    readTime: '9 min read',
    tags: ['GROMACS', 'Linux', 'Force Field', 'Solvation'],
    description: 'Quick cheat sheet of core GROMACS commands: pdb2gmx, editconf, solvate, genion, grompp, mdrun, and trajectory analysis modules (gmx rms, gmx rmsf, gmx gyrate).',
    quickSnippet: 'gmx pdb2gmx -f protein.pdb -o processed.gro -water spce -ignh (Generates topology using SPC/E water and ignores existing hydrogens).'
  },
  {
    id: 'res-swissadme',
    title: 'Interpreting SwissADME: Pharmacokinetics & Bioavailability Radar',
    category: 'Drug Discovery',
    toolType: 'Tool Tutorial',
    readTime: '7 min read',
    tags: ['SwissADME', 'Lipinski', 'BOILED-Egg', 'CYP450'],
    description: 'How to interpret the BOILED-Egg model for gastrointestinal absorption and blood-brain barrier (BBB) permeation, P-glycoprotein substrate status, and CYP450 inhibition profiles.',
    quickSnippet: 'The BOILED-Egg graphical plot simultaneously predicts HIA (Human Intestinal Absorption) and BBB permeation based on WLOGP and TPSA.'
  },
  {
    id: 'res-nmr-shifts',
    title: 'Characteristic 1H & 13C NMR Chemical Shift Reference Chart',
    category: 'Chemistry',
    toolType: 'Reference Chart',
    readTime: '5 min read',
    tags: ['NMR', 'Chemical Shift', 'Spectroscopy', 'Proton'],
    description: 'Quick lookup tables for common functional groups in organic synthesis: aliphatic, aromatic, aldehyde, carboxylic acid, and olefinic proton/carbon shifts in CDCl3 and DMSO-d6.',
    quickSnippet: 'Aldehyde protons: δ 9.0–10.0 ppm; Aromatic protons: δ 6.5–8.5 ppm; Carboxylic acid OH: δ 10.5–12.5 ppm.'
  },
  {
    id: 'res-scientific-writing-checklist',
    title: 'Pre-Submission Manuscript Self-Audit Checklist for SCI Journals',
    category: 'Scientific Writing',
    toolType: 'Author Checklist',
    readTime: '8 min read',
    tags: ['Publishing', 'Peer Review', 'Journal Formatting', 'Author Guide'],
    description: 'Ensure your manuscript avoids immediate desk rejection. A 20-point quality audit checklist covering title specificity, structured abstract, data reproducibility, figure legibility, and reference accuracy.',
    quickSnippet: 'Check that every figure and table is cited in sequential numerical order in the body text before submitting to Elsevier, ACS, or Springer.'
  }
];

export const TRUST_PILLARS = [
  {
    id: 'research-focused',
    title: 'Research-Focused',
    icon: 'Target',
    description: 'Designed around real research workflows and scientific problem solving rather than superficial theoretical overviews.'
  },
  {
    id: 'practical-learning',
    title: 'Practical Learning',
    icon: 'Terminal',
    description: 'Hands-on training using standard open-source and professional scientific software tools rather than only theoretical lectures.'
  },
  {
    id: 'interdisciplinary',
    title: 'Interdisciplinary',
    icon: 'Layers',
    description: 'Bridging biotechnology, chemistry, pharmacy, computational biology and rational drug discovery into one cohesive platform.'
  },
  {
    id: 'research-mentorship',
    title: 'Research Mentorship',
    icon: 'Compass',
    description: 'Dedicated guidance for students, scholars and early-career researchers at critical academic and professional crossroads.'
  },
  {
    id: 'technical-expertise',
    title: 'Technical Expertise',
    icon: 'Cpu',
    description: 'Advanced computational modelling, high-throughput analytics, and spectroscopic interpretation led by researchers from premier institutes.'
  },
  {
    id: 'one-ecosystem',
    title: 'Research Ecosystem for Collaboration',
    icon: 'ShieldCheck',
    description: 'Learn, conduct research, foster scientific collaboration and develop your career in one place: LEARN → RESEARCH → COLLABORATE → CAREER.'
  }
];

export const PRICING_FUNNEL_STEPS = [
  {
    stage: '1. Free Webinar',
    tag: 'EXPLORE',
    price: 'Free',
    desc: 'Introductory scientific sessions & overview of cutting-edge research trends.',
    features: ['Live Q&A Session', 'Concept Demonstration', 'Certificate of Attendance']
  },
  {
    stage: '2. ₹499 Workshop',
    tag: 'PRACTICAL',
    price: '₹299 – ₹999',
    desc: 'Hands-on weekend workshops focusing on specific software tools and protocols.',
    features: ['Live Hands-on Coding/Docking', 'Curated Practice Datasets', 'Protocol Reference Guide']
  },
  {
    stage: '3. ₹4,999 Course',
    tag: 'IN-DEPTH',
    price: 'Comprehensive Course',
    desc: '4 to 6-week intensive masterclasses with multiple live classes and case studies.',
    features: ['8–12 Live Interactive Classes', 'Capstone Research Project', 'Verified Certificate of Completion', 'Direct Faculty Doubt Sessions']
  },
  {
    stage: '4. Advanced Training',
    tag: 'MASTERY',
    price: 'Personalized Program',
    desc: 'Customized 1-on-1 project mentorship and institutional research consulting.',
    features: ['Dedicated Technical Mentor', 'Publication-Focused Analytics', 'Tailored Research Pipeline Support']
  }
];
