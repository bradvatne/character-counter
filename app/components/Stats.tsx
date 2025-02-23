"use client";
import React from "react";
import StatContainer from "./StatContainer";
import { useTextStore } from "../store/textStore";

const Stats = () => {
  const { wordCount, sentenceCount, excludeSpaces, text } = useTextStore();
  return (
    <div className="mt-[40px] flex flex-col gap-[16px] md:flex-row">
      <StatContainer
        count={excludeSpaces ? text.replace(/\s/g, '').length : text.length}
        label="Total Characters"
        color="bg-purple-400"
        image="/assets/images/pattern-character-count.svg"
      />
      <StatContainer
        count={wordCount}
        label="Word Count"
        color="bg-yellow-500"
        image="/assets/images/pattern-word-count.svg"
      />
      <StatContainer
        count={sentenceCount}
        label="Sentence Count"
        color="bg-orange-500"
        image="/assets/images/pattern-sentence-count.svg"
      />
    </div>
  );
};

export default Stats;
