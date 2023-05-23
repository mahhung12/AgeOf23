import classNames from "classnames";
import type { FC, PropsWithChildren } from "react";
import AppHeader from "./AppHeader";

const AppLayout: FC<
  PropsWithChildren<{
    className?: string;
  }>
> = ({ children, className }) => (
  <>
    <div className={classNames("layout-container", className)}>
      <>
        <AppHeader />
        {children}
      </>
    </div>
  </>
);

export default AppLayout;
