import type { Language } from './types';

export interface ContentSection {
  title: { fa: string; en: string };
  body: { fa: string; en: string };
}

export interface FaqItem {
  question: { fa: string; en: string };
  answer: { fa: string; en: string };
}

export interface GuideStep {
  step: number;
  title: { fa: string; en: string };
  body: { fa: string; en: string };
}

export const rulesContent: ContentSection[] = [
  {
    title: { fa: 'شرایط عمومی', en: 'General Conditions' },
    body: {
      fa: 'کاربران باید با اطلاعات واقعی خود در پلتفرم‌های معرفی شده ثبت‌نام کنند. استفاده از اطلاعات نادرست موجود لغو جایزه خواهد شد. هر کاربر فقط یک بار می‌تواند در هر ماموریت شرکت کند.',
      en: 'Users must register with real information on the introduced platforms. Using false information will result in reward cancellation. Each user can participate in each mission only once.',
    },
  },
  {
    title: { fa: 'شرایط دریافت جایزه', en: 'Reward Conditions' },
    body: {
      fa: 'پس از انجام ماموریت، باید درخواست خود را از طریق لینک «دریافت جایزه» ثبت کنید. بررسی درخواست ممکن است چند روز زمان ببرد. جایزه پس از تایید صحت انجام ماموریت پرداخت می‌شود.',
      en: 'After completing a mission, you must submit your request via the "Claim Reward" link. Review may take a few days. The reward is paid after verifying the mission was completed correctly.',
    },
  },
  {
    title: { fa: 'محدودیت‌ها', en: 'Limitations' },
    body: {
      fa: 'ماموریت‌های صرافی فقط برای کاربران جدید آن پلتفرم قابل انجام هستند. اگر از قبل حساب داشته باشید نمی‌توانید شرکت کنید. ماموریت‌های فروشگاه دارای محدودیت زمانی هستند که در توضیحات هر ماموریت ذکر شده است.',
      en: 'Exchange missions are only for new users of that platform. If you already have an account, you cannot participate. Store missions have time limitations noted in each mission description.',
    },
  },
  {
    title: { fa: 'حق لغو و تغییر', en: 'Cancellation and Modification Rights' },
    body: {
      fa: 'تیم یاشار کلاب حق تغییر قوانین، جوایز و شرایط ماموریت‌ها را در هر زمان محفوظ می‌داند. در صورت تقلب یا سوءاستفاده، حساب کاربر مسدود و جایزه‌ها لغو خواهد شد.',
      en: 'The Yashar Club team reserves the right to change rules, rewards, and mission conditions at any time. In case of cheating or abuse, the user account will be blocked and rewards cancelled.',
    },
  },
  {
    title: { fa: 'پرداخت جایزه', en: 'Reward Payment' },
    body: {
      fa: 'جوایز به صورت نقدی و به تومان پرداخت می‌شوند. روش و زمان پرداخت پس از تایید درخواست از طریق کانال بله اطلاع‌رسانی خواهد شد.',
      en: 'Rewards are paid in cash (Toman). Payment method and timing will be announced via the Bale channel after request approval.',
    },
  },
];

export const aboutContent: ContentSection[] = [
  {
    title: { fa: 'یاشار کلاب چیست؟', en: 'What is Yashar Club?' },
    body: {
      fa: 'یاشار کلاب یک پلتفرم تعاملی است که به کاربران خود امکان می‌دهد با انجام ماموریت‌های متنوع — از ثبت‌نام در صرافی‌ها و پلتفرم‌های مالی تا خرید از فروشگاه و مشارکت در نظرسنجی‌ها — جوایز نقدی دریافت کنند. هدف ما ایجاد یک جامعه فعال و سودآور برای همه اعضاست.',
      en: 'Yashar Club is an interactive platform that allows users to earn cash rewards by completing various missions — from registering on exchanges and financial platforms to shopping at the store and participating in surveys. Our goal is to build an active and profitable community for all members.',
    },
  },
  {
    title: { fa: 'ماموریت ما', en: 'Our Mission' },
    body: {
      fa: 'ماموریت ما ایجاد فرصت‌های کسب درآمد برای کاربران ایرانی از طریق معرفی پلتفرم‌های معتبر و محصولات باکیفیت است. ما با شفافیت کامل و پرداخت به موقع جوایز، اعتماد اعضای خود را جلب کرده‌ایم.',
      en: 'Our mission is to create income opportunities for Iranian users by introducing reputable platforms and quality products. We have earned our members\' trust through full transparency and timely reward payments.',
    },
  },
  {
    title: { fa: 'چرا یاشار کلاب؟', en: 'Why Yashar Club?' },
    body: {
      fa: 'جوایز نقدی واقعی، فرآیند شفاف و سریع، پشتیبانی اختصاصی، و تنوع بالای ماموریت‌ها از ویژگی‌های برجسته یاشار کلاب است. ما به همراه شما رشد می‌کنیم و همواره ماموریت‌های جدیدی اضافه می‌کنیم.',
      en: 'Real cash rewards, transparent and fast process, dedicated support, and a wide variety of missions are the standout features of Yashar Club. We grow with you and constantly add new missions.',
    },
  },
];

