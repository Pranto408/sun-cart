// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import logo from "@/assets/logo.png"
// import { authClient } from "@/lib/auth-client";
// import { Avatar, Button } from "@heroui/react";

// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "Products", href: "/products" },
//   { label: "My Profile", href: "/profile" },
// ];

// export default function Navbar() {
//   const handelSignOut = async () => {
//     await authClient.signOut();
//   }
//   const userData = authClient.useSession()
//   const user = userData.data?.user

//   const [active, setActive] = useState("Home");

//   return (
//     <div className="border-b border-gray-200 sticky top-0 z-50 bg-white">
//       <nav className="w-11/12  bg-white flex items-center py-2 justify-between mx-auto  flex-col md:flex-row gap-10">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-1">
//           <div className="w-12 h-12 relative">
//             <Image src={logo} alt="logo" fill className="object-contain" />
//           </div>
//           <h2 className="text-3xl text-[#FAC11D] font-bold">
//             Sun<span className="text-[#1C3557]">Cart</span>
//           </h2>
//         </Link>

//         {/* Nav Links */}
//         <ul className="flex items-center gap-2">
//           {navLinks.map(({ label, href }) => (
//             <li key={label}>
//               <Link
//                 href={href}
//                 onClick={() => setActive(label)}
//                 className={
//                   active === label
//                     ? "px-4 py-2 rounded-md text-sm font-medium bg-[#FAC11D] text-white"
//                     : "px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
//                 }
//               >
//                 {label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Auth Buttons */}
//         {!user && (
//           <div className="flex items-center gap-3">
//             <Link href={"/sign-in"}>
//               <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer active:scale-95 active:bg-gray-200 transition">
//                 Login
//               </button>
//             </Link>
//             <Link href={"/register"}>
//               <button className="px-4 py-2 text-sm font-medium text-white bg-[#1C3557] rounded-md hover:bg-[#152741] cursor-pointer active:scale-95 active:bg-[#1d3d69] transition">
//                 Register
//               </button>
//             </Link>
//           </div>
//         )}
//         {user && (
//           <div className="flex items-center gap-3">
//             <Avatar>
//               <Avatar.Image
//                 alt={user?.name}
//                 src={user?.image}
//                 referrerPolicy="no-referrer"
//               />
//               <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
//             </Avatar>
//             <button onClick={handelSignOut} className="px-4 py-2 text-sm font-medium text-white bg-[#ec1717] rounded-md hover:bg-[#bc0808] cursor-pointer active:scale-95 active:bg-[#f80b0b] transition">
//               Sign Out
//             </button>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "My Profile", href: "/profile" },
];

export default function Navbar() {
  const handelSignOut = async () => {
    toast.error("Logging Out")
    await authClient.signOut();
  };
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const pathname = usePathname();

  return (
    <div className="border-b border-gray-200 sticky top-0 z-50 bg-white">
      <nav className="w-11/12  bg-white flex items-center py-2 justify-between mx-auto  flex-col md:flex-row gap-10">
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

        {/* Auth Buttons */}
        {!user && (
          <div className="flex items-center gap-3">
            <Link href={"/sign-in"}>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer active:scale-95 active:bg-gray-200 transition">
                Login
              </button>
            </Link>
            <Link href={"/register"}>
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
    </div>
  );
}