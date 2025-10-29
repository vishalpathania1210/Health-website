import React from "react";
import Rectangle107 from "../assets/Rectangle 107.png";

const AboutTelefonhalsan = () => {
  return (
    <section className="  bg-[#40DEAE] pb-96 hero-mask  px-6 pt-96">
         {/* <div className=" relative bg-[#40DEAE] hero-mask "></div> */}
      <div className="max-w-7xl  flex flex-col md:flex-row items-center gap-10">
        <img
          src={Rectangle107}
          alt="Doctor"
          className="w-[360px] h-[360px] object-cover rounded-3xl shadow-lg border-4 border-white"
        />
        <div className="text-black max-w-2xl">
          <h2 className="text-3xl font-semibold mb-4">Om Telefonhälsan</h2>
          <p className="mb-4 leading-relaxed">
            <a href="#" className=" text-black">
              Jag som har grundat Telefonhälsan har bakgrund inom sjukvårdspolitik och behandlingsvetenskap samt filosofi. 
              Telefonhälsan grundades våren år 2025 och etablerades senare under höstperioden.
            </a>
          </p>
          <p className="mb-4 leading-relaxed">
            Du som söker vård är i centrum och målet är att du ska få de redskap du behöver för att ersätta 
            missbruket mobilberoende med det verkliga livet efter dina behov och förutsättningar.
          </p>
          <p className="mb-4 leading-relaxed">
            Eftersom mobilberoendet och dess konsekvenser är vårt primära område så gör det att vi kan 
            garantera våra fokus och ständigt utveckla våra metoder för att jobba för att förbättra den allmänna folkhälsan.
          </p>
          <p className="italic">
            Visionen är ett samhälle som börjar ta ansvar för tekniken som har skapats och att människan sätts i första rum.
          </p>
          <p className="mt-4 font-semibold text-black">– William.J</p>
        </div>
      </div>
    </section>
  );
};

export default AboutTelefonhalsan;
