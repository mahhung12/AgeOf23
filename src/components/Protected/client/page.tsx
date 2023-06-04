"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";

const PrivateLayout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const session = useSession();
  if (
    !session.data &&
    session.status !== "loading" &&
    typeof window !== "undefined"
  ) {
    router.push("/");
  }

  return <>{children}</>;
};
