"use client";

import { ThemeSwitcher } from "@/components/AppTheme";
import { Drawer } from "antd";
import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import SiderMenu from "../AppSider/SiderMenu";
import { usePathname } from "next/navigation";

const AppHeader = () => {
  const pathname = usePathname();

  const [triggerDrawer, setTriggerDrawer] = useState(false);

  useEffect(() => {
    if (pathname) {
      setTriggerDrawer(false);
    }
  }, [pathname]);

  const handleDrawerMenu = () => {
    setTriggerDrawer(!triggerDrawer);
  };

  const renderDrawerHeader = () => {
    return (
      <Drawer
        width={"100%"}
        title={
          <div className="w-full flex items-center justify-between">
            <h2 className="text-black dark:text-white">Age Of 23</h2>

            <ThemeSwitcher />
          </div>
        }
        headerStyle={{ borderBottom: "1px solid gray" }}
        onClose={handleDrawerMenu}
        open={triggerDrawer}
        className="bg-white dark:bg-slate-800 ring-slate-900/5 shadow-xl"
        closeIcon={<XIcon className="text-black dark:text-white" width={20} height={20} />}
      >
        <div className="flex flex-col w-full items-center">
          <SiderMenu />
        </div>
      </Drawer>
    );
  };

  return (
    <div className="w-full fixed top-0 left-0 right-0 h-14 py-5 lg:backdrop-blur-none backdrop-blur">
      <button
        className={`w-fit fixed left-5 top-2 p-2 hover:scale-110 active:scale-100 duration-200 lg:hidden block outline-none active:bg-none bg-none  rounded-md text-black dark:text-white font-black ${
          triggerDrawer ? "animate-pulse" : ""
        }`}
        onClick={handleDrawerMenu}
      >
        {triggerDrawer ? <XIcon width={20} height={20} /> : <MenuIcon width={20} height={20} />}
      </button>

      <ThemeSwitcher />

      {renderDrawerHeader()}
    </div>
  );
};

export default AppHeader;
