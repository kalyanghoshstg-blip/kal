import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone,
  ArrowUp, 
  ShieldCheck, 
  Globe, 
  ExternalLink,
  ChevronRight,
  BookOpen,
  Sparkles,
  Dna,
  Instagram,
  Youtube,
  Linkedin,
  Facebook,
  MessageCircle,
  Eye,
  MapPin,
  Users,
  Activity
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { PageView } from '../../types';
import { VisitorCounter } from './VisitorCounter';

interface FooterProps {
  onNavigate: (view: PageView, anchorId?: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [userLocation, setUserLocation] = useState<string>('Detecting location...');

  useEffect(() => {
    let isMounted = true;

    // Fetch actual client location from real IP geolocation API
    const fetchRealLocation = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.city && data.country_name) {
            setUserLocation(`${data.city}, ${data.country_name}`);
            return;
          }
        }
      } catch {
        // Fallback to Intl timezone if IP API is restricted
      }

      if (isMounted) {
        try {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
          setUserLocation(tz ? tz.replace('_', ' ') : 'India (HQ: Kolkata)');
        } catch {
          setUserLocation('Kolkata, WB, India');
        }
      }
    };

    fetchRealLocation();

    return () => {
      isMounted = false;
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/researcho.in',
      bgClass: 'bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 text-white shadow-rose-950/40',
      hoverClass: 'hover:opacity-90 hover:scale-110 hover:shadow-lg hover:shadow-rose-500/30'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: 'https://youtube.com/@researcho',
      bgClass: 'bg-[#FF0000] text-white shadow-red-950/40',
      hoverClass: 'hover:bg-red-600 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/company/researcho',
      bgClass: 'bg-[#0A66C2] text-white shadow-blue-950/40',
      hoverClass: 'hover:bg-[#004182] hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/researcho',
      bgClass: 'bg-[#1877F2] text-white shadow-blue-950/40',
      hoverClass: 'hover:bg-[#0d65d9] hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30'
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-12 border-b border-slate-800 items-start">
          
          {/* Column 1: Brand Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-white px-4 py-3.5 rounded-2xl inline-block shadow-md border border-slate-100/10">
              <BrandLogo size="md" showTagline={false} />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              One-Stop Research, Collaboration & Training Solutions for Life Sciences, Biotechnology, Chemistry, Pharmacy & Engineering.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-[13px] text-blue-300 font-mono w-[266.234px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-[10px] font-bold h-[14px] w-[232.234px]">LEARN → RESEARCH → COLLABORATE → CAREER</span>
            </div>
            
            <div className="mt-4 p-1.5 bg-slate-900/50 border border-slate-800 rounded-lg flex gap-2.5 w-[141px]">
              <button
                onClick={() => onNavigate('about')}
                className="text-xs text-blue-400 hover:text-white animate-pulse font-medium"
              >
                About Us
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-xs text-blue-400 hover:text-white animate-pulse font-medium"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Column 2: Research Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Research
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('services', 'computational-drug-discovery')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Computational Drug Discovery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services', 'molecular-dynamics')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Molecular Dynamics Simulations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services', 'molecular-dynamics')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Structural Biology
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services', 'bioinformatics')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Bioinformatics & Multi-Omics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services', 'chemistry')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Chemistry & NMR Interpretation
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate('services', 'scientific-writing')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Scientific Writing
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Learn (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Learn
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('training', 'featured-course')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Molecular Docking Masterclass
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('training', 'advanced-courses')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Advanced Masterclasses
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('live-classes')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Live Interactive Classes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('training', 'workshops-section')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Weekend Workshops
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('webinars')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Scientific Webinars & Archives
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('training')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Researcho Academy
                </button>
              </li>
            </ul>

            {/* Total Website Visitor Counter Badge */}
            <div className="pt-4 w-[208.5px]">
              <VisitorCounter variant="dark" className="w-full" />
            </div>
          </div>

          {/* Column 4: Career & Company (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('career-guidance', 'academic-guidance')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Degree Transitions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('career-guidance', 'phd-guidance')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  PhD Lab Selection & SOP
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collaboration')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Research Collaboration
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('project-mentorship')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Project Mentorship
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  About Researcho
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Research Resources
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Right Corner - Contact Us & Visitor World Map Hub (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            {/* Contact Us Card */}
            <div 
              className="bg-slate-900/90 rounded-xl p-3 sm:p-3.5 border border-slate-800 shadow-lg flex flex-col justify-between"
              style={{ minHeight: '280px', maxHeight: '100%' }}
            >
              
              {/* Contact Us Section */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Contact Us
                </h3>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-950/70 border border-slate-800/80 text-slate-200 hover:border-blue-500/30 transition-all group">
                    <div className="w-6 h-6 rounded-md bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] text-slate-400 leading-tight mb-1">Phone Numbers</div>
                      <div className="flex flex-col gap-1 text-[11px]">
                        <a href="tel:+918250573407" className="font-semibold text-slate-100 hover:text-blue-400 transition-colors block">+91 82505 73407</a>
                        <a href="tel:+919063751838" className="font-semibold text-slate-100 hover:text-blue-400 transition-colors block">+91 90637 51838</a>
                        <a href="tel:+918349572145" className="font-semibold text-slate-100 hover:text-blue-400 transition-colors block">+91 83495 72145</a>
                      </div>
                    </div>
                  </div>

                  <a 
                    href="mailto:contact@researcho-by-iitians.in" 
                    className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-950/70 border border-slate-800/80 text-slate-200 hover:text-white hover:border-blue-500/60 hover:bg-blue-950/30 transition-all group cursor-pointer"
                  >
                    <div className="w-6 h-6 rounded-md bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] text-slate-400 leading-tight">Official Email</div>
                      <div className="font-semibold text-slate-100 text-xs truncate">contact@researcho-by-iitians.in</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Follow Us with Vibrant Brand Logos */}
              <div className="pt-2 border-t border-slate-800/80 space-y-2">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Follow Us
                </h4>
                <div className="flex items-center gap-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shadow-xs transition-all duration-200 cursor-pointer ${social.bgClass} ${social.hoverClass}`}
                        aria-label={`Follow us on ${social.name}`}
                        title={social.name}
                      >
                        <Icon className="w-4.5 h-4.5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions (Compact Grid) */}
              <div className="pt-1 grid grid-cols-2 gap-2">
                <a
                  href="https://chat.whatsapp.com/Chz0dgk9tTIJG6rcit8hnP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-semibold shadow-xs transition-all active:scale-[0.98] cursor-pointer"
                  title="Join Researcho WhatsApp Community Group"
                >
                  <svg className="w-3.5 h-3.5 shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span className="truncate">Join WhatsApp</span>
                </a>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-semibold shadow-xs transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">Consultation</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center sm:text-left">
            <p>© 2026 Researcho by IITians. All Rights Reserved.</p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Ethical research mentorship, computational analysis support & training platform.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate('about')}>
              Privacy Policy
            </span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate('about')}>
              Terms & Conditions
            </span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate('about')}>
              Academic Ethics Disclaimer
            </span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-lg transition-colors ml-2 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
