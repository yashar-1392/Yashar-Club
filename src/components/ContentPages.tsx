import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useApp } from '@/context';
import { rulesContent, aboutContent, faqContent, guideSteps, tr } from '@/content';
import type { Language } from '@/types';

function ContentPage({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">{title}</h1>
          <p className="text-gray-500 dark:text-gray-400">{subtitle}</p>
        </div>
        <div className="space-y-5 animate-fade-in">{children}</div>
      </div>
    </div>
  );
}

function SectionCard({ icon, title, body }: { icon?: React.ReactNode; title: string; body: string }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm card-hover">
      <div className="flex items-start gap-4">
        {icon && (
          <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
            {icon}
          </div>
        )}
        <div>
          <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );
}

function FaqAccordion({ items, lang }: { items: typeof faqContent; lang: Language }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all"
        >
          <button
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-start hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                <HelpCircle size={16} />
              </div>
              <span className="font-semibold text-sm text-gray-900 dark:text-white">{tr(item.question, lang)}</span>
            </div>
            <ChevronDown
              size={18}
              className={`text-gray-400 shrink-0 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}
            />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-96' : 'max-h-0'}`}>
            <div className="px-5 pb-4 ps-16 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {tr(item.answer, lang)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function GuideSteps({ lang }: { lang: Language }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute start-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand-500 to-brand-300 dark:from-brand-600 dark:to-brand-800" />
      <div className="space-y-5">
        {guideSteps.map((step) => (
          <div key={step.step} className="relative flex items-start gap-4">
            <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0">
              {step.step}
            </div>
            <div className="flex-1 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm card-hover">
              <h3 className="font-bold text-base text-gray-900 dark:text-white mb-1.5">{tr(step.title, lang)}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{tr(step.body, lang)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RulesPage() {
  const { t, lang } = useApp();
  return (
    <ContentPage title={t.rules.title} subtitle={t.rules.subtitle}>
      {rulesContent.map((section, idx) => (
        <SectionCard key={idx} title={tr(section.title, lang)} body={tr(section.body, lang)} />
      ))}
    </ContentPage>
  );
}

export function AboutPage() {
  const { t, lang } = useApp();
  return (
    <ContentPage title={t.about.title} subtitle={t.about.subtitle}>
      {aboutContent.map((section, idx) => (
        <SectionCard key={idx} title={tr(section.title, lang)} body={tr(section.body, lang)} />
      ))}
    </ContentPage>
  );
}

export function FaqPage() {
  const { t, lang } = useApp();
  return (
    <ContentPage title={t.faq.title} subtitle={t.faq.subtitle}>
      <FaqAccordion items={faqContent} lang={lang} />
    </ContentPage>
  );
}

export function GuidePage() {
  const { t, lang } = useApp();
  return (
    <ContentPage title={t.guide.title} subtitle={t.guide.subtitle}>
      <GuideSteps lang={lang} />
    </ContentPage>
  );
}
