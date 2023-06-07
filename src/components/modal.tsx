import React from "react";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ children, title, open, setOpen }) => {
  return (
    <>
      {open ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-full max-w-3xl">
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-gray-50 shadow-lg outline-none focus:outline-none">
                <div className="flex items-center justify-between rounded-t border-b border-solid border-slate-200 p-5">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black outline-none focus:outline-none"
                    onClick={() => setOpen(false)}
                  >
                    <span className="align-center h-6 w-6 bg-transparent text-2xl text-black opacity-50 outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {children}
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-25"
            onClick={() => setOpen(false)}
          ></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
