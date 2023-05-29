"use client";

import LogoutIcon from "@/public/icons/LogoutIcon";
import { Layout, Menu, Space } from "antd";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

type Props = {};

const { Sider } = Layout;

const AppSider = (props: Props) => {
  const router = useRouter();
  const { data: session } = useSession();
  const { email, image, name } = session?.user || {};

  console.log("session", session);

  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") as any;

  const navigate = (link: string) => () => router.push(link);

  const handleSignIn = () => signIn("google", callbackUrl);

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
  }, [router]);

  return (
    <div className="app-sider">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <>
          <div className="app-sider__account"></div>

          <Menu
            mode="inline"
            className="app-sider__menu"
            items={siderMenus}
            openKeys={openKeys}
            selectedKeys={selectedKeys}
            onOpenChange={setOpenKeys}
          />

          <Space className="app-sider__status">
            {session?.user ? (
              <p onClick={() => signOut()}>
                <LogoutIcon />
                Sign out
              </p>
            ) : (
              <p onClick={handleSignIn}>Sign in</p>
            )}
          </Space>
        </>
      </Sider>
    </div>
  );
};

export default AppSider;
