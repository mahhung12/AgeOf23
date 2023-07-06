"use client";

import OpeningHeader from "@/components/HeaderOpening";
import { Layout } from "antd";
import React from "react";
import SiderMenu from "./SiderMenu";

const { Sider } = Layout;

const AppSider = () => {
  return (
    <div className="scrollbar sticky top-0 hidden h-full max-h-screen min-h-full w-full flex-shrink-0 flex-col justify-between overflow-y-scroll overscroll-none p-8 lg:flex lg:max-w-[288px] xl:max-w-[384px] xl:p-16 2xl:max-w-[448px]">
      <Sider width="100%">
        <React.Fragment>
          <OpeningHeader />

          <SiderMenu />
        </React.Fragment>
      </Sider>
    </div>
  );
};

export default AppSider;
