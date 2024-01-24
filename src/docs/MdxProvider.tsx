import { useMDXComponents } from "./useMDXComponents";
import { MDXProvider } from "@mdx-js/react";

const MdxProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { component } = useMDXComponents();

  return (
    <MDXProvider components={component}>
      <div className="py-7">{children}</div>
    </MDXProvider>
  );
};

export default MdxProvider;
