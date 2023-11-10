import ButtonLink from "@/components/ButtonLink";
import { Docs } from "@/components/Docs";
import { docs } from "@/constant/docs";
import { usePathname } from "next/navigation";
import { FC } from "react";

const includesArray = ["docs", "project", "company", "education"];

const SiderMenu: FC<{}> = () => {
  const pathname = usePathname();

  const trimPathname = pathname.split("/");
  const activeDocsPage = trimPathname.some((path) => includesArray.includes(path));

  return (
    <div className="mt-8 flex flex-col space-y-4">
      <ButtonLink icon="folder" href="/docs/introduction">
        Documentation
      </ButtonLink>

      {activeDocsPage && (
        <div className="px-3">
          <Docs navLinks={docs} />
        </div>
      )}

      <ButtonLink icon="github" href="https://github.com/mahhung12" external>
        Repository
      </ButtonLink>

      <ButtonLink icon="linkedin" href="https://www.linkedin.com/in/hung-hung-887199212/" external>
        Linkedin
      </ButtonLink>

      <ButtonLink icon="help" href="/">
        About
      </ButtonLink>

      <ButtonLink icon="chat" href="/contact">
        Contact
      </ButtonLink>
    </div>
  );
};

export default SiderMenu;
