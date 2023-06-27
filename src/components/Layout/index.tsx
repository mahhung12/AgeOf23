"use client";

import classNames from "classnames";
import type { FC, PropsWithChildren } from "react";

import { useSession } from "next-auth/react";
import PrivateLayout from "../PrivateLayout";
import AppSider from "./AppSider";

const AppLayout: FC<
  PropsWithChildren<{
    className?: string;
  }>
> = ({ children, className }) => {
  const { data: session } = useSession();

  return (
    <div className={className}>
      <AppSider />

      {session ? (
        <div className="main-layout">
          <PrivateLayout>{children}</PrivateLayout>
        </div>
      ) : (
        <>Sign-in to view this page</>
      )}
    </div>
  );
};

export default AppLayout;
