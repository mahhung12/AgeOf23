import cx from "classnames";
import { ReactNode } from "react";

export const Headline = ({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cx(
        "text-2xl font-bold tracking-tight text-black dark:text-gray-50 lg:text-5xl lg:text-gray-400",
        className
      )}
    >
      {children}
    </div>
  );
};
