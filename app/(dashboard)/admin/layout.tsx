import Sidebar from "@/components/Organism/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import { DASHBOARD, LOGIN } from "@/app/lib/constants/Route";
import Image from "next/image";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session || !session?.user?.isAdmin) {
    redirect(LOGIN);
  }

  if (session?.user && !session?.user?.isAdmin) {
    redirect(DASHBOARD);
  }

  return (
    <>
      <div className="h-[100vh] flex">
        <Sidebar />
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          {/* Top Navigation */}
          <div className="h-16 border-b flex items-center justify-between px-4">
            <div className="flex-1 flex items-center">
              <div className="max-w-md w-full">
                <div className="relative">
                  {/* <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div> */}
                  {/* <input
                  type="text"
                  placeholder="Search..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                /> */}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* <button className="text-gray-400 hover:text-gray-500">
                <BellIcon className="h-6 w-6" />
              </button> */}
              {/* <SignOutBtn /> */}
              <div className="flex items-center">
                <span className="ml-2 text-gray-700">
                  Hello {session?.user?.name}
                </span>
                <Image
                  src="https://hassanali.pk/images/profile/profile.png"
                  alt="User avatar"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <main className="p-6">
            <div className="border-2 border-dashed border-gray-200 rounded-lg  min-h-96 text-gray-500">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
