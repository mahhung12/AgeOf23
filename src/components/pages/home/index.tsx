"use client";

import UserCard from "@/components/UserCard";
import { useSession } from "next-auth/react";
import { FC } from "react";

const HomePage: FC = () => {
  const { data: session } = useSession();

  return (
    <div className="home-container">
      <UserCard userData={session?.user} />
    </div>
  );
};

export default HomePage;
