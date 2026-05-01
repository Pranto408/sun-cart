"use client"
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-[#FAC11D]">404</h1>

        <h2 className="text-3xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-2 mb-6">
          The page you are looking for does not exist.
        </p>

        <Link href="/">
          <button className="bg-[#1C3557] cursor-pointer px-6 py-3 active:scale-95 active:bg-[#1d3d69]  text-xl text-white font-bold rounded-lg shadow-lg duration-100 transform hover:bg-[#122642]">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
}
