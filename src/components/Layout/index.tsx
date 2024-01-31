import type { FC, PropsWithChildren } from "react";

import classNames from "classnames";
import AppHeader from "./AppHeader";
import AppSider from "./AppSider";

interface AppLayoutProps {
  dark?: boolean;
}

const AppLayout: FC<PropsWithChildren<AppLayoutProps>> = ({ children }) => {
  return (
    <div
      className={classNames("app-layout bg-white dark:bg-[#111010] ring-slate-900/5 shadow-xl text-sm lg:text-base ")}
    >
      <div className="max-w-[1600px] w-full h-full m-auto flex align-middle relative">
        <AppSider />

        <AppHeader />

        <div className="prosed w-full h-full pt-16 p-6 sm:p-8 xl:p-16 lg:w-full lg:flex-shrink text-black dark:text-[#D4D4D4]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
