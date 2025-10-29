import React from "react";
import Mask from "../assets/Mask group.png";
import Isolation from "../assets/Isolation_Mode.png";

const leftPoints = [
  "När du känner att du får ut mer av livet i mobilen än det verkliga livet",
  "När du inte lägger undan mobilen när du ska sova eller somnar med mobilen i handen",
  "När du har svårt att utföra dagliga grundläggande sysslor för att du fokuserar på mobilen",
  "När du scrollar på sociala medier flera timmar under en dag",
  "När du känner att du behöver ta upp mobilen och kolla trots att du inte har något klart syfte",
  "När du känner att du behöver någon snabb kick när du inte för tillfället får den av mobilen",
];

const rightPoints = [
  "När det känns som att någon del av kroppen saknas när du inte har mobilen i handen",
  "När du inte kan gå ut utan mobilen i fickan",
  "När du kan bli stressad eller få ångest om du inte kan gå in på din mobil",
  "När du tittar ner i mobilen medan du går utomhus",
  "När det inte ger dig någonting att gå ute i naturen",
  "När du tittar i mobilen medan du umgås eller äter med andra",
  "När interagerande med andra medmänniskor inte ger dig tillfredsställelse",
];

const MobileAddictionDefinition = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#F4FFFC] to-[#E6FFF5]">
      <div className="max-w-5xl bg-[#082B61] text-white rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 border-8 border-[#1E3C91] relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center">
          {/* Left Points */}
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed order-1">
            {leftPoints.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <img src={Mask} alt="Tick" className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          {/* Center Illustration */}
          <div className="flex flex-col items-center justify-center text-center order-2">
            <img
              src={Isolation}
              alt="Phone addiction"
              className="w-28 h-28 sm:w-36 sm:h-36 mb-4 object-contain"
            />
            <h2 className="text-base sm:text-lg font-semibold leading-snug">
              Definitioner av <br /> mobilberoende
            </h2>
          </div>

          {/* Right Points */}
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed order-3">
            {rightPoints.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <img src={Mask} alt="Tick" className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MobileAddictionDefinition;
