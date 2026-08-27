export type PageView = 
  | 'home'
  | 'services'
  | 'computational-drug-discovery'
  | 'molecular-dynamics'
  | 'bioinformatics'
  | 'chemistry'
  | 'medicinal-chemistry'
  | 'scientific-writing'
  | 'training'
  | 'live-classes'
  | 'webinars'
  | 'mentors'
  | 'career-guidance'
  | 'project-mentorship'
  | 'resources'
  | 'about'
  | 'contact'
  | 'consultation'
  | 'collaboration';

export interface ScientificDomain {
  id: string;
  name: string;
  icon: string;
  badge: string;
  description: string;
  keyTopics: string[];
  color: string;
  gradient: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  badge?: string;
  subtitle: string;
  iconName: string;
  isFlagship?: boolean;
  description: string;
  servicesList: string[];
  workflowSteps?: { step: string; title: string; desc: string }[];
  deliverables?: string[];
  toolsUsed?: string[];
}

export interface CourseItem {
  id: string;
  title: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string;
  classesCount: string;
  mode: string;
  description: string;
  curriculum: string[];
  skillsGained: string[];
  software: string[];
  isFeatured?: boolean;
  certificateIncluded: boolean;
  nextBatch: string;
}

export interface WorkshopItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  mode: string;
  targetAudience: string;
  priceSample: string;
  highlights: string[];
  funnelTier: 'Free Webinar' | '₹499 Workshop' | '₹4,999 Course' | 'Advanced Training';
}

export interface LiveClassItem {
  id: string;
  title: string;
  course: string;
  domain: string;
  date: string;
  time: string;
  instructorRole: string;
  seatsTotal: number;
  seatsBooked: number;
  mode: string;
  status: 'Open' | 'Filling Fast' | 'Closed';
}

export interface WebinarItem {
  id: string;
  title: string;
  speaker: string;
  speakerAffiliation: string;
  date: string;
  time: string;
  domain: string;
  type: 'Upcoming' | 'Recorded';
  recordingUrl?: string;
  summary: string;
  registrationOpen: boolean;
}

export interface CareerProgram {
  id: string;
  title: string;
  category: 'Academic Guidance' | 'PhD Guidance' | 'International Research' | 'Industry Careers';
  targetAudience: string[];
  summary: string;
  keyOfferings: string[];
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Databases & Tools' | 'Computational Biology' | 'Drug Discovery' | 'Bioinformatics' | 'Chemistry' | 'Scientific Writing' | 'Methodology';
  description: string;
  toolType: string;
  readTime: string;
  tags: string[];
  quickSnippet?: string;
  externalDocsUrl?: string;
}

export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  institution: string;
  degreeOrPosition: string;
  researchArea: string;
  projectType: string;
  description: string;
  fileName?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  institution: string;
  subject: string;
  message: string;
}
