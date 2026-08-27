import React, { useState } from 'react';
import { 
  Search, 
  BookOpen, 
  Database, 
  ExternalLink, 
  Code, 
  Clock, 
  Tag, 
  FileCode, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { RESEARCH_RESOURCES } from '../../data/researchData';
import { PageView } from '../../types';

interface ResourceHubSectionProps {
  onNavigate: (view: PageView, anchorId?: string) => void;
  onOpenConsultation: (topic?: string, projectType?: string) => void;
}

export const ResourceHubSection: React.FC<ResourceHubSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Databases & Tools', 'Drug Discovery', 'Bioinformatics', 'Computational Biology', 'Chemistry', 'Scientific Writing'];

  const filteredResources = RESEARCH_RESOURCES.filter((res) => {
    const matchesCategory = activeCategory === 'All' || res.category === activeCategory;
    const matchesSearch = 
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="resources-hub" className="py-16 sm:py-24 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-200/60">
            <Database className="w-3.5 h-3.5 text-blue-600" />
            Scientific Knowledge Base & Protocols
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Research Resources & Guides
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Curated protocols, tool cheat sheets, database navigation guides, and publication auditing checklists for researchers.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search resources, tools (e.g. PDB, GROMACS, NMR, BLAST, AutoDock)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 shadow-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200/60">
                    {res.toolType}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{res.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {res.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {res.description}
                </p>

                {/* Code / Protocol snippet */}
                {res.quickSnippet && (
                  <div className="mb-4 p-3 rounded-xl bg-slate-900 text-slate-200 font-mono text-[11px] leading-relaxed border border-slate-800 flex items-start gap-2">
                    <FileCode className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="break-all">{res.quickSnippet}</span>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {res.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                {res.externalDocsUrl ? (
                  <a
                    href={res.externalDocsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs font-medium text-slate-500">Researcho Internal Protocol</span>
                )}

                <button
                  onClick={() => onOpenConsultation(res.title, 'Protocol Consultation')}
                  className="text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Need Guidance?
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
