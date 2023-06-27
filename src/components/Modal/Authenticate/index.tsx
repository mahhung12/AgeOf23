import { Modal } from "antd";
import classNames from "classnames";
import React, { FC, PropsWithChildren } from "react";

const AuthenticateModal: FC<
  PropsWithChildren<{
    title: string;
    visible: boolean;
    className?: string;
    centered?: boolean;
    footer?: boolean;

    onClose: () => void;
  }>
> = ({ title, visible, className, onClose, ...props }) => {
  return (
    <Modal
      title={title || "Modal"}
      open={visible}
      onCancel={onClose}
      {...props}
    >
      <div className={classNames("modal-container", className)}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    </Modal>
  );
};

export default AuthenticateModal;
