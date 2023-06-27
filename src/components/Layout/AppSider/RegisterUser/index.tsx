import AuthenticateModal from "@/components/Modal/Authenticate";
import LogoutIcon from "@/public/icons/LogoutIcon";
import { Space } from "antd";
import { signIn, signOut, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const RegisterUser = () => {
  const { data: session } = useSession();

  const [visibleAuthenticateModal, setVisibleAuthenticateModal] =
    useState(false);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") as any;

  // const handleSignIn = () =>  signIn("google", callbackUrl)

  const handleOpenRegisterModal = () =>
    setVisibleAuthenticateModal(!visibleAuthenticateModal);

  const handleCloseRegisterModal = () => setVisibleAuthenticateModal(false);

  return (
    <Space className="app-sider__status">
      {session?.user ? (
        <span className="sign-out-btn" onClick={() => signOut()}>
          <LogoutIcon />
          Sign out
        </span>
      ) : (
        <Space direction="horizontal" style={{ width: "100%" }} size={16}>
          <span className="sign-in-btn" onClick={handleOpenRegisterModal}>
            Sign in
          </span>
          <span className="sign-in-btn" onClick={handleOpenRegisterModal}>
            Sign Up
          </span>
        </Space>
      )}

      <AuthenticateModal
        visible={visibleAuthenticateModal}
        onClose={handleCloseRegisterModal}
        centered
      />
    </Space>
  );
};

export default RegisterUser;
