import LogoutIcon from "@/public/icons/LogoutIcon";
import { Space } from "antd";
import { signIn, signOut, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const RegisterUser = () => {
  const { data: session, status } = useSession();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") as any;

  const handleSignIn = () => signIn("google", callbackUrl);

  return (
    <Space className="app-sider__status">
      {session?.user ? (
        <span className="sign-out-btn" onClick={() => signOut()}>
          <LogoutIcon />
          Sign out
        </span>
      ) : (
        <Space direction="horizontal" style={{ width: "100%" }} size={16}>
          <span className="sign-in-btn" onClick={handleSignIn}>
            Sign in
          </span>
          <span className="sign-in-btn" onClick={handleSignIn}>
            Sign Up
          </span>
        </Space>
      )}
    </Space>
  );
};

export default RegisterUser;
