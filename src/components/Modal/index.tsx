import { Modal } from "antd";
import classNames from "classnames";
import React, { FC, PropsWithChildren } from "react";

const AppModal: FC<
  PropsWithChildren<{
    visible: boolean;
    className?: string;
    centered?: boolean;
    footer?: boolean;

    onClose: () => void;
  }>
> = ({ children, className, footer = null, ...props }) => {
  return (
    <Modal {...props}>
      <div className={classNames("app-modal", className)}>{children}</div>
    </Modal>
  );
};

export default AppModal;
