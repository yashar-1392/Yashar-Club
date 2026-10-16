import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Languages, Send, Headphones } from 'lucide-react';
import { useApp } from '@/context';
import type { PageId } from '@/types';
import { BALE_CHANNEL_LINK, SUPPORT_LINK } from '@/data';
import { IframeModal } from './IframeModal';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const { t, theme, toggleTheme, toggleLang, lang } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'missions', label: t.nav.missions },
    { id: 'suggest', label: t.nav.suggest },
    { id: 'rules', label: t.nav.rules },
    { id: 'guide', label: t.nav.guide },
    { id: 'faq', label: t.nav.faq },
    { id: 'about', label: t.nav.about },
  ];

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass shadow-lg border-b border-gray-200/50 dark:border-gray-800/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-2.5 shrink-0 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all">
                <span className="text-gold-300 font-extrabold text-xl text-white">Y</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-base text-gray-900 dark:text-white">یاشار کلاب</span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium tracking-wider">YASHAR CLUB</span>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleLang}
                className="p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
                aria-label="Toggle language"
                title={t.common.language}
              >
                <Languages size={18} />
              </button>
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
                aria-label="Toggle theme"
                title={t.common.theme}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setSupportOpen(true)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Headphones size={16} />
                {t.header.support}
              </button>
              <a
                href={BALE_CHANNEL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-md hover:shadow-lg hover:scale-[1.03] transition-all"
              >
                <Send size={16} />
                {t.header.joinChannel}
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
                aria-label="Menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden glass border-t border-gray-200/50 dark:border-gray-800/50 animate-slide-down">
            <nav className="max-w-7xl mx-auto px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`w-full text-start px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 space-y-2 border-t border-gray-200 dark:border-gray-700 mt-2">
                <button
                  onClick={() => { setSupportOpen(true); setMobileOpen(false); }}
                  className="w-full flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Headphones size={16} />
                  {t.header.support}
                </button>
                <a
                  href={BALE_CHANNEL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-md"
                >
                  <Send size={16} />
                  {t.header.joinChannel}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {supportOpen && (
        <IframeModal url={SUPPORT_LINK} variant="support" onClose={() => setSupportOpen(false)} />
      )}
    </>
  );
}
