import { create } from 'zustand';

// Define the store's state and actions interface
interface TextState {
  text: string;
  charCount: number;
  wordCount: number;
  sentenceCount: number;
  setText: (input: string) => void;
  clearText: () => void;
}

// Create the store with TypeScript typing
export const useTextStore = create<TextState>((set) => ({
  // State
  text: '',
  charCount: 0,
  wordCount: 0,
  sentenceCount: 0,

  // Actions
  setText: (input: string) =>
    set(() => {
      const newText = input || '';
      return {
        text: newText,
        charCount: newText.length,
        wordCount: newText
          .trim()
          .split(/\s+/)
          .filter(Boolean).length,
        sentenceCount: newText
          .split(/[.!?]+/)
          .filter(Boolean).length,
      };
    }),

  clearText: () =>
    set({
      text: '',
      charCount: 0,
      wordCount: 0,
      sentenceCount: 0,
    }),
}));