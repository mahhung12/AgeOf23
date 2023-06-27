"use client";

import UserCard from "@/components/UserCard";
import { Layout, Menu } from "antd";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import RegisterUser from "./RegisterUser";

const { Sider } = Layout;

const AppSider = () => {
  const router = useRouter();
  const { data: session } = useSession() as any;

  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const navigate = (link: string) => () => router.push(link);

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
    <div className="app-sider sticky top-0 overflow-y-scroll">
      <Sider width={266} className="app-sider">
        <React.Fragment>
          <div className="app-sider__account">
            {session ? (
              <UserCard userData={session?.user} />
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

          <RegisterUser />
        </React.Fragment>
      </Sider>
    </div>
  );
};

export default AppSider;
