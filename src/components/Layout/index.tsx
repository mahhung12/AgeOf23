"use client";

import classNames from "classnames";
import type { FC, PropsWithChildren } from "react";

import { useSession } from "next-auth/react";
import AppSider from "./AppSider";

const AppLayout: FC<
  PropsWithChildren<{
    className?: string;
  }>
> = ({ children, className }) => {
  const { data: session } = useSession();

  return (
    <div className={classNames("layout-container", className)}>
      <AppSider />

      {session ? (
        <div className="main-layout">{children}</div>
      ) : (
        <div>Sign-in to view this page</div>
      )}
    </div>
  );
};

export default AppLayout;
