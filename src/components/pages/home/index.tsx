"use client";

import UserCard from "@/components/UserCard";
import { useSession } from "next-auth/react";
import { FC } from "react";

const HomePage: FC = () => {
  const { data: session } = useSession();

  return (
    <div className="mt-5 pt-8">
      {session ? <UserCard userData={session?.user} /> : "Homepage"}
    </div>
  );
};

export default HomePage;
