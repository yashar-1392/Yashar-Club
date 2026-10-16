import { useState } from 'react';
import { Rocket, Gift, Users, ArrowRight, Sparkles, Headphones } from 'lucide-react';
import { useApp } from '@/context';
import type { PageId } from '@/types';
import { totalMissions, totalRewardAmount, SUPPORT_LINK } from '@/data';
import { IframeModal } from './IframeModal';

interface HeroProps {
  onNavigate: (page: PageId) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const { t, lang } = useApp();
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-18">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 dark:from-gray-950 dark:via-brand-950 dark:to-gray-950">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,193,23,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(42,149,105,0.2) 0%, transparent 50%)'
          }} />
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6 animate-fade-in">
              <Sparkles size={16} className="text-gold-300" />
              {t.hero.badge}
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 animate-slide-up">
              {t.hero.title}{' '}
              <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <button
                onClick={() => onNavigate('missions')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 text-gray-900 font-bold shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all text-base"
              >
                <Rocket size={20} />
                {t.hero.ctaMissions}
              </button>
              <button
                onClick={() => onNavigate('suggest')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/20 hover:scale-[1.03] transition-all text-base"
              >
                <Sparkles size={20} className="text-gold-300" />
                {t.hero.ctaSuggest}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10">
                <div className="flex items-center justify-center mb-2">
                  <Rocket size={20} className="text-gold-300" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">{totalMissions}</div>
                <div className="text-xs sm:text-sm text-white/60 mt-1">{t.hero.statMissions}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10">
                <div className="flex items-center justify-center mb-2">
                  <Gift size={20} className="text-gold-300" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  {lang === 'fa' ? totalRewardAmount.toLocaleString('fa-IR') : totalRewardAmount.toLocaleString()}
                </div>
                <div className="text-xs sm:text-sm text-white/60 mt-1">{t.hero.statTotalReward}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10">
                <div className="flex items-center justify-center mb-2">
                  <Users size={20} className="text-gold-300" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">۱۰۰+</div>
                <div className="text-xs sm:text-sm text-white/60 mt-1">{t.hero.statMembers}</div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="mt-12 flex justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <button
                onClick={() => onNavigate('missions')}
                className="text-white/40 hover:text-white/80 transition-colors"
                aria-label="Scroll"
              >
                <ArrowRight size={24} className="rotate-90" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {supportOpen && (
        <IframeModal url={SUPPORT_LINK} variant="support" onClose={() => setSupportOpen(false)} />
      )}
    </>
  );
}
