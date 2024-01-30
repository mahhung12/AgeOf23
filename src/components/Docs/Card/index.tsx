import { docs } from "@/constant/docs";
import Link from "next/link";

export const TOC = ({ section }: { section: string }) => {
  const sectionLinks = docs.find((doc) => doc.id === section);

  return (
    <section className="mt-4 md:text-base flex flex-wrap gap-4 justify-start">
      {sectionLinks?.contents ? (
        sectionLinks?.contents?.map((sectionLink) => (
          <Link
            key={sectionLink.slug}
            href={sectionLink.slug}
            className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-2  text-center leading-snug !text-black !no-underline hover:border-blue-200 hover:bg-blue-100 dark:border-gray-800 dark:bg-gray-700 dark:!text-gray-300 dark:hover:!border-teal-800 dark:hover:bg-teal-950 sm:rounded-lg sm:p-4 min-w-[150px]"
          >
            {sectionLink.meta.title}
          </Link>
        ))
      ) : (
        <Link
          key={sectionLinks?.slug}
          href={sectionLinks?.slug as string}
          className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-2  text-center leading-snug !text-black !no-underline hover:border-blue-200 hover:bg-blue-100 dark:border-gray-800 dark:bg-gray-700 dark:!text-gray-300 dark:hover:!border-teal-800 dark:hover:bg-teal-950 sm:rounded-lg sm:p-4 min-w-[150px]"
        >
          {sectionLinks?.title}
        </Link>
      )}
    </section>
  );
};
