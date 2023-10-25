import { Space } from "antd";
import { signIn, signOut, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import LogoutIcon from "../../../../../public/icons/LogoutIcon";

const RegisterUser = () => {
  const { data: session } = useSession();

  const [visibleAuthenticateModal, setVisibleAuthenticateModal] =
    useState(false);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") as any;

  const handleSignIn = () => {
    signIn("google", callbackUrl);
  };

  const handleOpenRegisterModal = () =>
    setVisibleAuthenticateModal(!visibleAuthenticateModal);

  const handleCloseRegisterModal = () => setVisibleAuthenticateModal(false);

  return (
    <Space>
      {session?.user ? (
        <div
          className="flex flex-nowrap gap-4 cursor-pointer"
          onClick={() => signOut()}
        >
          <LogoutIcon />
          Sign out
        </div>
      ) : (
        <Space
          direction="horizontal"
          className="w-full cursor-pointer"
          size={16}
        >
          <div onClick={handleSignIn}>Connect</div>
          {/* <div onClick={handleSignIn}>Sign Up</div> */}
        </Space>
      )}

      {/* <AuthenticateModal
        visible={visibleAuthenticateModal}
        onClose={handleCloseRegisterModal}
        centered
      /> */}
    </Space>
  );
};

export default RegisterUser;
