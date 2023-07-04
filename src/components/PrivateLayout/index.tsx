import type { FC, PropsWithChildren } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const PrivateLayout: FC<PropsWithChildren> = ({ children }) => {
  const session = useSession();
  const router = useRouter();

  if (
    !session.data &&
    session.status !== "loading" &&
    typeof window !== "undefined"
  )
    router.push("/");

  return <div className="main-layout w-full mt-5 py-8">{children}</div>;
};

export default PrivateLayout;
