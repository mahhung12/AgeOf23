import cx from "classnames";
import { ReactNode } from "react";

export const InlineCode = ({ children }: { children: ReactNode }) => {
  return (
    <code className="relative -top-px rounded px-1 py-0.5 bg- inline-code bg-text-white text-black dark:bg-gray-500 dark:text-white">
      {children}
    </code>
  );
};
