import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import { ADMIN, DASHBOARD } from "@/app/lib/constants/Route";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect(session?.user?.isAdmin ? ADMIN : DASHBOARD);
  }

  return <section>{children}</section>;
}
