import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-gray-300 py-10">
      <div className="max-full mx-auto flex flex-col items-center text-center px-4">
        {/* --- Social Icons --- */}
        <div className="flex gap-5 mb-6">
          <a href="#" className="hover:text-[#40DEAE] transition">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="hover:text-[#40DEAE] transition">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-[#40DEAE] transition">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="hover:text-[#40DEAE] transition">
            <FaYoutube size={22} />
          </a>
        </div>

        {/* --- Menu Links --- */}
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-4">
          <a href="#" className="hover:text-[#40DEAE] transition">
            Medicinsk verksamhet gratis
          </a>
          <span>/</span>
          <a href="#" className="hover:text-[#40DEAE] transition">
            Om oss
          </a>
          <span>/</span>
          <a href="#" className="hover:text-[#40DEAE] transition">
            Vår vision
          </a>
          <span>/</span>
          <a href="#" className="hover:text-[#40DEAE] transition">
            Våra tjänster
          </a>
        </div>

        {/* --- Copyright --- */}
        <div className="text-xs sm:text-sm text-gray-400">
          Copyright ©2025{" "}
          <span className="text-gray-300">
            darkslategray-fish-353111.hostingsite.com
          </span>
          . All rights reserved. Powered by{" "}
          <span className="text-gray-300">WordPress</span> & Designed by{" "}
          <span className="text-gray-300">Bizberg Themes</span>.
        </div>
      </div>
    </footer>
  );
}
