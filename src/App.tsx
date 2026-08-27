/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ConsultationModal } from './components/common/ConsultationModal';
import { FloatingActionWidget } from './components/common/FloatingActionWidget';
import { HomePage } from './pages/HomePage';
import { AboutView } from './components/views/AboutView';
import { ContactView } from './components/views/ContactView';
import { ResearchServicesSection } from './components/home/ResearchServicesSection';
import { AcademySection } from './components/home/AcademySection';
import { LiveClassesSection } from './components/home/LiveClassesSection';
import { WebinarsSection } from './components/home/WebinarsSection';
import { CareerHubSection } from './components/home/CareerHubSection';
import { ProjectMentorshipSection } from './components/home/ProjectMentorshipSection';
import { ResourceHubSection } from './components/home/ResourceHubSection';
import { FoundingMembersSection } from './components/home/FoundingMembersSection';
import { CollaborationView } from './components/views/CollaborationView';
import { PageView } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPreFill, setConsultationPreFill] = useState<{
    researchArea?: string;
    projectType?: string;
  }>({});

  // Scroll to top or specific anchor when navigating
  const handleNavigate = (view: PageView, anchorId?: string) => {
    setCurrentView(view);
    
    if (anchorId) {
      setTimeout(() => {
        const element = document.getElementById(anchorId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (researchArea?: string, projectType?: string) => {
    setConsultationPreFill({
      researchArea: researchArea || '',
      projectType: projectType || '',
    });
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Sticky Navbar */}
      <Navbar 
        currentView={currentView} 
        onNavigate={handleNavigate} 
        onOpenConsultation={() => handleOpenConsultation()} 
      />

      {/* Main Content Area based on current view */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onOpenConsultation={handleOpenConsultation} 
          />
        )}

        {currentView === 'about' && (
          <AboutView 
            onNavigate={handleNavigate} 
            onOpenConsultation={() => handleOpenConsultation()} 
          />
        )}

        {currentView === 'contact' && (
          <ContactView />
        )}

        {currentView === 'services' && (
          <div className="py-8 bg-slate-50 min-h-screen">
            <ResearchServicesSection 
              onNavigate={handleNavigate} 
              onOpenConsultation={handleOpenConsultation} 
            />
          </div>
        )}

        {currentView === 'training' && (
          <div className="py-8 bg-white min-h-screen">
            <AcademySection 
              onNavigate={handleNavigate} 
              onOpenConsultation={handleOpenConsultation} 
            />
          </div>
        )}

        {currentView === 'live-classes' && (
          <div className="py-8 bg-slate-50 min-h-screen">
            <LiveClassesSection 
              onNavigate={handleNavigate} 
              onOpenConsultation={handleOpenConsultation} 
            />
          </div>
        )}

        {currentView === 'webinars' && (
          <div className="py-8 bg-white min-h-screen">
            <WebinarsSection 
              onNavigate={handleNavigate} 
              onOpenConsultation={handleOpenConsultation} 
            />
          </div>
        )}

        {currentView === 'mentors' && (
          <div className="py-8 bg-white min-h-screen">
            <FoundingMembersSection 
              onNavigate={handleNavigate} 
              onOpenConsultation={handleOpenConsultation} 
              showDomainMentorsNetwork={true}
              showMarketingChair={true}
            />
          </div>
        )}

        {currentView === 'career-guidance' && (
          <div className="py-8 bg-slate-50 min-h-screen">
            <CareerHubSection 
              onNavigate={handleNavigate} 
              onOpenConsultation={handleOpenConsultation} 
            />
          </div>
        )}

        {currentView === 'project-mentorship' && (
          <div className="py-8 bg-white min-h-screen">
            <ProjectMentorshipSection 
              onNavigate={handleNavigate} 
              onOpenConsultation={handleOpenConsultation} 
            />
          </div>
        )}

        {currentView === 'resources' && (
          <div className="py-8 bg-slate-50 min-h-screen">
            <ResourceHubSection 
              onNavigate={handleNavigate} 
              onOpenConsultation={handleOpenConsultation} 
            />
          </div>
        )}

        {currentView === 'collaboration' && (
          <CollaborationView 
            onNavigate={handleNavigate} 
            onOpenConsultation={handleOpenConsultation} 
          />
        )}
      </main>

      {/* Global Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultResearchArea={consultationPreFill.researchArea}
        defaultProjectType={consultationPreFill.projectType}
      />

      {/* Floating Persistent Quick Contact & Consultation Widget */}
      <FloatingActionWidget 
        onOpenConsultation={() => handleOpenConsultation()}
        onNavigate={handleNavigate}
      />

      {/* Global Footer */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenConsultation={() => handleOpenConsultation()} 
      />
    </div>
  );
}
