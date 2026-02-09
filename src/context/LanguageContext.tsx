'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from '../data/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Check localStorage or browser preference
    const savedLang = localStorage.getItem('language') as Language;
    let targetLang: Language;

    if (savedLang && (savedLang === 'en' || savedLang === 'zh')) {
      targetLang = savedLang;
    } else {
      targetLang = navigator.language.startsWith('zh') ? 'zh' : 'en';
    }

    // Use setTimeout to avoid setting state synchronously in effect
    const timer = setTimeout(() => setLanguage(targetLang), 0);
    return () => clearTimeout(timer);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
