"use client";
import React, { useState } from "react";
import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  DocumentIcon,
  ChartBarIcon,
  // Cog6ToothIcon,
  // BellIcon,
  // MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import SignOutBtn from "./SignOutBtn";
import Link from "next/link";
import { ADMIN_DASHBOARD, USER_DASHBOARD } from "@/app/lib/constants/Route";
// import { useSession } from "next-auth/react";


const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const {data,status,update} = useSession();

  const menuItems = [
    { name: "Dashboard", icon: HomeIcon, href: USER_DASHBOARD.DASHBOARD },
    { name: "Paid Surveys", icon: UsersIcon, href: USER_DASHBOARD.PAID_SURVEY },
    { name: "Earning", icon: FolderIcon, href: USER_DASHBOARD.EARNING },
    { name: "History", icon: CalendarIcon, href: USER_DASHBOARD.HISTORY },
    {
      name: "Referral Program",
      icon: DocumentIcon,
      href: USER_DASHBOARD.REFERRAL_PROGRAM,
    },
    {
      name: "Money Withdrawal",
      icon: ChartBarIcon,
      href: USER_DASHBOARD.MONEY_WITHDRAWAL,
    },
    { name: "FAQs", icon: ChartBarIcon, href: USER_DASHBOARD.FAQS },
  ];

  const adminMenu = [
    { name: "Dashboard", icon: HomeIcon, href: ADMIN_DASHBOARD.DASHBOARD },
    { name: "Users", icon: UsersIcon, href: ADMIN_DASHBOARD.USERS },
    { name: "Survey", icon: FolderIcon, href: ADMIN_DASHBOARD.SURVEYS },
    { name: "Payments", icon: CalendarIcon, href: ADMIN_DASHBOARD.PAYMENTS },
    {
      name: "Settings",
      icon: DocumentIcon,
      href: ADMIN_DASHBOARD.SETTINGS,
    },
  ];

  // const teams = [
  //   { name: "Heroicons", initial: "H" },
  //   { name: "Tailwind Labs", initial: "T" },
  //   { name: "Workcation", initial: "W" },
  // ];

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-0 left-0 p-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-gray-500 hover:text-gray-600"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`
    fixed inset-y-0 left-0 z-50 transform 
    lg:relative lg:translate-x-0 transition duration-200 ease-in-out
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
    w-64 text-white
  `}
        style={{ backgroundColor: "var(--bg-sidebar)" }}
      >
        {/* Close button for mobile */}
        <div className="lg:hidden absolute right-0 top-0 p-4 mr-2">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-white hover:text-gray-200"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="h-16 flex items-center px-4">
          <div className="text-2xl">≋</div>
        </div>

        <nav className="mt-4">
          {(false ? adminMenu : menuItems).map((item, index) => (
            <Link
              key={index}
              href={item.href || "#"}
              className="flex items-center px-4 py-2 text-sidebar-text hover:bg-sidebar-hover hover:text-sidebar-text-hover"
              onClick={() => setIsSidebarOpen(false)}
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span>{item.name}</span>
            </Link>
          ))}

          {/* <div className="mt-8">
            <div className="px-4 text-sm font-semibold text-purple-200">
              Your teams
            </div>
            {teams.map((team, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center px-4 py-2 text-white hover:bg-purple-700"
                onClick={() => setIsSidebarOpen(false)}
              >
                <span className="w-6 h-6 rounded bg-purple-800 flex items-center justify-center text-sm mr-3">
                  {team.initial}
                </span>
                <span>{team.name}</span>
              </a>
            ))}
          </div> */}
        </nav>

        <div className="absolute bottom-0 w-64 p-4">
          <SignOutBtn />
          {/* <a
            href="#"
            className="flex items-center text-white hover:bg-purple-700 px-4 py-2"
          >
            <Cog6ToothIcon className="h-5 w-5 mr-3" />
            <span>Settings</span>
          </a> */}
        </div>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
