import { Button } from "antd";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";
import { IconList } from "../IconList";

const ButtonLink: FC<
  PropsWithChildren<{
    href: string;
    icon: string;
    small?: string;
    external?: boolean;
  }>
> = ({ href, icon, small = false, external = false, children, ...props }) => {
  const pathname = usePathname();

  const buttonClassNames = classNames(
    "inline-flex gap-5 select-none px-6 py-3 items-center text-black border dark:!shadow-none w-full h-full min-h-[54px] button-link",
    !small ? "rounded-md text-base shadow-md sm:rounded-lg" : "rounded text-xs shadow-sm sm:rounded-md",
    "border-gray-200 bg-gray-100 text-black hover:bg-blue-100 dark:border-gray-800 hover:border-blue-200 dark:hover:!border-teal-800 dark:hover:bg-teal-950 dark:text-gray-300",
    pathname === href && pathname !== "/" && "border border-indigo-500"
  );

  const iconClassNames = classNames(
    "flex-shrink-0 fill-current object-contain",
    !small ? "h-6 w-6" : "h-4 w-4",
    "text-gray-700 dark:text-gray-300"
  );

  return (
    <Link href={href} target={external ? "_blank" : undefined}>
      <Button icon={<IconList icon={icon} className={iconClassNames} />} className={buttonClassNames} {...props}>
        {children}
      </Button>
    </Link>
  );
};

export default ButtonLink;
