import { Button } from "antd";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { IconList } from "../IconList";
import classNames from "classnames";

const ButtonLink: FC<
  PropsWithChildren<{
    href: string;
    icon: string;
    small?: string;
    dark?: string;
    external?: boolean;
  }>
> = ({
  href,
  icon,
  small = false,
  dark = false,
  external = false,
  children,
  ...props
}) => {
  const buttonClassNames = classNames(
    "inline-flex select-none items-center border dark:!shadow-none w-full h-full min-h-[54px]",
    !small
      ? "space-x-4 rounded-md px-6 py-3 text-base shadow-md sm:rounded-lg"
      : "space-x-2 rounded px-3 py-1.5 text-xs shadow-sm sm:rounded-md",
    !dark
      ? "border-gray-200 bg-gray-100 text-black hover:bg-blue-100 dark:border-gray-800 dark:bg-gray-900 hover:border-blue-200 dark:hover:!border-teal-800 dark:hover:bg-teal-950 dark:text-gray-300"
      : "border-gray-800 bg-gray-900 text-gray-300"
  );

  const iconClassNames = classNames(
    "flex-shrink-0 fill-current object-contain",
    !small ? "h-6 w-6" : "h-4 w-4",
    !dark ? "text-gray-700 dark:text-gray-300" : "text-gray-300"
  );

  return (
    <Link href={href} target={external ? "_blank" : undefined}>
      <Button
        icon={<IconList icon={icon} className={iconClassNames} />}
        className={buttonClassNames}
        {...props}
      >
        {children}
      </Button>
    </Link>
  );
};

export default ButtonLink;
