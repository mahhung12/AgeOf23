import type { FC, PropsWithChildren } from "react";

import { ThemeSwitcher } from "../AppTheme";
import AppSider from "./AppSider";
import classNames from "classnames";

interface AppLayoutProps {
  dark?: boolean;
}

const AppLayout: FC<PropsWithChildren<AppLayoutProps>> = ({ children }) => {
  return (
    <div className={classNames("app-layout bg-white dark:bg-black")}>
      <div className="max-w-[1600px] w-full h-full m-auto flex align-middle relative">
        <AppSider />

        <div className="prose h-full p-6 sm:p-8 xl:p-16 lg:w-full lg:flex-shrink lg:max-w-prose xl:max-w-4xl 2xl:max-w-5xl">
          {children}
        </div>

        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default AppLayout;
