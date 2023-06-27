import ButtonLink from "@/components/ButtonLink/index,";
import { FC } from "react";

const SiderMenu: FC<{}> = () => {
  return (
    <div className="mt-8 px-8 flex flex-col space-y-4">
      <ButtonLink icon="book" href="/docs/introduction">
        Documentation
      </ButtonLink>
      <ButtonLink icon="github" href="https://github.com/mahhung12">
        Repository
      </ButtonLink>
      <ButtonLink icon="discord" href="/">
        Talk
      </ButtonLink>
      <ButtonLink icon="twitter" href="/">
        Linkedin
      </ButtonLink>
      <ButtonLink icon="help" href="/">
        About
      </ButtonLink>
    </div>
  );
};

export default SiderMenu;