export const faqContent: FaqItem[] = [
  {
    question: { fa: 'چگونه می‌توانم در ماموریت‌ها شرکت کنم؟', en: 'How can I participate in missions?' },
    answer: {
      fa: 'کافیست روی دکمه «انجام ماموریت» کلیک کنید تا به صفحه مربوطه هدایت شوید. پس از انجام ماموریت، از طریق لینک «دریافت جایزه» درخواست خود را ثبت کنید.',
      en: 'Simply click the "Do Mission" button to be directed to the relevant page. After completing the mission, submit your request via the "Claim Reward" link.',
    },
  },
  {
    question: { fa: 'چقدر طول می‌کشد تا جایزه‌ام را دریافت کنم؟', en: 'How long does it take to receive my reward?' },
    answer: {
      fa: 'پس از ثبت درخواست، تیم بررسی چند روز زمان نیاز دارد تا صحت انجام ماموریت را تایید کند. پس از تایید، جایزه به شما پرداخت می‌شود.',
      en: 'After submitting your request, the review team needs a few days to verify the mission completion. Once approved, the reward is paid to you.',
    },
  },
  {
    question: { fa: 'آیا می‌توانم در چند ماموریت همزمان شرکت کنم؟', en: 'Can I participate in multiple missions at the same time?' },
    answer: {
      fa: 'بله، شما می‌توانید در تمام ماموریت‌هایی که واجد شرایط آن‌ها هستید شرکت کنید. هیچ محدودیتی برای تعداد ماموریت‌ها وجود ندارد.',
      en: 'Yes, you can participate in all missions you are eligible for. There is no limit on the number of missions.',
    },
  },
  {
    question: { fa: 'اگر از قبل در یک صرافی حساب داشته باشم چه؟', en: 'What if I already have an account on an exchange?' },
    answer: {
      fa: 'ماموریت‌های صرافی فقط برای کاربران جدید قابل انجام هستند. اگر از قبل حساب داشته باشید، متاسفانه نمی‌توانید در آن ماموریت شرکت کنید.',
      en: 'Exchange missions are only for new users. If you already have an account, unfortunately you cannot participate in that mission.',
    },
  },
  {
    question: { fa: 'چگونه با پشتیبانی در ارتباط باشم؟', en: 'How can I contact support?' },
    answer: {
      fa: 'می‌توانید از طریق دکمه پشتیبانی در سایت یا کانال بله با ما در ارتباط باشید. تیم پشتیبانی در اسرع وقت پاسخگو خواهد بود.',
      en: 'You can reach us through the support button on the site or the Bale channel. The support team will respond as soon as possible.',
    },
  },
  {
    question: { fa: 'جوایز چگونه پرداخت می‌شوند؟', en: 'How are rewards paid?' },
    answer: {
      fa: 'جوایز به صورت نقدی و به تومان پرداخت می‌شوند. جزئیات پرداخت پس از تایید درخواست از طریق کانال بله اطلاع‌رسانی می‌شود.',
      en: 'Rewards are paid in cash (Toman). Payment details are announced via the Bale channel after request approval.',
    },
  },
];

export const guideSteps: GuideStep[] = [
  {
    step: 1,
    title: { fa: 'انتخاب ماموریت', en: 'Choose a Mission' },
    body: {
      fa: 'به صفحه ماموریت‌ها بروید و ماموریتی که به آن علاقه دارید را انتخاب کنید. می‌توانید از فیلتر دسته‌بندی و جستجو برای پیدا کردن سریع‌تر استفاده کنید.',
      en: 'Go to the Missions page and choose a mission you\'re interested in. You can use category filters and search to find one faster.',
    },
  },
  {
    step: 2,
    title: { fa: 'انجام ماموریت', en: 'Complete the Mission' },
    body: {
      fa: 'روی دکمه «انجام ماموریت» کلیک کنید تا به صفحه مورد نظر هدایت شوید. دستورالعمل ماموریت را به دقت بخوانید و آن را کامل کنید.',
      en: 'Click the "Do Mission" button to be directed to the target page. Read the mission instructions carefully and complete it.',
    },
  },
  {
    step: 3,
    title: { fa: 'ثبت درخواست جایزه', en: 'Submit Reward Request' },
    body: {
      fa: 'پس از انجام ماموریت، روی دکمه «دریافت جایزه» کلیک کنید. فرم درخواست را در صفحه باز شده تکمیل کنید تا درخواست شما در صف بررسی قرار بگیرد.',
      en: 'After completing the mission, click the "Claim Reward" button. Fill out the request form on the opened page to submit your request for review.',
    },
  },
  {
    step: 4,
    title: { fa: 'دریافت جایزه', en: 'Receive Your Reward' },
    body: {
      fa: 'پس از تایید صحت انجام ماموریت توسط تیم بررسی، جایزه شما پرداخت خواهد شد. می‌توانید از طریق کانال بله از وضعیت درخواست خود مطلع شوید.',
      en: 'After the review team verifies your mission completion, your reward will be paid. You can stay updated on your request status via the Bale channel.',
    },
  },
];

export function tr(field: { fa: string; en: string }, lang: Language): string {
  return field[lang];
}
