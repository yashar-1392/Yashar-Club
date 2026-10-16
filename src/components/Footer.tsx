import { Send, Headphones, Rocket, BookOpen, HelpCircle, Info, ScrollText, Compass } from 'lucide-react';
import { useApp } from '@/context';
import type { PageId } from '@/types';
import { BALE_CHANNEL_LINK, SUPPORT_LINK } from '@/data';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onSupport: () => void;
}

export function Footer({ onNavigate, onSupport }: FooterProps) {
  const { t } = useApp();

  const quickLinks: { id: PageId; label: string; icon: typeof Rocket }[] = [
    { id: 'missions', label: t.nav.missions, icon: Rocket },
    { id: 'suggest', label: t.nav.suggest, icon: Compass },
    { id: 'rules', label: t.nav.rules, icon: ScrollText },
    { id: 'guide', label: t.nav.guide, icon: BookOpen },
    { id: 'faq', label: t.nav.faq, icon: HelpCircle },
    { id: 'about', label: t.nav.about, icon: Info },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black border-t border-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center shadow-md">
                <span className="text-white font-extrabold text-xl">Y</span>
              </div>
              <div>
                <span className="font-bold text-base text-white">یاشار کلاب</span>
                <span className="block text-[10px] text-gray-400 tracking-wider">YASHAR CLUB</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">{t.footer.quickLinks}</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => { onNavigate(link.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-400 transition-colors text-start"
                >
                  <link.icon size={15} className="shrink-0" />
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">{t.footer.contact}</h4>
            <div className="space-y-3">
              <a
                href={BALE_CHANNEL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-brand-600/20 border border-brand-600/30 text-brand-400 hover:bg-brand-600/30 transition-colors text-sm font-medium w-full"
              >
                <Send size={16} />
                {t.footer.joinBale}
              </a>
              <button
                onClick={onSupport}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700 transition-colors text-sm font-medium w-full"
              >
                <Headphones size={16} />
                {t.footer.support}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} یاشار کلاب — {t.footer.copyright}
          </p>
          <p className="text-xs text-gray-500">Powered by Yashar Club</p>
        </div>
      </div>
    </footer>
  );
}

export function SupportButton({ onClick }: { onClick: () => void }) {
  const { t } = useApp();
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 left-5 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all group"
      aria-label={t.header.support}
    >
      <Headphones size={20} className="group-hover:animate-pulse" />
      <span className="hidden sm:inline text-sm font-semibold">{t.header.support}</span>
    </button>
  );
}
