"use client";

import { InlineCode } from "@/components/Text/InlineCode";
import { useSession } from "next-auth/react";
import Image from "next/legacy/image";
import React, { FC } from "react";

const HomePage: FC = () => {
  const { data: session } = useSession();

  return (
    <React.Fragment>
      {/* {session ? <UserCard userData={session?.user} /> : "Homepage"} */}

      <div className="mt-8 flex items-center space-x-4 sm:space-x-8 sm:px-16 lg:mt-0 lg:px-0">
        <div className="relative w-1/3 h-[300px] max-w-[215px] lg:w-1/4">
          <Image
            src="https://res.cloudinary.com/dxngnrcwk/image/upload/v1688611849/hero-banner_paiobe.png"
            title="Atomikku, the Jotai mascot"
            alt="Atomikku, the Jotai mascot"
            layout="fill"
            quality={100}
            objectFit="cover"
          />
          <div className="absolute -right-2 -bottom-[20%] z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-lg font-black text-white shadow-md dark:bg-white dark:text-black dark:!shadow-none lg:-right-4 lg:-bottom-6 lg:h-[4.5rem] lg:w-[4.5rem] lg:text-[2rem]">
            Vn
          </div>
        </div>
        <div className="speech-bubble relative w-2/3 space-y-4 rounded-xl bg-gray-100 p-4 text-sm leading-snug text-gray-800 dark:bg-gray-900 dark:text-gray-300 sm:text-base md:text-lg lg:w-3/4 lg:p-8 lg:leading-normal">
          <div>Welcome to [Age of 23]</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit{" "}
            <InlineCode dark>use</InlineCode> . Odit, distinctio molestiae sit
            ducimus corporis atque incidunt quisquam voluptatem laborum,
            perspiciatis blanditiis, aliquid rem accusantium. Facilis voluptatem
            rerum similique eligendi quos?
          </div>
          <div>Ocay!</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
