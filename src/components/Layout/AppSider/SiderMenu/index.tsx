import ButtonLink from "@/components/ButtonLink";
import { FC } from "react";
import RegisterUser from "../RegisterUser";

const SiderMenu: FC<{}> = () => {
  return (
    <div className="mt-8 flex flex-col space-y-4">
      <ButtonLink icon="folder" href="/docs/introduction">
        Documentation
      </ButtonLink>

      <ButtonLink icon="github" href="https://github.com/mahhung12" external>
        Repository
      </ButtonLink>

      <ButtonLink
        icon="linkedin"
        href="https://www.linkedin.com/in/hung-hung-887199212/"
        external
      >
        Linkedin
      </ButtonLink>

      <ButtonLink icon="help" href="/">
        About
      </ButtonLink>

      <ButtonLink icon="chat" href="/contact">
        Contact
      </ButtonLink>

      <ButtonLink icon="connect" href="/">
        <RegisterUser />
      </ButtonLink>
    </div>
  );
};

export default SiderMenu;
