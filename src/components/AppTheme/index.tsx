"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`w-fit fixed right-5 top-2 p-2 hover:scale-110 active:scale-100 duration-200 bg-none outline-none active:bg-none dark:bg-[#212933] rounded-md`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <MoonIcon color="#000000" strokeWidth={1.75} width={20} height={20} />
      ) : (
        <SunIcon color="#ffffff" strokeWidth={1.75} width={20} height={20} />
      )}
    </button>
  );
};
