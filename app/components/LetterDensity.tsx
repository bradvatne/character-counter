"use client";
import React, { use } from "react";
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
      <p className="text-preset-4 whitespace-nowrap">{count} ({percentageTwoDecimals})</p>
    </div>
  );
};

const LetterDensity = () => {
  const { text } = useTextStore();
  const charMap = characterCount(text);
  return (
    <div className="mt-[24px]">
      <h2 className="text-preset-2 text-neutral-900 mb-[20px]">
        Letter Density
      </h2>
      <div className="flex flex-col gap-[12px]">
        {Object.entries(charMap).map(([letter, count]) => (
          <LetterDensityItem
            key={letter}
            letter={letter}
            count={count}
            total={text.length}
          />
        ))}
      </div>
    </div>
  );
};

export default LetterDensity;
