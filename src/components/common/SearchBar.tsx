import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight } from 'lucide-react';

interface SearchBarProps {
  onOpenSearch: (query?: string) => void;
  variant?: 'navbar' | 'hero' | 'inline';
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onOpenSearch,
  variant = 'navbar',
  placeholder = 'Search services, mentors, courses, software tools...',
  className = '',
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenSearch(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onOpenSearch(inputValue);
    }
  };

  if (variant === 'hero') {
    return (
      <form onSubmit={handleSubmit} className={`w-full max-w-2xl mx-auto ${className}`}>
        <div className="relative flex items-center group">
          <div className="absolute left-4 flex items-center gap-2 pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
            <Search className="w-5 h-5" />
          </div>

          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="w-full pl-12 pr-28 py-3.5 sm:py-4 rounded-2xl border-2 border-slate-700/80 bg-slate-950/80 text-white placeholder:text-slate-400 text-sm sm:text-base font-medium focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 shadow-xl backdrop-blur-md transition-all"
          />

          <button
            type="submit"
            className="absolute right-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs sm:text-sm font-bold shadow-md flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
          >
            <span>Search</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="mt-2.5 flex items-center justify-center gap-1.5 flex-wrap text-xs text-slate-400">
          <span className="font-medium text-slate-400">Quick searches:</span>
          {['Molecular Docking', 'GROMACS', 'Bioinformatics', 'PMRF', 'NMR'].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => onOpenSearch(tag)}
              className="px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-cyan-200 text-[11px] transition-colors cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>
      </form>
    );
  }

  if (variant === 'inline') {
    return (
      <div 
        onClick={() => onOpenSearch(inputValue)}
        className={`relative flex items-center cursor-pointer group ${className}`}
      >
        <Search className="absolute left-3 w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
        <input
          type="text"
          readOnly
          placeholder={placeholder}
          className="w-full pl-9 pr-8 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-slate-800 placeholder:text-slate-400 text-xs font-medium cursor-pointer focus:outline-none transition-all shadow-2xs"
        />
        <div className="absolute right-2.5 px-1.5 py-0.5 rounded bg-slate-200/80 text-[10px] font-mono text-slate-500">
          ⌘K
        </div>
      </div>
    );
  }

  // Default Navbar style search trigger icon button
  return (
    <button
      onClick={() => onOpenSearch()}
      className={`group relative flex items-center justify-center px-3 py-1.5 rounded-xl bg-yellow-100 border border-yellow-300 text-yellow-900 font-bold shadow-xs animate-pulse hover:animate-none hover:bg-yellow-200 active:scale-95 transition-all cursor-pointer ${className}`}
      title="Search (Ctrl+K)"
      aria-label="Search Researcho by IITians"
    >
      <Search className="w-4 h-4 transition-transform group-hover:scale-110 text-yellow-800" />
      <span className="ml-1.5 text-xs font-bold text-yellow-900">
        Search
      </span>
    </button>
  );
};
