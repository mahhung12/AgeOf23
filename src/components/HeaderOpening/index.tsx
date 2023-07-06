import Link from "next/link";
import { FC } from "react";

const OpeningHeader: FC = () => {
  return (
    <header>
      <h1 className="2xl:text-7xl md:text-[58px] font-bold text-black transition duration-300 ease-in-out hover:text-opacity-60">
        <Link href="/" className="flex flex-nowrap gap-2 self-end align-middle">
          Age of <b className="text-xl font-semibold self-end">23</b>
        </Link>
      </h1>
      <h2 className="text-2xl md:text-[20px] font-regular mt-4 lg:flex justify-between items-center">
        <div>
          What do <b>&#8220;people do&#8221;</b> at the age of{" "}
          <Link href="/" className="underline">
            23
          </Link>
          ?
        </div>
      </h2>
    </header>
  );
};

export default OpeningHeader;
