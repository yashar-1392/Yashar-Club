import type { Mission } from './types';

export const BALE_CHANNEL_LINK = 'https://ble.ir/yashar_club';
export const SUPPORT_LINK = 'https://survey.porsline.ir/s/WCQYOc4K';

export const missions: Mission[] = [
  {
    id: 1,
    category: 'exchange',
    fa: {
      title: 'ثبت نام در صراف با کد معرف ما',
      description: 'شما با کد معرف ما در صراف ثبت نام خواهید کرد (اگر از قبل حساب دارید نمی‌توانید شرکت کنید). پس از ثبت‌نام ۳۰۰ هزار ریال بیت‌کوین رایگان دریافت می‌کنید.',
      reward: '۱۰۰,۰۰۰ ریال',
    },
    en: {
      title: 'Register on Saraf with our referral code',
      description: 'Register on Saraf with our referral code (existing accounts cannot participate). After registration you receive 300,000 Rial in free Bitcoin.',
      reward: '100,000 Rial',
    },
    rewardAmount: 100000,
    doLink: 'https://saraf.app/?ref=3AN29',
    claimLink: 'https://survey.porsline.ir/s/F2mbTE2D',
  },
  {
    id: 2,
    category: 'exchange',
    fa: {
      title: 'ثبت نام در میلی با کد معرف ما',
      description: 'ثبت‌نام در پلتفرم میلی با کد معرف ما (مختص کاربران جدید). پس از ثبت‌نام یک سوت طلا رایگان دریافت خواهید کرد.',
      reward: '۴۰۰,۰۰۰ ریال',
    },
    en: {
      title: 'Register on Milli with our referral code',
      description: 'Register on Milli platform with our referral code (new users only). After registration you receive one gold gram free.',
      reward: '400,000 Rial',
    },
    rewardAmount: 400000,
    doLink: 'https://milli.gold/app/sign-up?referralCode=milli-znfqw',
    claimLink: 'https://survey.porsline.ir/s/CiWcQJHW',
  },
  {
    id: 3,
    category: 'exchange',
    fa: {
      title: 'ثبت نام در ملی گلد با کد معرف ما',
      description: 'ثبت‌نام در ملی گلد با کد معرف ما (ویژه کاربران جدید). پس از ثبت‌نام ۴ سوت طلا رایگان دریافت خواهید کرد.',
      reward: '۱۰۰,۰۰۰ ریال',
    },
    en: {
      title: 'Register on Melligold with our referral code',
      description: 'Register on Melligold with our referral code (new users only). After registration you receive 4 gold grams free.',
      reward: '100,000 Rial',
    },
    rewardAmount: 100000,
    doLink: 'https://melligold.com/pwa/account/?ref=MGNDz4OdKXkQ',
    claimLink: 'https://survey.porsline.ir/s/acG4J0OS',
  },
  {
    id: 4,
    category: 'exchange',
    fa: {
      title: 'ثبت نام در نوبیتکس با کد معرف ما',
      description: 'ثبت‌نام در صرافی نوبیتکس با کد معرف (مختص کاربران جدید). پس از ثبت‌نام و اولین معامله، ۱۵ درصد کارمزد به شما و ۱۵ درصد به ما تعلق می‌گیرد.',
      reward: '۱۰,۰۰۰ ریال',
    },
    en: {
      title: 'Register on Nobitex with our referral code',
      description: 'Register on Nobitex exchange with referral code (new users only). After registration and first trade, 15% commission goes to you and 15% to us.',
      reward: '10,000 Rial',
    },
    rewardAmount: 10000,
    doLink: 'https://nobitex.ir/signup/?refcode=144BF9C',
    claimLink: 'https://survey.porsline.ir/s/U0uwbjKL',
  },
  {
    id: 5,
    category: 'exchange',
    fa: {
      title: 'ثبت نام در وال گلد با کد معرف ما',
      description: 'ثبت‌نام در پلتفرم وال گلد با کد معرف (مختص حساب‌های جدید). پس از ثبت‌نام ۱ سوت جایزه دریافت می‌کنید.',
      reward: '۵۰,۰۰۰ ریال',
    },
    en: {
      title: 'Register on Wallgold with our referral code',
      description: 'Register on Wallgold platform with referral code (new accounts only). After registration you receive 1 gold gram as reward.',
      reward: '50,000 Rial',
    },
    rewardAmount: 50000,
    doLink: 'https://wallgold.ir/app/login?referralCode=dvPkA5',
    claimLink: 'https://survey.porsline.ir/s/tRWd41G2',
  },
  {
    id: 6,
    category: 'survey',
    fa: {
      title: 'تکمیل پرسشنامه',
      description: 'باید پرسشنامه را به صورت کامل تکمیل کرده و در نهایت دکمه ارسال را بزنید.',
      reward: '۱۰,۰۰۰ ریال',
    },
    en: {
      title: 'Complete the questionnaire',
      description: 'You must complete the questionnaire in full and click the submit button at the end.',
      reward: '10,000 Rial',
    },
    rewardAmount: 10000,
    doLink: 'https://survey.porsline.ir/s/rKEwmcDX',
    claimLink: 'https://survey.porsline.ir/s/t0p2PRsc',
  },
  {
    id: 7,
    category: 'survey',
    fa: {
      title: 'پاسخ به سوالات جهت بهبود یاشار (NPS)',
      description: 'پاسخ کامل به پرسشنامه سنجش رضایت و بهبود عملکرد یاشار.',
      reward: '۱۰,۰۰۰ ریال',
    },
    en: {
      title: 'Answer questions for Yashar improvement (NPS)',
      description: 'Complete the satisfaction and performance improvement survey for Yashar.',
      reward: '10,000 Rial',
    },
    rewardAmount: 10000,
    doLink: 'https://survey.porsline.ir/s/Kq5D8pdV',
    claimLink: 'https://survey.porsline.ir/s/t0p2PRsc',
  },
  {
    id: 8,
    category: 'store',
    fa: {
      title: 'ثبت نام در فروشگاه اینترنتی یاشار',
      description: 'ثبت‌نام با شماره تلفن همراه در فروشگاه (نباید بیش از یک هفته از زمان ثبت‌نام گذشته باشد).',
      reward: '۱۰,۰۰۰ ریال',
    },
    en: {
      title: 'Register at Yashar Online Store',
      description: 'Register with your mobile number at the store (registration must be within the past week).',
      reward: '10,000 Rial',
    },
    rewardAmount: 10000,
    doLink: 'https://yashar-store.mydigify.app/auth/login',
    claimLink: 'https://survey.porsline.ir/s/j2TGwEmv',
  },
  {
    id: 9,
    category: 'store',
    fa: {
      title: 'ثبت دیدگاه برای یک محصول در فروشگاه اینترنتی یاشار',
      description: 'ثبت دیدگاه برای محصولاتی که قبلاً خریداری کرده‌اید (نباید بیش از یک هفته از ثبت دیدگاه گذشته باشد).',
      reward: '۲۰,۰۰۰ ریال',
    },
    en: {
      title: 'Review a product at Yashar Online Store',
      description: 'Leave a review for products you have previously purchased (review must be within the past week).',
      reward: '20,000 Rial',
    },
    rewardAmount: 20000,
    doLink: 'https://yashar-store.mydigify.app/auth/login',
    claimLink: 'https://survey.porsline.ir/s/wGz1Pi0U',
  },
  {
    id: 10,
    category: 'store',
    fa: {
      title: 'ثبت سفارش از فروشگاه اینترنتی یاشار',
      description: 'خرید از فروشگاه (جایزه پس از دریافت مرسوله و اتمام مهلت مرجوعی و حداکثر تا دو ماه پس از خرید قابل دریافت است).',
      reward: '۵۰,۰۰۰ ریال',
    },
    en: {
      title: 'Place an order from Yashar Online Store',
      description: 'Purchase from the store (reward available after delivery and return period ends, up to two months after purchase).',
      reward: '50,000 Rial',
    },
    rewardAmount: 50000,
    doLink: 'https://yashar-store.mydigify.app',
    claimLink: 'https://survey.porsline.ir/s/ldvI73oA',
  },
  {
    id: 11,
    category: 'store',
    fa: {
      title: 'ثبت بیش از سه سفارش در یک ماه از فروشگاه اینترنتی یاشار',
      description: 'ثبت بیش از ۳ سفارش موفق در طول یک ماه از فروشگاه (پس از اتمام مهلت مرجوعی).',
      reward: '۱۰۰,۰۰۰ ریال',
    },
    en: {
      title: 'Place more than 3 orders in one month from Yashar Store',
      description: 'Place more than 3 successful orders in one month from the store (after return period ends).',
      reward: '100,000 Rial',
    },
    rewardAmount: 100000,
    doLink: 'https://yashar-store.mydigify.app',
    claimLink: 'https://survey.porsline.ir/s/P2zbj9iR',
  },
  {
    id: 12,
    category: 'social',
    fa: {
      title: 'دعوت اولین دوست به یاشار دیزاین و ثبت اولین سفارش توسط دوست شما',
      description: 'ثبت اطلاعات خود و دوست‌تان در صفحه مربوطه؛ پس از انجام اولین خرید توسط دوست شما، جایزه آزاد می‌شود.',
      reward: '۳۰,۰۰۰ ریال',
    },
    en: {
      title: 'Invite first friend to Yashar Design and their first order',
      description: 'Enter your and your friend\'s info on the page; reward unlocks after your friend makes their first purchase.',
      reward: '30,000 Rial',
    },
    rewardAmount: 30000,
    doLink: 'https://survey.porsline.ir/s/Lueq7JCj',
    claimLink: 'https://survey.porsline.ir/s/QHAxpCvp',
  },
  {
    id: 13,
    category: 'creative',
    fa: {
      title: 'نام‌گذاری پلتفرم جدید SaaS',
      description: 'مطالعه دستورالعمل داخل صفحه و پیشنهاد دادن یک نام جذاب برای پلتفرم جدید (بهترین نام جایزه جداگانه دارد).',
      reward: '۱۰,۰۰۰ ریال',
    },
    en: {
      title: 'Name the new SaaS platform',
      description: 'Read the instructions on the page and suggest a catchy name for the new platform (best name gets a separate prize).',
      reward: '10,000 Rial',
    },
    rewardAmount: 10000,
    doLink: 'https://survey.porsline.ir/s/3FdzSXNH',
    claimLink: 'https://survey.porsline.ir/s/c9ikH1XY',
  },
  {
    id: 14,
    category: 'design',
    fa: {
      title: 'ثبت سفارش از یاشار دیزاین',
      description: 'ثبت سفارش در سایت یاشار دیزاین (از طریق کلیک روی دکمه ثبت سفارش در بله در انتهای سایت).',
      reward: '۱۰۰,۰۰۰ ریال',
    },
    en: {
      title: 'Place an order from Yashar Design',
      description: 'Place an order on Yashar Design website (by clicking the order button on Bale at the bottom of the site).',
      reward: '100,000 Rial',
    },
    rewardAmount: 100000,
    doLink: 'https://yashar-1392.github.io/yashar-design/',
    claimLink: 'https://survey.porsline.ir/s/ldvI73oA',
  },
];

export const totalRewardAmount = 1000000;
export const actualTotalRewards = missions.reduce((sum, m) => sum + m.rewardAmount, 0);
export const totalMissions = missions.length;
