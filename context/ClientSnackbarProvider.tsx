"use client";

import { SnackbarProvider } from "notistack";
import React from "react";

export default function ClientSnackbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      maxSnack={3}
    >
      {children}
    </SnackbarProvider>
  );
}
