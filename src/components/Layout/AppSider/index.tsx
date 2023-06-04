"use client";

import LogoutIcon from "@/public/icons/LogoutIcon";
import { Layout, Menu, Space, Typography } from "antd";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

type Props = {};

const { Sider } = Layout;
const { Paragraph, Text } = Typography;

const AppSider = (props: Props) => {
  const router = useRouter();
  const { data: session, status } = useSession() as any;

  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") as any;

  const navigate = (link: string) => () => router.push(link);

  const handleSignIn = () => signIn("google", callbackUrl);

  // const handleSignIn = () => router.push("/sign-in");

  const siderMenus = useMemo(() => {
    const siderMenus = [
      {
        key: "Dashboard",
        icon: null,
        label: <Link href="/dashboard">Dashboard</Link>,
        onClick: navigate("dashboard"),
      },
      {
        key: "Profile",
        icon: null,
        label: <Link href="/profile">Profile</Link>,
        onClick: navigate("profile"),
      },
    ];

    return siderMenus;
  }, [router, navigate]);

  return (
    <div className="app-sider">
      <Sider width={266} className="app-sider">
        <>
          <div className="app-sider__account">
            {session ? (
              <>
                <div className="account-avatar">
                  <Image
                    src={session?.user?.image}
                    alt={session?.user?.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className="account-information">
                  <Paragraph ellipsis={{ tooltip: true }} className="name">
                    {session?.user?.name}
                  </Paragraph>
                  <Paragraph ellipsis={{ tooltip: true }} className="email">
                    {session?.user?.email}
                  </Paragraph>
                </div>
              </>
            ) : (
              <div className="not-signin">Age Of 23</div>
            )}
          </div>

          {session && (
            <Menu
              mode="inline"
              className="app-sider__menu"
              items={siderMenus}
              openKeys={openKeys}
              onOpenChange={setOpenKeys}
            />
          )}

          <Space className="app-sider__status">
            {session?.user ? (
              <span className="sign-out-btn" onClick={() => signOut()}>
                <LogoutIcon />
                Sign out
              </span>
            ) : (
              <span className="sign-in-btn" onClick={handleSignIn}>
                Sign in
              </span>
            )}
          </Space>
        </>
      </Sider>
    </div>
  );
};

export default AppSider;
