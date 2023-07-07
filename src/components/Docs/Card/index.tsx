import { docs } from "@/constant/docs";
import Link from "next/link";

export const TOC = ({ section }: { section: string }) => {
  const sectionLinks = docs.find((doc) => doc.id === section)?.contents;

  return (
    <section className="mt-4 grid grid-cols-2 gap-4 text-sm md:grid-cols-3 md:text-base lg:grid-cols-5">
      {sectionLinks?.map((sectionLink) => (
        <Link
          key={sectionLink.slug}
          href={sectionLink.slug}
          className="inline-flex aspect-video items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-2  text-center leading-snug !text-black !no-underline hover:border-blue-200 hover:bg-blue-100 dark:border-gray-800 dark:bg-gray-900 dark:!text-gray-300 dark:hover:!border-teal-800 dark:hover:bg-teal-950 sm:rounded-lg sm:p-4"
        >
          {sectionLink.meta.title}
        </Link>
      ))}
    </section>
  );
};
