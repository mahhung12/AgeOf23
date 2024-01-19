import { docs } from "@/constant/docs";
import { default as classNames, default as cx } from "classnames";
import { ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Docs = ({ navLinks, className, ...rest }: { className?: string; navLinks: typeof docs }) => {
  const pathname = usePathname();
  const { theme } = useTheme();

  const [activeDocs, setActiveDocs] = useState<{ docActive: string; active: boolean }>({
    docActive: "",
    active: false,
  });

  return (
    <div className={cx("my-6 space-y-6", className)} {...rest}>
      {navLinks.map((section) => (
        <div key={section.title} className="space-y-2">
          {section.title && (
            <div
              className="relative -left-0.5 flex items-center gap-1 cursor-pointer hover:opacity-70 w-full justify-between"
              onClick={() => {
                setActiveDocs({
                  ...activeDocs,
                  docActive: activeDocs.docActive === section.id ? "" : section.id,
                });
              }}
            >
              <span className="text-base font-bold uppercase tracking-widest text-black dark:text-white">
                {section.title}
              </span>
              <span
                className={classNames("relative top-px ", {
                  "rotate-180": section.id === activeDocs.docActive,
                })}
              >
                <ChevronDown size={24} color={theme === "light" ? "black" : "white"} className="h-auto rotate-180" />
              </span>
            </div>
          )}

          <div className="space-y-0.5">
            {section.id === activeDocs.docActive &&
              section.contents.map((doc) => (
                <Link
                  key={doc.slug}
                  href={doc.slug}
                  className={cx(
                    "relative w-full -left-3 inline-block whitespace-nowrap rounded border border-transparent px-2 py-1 text-base text-black hover:!border-gray-200 hover:bg-orange-100 dark:text-gray-300 dark:hover:!border-teal-800 dark:hover:bg-teal-950",
                    doc.slug === pathname && "!border-blue-200 dark:!border-teal-900 bg-orange-100 dark:bg-teal-950"
                  )}
                >
                  {doc.meta.title}
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
