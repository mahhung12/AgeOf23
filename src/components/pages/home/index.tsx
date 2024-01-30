import { Headline } from "@/components/Text/Headline";
import { InlineCode } from "@/components/Text/InlineCode";
import Image from "next/legacy/image";
import React, { FC } from "react";

const HomePage: FC = () => {
  return (
    <React.Fragment>
      <div className="mt-8 flex items-center space-x-4 sm:space-x-8 sm:px-16 lg:mt-0 lg:px-0">
        <div className="relative w-1/3 h-[200px] max-w-[215px] lg:w-1/4">
          <Image
            src="/images/hero-banner_paiobe.png"
            alt="Age of 23"
            layout="fill"
            quality={100}
            objectFit="cover"
            placeholder="blur"
            blurDataURL="/images/hero-banner_paiobe.png"
          />
        </div>
        <div className="bg-gray bg-gray-100 dark:bg-gray-700 relative w-2/3 space-y-4 rounded-xl p-4 leading-snug md:text-lg lg:w-3/4 lg:p-8 lg:leading-normal text-gray-800 dark:text-white">
          <div>
            <b>Welcome</b>, I&apos;m Manh Hung Dao
          </div>
          <div>
            A <InlineCode>Software Developer</InlineCode> with a strong focus on product development, located in Hanoi,
            Vietnam. In Sep of 2022, i graduated from FPT University with my BS in Software Engineering.
          </div>

          <div>
            I have prior experience working as a developer and gained valuable insights into building solutions.
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-12 lg:mt-24 lg:space-y-24">
        <div className="space-y-4 text-gray-800 dark:text-white">
          <Headline>Introduction</Headline>
          <p className="text-gray-800 dark:text-white">
            At the <InlineCode>Age of 23</InlineCode>, I envision creating a captivating website that serves as a
            concise summary of my life, encompassing my work, education, and personal journey. It will be a platform to
            share my experiences and aspirations with others in a vibrant and engaging way.
          </p>
          <p>
            As I craft this website, I will dedicate time to gradually update it until it truly reflects the essence of
            who I am. Who knows, it may become a personalized perfectly captures my unique story and serves as a
            testament to my growth and accomplishments.
          </p>
          <p>
            <InlineCode>Just wait...</InlineCode>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
