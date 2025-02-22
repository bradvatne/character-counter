import Image from "next/image";
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
          <label className="relative group hover:cursor-pointer">
            <input
              type="checkbox"
              className="w-[16px] h-[16px] peer appearance-none border border-1 border-neutral-200 rounded-[4px] group-hover:cursor-pointer group-hover:border-neutral-600 focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 checked:bg-purple-400 checked:border-purple-400"
              id="spaces"
            />
            <Image src="/assets/images/icon-check.svg" width={12} height={13} alt="Checkmark" className="absolute top-1 left-[2px] hidden peer-checked:block" />
          </label>
          <label htmlFor="spaces" className="text-preset-4">
            Exclude Spaces
          </label>
        </div>
        <div className="flex gap-[10px] items-center">
        <label className="relative group hover:cursor-pointer">
            <input
              type="checkbox"
              className="w-[16px] h-[16px] peer appearance-none border border-1 border-neutral-200 rounded-[4px] group-hover:cursor-pointer group-hover:border-neutral-600 focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 checked:bg-purple-400 checked:border-purple-400"
              id="spaces"
            />
            <Image src="/assets/images/icon-check.svg" width={12} height={13} alt="Checkmark" className="absolute top-1 left-[2px] hidden peer-checked:block" />
          </label>
          <label htmlFor="chars" className="text-preset-4">
            Set Character Limit
          </label>
        </div>
        <p className="pt-[2px]">Approx. reading time: </p>
      </div>
    </div>
  );
};

export default TextInput;
