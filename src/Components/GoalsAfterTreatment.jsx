import React from "react";
import Rectangle from "../assets/Rectangle 118.png";
import Background from "../assets/Background.jpg";
import Goal from "../assets/Goal.png";

export default function GoalsAfterTreatment() {
  const goals = [
    "Att mobilen ska bli ett bra hjälpmedskap och inte något som begränsar livet.",
    "Att du ska bli piggare och gladare.",
    "Att du ska bli mer fokuserad på dina dagliga uppgifter i det verkliga livet.",
    "Att du ska lära dig att organisera dina tankar bättre.",
    "Att du ska bli mer produktiv genom ditt mobilanvändande.",
    "Att du ska kunna lägga undan mobilen helt utan att röra den under några timmar.",
    "Att bli självmedveten om dina brister och se tidiga tecken på ett möjligt återfallande i Mobilberoende.",
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#E8F6F3] to-[#F8FBFD] py-12 sm:py-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
        {/* Left Text Section */}
        <div className="order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 text-center md:text-left">
            Mål efter behandling
          </h2>
          <ul className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            {goals.map((goal, index) => (
              <li key={index} className="flex items-start gap-3">
                <img
                  src={Goal}
                  alt="Goal Icon"
                  className="w-5 h-5 mt-1 object-contain flex-shrink-0"
                />
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="order-1 md:order-2 flex justify-center relative">
          {/* 🔵 Background Image (behind rectangle) */}
          <img
            src={Background}
            alt="Background Pattern"
            className="absolute w-[300px] sm:w-[400px] md:w-[650px] h-[220px] sm:h-[320px] md:h-[450px] object-cover rounded-full z-0"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%) scale(1.2)",
            }}
          />

          {/* 🩺 Foreground Rectangle Image */}
          <div className="relative overflow-hidden shadow-md rounded-2xl z-10 w-[90%] sm:w-[80%] md:w-auto">
            <img
              src={Rectangle}
              alt="Doctors discussing goals"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
