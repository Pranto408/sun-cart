"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "My Profile", href: "/profile" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <div className="border-b border-gray-200">
      <nav className="w-11/12 h-16 bg-white flex items-center justify-between mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <div className="w-12 h-12 relative">
            <Image src={logo} alt="logo" fill className="object-contain" />
          </div>
          <h2 className="text-3xl text-[#FAC11D] font-bold">
            Sun<span className="text-[#1C3557]">Cart</span>
          </h2>
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-2">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setActive(label)}
                className={
                  active === label
                    ? "px-4 py-2 rounded-md text-sm font-medium bg-[#FAC11D] text-white"
                    : "px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer active:scale-95 active:bg-gray-200 transition">
            Login
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-[#1C3557] rounded-md hover:bg-[#152741] cursor-pointer active:scale-95 active:bg-[#1d3d69] transition">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
}
