export type Gender = 'male' | 'female';

export interface Hotspot {
  id: string;
  top: string;
  left: string;
  title: string;
  explanation: string;
  image?: string;
}

export interface QuizQuestion {
  question: string;
  isTrue: boolean;
  explanation?: string;
}

export interface DialogueMessage {
    speaker: string;
    text: string;
    align: 'left' | 'right';
}

export type Page = 'home' | 'physical' | 'hormones' | 'quiz' | 'dialogue';