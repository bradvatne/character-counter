import { create } from "zustand";

interface TextState {
  text: string;
  charCount: number;
  wordCount: number;
  sentenceCount: number;
  excludeSpaces: boolean;
  isLimitCharacters: boolean;
  characterLimit: number;
  setText: (input: string) => void;
  toggleExcludeSpaces: () => void;
  clearText: () => void;
  setIsLimitCharacters: () => void;
  setCharacterLimit: (limit: number) => void;
}

export const useTextStore = create<TextState>((set) => ({
  // State
  text: "",
  charCount: 0,
  wordCount: 0,
  sentenceCount: 0,
  excludeSpaces: false, // New state, defaults to false
  isLimitCharacters: false,
  characterLimit: 0,

  // Actions
  setText: (input: string) =>
    set((state) => {
      const newText = input || "";
      return {
        text: newText,
        charCount: newText.length,
        wordCount: newText.trim().split(/\s+/).filter(Boolean).length,
        sentenceCount: newText.split(/[.!?]+/).filter(Boolean).length,
      };
    }),

  toggleExcludeSpaces: () =>
    set((state) => {
      return {
        excludeSpaces: !state.excludeSpaces,
      };
    }),

  clearText: () =>
    set({
      text: "",
      charCount: 0,
      wordCount: 0,
      sentenceCount: 0,
      excludeSpaces: false,
    }),

  setIsLimitCharacters: () =>
    set((state) => {
      return {
        isLimitCharacters: !state.isLimitCharacters,
      };
    }),

  setCharacterLimit: (limit: number) =>
    set(() => {
      return {
        characterLimit: limit,
      };
    }),
}));
