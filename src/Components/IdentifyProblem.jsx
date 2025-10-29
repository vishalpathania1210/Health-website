import React from "react";

export default function IdentifyProblem() {
  return (
    <section className="w-full bg-gradient-to-b from-[#E8F6F3] to-[#F8FBFD] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Vi identifierar ditt problem
          </h2>
          <ul className="space-y-3 text-gray-700">
            {[
              "Depression",
              "Appearance fixation",
              "Performance anxiety",
              "Self-esteem",
              "Addiction issues",
              "Paranoia",
              "Anxiety",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-green-500 text-lg">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Vi identifierar ditt beroende
          </h2>
          <ul className="space-y-3 text-gray-700">
            {[
              "Pornografi",
              "Online dating",
              "Sociala medier",
              "Gambling",
              "Internet",
              "Internethandel",
              "Musik",
              "Spel",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-green-500 text-lg">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
