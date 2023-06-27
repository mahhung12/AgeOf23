import { Typography } from "antd";
import Image from "next/legacy/image";

import React from "react";

const { Paragraph, Text } = Typography;

const UserCard = ({ userData }: any) => {
  return (
    <React.Fragment>
      <div className="account-avatar">
        <Image
          src={userData.image}
          alt={userData.name}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="account-information">
        <Paragraph ellipsis={{ tooltip: true }} className="name">
          {userData.name}
        </Paragraph>
        <Paragraph ellipsis={{ tooltip: true }} className="email">
          {userData.email}
        </Paragraph>
      </div>
    </React.Fragment>
  );
};

export default UserCard;
