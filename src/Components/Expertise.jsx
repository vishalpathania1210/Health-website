import React from "react";
import image35 from "../assets/image 35.png"; 
import image36 from "../assets/image 36.png"; 
import Meditation from "../assets/Meditation.png"; 
import supplement from "../assets/Supplement Bottle.png"; 
import Voice from "../assets/Voice Recognition.png"; 

export default function Expertise() {
  const experts = [
    {
      title: "Hälsa & livscoaching",
      desc: "Appen finns att hämta hos Android eller iOS appbibliotek",
      logo: image35
    },
    {
      title: "Psykoterapi",
      desc: "Appen finns att hämta hos Android eller iOS appbibliotek",
      logo: image36
    },
    {
      title: "Mindfulness",
      desc: "Appen finns att hämta hos Android eller iOS appbibliotek",
      logo: Meditation
    },
    {
      title: "Naturmedicin",
      desc: "Appen finns att hämta hos Android eller iOS appbibliotek",
      logo: supplement
    },
    {
      title: "Kommunikation",
      desc: "Appen finns att hämta hos Android eller iOS appbibliotek",
      logo: Voice
    },
  ];

  return (
    <section className="bg-[#F8FBFD] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-10">
          Vår expertis
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
          {experts.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-300 hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center text-center"
            >
              {/* Icon placeholder */}
              <div className="w-16 h-16 rounded-full bg-[#EAF8F3] flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/3 bg-[#F2F6F9] rounded-b-[50%]"></div>
                <img
                  src={item.logo} // <-- add your logo path here
                  alt={item.title}
                  className="w-10 h-10 object-contain relative z-10"
                />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-800 text-base mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
