"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "My Profile", href: "/profile" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handelSignOut = async () => {
    toast.error("Logging Out");
    await authClient.signOut();
  };

  const userData = authClient.useSession();
  const user = userData.data?.user;
  const pathname = usePathname();

  return (
    <div className="border-b border-gray-200 sticky top-0 z-50 bg-white">
      <nav className="w-11/12 bg-white flex items-center py-2 justify-between mx-auto">
        {/* Left: Hamburger (mobile) + Logo */}
        <div className="flex items-center gap-3">
          {/* Hamburger Button - visible only on mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-md hover:bg-gray-100 transition"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 my-1 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <div className="w-12 h-12 relative">
              <Image src={logo} alt="logo" fill className="object-contain" />
            </div>
            <h2 className="text-3xl text-[#FAC11D] font-bold">
              Sun<span className="text-[#1C3557]">Cart</span>
            </h2>
          </Link>
        </div>

        {/* Center: Nav Links - hidden on mobile */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className={
                  pathname === href
                    ? "px-4 py-2 rounded-md text-sm font-medium bg-[#FAC11D] text-white"
                    : "px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Auth Buttons - always visible */}
        {!user && (
          <div className="flex items-center gap-3">
            <Link href="/sign-in">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer active:scale-95 active:bg-gray-200 transition">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="px-4 py-2 text-sm font-medium text-white bg-[#1C3557] rounded-md hover:bg-[#152741] cursor-pointer active:scale-95 active:bg-[#1d3d69] transition">
                Register
              </button>
            </Link>
          </div>
        )}
        {user && (
          <div className="flex items-center gap-3">
            <Avatar>
              <Avatar.Image
                alt={user?.name}
                src={user?.image}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>
            <button
              onClick={handelSignOut}
              className="px-4 py-2 text-sm font-medium text-white bg-[#ec1717] rounded-md hover:bg-[#bc0808] cursor-pointer active:scale-95 active:bg-[#f80b0b] transition"
            >
              Sign Out
            </button>
          </div>
        )}
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col w-11/12 mx-auto pb-3 gap-1">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className={
                  pathname === href
                    ? "block px-4 py-2 rounded-md text-sm font-medium bg-[#FAC11D] text-white"
                    : "block px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}