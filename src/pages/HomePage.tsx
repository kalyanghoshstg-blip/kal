import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FoundingMembersSection } from '../components/home/FoundingMembersSection';
import { ScientificDomainsSection } from '../components/home/ScientificDomainsSection';
import { JourneyPillarsSection } from '../components/home/JourneyPillarsSection';
import { ResearchServicesSection } from '../components/home/ResearchServicesSection';
import { AcademySection } from '../components/home/AcademySection';
import { WebinarsSection } from '../components/home/WebinarsSection';
import { ProjectMentorshipSection } from '../components/home/ProjectMentorshipSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { FinalCTASection } from '../components/home/FinalCTASection';
import { PageView } from '../types';

interface HomePageProps {
  onNavigate: (view: PageView, anchorId?: string) => void;
  onOpenConsultation: (researchArea?: string, projectType?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <HeroSection 
        onNavigate={onNavigate} 
        onOpenConsultation={onOpenConsultation} 
      />

      {/* 2. Founding Members Section */}
      <FoundingMembersSection 
        onNavigate={onNavigate} 
        onOpenConsultation={onOpenConsultation} 
        showMarketingChair={false}
      />

      {/* 3. Scientific Domains */}
      <ScientificDomainsSection 
        onNavigate={onNavigate} 
        onOpenConsultation={onOpenConsultation} 
      />

      {/* 4. LEARN → RESEARCH → CAREER Pillars */}
      <JourneyPillarsSection 
        onNavigate={onNavigate} 
      />

      {/* 5. Advanced Research Services Hub */}
      <ResearchServicesSection 
        onNavigate={onNavigate} 
        onOpenConsultation={onOpenConsultation} 
      />

      {/* 6. Researcho Academy (Featured Course, Advanced Courses, Workshops & Funnel) */}
      <AcademySection 
        onNavigate={onNavigate} 
        onOpenConsultation={onOpenConsultation} 
      />

      {/* 7. Webinars */}
      <WebinarsSection 
        onNavigate={onNavigate} 
        onOpenConsultation={onOpenConsultation} 
      />

      {/* 8. Final-Year Project Mentorship */}
      <ProjectMentorshipSection 
        onNavigate={onNavigate} 
        onOpenConsultation={onOpenConsultation} 
      />

      {/* 10. Why Researchers Choose Researcho */}
      <WhyChooseUsSection 
        onNavigate={onNavigate} 
        onOpenConsultation={() => onOpenConsultation()} 
      />

      {/* 11. Final CTA */}
      <FinalCTASection 
        onNavigate={onNavigate} 
        onOpenConsultation={() => onOpenConsultation()} 
      />
    </div>
  );
};
