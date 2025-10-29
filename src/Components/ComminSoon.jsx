import React from "react";
import Group2 from "../assets/Group 2.png"; 
import Background from "../assets/Background.jpg"; 

export default function ComingSoon() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-between max-w-6xl py-16 px-2 gap-20">
    {/* LEFT SIDE - IMAGE PLACEHOLDER */}
 <div className="w-full md:w-1/2 flex justify-center">
  <div className="relative w-[800px] h-[600px] rounded-full shadow-lg flex items-center justify-center overflow-hidden">
    {/* ✅ Background image - centered and more enlarged */}
    <img
      src={Background}
      alt="Background"
      className="absolute inset-0 w-[600px] h-[400px] object-cover rounded-full z-0"
      style={{
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%) scale(1.25)", // more zoom for larger dotted bg
      }}
    />
    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent_70%)] z-20"></div>

    {/* Foreground image */}
    <img
      src={Group2}
      alt="App Icon"
      className="relative w-96 h-96 object-contain drop-shadow-md z-30"
    />
  </div>
</div>



      {/* RIGHT SIDE - TEXT CONTENT */}
      <div className="w-full md:w-1/2 text-[#0B2540]">
        <h2 className="text-2xl font-bold mb-2">Kommer snart</h2>
        <p className="text-gray-600">
          Tanka ner Telefonhälsans app till din mobiltelefon
        </p>

        <p className="text-[#007BFF] font-semibold mt-3">
          Telefonhälsan / <span className="font-normal">100:- per månad</span>
        </p>

        <div className="mt-4">
          <p className="font-semibold text-gray-700 mb-2">Funktioner:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>
                Lås upp våra estetiskt tilltalande bakgrundsbilder till din mobil.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>
                Återkommande personliga visdomsord från grundaren av Telefonhälsan.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Chatta med våra professionella volontärer obegränsat.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Boka mindfulness pass över telefon.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Välj din favorit-hälsoexpert eller psykolog vid konsultation.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Boka samtalen för 150kr per 30 min*</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>
                Individuell personliserad självhjälps text efter varje avslutad konsultation.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Tjäna hälsopoäng att använda i vår hälsobutik.</span>
            </li>
          </ul>
        </div>

        <p className="mt-6 text-gray-600">
          Appen finns att hämta hos Android eller iOS appbibliotek
        </p>
        <p className="mt-2 font-semibold text-[#0B2540]">
          Ladda ner appen <span className="text-[#007BFF]">Telefonhälsan</span> på din mobila enhet inför samtalet du ska ansluta till.
        </p>
      </div>
    </section>
  );
}
