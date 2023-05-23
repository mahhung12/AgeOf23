"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const ClientProtectPage = () => {
  const { data: session } = useSession({
    require: true,
    onUnauthenticated() {
      redirect("/signin?callback=/protected/client");
    },
  });

  return (
    <section>
      This is a client-side protected page
      <br />
      <br />
      {session && <p>You are logged in as {session?.user?.name}</p>}
    </section>
  );
};
