"use client";

import CompaniesMDX from "@/docs/Companies.mdx";
import MdxProvider from "@/docs/MdxProvider";
import { FC } from "react";

const CompaniesPage: FC = () => {
  return (
    <div className="company-container">
      <MdxProvider>
        <CompaniesMDX />
      </MdxProvider>
    </div>
  );
};

export default CompaniesPage;
