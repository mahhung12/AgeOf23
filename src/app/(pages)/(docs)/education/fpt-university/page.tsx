"use client";

import FPTSoftware from "@/docs/FPT-Software.mdx";
import MdxProvider from "@/docs/MdxProvider";
import { FC } from "react";

const FPTSoftwarePage: FC = () => {
  return (
    <MdxProvider>
      <FPTSoftware />
    </MdxProvider>
  );
};

export default FPTSoftwarePage;
