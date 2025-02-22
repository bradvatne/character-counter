"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-neutral-100 w-[32px] h-[32px] flex items-center justify-center rounded-[6px] dark:bg-neutral-700">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="focus:outline-none"
      >
        <Image
          src={`/assets/images/${
            theme === "dark" ? "icon-sun" : "icon-moon"
          }.svg`}
          width={22}
          height={22}
          alt="Theme Switcher"
        />
      </button>
    </div>
  );
};

export default ThemeSwitcher;

/*
      The current theme is: {theme}
      <br />
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <br />
      <button onClick={() => setTheme("dark")}>Dark Mode</button>

*/
