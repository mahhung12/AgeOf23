import ButtonLink from "@/components/ButtonLink/index,";
import { FC, useEffect } from "react";
import RegisterUser from "../RegisterUser";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const SiderMenu: FC<{}> = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [pathname]);

  return (
    <div className="mt-8 flex flex-col space-y-4">
      <ButtonLink icon="folder" href="/docs/introduction">
        Documentation
      </ButtonLink>
      <ButtonLink icon="github" href="https://github.com/mahhung12" external>
        Repository
      </ButtonLink>
      <ButtonLink icon="discord" href="/">
        Talk
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

      {/* <RegisterUser /> */}
    </div>
  );
};

export default SiderMenu;
