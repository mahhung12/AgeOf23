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
        "text-2xl font-bold tracking-tight text-black dark:text-gray-50 lg:text-7xl lg:text-gray-300",
        className
      )}
    >
      {children}
    </div>
  );
};
