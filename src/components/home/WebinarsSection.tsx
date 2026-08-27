import React, { useState } from 'react';
import { 
  Dna, 
  Calendar, 
  Clock, 
  UserCheck, 
  Video, 
  ArrowRight, 
  Sparkles, 
  PlayCircle, 
  CheckCircle2 
} from 'lucide-react';
import { WEBINARS_DATA } from '../../data/researchData';
import { PageView } from '../../types';

interface WebinarsSectionProps {
  onNavigate: (view: PageView, anchorId?: string) => void;
  onOpenConsultation: (webinarTitle?: string, projectType?: string) => void;
}

export const WebinarsSection: React.FC<WebinarsSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [tab, setTab] = useState<'upcoming' | 'recorded'>('upcoming');

  const upcomingWebinars = WEBINARS_DATA.filter((w) => w.type === 'Upcoming');
  const recordedWebinars = WEBINARS_DATA.filter((w) => w.type === 'Recorded');

  return (
    <section id="webinars-hub" className="py-10 sm:py-14 bg-white relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2 border border-blue-200/60">
              <Video className="w-3.5 h-3.5 text-blue-600" />
              Scientific Webinars & Masterclasses
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Researcho Webinars
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl">
              Free interactive scientific sessions covering emerging frontiers in computational drug design, multi-omics, spectroscopy, and international PhD opportunities.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setTab('upcoming')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                tab === 'upcoming'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Upcoming Webinars ({upcomingWebinars.length})
            </button>
            <button
              onClick={() => setTab('recorded')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                tab === 'recorded'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Archived Sessions ({recordedWebinars.length})
            </button>
          </div>
        </div>

        {/* List of Webinars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(tab === 'upcoming' ? upcomingWebinars : recordedWebinars).map((webinar) => (
            <div
              key={webinar.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-semibold border border-blue-200/60">
                    {webinar.domain}
                  </span>
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${
                    webinar.type === 'Upcoming' ? 'bg-emerald-50 text-emerald-700 border-emerald-200/60' : 'bg-slate-50 text-slate-600 border-slate-200'
                  }`}>
                    {webinar.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {webinar.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {webinar.summary}
                </p>

                <div className="space-y-1.5 text-xs text-slate-600 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-slate-800">{webinar.speaker}</span>
                    <span className="text-slate-400">({webinar.speakerAffiliation})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>{webinar.date} • {webinar.time}</span>
                  </div>
                </div>
              </div>

              <div>
                {webinar.type === 'Upcoming' ? (
                  <button
                    onClick={() => onOpenConsultation(webinar.title, 'Webinar Registration (Free)')}
                    className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Register for Free Webinar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => onOpenConsultation(webinar.title, 'Request Recording Access')}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <PlayCircle className="w-4 h-4 text-cyan-400" />
                    <span>Access Recorded Archive</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
