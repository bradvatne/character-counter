import React from "react";

const TextInput = () => {
  return (
    <div>
      <textarea
        className="h-[200px] bg-neutral-100 w-full resize-none rounded-[12px] border-2 border-neutral-200 appearance-none focus:outline-none
    focus:shadow-outline p-[12px] text-preset-3 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200"
      />
      <div className="flex flex-col gap-[10px]">
        <div className="flex gap-[10px] pt-[16px] items-center">
          <input
            type="checkbox"
            className="w-[16px] h-[16px] border-1 border-neutral-900 rounded-[4px]"
            id="spaces"
          />
          <label htmlFor="spaces" className="text-preset-4">
            Exclude Spaces
          </label>
        </div>
        <div className="flex gap-[10px] items-center">
          <input
            type="checkbox"
            className="w-[16px] h-[16px] border-1 border-neutral-900 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="characterLimit"
          />
          <label htmlFor="characterLimit" className="text-preset-4">
            Set Character Limit
          </label>
        </div>
        <p className="pt-[2px]">Approx. reading time: </p>
      </div>
    </div>
  );
};

export default TextInput;
