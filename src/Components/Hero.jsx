import React from "react";
import vector from "../assets/Vector.png"; // background (mountain)
import Group from "../assets/Group.png";   // lightning image

export default function Hero() {
  return (
    <section className="overflow-hidden">
      {/* Background */}
      <div
        className=" pb-64 hero-mask h-[800px] flex items-center justify-between bg-cover bg-center"
        style={{
          backgroundImage: `url(${vector})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(2)", // ✅ slightly increased brightness
        }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,30,48,0.35)] to-[rgba(6,30,48,0.7)]"></div>

        {/* Lightning overlay (Group image) */}
        <img
          src={Group}
          alt="Lightning overlay"
          className="absolute left-0 top-0 w-[900px] h-full object-cover opacity-100 mix-blend-screen"
          style={{
            filter: "brightness(0.8) contrast(1)",
          }}
        />

        {/* Content container */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 flex items-center justify-between w-full">
          {/* LEFT SIDE is empty because image covers background */}
          <div className="w-1/2"></div>

          {/* RIGHT SIDE text */}
          <div className="w-1/2 text-white py-12 pl-4">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
              Välkommen till <br /> Telefonhälsan
            </h1>
            <p className="mt-4 max-w-md text-lg text-white/90">
              Telefonhälsan är den enda behandlingen i Sverige som fokuserar på
              att hjälpa människor med hälsoproblem relaterade till
              mobiltelefon- och internetberoende.
            </p>
            <div className="mt-6">
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
