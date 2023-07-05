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
        <div className="w-full">
          <div className="px-6 sm:px-8 xl:px-16 pt-8 mt-5 lg:w-full lg:max-w-prose lg:flex-shrink xl:max-w-4xl 2xl:max-w-5xl">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppLayout;
