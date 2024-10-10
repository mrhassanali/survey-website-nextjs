import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import { DASHBOARD } from "../lib/constants/Route";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (session) {
    redirect(DASHBOARD);
  }

  return <section>{children}</section>;
}
