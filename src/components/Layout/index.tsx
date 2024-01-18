import type { FC, PropsWithChildren } from "react";

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

        <div className="w-full h-full p-6 sm:p-8 xl:p-16 lg:w-full lg:flex-shrink text-black dark:text-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
