"use client";
import Image from "next/image";
import React from "react";
import { useTextStore } from "../store/textStore";

const TextInput = () => {
  const {
    text,
    setText,
    excludeSpaces,
    characterLimit,
    setCharacterLimit,
    charCount,
    isLimitCharacters,
    setIsLimitCharacters,
    toggleExcludeSpaces,
  } = useTextStore();

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Start typing here... (or paste your text)"
        className={`h-[200px] bg-neutral-100 w-full resize-none rounded-[12px] border-2 appearance-none focus:outline-none
    focus:shadow-outline p-[12px] text-preset-3 dark:bg-neutral-800 dark:text-neutral-200 ${
      charCount > characterLimit
        ? "border-orange-500 shadow-md shadow-orange-500/50"
        : "border-neutral-200 dark:border-neutral-700"
    }`}
      />
      {charCount > characterLimit && (
        <p className="text-orange-500 text-preset-4 mt-[8px] flex items-center">
          <Image
            src="/assets/images/icon-info.svg"
            width={15}
            height={15}
            alt="Info icon"
            className="mr-[8px]"
          />{" "}
          Limit reached! Your text exceeds {characterLimit} characters.
        </p>
      )}
      <div className="flex flex-col gap-[10px] md:flex-row md:items-center pt-[16px]">
        <div className="flex gap-[10px]  items-center">
          <label className="relative group hover:cursor-pointer">
            <input
              type="checkbox"
              checked={excludeSpaces}
              onChange={toggleExcludeSpaces}
              className="w-[16px] h-[16px] peer appearance-none border border-1 border-neutral-200 rounded-[4px] group-hover:cursor-pointer group-hover:border-neutral-600 focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 checked:bg-purple-400 checked:border-purple-400 dark:group-hover:border-neutral-50 dark:border-neutral-100 dark:group-hover:checked:border-purple-400 dark:focus:bg-white dark:checked:bg-purple-400 dark:checked:border-purple-400 dark:focus:checked:bg-purple-400"
              id="spaces"
            />
            <Image
              src="/assets/images/icon-check.svg"
              width={12}
              height={13}
              alt="Checkmark"
              className="absolute top-1 left-[2px] hidden peer-checked:block"
            />
          </label>
          <label htmlFor="spaces" className="text-preset-4">
            Exclude Spaces
          </label>
        </div>
        <div className="flex gap-[10px] items-center">
          <label className="relative group hover:cursor-pointer">
            <input
              type="checkbox"
              checked={isLimitCharacters}
              onChange={() => setIsLimitCharacters()}
              className="w-[16px] h-[16px] peer appearance-none border border-1 border-neutral-200 rounded-[4px] group-hover:cursor-pointer group-hover:border-neutral-600 focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 checked:bg-purple-400 checked:border-purple-400 dark:group-hover:border-neutral-50 dark:border-neutral-100 dark:group-hover:checked:border-purple-400 dark:focus:bg-white dark:checked:bg-purple-400 dark:checked:border-purple-400 dark:focus:checked:bg-purple-400"
              id="spaces"
            />
            <Image
              src="/assets/images/icon-check.svg"
              width={12}
              height={13}
              alt="Checkmark"
              className="absolute top-1 left-[2px] hidden peer-checked:block"
            />
          </label>
          <label htmlFor="chars" className="text-preset-4">
            Set Character Limit
          </label>
          {isLimitCharacters && (
            <input
              type="text"
              value={characterLimit}
              onChange={(e) => {
                const value = e.target.value;
                // Only set the value if it's empty or a valid integer
                if (value === "" || /^\d*$/.test(value)) {
                  setCharacterLimit(value === "" ? 0 : parseInt(value, 10));
                }
              }}
              className="appearance-none w-[55px] h-[30px] border-2 rounded-[6px] border-neutral-600 flex items-center justify-center text-center text-preset-4"
            ></input>
          )}
        </div>

        <p className="pt-[2px] md:ml-auto">
          Approx. reading time: &lt;1 minute
        </p>
      </div>
    </div>
  );
};

export default TextInput;
