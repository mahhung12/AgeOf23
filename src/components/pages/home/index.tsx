"use client";

import { Headline } from "@/components/Text/Headline";
import { InlineCode } from "@/components/Text/InlineCode";
import { useSession } from "next-auth/react";
import Image from "next/legacy/image";
import React, { FC } from "react";

const HomePage: FC = () => {
  const { data: session } = useSession();

  return (
    <React.Fragment>
      <div className="mt-8 flex items-center space-x-4 sm:space-x-8 sm:px-16 lg:mt-0 lg:px-0">
        <div className="relative w-1/3 h-[200px] max-w-[215px] lg:w-1/4">
          <Image
            src="https://res.cloudinary.com/dxngnrcwk/image/upload/v1688611849/hero-banner_paiobe.png"
            alt="Age of 23"
            layout="fill"
            quality={100}
            objectFit="cover"
          />
        </div>
        <div className="speech-bubble relative w-2/3 space-y-4 rounded-xl bg-gray-100 p-4 text-sm leading-snug text-gray-800 dark:bg-gray-900 dark:text-gray-300 sm:text-base md:text-lg lg:w-3/4 lg:p-8 lg:leading-normal">
          <div>Hi, i&apos;m mHungg</div>
          <div>
            A skilled <InlineCode dark>full-stack developer</InlineCode> with a
            strong focus on product development, located in Ha Noi - Vietnam. I
            have prior experience working as a Web Developer and gained valuable
            insights into building web-based solutions.
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-12 lg:mt-24 lg:space-y-24">
        <div className="space-y-4">
          <Headline>Introduction</Headline>
          <p>
            At the <InlineCode dark>Age of 23</InlineCode>, I envision creating
            a captivating website that serves as a concise summary of my life,
            encompassing my work, education, and personal journey. It will be a
            platform to share my experiences and aspirations with others in a
            vibrant and engaging way.
          </p>
          <p>
            Inspired by{" "}
            <InlineCode dark>
              <a href="https://jotai.org/" target="_blank">
                Jotai
              </a>
            </InlineCode>
            , an extraordinary web development framework, I am eager to embark
            on this journey and bring my website to life. With Jotai&apos;s
            elegant design and flexibility, I can effortlessly manage the state
            of my application, enabling seamless navigation and delightful user
            interactions.
          </p>
          <p>
            As I craft this website, I will dedicate time to gradually update it
            until it truly reflects the essence of who I am. Who knows, it may
            become a personalized perfectly captures my unique story and serves
            as a testament to my growth and accomplishments.
          </p>
          <p>
            <InlineCode dark={false}>Just wait...</InlineCode>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
