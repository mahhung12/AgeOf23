import { TOC } from "@/components/Docs/Card";
import { Code } from "@/components/Text/Code";
import { Tag } from "@/components/Text/Tag";
import type { MDXComponents } from "mdx/types";
import { ReactNode } from "react";

const customClassNames = {
  h1: "text-2xl lg:text-4xl font-bold mb-4",
  h2: "text-2xl lg:text-3xl font-bold mb-3",
  p: "text-sm lg:text-base mb-4",
  a: "text-blue-500 underline",
  pre: "block",
  code: "block",
  center: "flex items-center justify-center",
};

const H1 = ({ children }: { children: ReactNode }): JSX.Element => {
  const anchor = getAnchor(children);
  const link = `#${anchor}`;

  return (
    <h1 id={anchor} className={customClassNames.h1}>
      <a href={link}>{children}</a>
    </h1>
  );
};

const H2 = ({ children }: { children: ReactNode }): JSX.Element => {
  const anchor = getAnchor(children);
  const link = `#${anchor}`;

  return (
    <h2 id={anchor} className={customClassNames.h2}>
      <a href={link}>{children}</a>
    </h2>
  );
};

const H3 = ({ children }: { children: ReactNode }): JSX.Element => {
  const anchor = getAnchor(children);
  const link = `#${anchor}`;

  return (
    <h3 id={anchor} className={customClassNames.h2}>
      <a href={link}>{children}</a>
    </h3>
  );
};

const H4 = ({ children }: { children: ReactNode }): JSX.Element => {
  const anchor = getAnchor(children);
  const link = `#${anchor}`;

  return (
    <h4 id={anchor} className={customClassNames.h2}>
      <a href={link}>{children}</a>
    </h4>
  );
};

const H5 = ({ children }: { children: ReactNode }): JSX.Element => {
  const anchor = getAnchor(children);
  const link = `#${anchor}`;

  return (
    <h5 id={anchor} className={customClassNames.h2}>
      <a href={link}>{children}</a>
    </h5>
  );
};

const Text = ({ children }: { children: ReactNode }) => <p className={customClassNames.p}>{children}</p>;

const Link = (props: any) => (
  <a className={customClassNames.a + " " + customClassNames.center} {...props}>
    {props.children}
  </a>
);

const getAnchor = (value: any) => {
  return typeof value === "string" ? value.toLowerCase().replace(/'/g, "").split(" ").join("-") : "";
};

const Pre = ({ children }: { children: ReactNode }) => (
  <div className="bg-gray-800 dark:bg-gray-700 px-4 pt-5 rounded">{children}</div>
);

export const defaultMdxComponents: MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  p: Text,
  a: Link,
  pre: Pre,

  // Component
  TOC,
  code: Code,
  tag: Tag,
} as any;

export function useMDXComponents(components?: MDXComponents) {
  return {
    component: {
      ...defaultMdxComponents,
      ...components,
    },
  };
}
