import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';
import type { Language, Theme } from './types';
import { getTranslation, type Translation } from './i18n';

interface AppContextValue {
  lang: Language;
  theme: Theme;
  t: Translation;
  toggleLang: () => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('yashar-lang');
    return (saved === 'en' || saved === 'fa') ? saved : 'fa';
  });

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('yashar-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const t = getTranslation(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    localStorage.setItem('yashar-lang', lang);
  }, [lang, t.dir]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('yashar-theme', theme);
  }, [theme]);

  const toggleLang = useCallback(() => setLang((p) => (p === 'fa' ? 'en' : 'fa')), []);
  const toggleTheme = useCallback(() => setTheme((p) => (p === 'light' ? 'dark' : 'light')), []);

  return (
    <AppContext.Provider value={{ lang, theme, t, toggleLang, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
