import FutureCity from "@/docs/Future-City.mdx";
import MdxProvider from "@/docs/MdxProvider";
import { FC } from "react";

const FutureCityPage: FC = () => {
  return (
    <div className="projects-container">
      <MdxProvider>
        <FutureCity />
      </MdxProvider>
    </div>
  );
};

export default FutureCityPage;
