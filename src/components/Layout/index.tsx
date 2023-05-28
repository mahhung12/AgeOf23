import type { FC, PropsWithChildren } from "react";
import classNames from "classnames";

import AppHeader from "./AppHeader";
import AppSider from "./AppSider";

const AppLayout: FC<
  PropsWithChildren<{
    className?: string;
  }>
> = ({ children, className }) => (
  <>
    <div className={classNames("layout-container", className)}>
      <AppSider />

      <div className="main-layout">
        <AppHeader />
        {children}
      </div>
    </div>
  </>
);

export default AppLayout;
