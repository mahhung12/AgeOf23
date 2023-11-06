import Introduction from "@/docs/Introduction.mdx";
import MdxProvider from "@/docs/MdxProvider";
import { FC } from "react";

const IntroductionPage: FC = () => {
    return (
        <div className="introduction-container">
            <MdxProvider>
                {/* <Introduction /> */}
                <div></div>
            </MdxProvider>
        </div>
    );
};

export default IntroductionPage;
