"use client";
import React, { useState } from "react";
import { useTextStore } from "../store/textStore";
import { characterCount } from "../lib/helperFunctions";

type LetterDensityItemProps = {
  letter: string;
  count: number;
  total: number;
};

const LetterDensityItem = ({
  letter,
  count,
  total,
}: LetterDensityItemProps) => {
  const percentage = (count / total) * 100;
  const percentageTwoDecimals = Math.round(percentage * 100) / 100;
  const clampedPercentage = Math.max(0, Math.min(percentage, 100));
  return (
    <div className="flex w-full items-center gap-[14px]">
      <p className="text-preset-4">{letter}</p>
      <div className="w-full bg-gray-200 rounded-full h-[12px] dark:bg-gray-700">
        <div
          className="bg-purple-400 h-[12px] rounded-full"
          style={{ width: `${clampedPercentage}%` }}
        ></div>
      </div>
      <p className="text-preset-4 whitespace-nowrap">
        {count} ({percentageTwoDecimals})
      </p>
    </div>
  );
};

const LetterDensity = () => {
  const { text } = useTextStore();
  const charMap = Object.entries(characterCount(text));
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleItems = isExpanded ? charMap : charMap.slice(0, 5);
  const hasMoreItems = charMap.length > 5;

  return (
    <div className="mt-[24px]">
      <h2 className="text-preset-2 text-neutral-900 mb-[20px] dark:text-neutral-200">
        Letter Density
      </h2>
      {text.length == 0 && (
        <p className="text-preset-4">
          No characters found. start typing to see letter density.
        </p>
      )}
      <div className="flex flex-col gap-[12px]">
        {visibleItems.map(([letter, count]) => (
          <LetterDensityItem
            key={letter}
            letter={letter}
            count={count}
            total={text.length}
          />
        ))}
      </div>
      {hasMoreItems && (
        <button
          className="appearance-none text-preset-3 mt-[20px]"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default LetterDensity;
