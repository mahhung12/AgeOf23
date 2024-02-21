import { Headline } from "@/components/Text/Headline";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
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
            At the <b>Age of 23</b>, I envision creating a captivating website that serves as a concise summary of my
            life, encompassing my work, education, and personal journey. It will be a platform to share my experiences
            and aspirations with others in a vibrant and engaging way.
          </p>
          <p>
            As I craft this website, I will dedicate time to gradually update it until it truly reflects the essence of
            who I am. Who knows, it may become a personalized perfectly captures my unique story and serves as a
            testament to my growth and accomplishments.
          </p>
        </div>
      </div>
      <div className="space-y-12 lg:space-y-4 mt-16">
        <Headline>Thoughts</Headline>

        <BentoGrid className="mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </React.Fragment>
  );
};

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

export default HomePage;
