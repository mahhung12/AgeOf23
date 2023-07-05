import type { MDXComponents } from "mdx/types";
import { ReactNode } from "react";

const customClassNames = {
  h1: "text-4xl font-bold mb-4",
  h2: "text-3xl font-bold mb-3",
  p: "text-base mb-4",
  a: "text-blue-500 underline",
  pre: "block",
  code: "block",
};

const H1 = ({ children }: { children: ReactNode }): JSX.Element => (
  <h1 className={customClassNames.h1}>{children}</h1>
);

const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className={customClassNames.h2}>{children}</h2>
);

const Text = ({ children }: { children: ReactNode }) => (
  <p className={customClassNames.p}>{children}</p>
);

const Link = (props: any) => (
  <a className={customClassNames.a} {...props}>
    {props.children}
  </a>
);

export const defaultMdxComponents: MDXComponents = {
  h1: H1,
  h2: H2,
  p: Text,
  a: Link,
} as any;

export function useMDXComponents(components?: MDXComponents) {
  return {
    component: {
      ...defaultMdxComponents,
      ...components,
    },
  };
}
