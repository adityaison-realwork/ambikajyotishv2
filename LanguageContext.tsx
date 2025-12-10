
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TRANSLATIONS } from './constants';
import { Language } from './types';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');

  const toggleLanguage = () => {
    setLanguage((prev) => {
      if (prev === 'EN') return 'HI';
      if (prev === 'HI') return 'SA';
      return 'EN';
    });
  };

  // Helper to access nested keys in translation object
  const t = (path: string): any => {
    const keys = path.split('.');
    let current: any = TRANSLATIONS[language];
    for (const key of keys) {
      if (current[key] === undefined) return undefined;
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
