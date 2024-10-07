import React from "react";
import { Button } from "./button";
import GoogleIcon from "@/assets/icon/Google.svg";

export default function SignInWithGoogle() {
  return (
    <Button variant={"secondary"} size="large" fullWidth={true} type="button">
      <GoogleIcon className={"w-5 h-5"} />
      Continue with Google
    </Button>
  );
}
