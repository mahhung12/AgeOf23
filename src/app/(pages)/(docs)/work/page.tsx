"use client";

import Work from "@/docs/Work.mdx";
import MdxProvider from "@/docs/MdxProvider";
import { FC } from "react";

const WorkingPage: FC = () => {
  return (
    <div className="company-container">
      <MdxProvider>
        <Work />
      </MdxProvider>
    </div>
  );
};

export default WorkingPage;
