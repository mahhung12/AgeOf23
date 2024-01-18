"use client";

import FPTSoftware from "@/docs/FPT-Software.mdx";
import MdxProvider from "@/docs/MdxProvider";
import { FC } from "react";

const FPTSoftwarePage: FC = () => {
  return (
    <div className="company-container">
      <MdxProvider>
        <FPTSoftware />
      </MdxProvider>
    </div>
  );
};

export default FPTSoftwarePage;
