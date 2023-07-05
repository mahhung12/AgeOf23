"use client";

import type { FC, PropsWithChildren } from "react";

import { useSession } from "next-auth/react";
import PrivateLayout from "../PrivateLayout";
import HomePage from "../pages/home";
import AppSider from "./AppSider";
import { usePathname } from "next/navigation";

const AppLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <div className="max-w-[1600px] w-full h-full m-auto flex align-middle gap-14 overflow-hidden">
      <AppSider />

      {session ? (
        <PrivateLayout>
          {pathname === "/" ? <HomePage /> : children}
        </PrivateLayout>
      ) : (
        <div className="w-full">{children}</div>
      )}
    </div>
  );
};

export default AppLayout;
