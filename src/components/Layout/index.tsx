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
      {/* <div className="w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center"> */}
      <div className="max-w-[1600px] w-full h-full m-auto flex align-middle relative">
        <AppSider />

        <AppHeader />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>

        <div className="prosed w-full h-full pt-16 p-6 sm:p-8 xl:p-16 lg:w-full lg:flex-shrink text-black dark:text-[#D4D4D4]">
          {children}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default AppLayout;
