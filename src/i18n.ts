import type { Language, PageId } from './types';

export interface Translation {
  dir: 'rtl' | 'ltr';
  nav: {
    home: string;
    missions: string;
    suggest: string;
    rules: string;
    about: string;
    faq: string;
    guide: string;
  };
  header: {
    joinChannel: string;
    support: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaMissions: string;
    ctaSuggest: string;
    statMissions: string;
    statTotalReward: string;
    statMembers: string;
  };
  missions: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allCategories: string;
    categoryExchange: string;
    categorySurvey: string;
    categoryStore: string;
    categorySocial: string;
    categoryCreative: string;
    categoryDesign: string;
    reward: string;
    doMission: string;
    claimReward: string;
    claimInNewTab: string;
    noResults: string;
    sortBy: string;
    sortDefault: string;
    sortRewardHigh: string;
    sortRewardLow: string;
    resultsCount: string;
  };
  suggest: {
    title: string;
    subtitle: string;
    start: string;
    next: string;
    back: string;
    result: string;
    resultSubtitle: string;
    restart: string;
    viewMission: string;
    q1Title: string;
    q1Opt1: string;
    q1Opt2: string;
    q1Opt3: string;
    q1Opt4: string;
    q2Title: string;
    q2Opt1: string;
    q2Opt2: string;
    q2Opt3: string;
    q3Title: string;
    q3Opt1: string;
    q3Opt2: string;
    q3Opt3: string;
  };
  rules: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    subtitle: string;
  };
  faq: {
    title: string;
    subtitle: string;
  };
  guide: {
    title: string;
    subtitle: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    contact: string;
    joinBale: string;
    support: string;
    copyright: string;
  };
  modal: {
    claimTitle: string;
    supportTitle: string;
    close: string;
    openInNewTab: string;
    loading: string;
    fallbackMessage: string;
  };
  common: {
    language: string;
    theme: string;
  };
}

const fa: Translation = {
  dir: 'rtl',
  nav: {
    home: 'خانه',
    missions: 'ماموریت‌ها',
    suggest: 'پیشنهاد ماموریت',
    rules: 'قوانین',
    about: 'درباره ما',
    faq: 'سوالات متداول',
    guide: 'راهنما',
  },
  header: {
    joinChannel: 'عضویت در کانال بله',
    support: 'پشتیبانی',
  },
  hero: {
    badge: 'پلتفرم کسب جوایز یاشار',
    title: 'یاشار',
    titleHighlight: 'کلاب',
    subtitle: 'ماموریت‌ها را انجام بده، جوایز نقدی دریافت کن. مجموع جوایز بیش از ۱۰۰,۰۰۰ تومان.',
    ctaMissions: 'مشاهده ماموریت‌ها',
    ctaSuggest: 'پیشنهاد ماموریت',
    statMissions: 'ماموریت فعال',
    statTotalReward: 'تومان جایزه',
    statMembers: 'عضو فعال',
  },
  missions: {
    title: 'ماموریت‌ها',
    subtitle: 'ماموریت مورد نظر خود را پیدا کنید و جایزه بگیرید',
    searchPlaceholder: 'جستجوی ماموریت...',
    allCategories: 'همه دسته‌ها',
    categoryExchange: 'صرافی‌ها',
    categorySurvey: 'پرسشنامه',
    categoryStore: 'فروشگاه',
    categorySocial: 'دعوت دوستان',
    categoryCreative: 'خلاقیت',
    categoryDesign: 'یاشار دیزاین',
    reward: 'جایزه',
    doMission: 'انجام ماموریت',
    claimReward: 'دریافت جایزه',
    claimInNewTab: 'در تب جدید باز می‌شود',
    noResults: 'ماموریتی با این مشخصات یافت نشد',
    sortBy: 'مرتب‌سازی',
    sortDefault: 'پیش‌فرض',
    sortRewardHigh: 'بیشترین جایزه',
    sortRewardLow: 'کمترین جایزه',
    resultsCount: 'ماموریت یافت شد',
  },
  suggest: {
    title: 'پیشنهاد ماموریت',
    subtitle: 'به چند سوال پاسخ بده تا بهترین ماموریت برایت پیشنهاد دهیم',
    start: 'شروع',
    next: 'بعدی',
    back: 'قبلی',
    result: 'ماموریت پیشنهادی',
    resultSubtitle: 'بر اساس پاسخ‌های شما، این ماموریت بهترین انتخاب است',
    restart: 'شروع مجدد',
    viewMission: 'مشاهده ماموریت',
    q1Title: 'به چه نوع فعالیتی علاقه دارید؟',
    q1Opt1: 'معامله و سرمایه‌گذاری در صرافی‌ها',
    q1Opt2: 'پاسخ به پرسشنامه و نظرسنجی',
    q1Opt3: 'خرید و دیدگاه در فروشگاه',
    q1Opt4: 'کارهای خلاقانه و دعوت دوستان',
    q2Title: 'چقدر زمان برای انجام ماموریت دارید؟',
    q2Opt1: 'کم (زمان سریع)',
    q2Opt2: 'متوسط',
    q2Opt3: 'زیاد',
    q3Title: 'چقدر جایزه می‌خواهید؟',
    q3Opt1: 'کم مهم نیست، فقط می‌خواهم شروع کنم',
    q3Opt2: 'متوسط',
    q3Opt3: 'بیشترین ممکن',
  },
  rules: {
    title: 'قوانین یاشار کلاب',
    subtitle: 'لطفاً قبل از شروع، قوانین را به دقت مطالعه کنید',
  },
  about: {
    title: 'درباره یاشار کلاب',
    subtitle: 'با یاشار کلاب آشنا شوید',
  },
  faq: {
    title: 'سوالات متداول',
    subtitle: 'پاسخ سوالات پرتکرار شما',
  },
  guide: {
    title: 'راهنمای استفاده',
    subtitle: 'قدم به قدم با یاشار کلاب',
  },
  footer: {
    description: 'یاشار کلاب پلتفرمی برای کسب جوایز نقدی از طریق انجام ماموریت‌های متنوع است.',
    quickLinks: 'دسترسی سریع',
    contact: 'ارتباط با ما',
    joinBale: 'عضویت در کانال بله',
    support: 'پشتیبانی',
    copyright: 'تمام حقوق محفوظ است',
  },
  modal: {
    claimTitle: 'دریافت جایزه',
    supportTitle: 'پشتیبانی',
    close: 'بستن',
    openInNewTab: 'باز کردن در تب جدید',
    loading: 'در حال بارگذاری...',
    fallbackMessage: 'این صفحه امکان نمایش درون سایت را ندارد. برای ادامه روی دکمه زیر کلیک کنید تا در تب جدید باز شود.',
  },
  common: {
    language: 'English',
    theme: 'تاریک',
  },
};

