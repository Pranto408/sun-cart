
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-white tracking-tighter">
              SUN<span className="text-yellow-500">CART</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Your ultimate summer destination. We keep you cool when the
              weather gets hot.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
              Shop
            </h3>
            <ul className="space-y-4 text-sm">
              {["Best Sellers", "New Arrivals", "Offers"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-yellow-500 transition-colors group"
                  >
                    <IoArrowForwardOutline className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
              Help
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2 hover:text-yellow-500 cursor-pointer">
                 Privacy Policy
              </li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">
                Terms of Service
              </li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">
                Refund Policy
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-yellow-500 mt-1 shrink-0" />
                <span className="text-white">65/30, Banani,Dhaka</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-yellow-500 shrink-0" />
                <span className="text-white">+8801715568145</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-500 shrink-0" />
                <span className="text-white">support@suncart.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs tracking-wide">
            © {currentYear} SUNCART. ALL RIGHTS RESERVED.
          </p>

          <div className="flex space-x-4">
            <a
              href="#"
              className="p-3 bg-zinc-900 rounded-full hover:bg-yellow-500 hover:text-black transition-all"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="p-3 bg-zinc-900 rounded-full hover:bg-yellow-500 hover:text-black transition-all"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="p-3 bg-zinc-900 rounded-full hover:bg-yellow-500 hover:text-black transition-all"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
