"use client";

import { Menu, Search, Bell, Mail, User, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {

  // 🔐 Default always false
  const [isLoggedIn] = useState(false);

  return (
    <header className="h-16 bg-[#f5f6f8] flex items-center justify-between px-6">

      {/* LEFT */}
      <div className="flex items-center gap-4">
        <Menu className="w-6 h-6 text-gray-600 cursor-pointer" />
        <h1 className="text-xl font-bold text-[#36656b]">
          StoneFleet
        </h1>
      </div>

      {/* CENTER SEARCH */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-[350px]">
          <Search className="w-4 h-4 absolute left-4 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white text-sm outline-none border border-gray-200 focus:ring-2 focus:ring-[#36656b]"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-6">

        <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
        <Mail className="w-5 h-5 text-gray-600 cursor-pointer" />

        {/* 🔓 Always Login Placeholder (No Random Login) */}
        <div className="flex items-center gap-2 border-l pl-4 cursor-pointer text-gray-700 hover:text-[#36656b]">
          <User className="w-6 h-6" />
          <span className="text-sm font-medium">Login</span>
          <ChevronDown className="w-4 h-4" />
        </div>

      </div>
    </header>
  );
}
