"use client";

import MdxProvider from "@/docs/MdxProvider";

export default function DocsLayout({ children }: { children: React.ReactElement }) {
  return <MdxProvider>{children}</MdxProvider>;
}
