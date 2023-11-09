"use client";

import Introduction from "@/docs/Introduction.mdx";
import MdxProvider from "@/docs/MdxProvider";
import { FC } from "react";

const IntroductionPage: FC = () => {
  return (
    <div className="introduction-container">
      <MdxProvider>
        <Introduction />
      </MdxProvider>
    </div>
  );
};

export default IntroductionPage;
