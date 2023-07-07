import { docs } from "@/constant/docs";
import cx from "classnames";
import Link from "next/link";
import { IconList } from "../IconList";
import { usePathname } from "next/navigation";

export const Docs = ({
  navLinks,
  className,
  ...rest
}: {
  className?: string;
  navLinks: typeof docs;
}) => {
  const pathname = usePathname();

  return (
    <div className={cx("my-6 space-y-6", className)} {...rest}>
      {navLinks.map((section) => (
        <div key={section.title} className="space-y-2">
          {section.title && (
            <div className="relative -left-0.5 flex items-center gap-1">
              <span className="text-base font-bold uppercase tracking-widest text-gray-350 dark:text-white">
                {section.title}
              </span>
              <span className="relative top-px">
                <IconList icon="chevron" className="h-auto w-4 text-gray-350" />
              </span>
            </div>
          )}
          <ul className="space-y-0.5">
            {section.contents.map((doc) => (
              <li key={doc.slug}>
                <Link
                  href={doc.slug}
                  className={cx(
                    "relative -left-3 inline-block whitespace-nowrap rounded border border-transparent px-2 py-1 text-base text-black hover:!border-blue-200 hover:bg-blue-100 dark:text-gray-300 dark:hover:!border-teal-800 dark:hover:bg-teal-950",
                    doc.slug === pathname &&
                      "!border-blue-200 dark:!border-teal-900 bg-blue-100 dark:bg-teal-950"
                  )}
                >
                  {doc.meta.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
