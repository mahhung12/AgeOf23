"use client";

import OpeningHeader from "@/components/HeaderOpening";
import { Layout } from "antd";
import React from "react";
import SiderMenu from "./SiderMenu";

const { Sider } = Layout;

const AppSider = () => {
  return (
    <div className="max-w-sm w-full sticky top-0 overflow-y-hidden mt-5 p-8 ">
      <Sider width={320}>
        <React.Fragment>
          <OpeningHeader />

          <SiderMenu />
        </React.Fragment>
      </Sider>
    </div>
  );
};

export default AppSider;
