"use client";

import { Button } from "antd";
import { useTheme } from "next-themes";

const AppTheme = () => {
  const { theme, setTheme } = useTheme();

  const isLight = theme === "light";

  return (
    <div className="fixed top-5 right-10 ">
      <Button
        onClick={() => setTheme(isLight ? "dark" : "light")}
        className="text-base theme-container"
        id="toggle-theme"
      >
        {isLight ? <>Dark</> : <>light</>}
      </Button>
    </div>
  );
};

export default AppTheme;
