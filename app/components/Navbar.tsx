"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="flex justify-between items-center">
      <Image
        src={`/assets/images/logo-${theme == "light" ? 'light' : 'dark'}-theme.svg`}
        width={251}
        height={40}
        alt="Character Counter Logo"
      />
      <ThemeSwitcher />
    </div>
  );
};

export default Navbar;
