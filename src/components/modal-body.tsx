import React from "react";

const ModalBody: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="relative flex-auto p-6">{children}</div>;
};

export default ModalBody;
