import Image from "next/legacy/image";

const UserCard = ({ userData }: any) => {
  return (
    <div className="flex flex-nowrap gap-5 align-middle">
      <div className="rounded-lg overflow-hidden relative w-20 h-20">
        <Image
          src={userData?.image}
          alt={userData?.name}
          layout="fill"
          quality={100}
          placeholder="empty"
          blurDataURL={userData?.image}
          objectFit="cover"
        />
      </div>

      <div className="flex align-middle flex-col justify-center gap-2">
        <div className="font-semibold text-lg">{userData.name}</div>
        <div className="font-light">{userData.email}</div>
      </div>
    </div>
  );
};

export default UserCard;
