"use client";

import type { FC, PropsWithChildren } from "react";

import { useSession } from "next-auth/react";
import PrivateLayout from "../PrivateLayout";
import HomePage from "../pages/home";
import AppSider from "./AppSider";

const AppLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { data: session } = useSession();

  return (
    <div className="max-w-[1600px] w-full h-full m-auto flex align-middle gap-10">
      <AppSider />

      {children}

      {session ? (
        <PrivateLayout>
          <HomePage />
        </PrivateLayout>
      ) : (
        <div>Welcome text perform here</div>
      )}
    </div>
  );
};

export default AppLayout;
