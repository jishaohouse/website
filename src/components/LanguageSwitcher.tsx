'use client';

import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (lang: 'en' | 'zh') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
        aria-label="Select Language"
        aria-expanded={isOpen}
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium uppercase">{language}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-full pt-2 w-32 z-50">
          <div className="bg-white rounded-md shadow-lg border border-slate-100 py-1">
            <button
              onClick={() => handleLanguageChange('en')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors ${
                language === 'en' ? 'text-green-600 font-medium' : 'text-slate-600'
              }`}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange('zh')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors ${
                language === 'zh' ? 'text-green-600 font-medium' : 'text-slate-600'
              }`}
            >
              中文
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
