import classNames from "classnames";
import type { FC, PropsWithChildren } from "react";

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
        {/* <AppHeader /> */}
        {children}
      </div>
    </div>
  </>
);

export default AppLayout;
