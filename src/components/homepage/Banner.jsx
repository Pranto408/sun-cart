import Image from "next/image";
import React from "react";
import BannerImage from "@/assets/banner.png"
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
  return (
    <section className="relative w-full h-125 mb-10 md:h-150 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={BannerImage}
          alt="BannerImage"
          fill
          className="object-cover"
        />
        {/* Dark overlay to make text pop */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="inline-block px-4 py-1 mb-4 bg-orange-500 text-white font-bold rounded-full uppercase tracking-widest text-sm animate-bounce">
          Hot Deals 🔥
        </div>

        <h1 className="text-4xl md:text-7xl font-extrabold text-white drop-shadow-lg tracking-tight">
          Summer Sale <br />
          <span className="text-yellow-400 text-5xl md:text-8xl">50% OFF</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white font-medium max-w-2xl mx-auto drop-shadow-md">
          Don&apos;t sweat the heat! Refresh your wardrobe with our exclusive
          seasonal collection.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="cursor-pointer px-8 py-4 bg-[#1C3557] text-xl text-white font-bold rounded-lg shadow-lg hover:bg-[#1C3557] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
            Get started <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Decorative Summer Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <span className="text-8xl opacity-20">☀️</span>
      </div>
    </section>
  );
};

export default Banner;
