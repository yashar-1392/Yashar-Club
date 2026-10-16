import { useState } from 'react';
import { AppProvider } from '@/context';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { MissionsPage } from '@/components/MissionsPage';
import { MissionSuggester } from '@/components/MissionSuggester';
import { Footer, SupportButton } from '@/components/Footer';
import { RulesPage, AboutPage, FaqPage, GuidePage } from '@/components/ContentPages';
import { IframeModal } from '@/components/IframeModal';
import { SUPPORT_LINK } from '@/data';
import type { PageId } from '@/types';

function AppContent() {
  const [page, setPage] = useState<PageId>('home');
  const [supportOpen, setSupportOpen] = useState(false);

  const handleNavigate = (p: PageId) => setPage(p);

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={page} onNavigate={handleNavigate} />

      <main className="flex-1">
        {page === 'home' && <Hero onNavigate={handleNavigate} />}
        {page === 'missions' && <MissionsPage />}
        {page === 'suggest' && <MissionSuggester onNavigate={handleNavigate} />}
        {page === 'rules' && <RulesPage />}
        {page === 'about' && <AboutPage />}
        {page === 'faq' && <FaqPage />}
        {page === 'guide' && <GuidePage />}
      </main>

      {page !== 'home' && <Footer onNavigate={handleNavigate} onSupport={() => setSupportOpen(true)} />}

      <SupportButton onClick={() => setSupportOpen(true)} />

      {supportOpen && (
        <IframeModal url={SUPPORT_LINK} variant="support" onClose={() => setSupportOpen(false)} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
