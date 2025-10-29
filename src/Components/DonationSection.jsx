import React, { useState } from "react";
import { Heart } from "lucide-react";

const DonationSection = () => {
  const [selected, setSelected] = useState(100);
  const amounts = [100, 250, 500, 1000];

  return (
    <section className="bg-gray-200 mx-24 border rounded-2xl z-50">
      <div className="max-w-2xl md:max-w-7xl  bg-white rounded-3xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left Text */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Donera till Telefonhälsan
          </h2>
          <p className="text-gray-700 mb-2 leading-relaxed text-sm md:text-base">
            Donera pengar till forskning, samhällsengagemang och olika
            intressanta projekt.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Din donation möjliggör en fortsatt brinnande eldsjäl för
            Telefonhälsan och våra initiativ i samhället.
          </p>
        </div>

        {/* Right Donation Box */}
        <div className="md:w-1/2 w-full">
          <h3 className="text-center md:text-left font-medium text-gray-800 mb-4 text-sm md:text-base">
            Välj valfri summa att donera
          </h3>

          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start mb-6">
            {amounts.map((amount) => (
              <button
                key={amount}
                onClick={() => setSelected(amount)}
                className={`w-24 sm:w-28 h-16 sm:h-20 rounded-xl border transition-all duration-300 text-base sm:text-lg font-semibold ${
                  selected === amount
                    ? "bg-gradient-to-br from-[#00AEEF] to-[#5BE0B4] text-white shadow-md border-transparent"
                    : "border-gray-300 bg-white text-gray-700 hover:border-[#00AEEF]"
                }`}
              >
                {amount}kr
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="number"
              placeholder="Lägg till ett annat belopp"
              className="w-full sm:flex-grow border border-gray-300 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
            />
            <button className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#0066CC] hover:bg-[#005BB5] text-white font-medium px-5 py-3 rounded-xl transition-all shadow-md">
              <Heart className="w-4 h-4 text-yellow-400" />
              Donation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
