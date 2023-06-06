import React from "react";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";

const ProtectedArea: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl="/login" />
      </SignedOut>
    </>
  );
};

export default ProtectedArea;