const en: Translation = {
  dir: 'ltr',
  nav: {
    home: 'Home',
    missions: 'Missions',
    suggest: 'Suggest Mission',
    rules: 'Rules',
    about: 'About Us',
    faq: 'FAQ',
    guide: 'Guide',
  },
  header: {
    joinChannel: 'Join Bale Channel',
    support: 'Support',
  },
  hero: {
    badge: 'Yashar Rewards Platform',
    title: 'Yashar',
    titleHighlight: 'Club',
    subtitle: 'Complete missions, earn cash rewards. Total rewards over 100,000 Toman.',
    ctaMissions: 'View Missions',
    ctaSuggest: 'Suggest a Mission',
    statMissions: 'Active Missions',
    statTotalReward: 'Toman Rewards',
    statMembers: 'Active Members',
  },
  missions: {
    title: 'Missions',
    subtitle: 'Find your desired mission and earn rewards',
    searchPlaceholder: 'Search missions...',
    allCategories: 'All Categories',
    categoryExchange: 'Exchanges',
    categorySurvey: 'Surveys',
    categoryStore: 'Store',
    categorySocial: 'Invite Friends',
    categoryCreative: 'Creative',
    categoryDesign: 'Yashar Design',
    resultsCount: 'missions found',
    sortBy: 'Sort by',
    sortDefault: 'Default',
    sortRewardHigh: 'Highest Reward',
    sortRewardLow: 'Lowest Reward',
    reward: 'Reward',
    doMission: 'Do Mission',
    claimReward: 'Claim Reward',
    claimInNewTab: 'Opens in new tab',
    noResults: 'No missions found matching these criteria',
  },
  suggest: {
    title: 'Mission Suggester',
    subtitle: 'Answer a few questions and we\'ll suggest the best mission for you',
    start: 'Start',
    next: 'Next',
    back: 'Back',
    result: 'Suggested Mission',
    resultSubtitle: 'Based on your answers, this mission is the best fit for you',
    restart: 'Restart',
    viewMission: 'View Mission',
    q1Title: 'What type of activity interests you?',
    q1Opt1: 'Trading and investing in exchanges',
    q1Opt2: 'Answering surveys and questionnaires',
    q1Opt3: 'Shopping and reviewing at the store',
    q1Opt4: 'Creative work and inviting friends',
    q2Title: 'How much time do you have?',
    q2Opt1: 'Little (quick tasks)',
    q2Opt2: 'Moderate',
    q2Opt3: 'A lot',
    q3Title: 'How much reward do you want?',
    q3Opt1: 'Doesn\'t matter, just want to start',
    q3Opt2: 'Moderate',
    q3Opt3: 'As much as possible',
  },
  rules: {
    title: 'Yashar Club Rules',
    subtitle: 'Please read the rules carefully before starting',
  },
  about: {
    title: 'About Yashar Club',
    subtitle: 'Get to know Yashar Club',
  },
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Answers to your most common questions',
  },
  guide: {
    title: 'User Guide',
    subtitle: 'Step by step with Yashar Club',
  },
  footer: {
    description: 'Yashar Club is a platform for earning cash rewards through various missions.',
    quickLinks: 'Quick Links',
    contact: 'Contact Us',
    joinBale: 'Join Bale Channel',
    support: 'Support',
    copyright: 'All rights reserved',
  },
  modal: {
    claimTitle: 'Claim Reward',
    supportTitle: 'Support',
    close: 'Close',
    openInNewTab: 'Open in new tab',
    loading: 'Loading...',
    fallbackMessage: 'This page cannot be displayed within the site. Click the button below to open it in a new tab.',
  },
  common: {
    language: 'فارسی',
    theme: 'Dark',
  },
};

export const translations: Record<Language, Translation> = { fa, en };

export function getTranslation(lang: Language): Translation {
  return translations[lang];
}

export const pageList: PageId[] = ['home', 'missions', 'suggest', 'rules', 'about', 'faq', 'guide'];
