import { useState } from 'react';
import { ExternalLink, Gift, CheckCircle2, TrendingUp, FileText, ShoppingCart, UserPlus, Palette, PenTool, ArrowUpRight } from 'lucide-react';
import type { Mission } from '@/types';
import { useApp } from '@/context';
import { IframeModal } from './IframeModal';
import { missions as allMissions } from '@/data';

const categoryIcons: Record<string, typeof TrendingUp> = {
  exchange: TrendingUp,
  survey: FileText,
  store: ShoppingCart,
  social: UserPlus,
  creative: Palette,
  design: PenTool,
};

const categoryColors: Record<string, string> = {
  exchange: 'from-blue-500 to-cyan-500',
  survey: 'from-violet-500 to-purple-500',
  store: 'from-orange-500 to-amber-500',
  social: 'from-pink-500 to-rose-500',
  creative: 'from-teal-500 to-emerald-500',
  design: 'from-indigo-500 to-blue-500',
};

const categoryBadgeColors: Record<string, string> = {
  exchange: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  survey: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
  store: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
  social: 'bg-pink-500/10 text-pink-600 dark:text-pink-400',
  creative: 'bg-teal-500/10 text-teal-600 dark:text-teal-400',
  design: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
};

export function MissionCard({ mission }: { mission: Mission }) {
  const { t, lang } = useApp();
  const [claimOpen, setClaimOpen] = useState(false);

  const Icon = categoryIcons[mission.category] ?? Gift;
  const colorGradient = categoryColors[mission.category] ?? 'from-brand-500 to-brand-400';
  const badgeColor = categoryBadgeColors[mission.category] ?? 'bg-brand-500/10 text-brand-600 dark:text-brand-400';
  const content = mission[lang];

  return (
    <>
      <div className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden card-hover flex flex-col">
        {/* Top accent */}
        <div className={`h-1.5 bg-gradient-to-r ${colorGradient}`} />

        <div className="p-5 flex flex-col flex-1">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${colorGradient} flex items-center justify-center shrink-0 shadow-md`}>
                <Icon size={20} className="text-white" />
              </div>
              <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
                #{String(mission.id).padStart(2, '0')}
              </span>
            </div>
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badgeColor}`}>
              {mission.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-base text-gray-900 dark:text-white leading-snug mb-2 line-clamp-2">
            {content.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3 flex-1">
            {content.description}
          </p>

          {/* Reward */}
          <div className="flex items-center gap-2 mb-4 px-3 py-2.5 rounded-xl bg-gold-500/10 border border-gold-500/20">
            <Gift size={16} className="text-gold-600 dark:text-gold-400 shrink-0" />
            <span className="text-xs text-gray-500 dark:text-gray-400">{t.missions.reward}:</span>
            <span className="text-sm font-bold text-gold-700 dark:text-gold-300">{content.reward}</span>
          </div>

          {/* Actions */}
          <div className="flex gap-2 mt-auto">
            <a
              href={mission.doLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <ExternalLink size={15} />
              {t.missions.doMission}
            </a>
            <button
              onClick={() => setClaimOpen(true)}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <CheckCircle2 size={15} />
              {t.missions.claimReward}
            </button>
          </div>
        </div>
      </div>

      {claimOpen && (
        <IframeModal
          url={mission.claimLink}
          variant="claim"
          onClose={() => setClaimOpen(false)}
        />
      )}
    </>
  );
}

export function MissionsPage() {
  const { t, lang } = useApp();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'default' | 'high' | 'low'>('default');

  const categories = [
    { value: 'all', label: t.missions.allCategories },
    { value: 'exchange', label: t.missions.categoryExchange },
    { value: 'survey', label: t.missions.categorySurvey },
    { value: 'store', label: t.missions.categoryStore },
    { value: 'social', label: t.missions.categorySocial },
    { value: 'creative', label: t.missions.categoryCreative },
    { value: 'design', label: t.missions.categoryDesign },
  ];

  let filtered = allMissions.filter((m) => {
    const content = m[lang];
    const matchesSearch =
      content.title.toLowerCase().includes(search.toLowerCase()) ||
      content.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'all' || m.category === category;
    return matchesSearch && matchesCategory;
  });

  if (sortBy === 'high') {
    filtered = [...filtered].sort((a, b) => b.rewardAmount - a.rewardAmount);
  } else if (sortBy === 'low') {
    filtered = [...filtered].sort((a, b) => a.rewardAmount - b.rewardAmount);
  }

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
            {t.missions.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">{t.missions.subtitle}</p>
        </div>

        {/* Search + Filters */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.missions.searchPlaceholder}
              className="w-full px-4 py-3 ps-11 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
            />
            <svg className="absolute top-1/2 -translate-y-1/2 start-4 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Category pills */}
            <div className="flex-1 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setCategory(cat.value)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    category === cat.value
                      ? 'bg-brand-600 text-white shadow-md'
                      : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-400'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-3.5 py-2 rounded-lg text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500/50 cursor-pointer shrink-0"
            >
              <option value="default">{t.missions.sortDefault}</option>
              <option value="high">{t.missions.sortRewardHigh}</option>
              <option value="low">{t.missions.sortRewardLow}</option>
            </select>
          </div>

          {/* Results count */}
          <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500">
            <ArrowUpRight size={16} className="text-brand-500" />
            <span className="font-medium">{filtered.length}</span>
            <span>{t.missions.resultsCount}</span>
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in">
            {filtered.map((mission) => (
              <MissionCard key={mission.id} mission={mission} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <svg className="text-gray-400" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <p className="text-gray-400 dark:text-gray-500 text-lg">{t.missions.noResults}</p>
          </div>
        )}
      </div>
    </div>
  );
}
