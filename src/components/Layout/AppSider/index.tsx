"use client";

import OpeningHeader from "@/components/HeaderOpening";
import { Layout } from "antd";
import React from "react";
import SiderMenu from "./SiderMenu";

const { Sider } = Layout;

const AppSider = () => {
  return (
    <div className="max-w-sm w-full sticky top-0 mt-5 px-11 pt-8">
      <Sider
        className="lg:flex lg:max-w-[288px] xl:max-w-[384px] 2xl:max-w-[448px]"
        width={304}
      >
        <React.Fragment>
          <OpeningHeader />

          <SiderMenu />
        </React.Fragment>
      </Sider>
    </div>
  );
};

export default AppSider;
