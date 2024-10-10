"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { SnackbarProvider } from "notistack";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      maxSnack={3}
    >
      <SessionProvider>{children}</SessionProvider>
    </SnackbarProvider>
  );
};

export default Provider;
