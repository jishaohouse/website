'use client';

import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative group">
      <button 
        className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
        aria-label="Select Language"
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium uppercase">{language}</span>
      </button>
      
      <div className="absolute right-0 top-full pt-2 w-32 hidden group-hover:block z-50">
        <div className="bg-white rounded-md shadow-lg border border-slate-100 py-1">
          <button
            onClick={() => setLanguage('en')}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors ${
              language === 'en' ? 'text-green-600 font-medium' : 'text-slate-600'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage('zh')}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors ${
              language === 'zh' ? 'text-green-600 font-medium' : 'text-slate-600'
            }`}
          >
            中文
          </button>
        </div>
      </div>
    </div>
  );
}
