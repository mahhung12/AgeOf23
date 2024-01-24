"use client";

import Introduction from "@/docs/Introduction.mdx";
import MdxProvider from "@/docs/MdxProvider";
import { FC } from "react";

const IntroductionPage: FC = () => {
  return (
    <MdxProvider>
      <Introduction />
    </MdxProvider>
  );
};

export default IntroductionPage;
