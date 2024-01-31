import { Headline } from "@/components/Text/Headline";
import { InlineCode } from "@/components/Text/InlineCode";
import Image from "next/legacy/image";
import Link from "next/link";
import React, { FC } from "react";

const HomePage: FC = () => {
  return (
    <React.Fragment>
      <div className="mt-8 flex items-center space-x-4 sm:space-x-8 lg:mt-0 lg:px-0">
        <div className="w-full space-y-4 rounded-xl leading-snug md:text-lg lg:leading-normal">
          Welcome, I&apos;m <b className="text-gray-800 dark:text-white">Manh Hung Dao</b>
          <div>
            A <b className="text-gray-800 dark:text-white">Software Developer</b> with a strong focus on product
            development, located in Hanoi, Vietnam. In Sep of 2022, i graduated from{" "}
            <Link
              target="_blank"
              href={{ pathname: "https://hanoi.fpt.edu.vn/" }}
              className="underline text-gray-800 dark:text-white"
            >
              FPT University
            </Link>{" "}
            with my BS in Software Engineering.
          </div>
          <div>
            I have prior experience working as a developer and gained valuable insights into building solutions.
          </div>
        </div>
      </div>

      <div className="space-y-12 mt-6 lg:space-y-24">
        <div className="space-y-4">
          <Headline>Introduction</Headline>
          <p>
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
