import ChuyenHG from "@/docs/Chuyen-HG.mdx";
import MdxProvider from "@/docs/MdxProvider";
import { FC } from "react";

const ChuyenHGPage: FC = () => {
  return (
    <div className="education-container">
      <MdxProvider>
        <ChuyenHG />
      </MdxProvider>
    </div>
  );
};

export default ChuyenHGPage;
