"use client";

import FPT_University from "@/docs/FPT-University.mdx";
import MdxProvider from "@/docs/MdxProvider";
import { FC } from "react";

const FPTUniversityPage: FC = () => {
  return (
    <div className="education-container">
      <MdxProvider>
        <FPT_University />
      </MdxProvider>
    </div>
  );
};

export default FPTUniversityPage;
