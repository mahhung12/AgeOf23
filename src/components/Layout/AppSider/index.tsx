"use client";

import { Layout, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type Props = {};

const { Sider } = Layout;

const AppSider = (props: Props) => {
  const router = useRouter();

  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

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
  }, []);

  return (
    <div className="app-sider">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          mode="inline"
          className="app-sider__menu"
          items={siderMenus}
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          onOpenChange={setOpenKeys}
        />
      </Sider>
    </div>
  );
};

export default AppSider;
