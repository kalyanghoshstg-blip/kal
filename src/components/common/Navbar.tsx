import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Mail, 
  Sparkles, 
  BookOpen, 
  FlaskConical, 
  Dna, 
  Compass, 
  Layers, 
  Search,
  ExternalLink,
  Users
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { SearchBar } from './SearchBar';
import { PageView } from '../../types';

interface NavbarProps {
  currentView: PageView;
  onNavigate: (view: PageView, anchorId?: string) => void;
  onOpenConsultation: (researchArea?: string, projectType?: string) => void;
  onOpenSearch: (query?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenConsultation,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [trainingDropdownOpen, setTrainingDropdownOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        const raf = window.requestAnimationFrame || ((cb: FrameRequestCallback) => setTimeout(cb, 16));
        raf(() => {
          const currentY =
            typeof window.scrollY !== 'undefined'
              ? window.scrollY
              : (window.pageYOffset || document.documentElement.scrollTop || 0);
          // Apply hysteresis and robust threshold to prevent rapid fluctuation / jitter near threshold
          setIsScrolled((prev) => {
            if (!prev && currentY > 60) return true;
            if (prev && currentY < 20) return false;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: PageView, anchorId?: string) => {
    onNavigate(view, anchorId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setTrainingDropdownOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out border-b ${
        isScrolled
          ? 'shadow-sm border-slate-200/80 py-0.5'
          : 'border-slate-100 py-1 sm:py-2'
      }`}
    >
      <div className="w-full px-3 sm:px-5 lg:px-6">
        <div
          className={`flex items-center justify-between font-bold transition-all duration-300 ease-in-out ${
            isScrolled ? 'h-14 sm:h-16' : 'h-18 sm:h-22'
          }`}
        >
          {/* Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="cursor-pointer hover:opacity-95 flex items-center shrink-0 -ml-1 sm:-ml-2 origin-left transition-all duration-300 ease-in-out"
          >
            <BrandLogo variant="compact" size={isScrolled ? 'sm' : 'md'} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-2 text-[13px] leading-[20px]">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-1.5 text-[13px] leading-[20px] font-bold rounded-lg transition-colors cursor-pointer ${
                currentView === 'home'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {/* Research Services Dropdown */}
            <div
              className="relative text-[13px] leading-[20px] font-bold"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`flex items-center gap-1 px-3 py-1.5 text-[13px] leading-[20px] font-bold rounded-lg transition-colors cursor-pointer ${
                  currentView === 'services' || currentView === 'computational-drug-discovery' || currentView === 'molecular-dynamics' || currentView === 'protein-ligand-membrane-simulation' || currentView === 'bioinformatics' || currentView === 'molecular-biology' || currentView === 'chemistry' || currentView === 'medicinal-chemistry' || currentView === 'scientific-writing'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                Research Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-0 top-full pt-1 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-xl shadow-lg border border-slate-200/80 p-1.5 text-[13px] leading-[20px] space-y-0.5">
                    <button
                      onClick={() => handleNavClick('services', 'computational-drug-discovery')}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800 hover:text-blue-600 flex items-center justify-between group cursor-pointer transition-colors text-[13px] leading-[20px]"
                    >
                      <span className="font-semibold text-[13px] leading-[20px]">Computational Drug Discovery</span>
                      <span className="text-[10px] leading-normal bg-blue-50 text-blue-700 border border-blue-200/60 px-1.5 py-0.5 rounded font-bold">Flagship</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('services', 'molecular-dynamics')}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800 hover:text-blue-600 text-[13px] leading-[20px] font-semibold cursor-pointer transition-colors"
                    >
                      Molecular Dynamics & Membrane Simulation
                    </button>
                    <button
                      onClick={() => handleNavClick('services', 'structural-biology')}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800 hover:text-blue-600 text-[13px] leading-[20px] font-semibold cursor-pointer transition-colors"
                    >
                      Structural Biology
                    </button>
                    <button
                      onClick={() => handleNavClick('services', 'bioinformatics')}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800 hover:text-blue-600 text-[13px] leading-[20px] font-semibold cursor-pointer transition-colors"
                    >
                      Bioinformatics & Multi-Omics
                    </button>
                    <button
                      onClick={() => handleNavClick('services', 'molecular-biology')}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800 hover:text-blue-600 text-[13px] leading-[20px] font-semibold cursor-pointer transition-colors"
                    >
                      Molecular Biology & Primer Design
                    </button>
                    <button
                      onClick={() => handleNavClick('services', 'chemistry')}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800 hover:text-blue-600 text-[13px] leading-[20px] font-semibold cursor-pointer transition-colors"
                    >
                      Chemistry & NMR Analytics
                    </button>
                    <button
                      onClick={() => handleNavClick('services', 'medicinal-chemistry')}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800 hover:text-blue-600 text-[13px] leading-[20px] font-semibold cursor-pointer transition-colors"
                    >
                      Medicinal Chemistry & Drug Design
                    </button>
                    <button
                      onClick={() => handleNavClick('services', 'scientific-writing')}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800 hover:text-blue-600 text-[13px] leading-[20px] font-semibold cursor-pointer transition-colors"
                    >
                      Scientific Writing & Publication
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Training & Courses Dropdown */}
            <div
              className="relative text-[13px] leading-[20px] font-bold"
              onMouseEnter={() => setTrainingDropdownOpen(true)}
              onMouseLeave={() => setTrainingDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('training')}
                className={`flex items-center gap-1 px-3 py-1.5 text-[13px] leading-[20px] font-bold rounded-lg transition-colors cursor-pointer ${
                  currentView === 'training'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                Training & Courses
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${trainingDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {trainingDropdownOpen && (
                <div className="absolute left-0 top-full pt-1 w-64 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-xl shadow-lg border border-slate-200/80 p-1.5 text-[13px] leading-[20px] space-y-0.5">
                    <button
                      onClick={() => handleNavClick('training', 'featured-course')}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800 hover:text-blue-600 flex items-center justify-between cursor-pointer transition-colors"
                    >
                      <span className="font-semibold text-[13px] leading-[20px]">Featured: Molecular Docking</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('training', 'advanced-courses')}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800 hover:text-blue-600 text-[13px] leading-[20px] font-semibold cursor-pointer transition-colors"
                    >
                      Advanced Masterclasses
                    </button>
                    <button
                      onClick={() => handleNavClick('training', 'workshops-section')}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800 hover:text-blue-600 text-[13px] leading-[20px] font-semibold cursor-pointer transition-colors"
                    >
                      Hands-on Weekend Workshops
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('mentors', 'mentors')}
              className={`px-3.5 py-1.5 text-[13px] leading-[20px] font-bold rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2 ${
                currentView === 'mentors'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-blue-600 hover:text-blue-700 hover:bg-blue-50/60'
              }`}
            >
              <span className="animate-pulse">Mentors</span>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </button>

            <button
              onClick={() => handleNavClick('collaboration')}
              className={`px-3 py-1.5 text-[13px] leading-[20px] font-bold rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2 ${
                currentView === 'collaboration'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-blue-700 hover:text-blue-800 hover:bg-blue-50/70'
              }`}
            >
              <span className="animate-pulse font-bold">Collaborate</span>
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </button>

            <button
              onClick={() => handleNavClick('webinars')}
              className={`px-3 py-1.5 text-[13px] leading-[20px] font-bold rounded-lg transition-colors cursor-pointer ${
                currentView === 'webinars'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Webinars
            </button>

            <button
              onClick={() => handleNavClick('career-guidance')}
              className={`px-3 py-1.5 text-[13px] leading-[20px] font-bold rounded-lg transition-colors cursor-pointer ${
                currentView === 'career-guidance'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Career Guidance
            </button>

            <button
              onClick={() => handleNavClick('resources')}
              className={`px-3 py-1.5 text-[13px] leading-[20px] font-bold rounded-lg transition-colors cursor-pointer ${
                currentView === 'resources'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Research Resources
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-1.5 text-[13px] leading-[20px] font-bold rounded-lg transition-colors cursor-pointer ${
                currentView === 'about'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-1.5 text-[13px] leading-[20px] font-bold rounded-lg transition-colors cursor-pointer ${
                currentView === 'contact'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Primary CTA and Search button on the right */}
          <div className="flex items-center gap-2">
            <SearchBar onOpenSearch={onOpenSearch} variant="navbar" />
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl max-h-[85vh] overflow-y-auto">
          {/* Mobile Search Bar */}
          <div className="pb-2 border-b border-slate-100">
            <SearchBar 
              onOpenSearch={(query) => {
                setMobileMenuOpen(false);
                onOpenSearch(query);
              }} 
              variant="inline" 
              placeholder="Search services, mentors, courses..."
            />
          </div>

          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <button
              onClick={() => handleNavClick('home')}
              className={`p-2.5 rounded-xl text-left text-xs font-semibold flex items-center gap-2 ${
                currentView === 'home' ? 'bg-blue-50 text-blue-700' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-blue-600" /> Home
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`p-2.5 rounded-xl text-left text-xs font-semibold flex items-center gap-2 ${
                currentView === 'services' ? 'bg-blue-50 text-blue-700' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <FlaskConical className="w-4 h-4 text-blue-600" /> Research Services
            </button>
            <button
              onClick={() => handleNavClick('training')}
              className={`p-2.5 rounded-xl text-left text-xs font-semibold flex items-center gap-2 ${
                currentView === 'training' ? 'bg-blue-50 text-blue-700' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <BookOpen className="w-4 h-4 text-blue-600" /> Training & Courses
            </button>
            <button
              onClick={() => handleNavClick('mentors', 'mentors')}
              className={`p-2.5 rounded-xl text-left font-bold flex items-center justify-between gap-2 transition-all ${
                currentView === 'mentors' ? 'bg-blue-50 text-blue-700 font-extrabold' : 'text-blue-700 bg-blue-50/40 hover:bg-blue-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="font-bold text-sm sm:text-base text-blue-700 animate-pulse">Mentors</span>
              </div>
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </button>
            <button
              onClick={() => handleNavClick('collaboration')}
              className={`p-2.5 rounded-xl text-left font-bold flex items-center justify-between gap-2 transition-all ${
                currentView === 'collaboration' ? 'bg-blue-50 text-blue-700 font-extrabold' : 'text-blue-700 bg-blue-50/40 hover:bg-blue-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-bold text-xs sm:text-sm text-blue-700 animate-pulse">Collaborate</span>
              </div>
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </button>
            <button
              onClick={() => handleNavClick('webinars')}
              className={`p-2.5 rounded-xl text-left text-xs font-semibold flex items-center gap-2 ${
                currentView === 'webinars' ? 'bg-blue-50 text-blue-700' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <Dna className="w-4 h-4 text-blue-600" /> Webinars
            </button>
            <button
              onClick={() => handleNavClick('career-guidance')}
              className={`p-2.5 rounded-xl text-left text-xs font-semibold flex items-center gap-2 ${
                currentView === 'career-guidance' ? 'bg-blue-50 text-blue-700' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <Compass className="w-4 h-4 text-blue-600" /> Career Guidance
            </button>
            <button
              onClick={() => handleNavClick('project-mentorship')}
              className={`p-2.5 rounded-xl text-left text-xs font-semibold flex items-center gap-2 ${
                currentView === 'project-mentorship' ? 'bg-blue-50 text-blue-700' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <Layers className="w-4 h-4 text-blue-600" /> Project Mentorship
            </button>
            <button
              onClick={() => handleNavClick('resources')}
              className={`p-2.5 rounded-xl text-left text-xs font-semibold flex items-center gap-2 ${
                currentView === 'resources' ? 'bg-blue-50 text-blue-700' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <Search className="w-4 h-4 text-blue-600" /> Research Resources
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`p-2.5 rounded-xl text-left text-xs font-semibold flex items-center gap-2 ${
                currentView === 'about' ? 'bg-blue-50 text-blue-700' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`p-2.5 rounded-xl text-left text-xs font-semibold flex items-center gap-2 ${
                currentView === 'contact' ? 'bg-blue-50 text-blue-700' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Contact Us
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>📩 Book a Research Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
