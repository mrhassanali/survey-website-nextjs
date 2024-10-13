import { authOptions } from "@/app/lib/auth";
import { DASHBOARD } from "@/app/lib/constants/Route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AdminArea = async ({ children }) => {
  const session = await getServerSession(authOptions);
  const { isAdmin } = session;

  if (isAdmin) {
    return children;
  } else {
    redirect(DASHBOARD);
  }
};

export default AdminArea;
