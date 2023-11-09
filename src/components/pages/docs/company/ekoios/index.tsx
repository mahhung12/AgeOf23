import EkoiosTechnology from "@/docs/Ekoios-Technology.mdx";
// import EkoiosTechnology from "../../../../../docs/Ekoios-Technology.mdx";
import MdxProvider from "@/docs/MdxProvider";
import { FC } from "react";

const EkoiosTechnologyPage: FC = () => {
  return (
    <div className="company-container">
      <MdxProvider>
        <EkoiosTechnology />
      </MdxProvider>
    </div>
  );
};

export default EkoiosTechnologyPage;
