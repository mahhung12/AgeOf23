"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const AppHeader = () => {
  const { data: session } = useSession();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") as any;

  const handleSignIn = () => signIn("google", callbackUrl);

  console.log("session", session);

  return (
    <div className="app-header">
      {session ? (
        <>
          Signed in as {session?.user?.name} <br />
          <button className="custom-btn" onClick={() => signOut()}>
            Sign out
          </button>
        </>
      ) : (
        <>
          Not signed in <br />
          <button className="custom-btn" onClick={handleSignIn}>
            Sign in with google
          </button>
        </>
      )}
    </div>
  );
};

export default AppHeader;
