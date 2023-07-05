import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "./useMDXComponents";

const MdxProvider: React.FC<{ children: any }> = ({ children }) => {
  const { component } = useMDXComponents();

  return <MDXProvider components={component}>{children}</MDXProvider>;
};

export default MdxProvider;
