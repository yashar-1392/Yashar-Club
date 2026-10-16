export type Language = 'fa' | 'en';
export type Theme = 'light' | 'dark';
export type PageId = 'home' | 'missions' | 'suggest' | 'rules' | 'about' | 'faq' | 'guide';

export interface Mission {
  id: number;
  category: string;
  fa: {
    title: string;
    description: string;
    reward: string;
  };
  en: {
    title: string;
    description: string;
    reward: string;
  };
  rewardAmount: number;
  doLink: string;
  claimLink: string;
}
