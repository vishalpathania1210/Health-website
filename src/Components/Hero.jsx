import React from "react";
import vector from "../assets/Vector.png"; // background (mountain)
import Group from "../assets/Group.png";   // lightning image

export default function Hero() {
  return (
    <section className="overflow-hidden relative">
      {/* === Background Container === */}
      <div
        className="relative flex items-center hero-mask justify-between bg-cover bg-center"
        style={{
          backgroundImage: `url(${vector})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(2)",
        }}
      >
        {/* === Overlay === */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,30,48,0.35)] to-[rgba(6,30,48,0.7)]"></div>

        {/* === Lightning Overlay === */}
        <img
          src={Group}
          alt="Lightning overlay"
          className="absolute left-0 top-0 w-[800px] h-full object-cover opacity-100 mix-blend-screen"
          style={{
            filter: "brightness(0.8) contrast(1)",
          }}
        />

        {/* === Content === */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-10 w-full flex flex-col md:flex-row items-center md:items-start justify-between h-[600px] sm:h-[700px] lg:h-[800px]">
          {/* LEFT SIDE empty for balance */}
          <div className="hidden md:block w-1/2"></div>

          {/* RIGHT SIDE content */}
          <div className="w-full md:w-1/2 text-white text-center md:text-left py-12 md:pl-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
              Välkommen till <br className="hidden sm:block" /> Telefonhälsan
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/90 max-w-md mx-auto md:mx-0">
              Telefonhälsan är den enda behandlingen i Sverige som fokuserar på
              att hjälpa människor med hälsoproblem relaterade till
              mobiltelefon- och internetberoende.
            </p>
            <div className="mt-6 flex justify-center md:justify-start">
              <button className="px-6 py-2 rounded-full bg-tealAccent text-deepBlue font-semibold shadow">
                Läs mer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
