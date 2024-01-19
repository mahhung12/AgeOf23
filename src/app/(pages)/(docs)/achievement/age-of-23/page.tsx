"use client";

import AgeOf23 from "@/docs/Age-Of-23.mdx";
import MdxProvider from "@/docs/MdxProvider";
import { FC } from "react";

const AgeOf23Page: FC = () => {
  return (
    <MdxProvider>
      <AgeOf23 />
    </MdxProvider>
  );
};

export default AgeOf23Page;
