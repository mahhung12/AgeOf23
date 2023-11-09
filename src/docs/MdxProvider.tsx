import { useMDXComponents } from "./useMDXComponents";
import { MDXProvider } from "@mdx-js/react";

const MdxProvider: React.FC<{ children: any }> = ({ children }) => {
  const { component } = useMDXComponents();

  return (
    <MDXProvider
    // components={component}
    >
      {children}
    </MDXProvider>
  );
};

export default MdxProvider;
