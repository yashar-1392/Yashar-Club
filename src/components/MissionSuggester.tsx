import { useState } from 'react';
import { Compass, ArrowRight, ArrowLeft, RotateCcw, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';
import { useApp } from '@/context';
import { missions } from '@/data';
import type { Mission, PageId } from '@/types';
import { MissionCard } from './MissionsPage';

interface SuggestProps {
  onNavigate: (page: PageId) => void;
}

interface QuestionOption {
  label: string;
  score: Partial<Record<string, number>>;
}

interface Question {
  title: string;
  options: QuestionOption[];
}

export function MissionSuggester({ onNavigate }: SuggestProps) {
  const { t, lang } = useApp();
  const [step, setStep] = useState(-1); // -1 = intro, 0-2 = questions, 3 = result
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<Mission | null>(null);

  const questions: Question[] = [
    {
      title: t.suggest.q1Title,
      options: [
        { label: t.suggest.q1Opt1, score: { exchange: 3 } },
        { label: t.suggest.q1Opt2, score: { survey: 3 } },
        { label: t.suggest.q1Opt3, score: { store: 3 } },
        { label: t.suggest.q1Opt4, score: { social: 2, creative: 2, design: 1 } },
      ],
    },
    {
      title: t.suggest.q2Title,
      options: [
        { label: t.suggest.q2Opt1, score: { survey: 2, exchange: 1 } },
        { label: t.suggest.q2Opt2, score: { store: 2, social: 1 } },
        { label: t.suggest.q2Opt3, score: { exchange: 1, store: 1, creative: 1, design: 1, social: 1 } },
      ],
    },
    {
      title: t.suggest.q3Title,
      options: [
        { label: t.suggest.q3Opt1, score: { survey: 2 } },
        { label: t.suggest.q3Opt2, score: { store: 2, social: 1, creative: 1 } },
        { label: t.suggest.q3Opt3, score: { exchange: 2, design: 2 } },
      ],
    },
  ];

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const computeResult = () => {
    const scores: Record<string, number> = {};
    answers.forEach((ans, qIdx) => {
      const option = questions[qIdx].options[ans];
      if (option) {
        Object.entries(option.score).forEach(([cat, val]) => {
          scores[cat] = (scores[cat] ?? 0) + (val ?? 0);
        });
      }
    });

    let bestCategory = '';
    let bestScore = -1;
    Object.entries(scores).forEach(([cat, val]) => {
      if (val > bestScore) {
        bestScore = val;
        bestCategory = cat;
      }
    });

    const candidates = missions.filter((m) => m.category === bestCategory);
    if (candidates.length === 0) {
      setResult(missions[0]);
      return;
    }
    const best = candidates.reduce((best, m) => (m.rewardAmount > best.rewardAmount ? m : best), candidates[0]);
    setResult(best);
  };

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      computeResult();
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleRestart = () => {
    setStep(-1);
    setAnswers([]);
    setResult(null);
  };

  const isRtl = lang === 'fa';
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;

  // Intro screen
  if (step === -1) {
    return (
      <div className="min-h-screen pt-20 lg:pt-24 pb-16 flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-brand-600 to-brand-400 shadow-lg mb-6 animate-float">
              <Compass size={36} className="text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
              {t.suggest.title}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">{t.suggest.subtitle}</p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-sm">
            <div className="space-y-3 mb-6">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center text-sm font-bold shrink-0">
                    {n}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {n === 1 && t.suggest.q1Title}
                    {n === 2 && t.suggest.q2Title}
                    {n === 3 && t.suggest.q3Title}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setStep(0)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              <Sparkles size={20} />
              {t.suggest.start}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Result screen
  if (step === 3 && result) {
    return (
      <div className="min-h-screen pt-20 lg:pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-500 shadow-lg mb-4 animate-float">
              <CheckCircle2 size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">{t.suggest.result}</h2>
            <p className="text-gray-500 dark:text-gray-400">{t.suggest.resultSubtitle}</p>
          </div>

          <div className="max-w-md mx-auto mb-6">
            <MissionCard mission={result} />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => onNavigate('missions')}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <ExternalLink size={18} />
              {t.suggest.viewMission}
            </button>
            <button
              onClick={handleRestart}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <RotateCcw size={18} />
              {t.suggest.restart}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Question screen
  const currentQuestion = questions[step];
  const canProceed = answers[step] !== undefined;

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16 flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {step + 1} / {questions.length}
            </span>
            <span className="text-sm font-medium text-brand-600 dark:text-brand-400">
              {Math.round(((step) / questions.length) * 100)}%
            </span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-brand-600 to-brand-400 rounded-full transition-all duration-500"
              style={{ width: `${(step / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm animate-slide-up">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {currentQuestion.title}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(step, idx)}
                className={`w-full text-start px-5 py-4 rounded-xl border-2 transition-all ${
                  answers[step] === idx
                    ? 'border-brand-500 bg-brand-500/10 text-brand-700 dark:text-brand-300'
                    : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-brand-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                    answers[step] === idx
                      ? 'border-brand-500 bg-brand-500'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}>
                    {answers[step] === idx && <CheckCircle2 size={14} className="text-white" />}
                  </div>
                  <span className="text-sm sm:text-base font-medium">{opt.label}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Nav buttons */}
          <div className="flex items-center justify-between gap-3 mt-8">
            <button
              onClick={handleBack}
              disabled={step === 0}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                step === 0
                  ? 'opacity-40 cursor-not-allowed text-gray-400'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <BackIcon size={18} />
              {t.suggest.back}
            </button>
            <button
              onClick={handleNext}
              disabled={!canProceed}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                canProceed
                  ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-md hover:shadow-lg hover:scale-[1.03]'
                  : 'opacity-40 cursor-not-allowed bg-gray-200 dark:bg-gray-800 text-gray-400'
              }`}
            >
              {step === questions.length - 1 ? t.suggest.result : t.suggest.next}
              <NextIcon size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
