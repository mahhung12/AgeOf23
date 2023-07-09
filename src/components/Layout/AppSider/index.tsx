"use client";

import OpeningHeader from "@/components/HeaderOpening";
import { Layout } from "antd";
import React, { useEffect, useRef, useState } from "react";
import SiderMenu from "./SiderMenu";
import Image from "next/legacy/image";
// import ClimbingImage from "/images/climbing-scroll-bar.png";

const { Sider } = Layout;

const AppSider = () => {
  const scrollRef = useRef(null) as any;
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const scrollTop = scrollRef.current.scrollTop;
    const scrollHeight = scrollRef.current.scrollHeight;
    const thumbTop = (scrollTop / scrollHeight) * 100;
    setScrollPosition(thumbTop);
  };

  console.log("scrollPosition", scrollPosition);

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      id="scrollbar-custom"
      className="custom-scrollbar scrollbar sticky top-0 hidden h-screen min-h-full w-full flex-shrink-0 flex-col justify-between overflow-y-scroll overscroll-none p-8 lg:flex lg:max-w-[288px] xl:max-w-[384px] xl:p-16 2xl:max-w-[448px]"
    >
      <Sider width="100%">
        <React.Fragment>
          <OpeningHeader />

          <SiderMenu />
        </React.Fragment>
      </Sider>

      <div
        className="climbing-scroll-bar"
        style={{
          // position: "absolute",
          // right: "-30px",
          top: `calc(${scrollPosition}px + 30px)`,
          // width: "30px",
          // height: "30px",
        }}
      >
        <Image
          // src={ClimbingImage}
          src="/images/climbing-scroll-bar.png"
          alt="Climbing Scroll"
          width={30}
          height={30}
          quality={100}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default AppSider;
