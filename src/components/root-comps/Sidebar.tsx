"use client";
import { Link } from "@heroui/react";
import { MdHome } from "react-icons/md";
import { LuClipboardCheck } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className="bg-white-6 h-screen p-6 border-r border-white-7 max-md:hidden lg:w-64 transition-all duration-300">
      {/* Sidebar Header */}
      <h2 className="text-dark-8 text-xl font-extrabold mb-8">Menu</h2>

      {/* Sidebar Links */}
      <div className="flex flex-col space-y-3">
        <Link
          href="/home"
          className="text-dark-5 hover:bg-purple-5/10 hover:text-purple-5 font-semibold flex items-center space-x-3 p-3 rounded-lg transition-all duration-200"
        >
          <MdHome className="text-xl" />
          <span>Home</span>
        </Link>
        <Link
          href="/tasks"
          className="text-dark-5 hover:bg-purple-5/10 hover:text-purple-5 font-semibold flex items-center space-x-3 p-3 rounded-lg transition-all duration-200"
        >
          <LuClipboardCheck className="text-xl" />
          <span>Tasks</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
