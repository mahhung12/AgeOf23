import type { FC, PropsWithChildren } from "react";

import AppSider from "./AppSider";
import classNames from "classnames";
import AppHeader from "./AppHeader";

interface AppLayoutProps {
  dark?: boolean;
}

const AppLayout: FC<PropsWithChildren<AppLayoutProps>> = ({ children }) => {
  return (
    <div className={classNames("app-layout bg-white dark:bg-slate-800 ring-slate-900/5 shadow-xl")}>
      <div className="max-w-[1600px] w-full h-full m-auto flex align-middle relative">
        <AppSider />

        <AppHeader />

        <div className="prosed w-full h-full pt-16 p-6 sm:p-8 xl:p-16 lg:w-full lg:flex-shrink text-black dark:text-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
