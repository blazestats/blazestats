import React from "react";

const ModalActions: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
      {children}
    </div>
  );
};

export default ModalActions;
