/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ConsultationModal } from './components/common/ConsultationModal';
import { GlobalSearchModal } from './components/common/GlobalSearchModal';
import { FloatingActionWidget } from './components/common/FloatingActionWidget';
import { LaunchAnnouncementBanner } from './components/common/LaunchAnnouncementBanner';
import { FireworkBursts } from './components/common/FireworkBursts';
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [initialSearchQuery, setInitialSearchQuery] = useState('');
  const [consultationPreFill, setConsultationPreFill] = useState<{
    researchArea?: string;
    projectType?: string;
  }>({});
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();

  // Global Ctrl+K or Cmd+K keyboard shortcut listener for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenSearch = (query?: string) => {
    setInitialSearchQuery(query || '');
    setIsSearchOpen(true);
  };

  // Scroll to top or specific anchor when navigating
  const handleNavigate = (view: PageView, anchorId?: string) => {
    const serviceIds = [
      'computational-drug-discovery',
      'molecular-dynamics',
      'protein-ligand-membrane-simulation',
      'structural-biology',
      'bioinformatics',
      'molecular-biology',
      'chemistry',
      'medicinal-chemistry',
      'scientific-writing',
    ];

    const targetService = (view === 'protein-ligand-membrane-simulation' || anchorId === 'protein-ligand-membrane-simulation')
      ? 'molecular-dynamics'
      : view;

    if (serviceIds.includes(targetService)) {
      setSelectedServiceId(targetService);
      setCurrentView('services');
      anchorId = targetService;
    } else {
      if (anchorId && serviceIds.includes(anchorId)) {
        setSelectedServiceId(anchorId === 'protein-ligand-membrane-simulation' ? 'molecular-dynamics' : anchorId);
      }
      setCurrentView(view);
    }
    
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
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Celebration Firework Bursts (Runs for 5 seconds only) */}
      <FireworkBursts />

      {/* Website Launch Announcement Banner */}
      <LaunchAnnouncementBanner />

      {/* Sticky Navbar */}
      <Navbar 
        currentView={currentView} 
        onNavigate={handleNavigate} 
        onOpenConsultation={() => handleOpenConsultation()} 
        onOpenSearch={handleOpenSearch}
      />

      {/* Main Content Area based on current view */}
      <main className="flex-1 w-full overflow-x-hidden">
        {currentView === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onOpenConsultation={handleOpenConsultation} 
            onOpenSearch={handleOpenSearch}
            initialServiceId={selectedServiceId}
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
              initialServiceId={selectedServiceId}
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

      {/* Global Interactive Search Modal */}
      <GlobalSearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
        initialQuery={initialSearchQuery}
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
