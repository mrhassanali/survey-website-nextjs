"use client";
import React, { ReactNode, useState } from "react";
import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  DocumentIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  BellIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface Sidebar {
  children: ReactNode;
}

const Sidebar = ({ children }: Sidebar) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: HomeIcon },
    { name: "Team", icon: UsersIcon },
    { name: "Projects", icon: FolderIcon },
    { name: "Calendar", icon: CalendarIcon },
    { name: "Documents", icon: DocumentIcon },
    { name: "Reports", icon: ChartBarIcon },
  ];

  const teams = [
    { name: "Heroicons", initial: "H" },
    { name: "Tailwind Labs", initial: "T" },
    { name: "Workcation", initial: "W" },
  ];

  return (
    <div className="min-h-screen flex">
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
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center px-4 py-2 text-sidebar-text hover:bg-sidebar-hover hover:text-sidebar-text-hover"
              onClick={() => setIsSidebarOpen(false)}
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span>{item.name}</span>
            </a>
          ))}

          <div className="mt-8">
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
          </div>
        </nav>

        <div className="absolute bottom-0 w-64 p-4">
          <a
            href="#"
            className="flex items-center text-white hover:bg-purple-700 px-4 py-2"
          >
            <Cog6ToothIcon className="h-5 w-5 mr-3" />
            <span>Settings</span>
          </a>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1">
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
            <button className="text-gray-400 hover:text-gray-500">
              <BellIcon className="h-6 w-6" />
            </button>
            <div className="flex items-center">
              <img
                src="https://hassanali.pk/images/profile/profile.png"
                alt="User avatar"
                className="h-8 w-8 rounded-full"
              />
              <span className="ml-2 text-gray-700">Hassan Ali</span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-6">
          <div className="border-2 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center text-gray-500">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
