"use client";

import OpeningHeader from "@/components/HeaderOpening";
import { Layout } from "antd";
import React, { useEffect, useRef, useState } from "react";
import SiderMenu from "./SiderMenu";
import Image from "next/legacy/image";
import { usePathname } from "next/navigation";

const { Sider } = Layout;

const AppSider = () => {
  const pathname = usePathname();

  const scrollRef = useRef(null) as any;

  const [screenWidth, setScreenWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState<any>();
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const scrollTop = scrollRef.current.scrollTop;
    const scrollHeight = scrollRef.current.scrollHeight;
    const thumbTop = (scrollTop / scrollHeight) * 100;
    setScrollPosition(thumbTop);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const positions = scrollRef?.current?.getBoundingClientRect();
      setScrollWidth(positions);
    };

    handleResize();
  }, [screenWidth]);

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      id="scrollbar-custom"
      className="scrollbar sticky top-0 h-screen min-h-full w-full flex-shrink-0 flex-col justify-between overflow-y-scroll overscroll-none p-8 lg:flex lg:max-w-[288px] xl:max-w-[384px] xl:p-16 2xl:max-w-[448px]"
    >
      <Sider width="100%">
        <React.Fragment>
          <OpeningHeader />

          <SiderMenu />
        </React.Fragment>
      </Sider>

      {pathname.includes("docs") && (
        <div
          className="fixed custom-scrollbar"
          style={{
            top: `${scrollPosition}%`,
            left: `calc(${scrollWidth?.x}px + ${scrollWidth?.width}px - 35px)`,
            right: "50%",
          }}
        >
          <Image
            src="/images/climbing-scroll-bar.png"
            alt="Climbing Scroll"
            width={50}
            height={50}
            quality={100}
            objectFit="cover"
            placeholder="blur"
            blurDataURL="/images/climbing-scroll-bar.png"
          />
        </div>
      )}
    </div>
  );
};

export default AppSider;
