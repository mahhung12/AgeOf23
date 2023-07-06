import { toast, TypeOptions } from "react-toastify";

const showMessage = (
  msgType: Exclude<TypeOptions, "default">,
  msgContent: any
) => {
  if (typeof document === "undefined") {
    return;
  }

  if (msgContent) {
    toast[msgType](msgContent || msgContent, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
};

export default showMessage;
