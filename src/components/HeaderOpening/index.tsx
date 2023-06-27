import { FC } from "react";

const OpeningHeader: FC = () => {
  return (
    <header className="p-8">
      <h1 className="text-6xl font-bold text-gray-400">
        <a href="/" className="flex flex-nowrap gap-2 self-end">
          Age of <b className="text-xl font-semibold self-end">23</b>
        </a>
      </h1>
      <h2
        className="
        text-2xl font-regular  mt-4
        lg:flex justify-between items-center
        "
      >
        <div>
          What do <b>"people do"</b> at the age of 23?
        </div>
      </h2>
    </header>
  );
};

export default OpeningHeader;
