"use client";
import React from "react";
import { Button } from "./button";
import { signOut } from "next-auth/react";
import { LOGIN } from "@/app/lib/constants/Route";
import { useSnackbar } from "notistack";

export default function SignOutBtn() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleSignout = () => {
    signOut({
      redirect: true,
      callbackUrl: LOGIN,
    });
    enqueueSnackbar("Signing out...", {
      variant: "info",
      action: (key) => (
        <Button
          onClick={() => closeSnackbar(key)}
          size="small"
        >
          Dismiss
        </Button>
      ),
    });
  };

  return (
    <Button variant={"destructive"} size="medium" onClick={handleSignout}>
      Signout
    </Button>
  );
}
