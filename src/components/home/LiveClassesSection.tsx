import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  UserCheck, 
  Sparkles, 
  Filter, 
  CheckCircle2, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { LIVE_CLASSES_SCHEDULE } from '../../data/researchData';
import { PageView } from '../../types';

interface LiveClassesSectionProps {
  onNavigate: (view: PageView, anchorId?: string) => void;
  onOpenConsultation: (classTitle?: string, projectType?: string) => void;
}

export const LiveClassesSection: React.FC<LiveClassesSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'Drug Discovery', 'Structural Biology', 'Bioinformatics', 'Chemistry', 'Scientific Writing', 'Career'];

  const filteredClasses = activeFilter === 'All'
    ? LIVE_CLASSES_SCHEDULE
    : LIVE_CLASSES_SCHEDULE.filter((c) => c.domain.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="live-classes-hub" className="py-16 sm:py-20 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-2 border border-emerald-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Live Interactive Timetable
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Upcoming Live Classes
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl">
              Direct real-time interactive lectures, screen-shared coding demos, and doubt-clearing sessions with IITian research mentors.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-1.5">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  activeFilter === f
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Table / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClasses.map((item) => {
            const seatsRemaining = item.seatsTotal - item.seatsBooked;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-semibold border border-blue-200/60">
                      {item.domain}
                    </span>
                    <span className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${
                      item.status === 'Filling Fast' ? 'bg-amber-50 text-amber-700 border-amber-200/60' : 'bg-emerald-50 text-emerald-700 border-emerald-200/60'
                    }`}>
                      {item.status} ({seatsRemaining} seats left)
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1.5 leading-snug">
                    {item.title}
                  </h3>

                  <div className="text-xs text-blue-600 font-medium mb-4">
                    Course: {item.course}
                  </div>

                  <div className="space-y-2 text-xs text-slate-600 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="font-semibold text-slate-800">{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>{item.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-slate-400" />
                      <span>{item.instructorRole}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenConsultation(item.title, 'Live Class Seat Reservation')}
                    className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Reserve Seat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
