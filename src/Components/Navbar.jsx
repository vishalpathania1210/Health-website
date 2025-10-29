import React, { useState } from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full">
      {/* === Top Bar === */}
      <div className="h-8 bg-gradient-to-r from-navbarTop to-navbarTop2 text-[12px] sm:text-sm text-white flex items-center justify-center">
        <div className="max-w-6xl w-full px-3 sm:px-6 flex flex-col sm:flex-row sm:justify-between items-center text-center gap-1 sm:gap-0">
          <div>Sjukhård • Forskning • Medicinsk klinik</div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 items-center">
          <div className="flex gap-4 items-center">
  <span>Telefonhälsan | </span>
  <span className="flex items-center gap-2">
    <img
      src={logo2} // 👈 your logo file (already imported in your Navbar)
      alt="Logo"
      className="w-4 h-4 object-contain"
    />
    <span>info@telefonhalsan.se | </span>
  </span>
  <span className="flex items-center gap-2">
    <img
      src={logo3} // 👈 your logo file (already imported in your Navbar)
      alt="Logo"
      className="w-4 h-4 object-contain"
    />
  <span>Sverige, Jönköping</span>
  </span>
</div>
          </div>
        </div>
      </div>

      {/* === Main Navbar === */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          {/* === Logo + Nav Links === */}
          <div className="flex items-center justify-between w-full sm:w-auto">
            <div className="w-36 sm:w-44 flex items-center gap-2">
              <img
                src={logo1}
                alt="Telefonhälsan logo"
                className="w-40 sm:w-44 h-10 object-contain"
              />
            </div>

            {/* Hamburger (mobile only) */}
            <button
              className="sm:hidden flex flex-col gap-[5px] focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="block w-6 h-[2px] bg-gray-700"></span>
              <span className="block w-6 h-[2px] bg-gray-700"></span>
              <span className="block w-6 h-[2px] bg-gray-700"></span>
            </button>
          </div>

          {/* === Desktop Nav + Button === */}
          <div className="hidden sm:flex items-center gap-8">
            <nav className="flex gap-6 text-gray-600">
              <a href="#" className="hover:text-deepBlue">
                Hem
              </a>
              <a href="#" className="hover:text-deepBlue">
                Hälsobutiken
              </a>
              <a href="#" className="hover:text-deepBlue">
                Blogg
              </a>
            </nav>
            <button className="bg-deepBlue text-white px-4 py-2 rounded-full shadow">
              Donation
            </button>
          </div>
        </div>

        {/* === Mobile Dropdown === */}
        {isOpen && (
          <div className="sm:hidden flex flex-col items-center gap-3 py-4 border-t text-gray-700 bg-white">
            <a href="#" className="hover:text-deepBlue">
              Hem
            </a>
            <a href="#" className="hover:text-deepBlue">
              Hälsobutiken
            </a>
            <a href="#" className="hover:text-deepBlue">
              Blogg
            </a>
            <button className="bg-deepBlue text-white px-4 py-2 rounded-full shadow">
              Donation
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
