import React from "react";
import image37 from "../assets/image 37.png";
import image43 from "../assets/image 43.png";
import image39 from "../assets/image 39.png";
import image40 from "../assets/image 40.png";
import image42 from "../assets/image 42.png";
import image41 from "../assets/image 41.png";
// Example partner logos (replace with your own image imports or URLs)
 

const PartnersSection = () => {
  const partners = [image37, image43, image39, image40, image42, image41];

  return (
    <section className="bg-gradient-to-r from-[#E7F3F7] via-[#F9FFFC] to-[#E8FFF5] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-10">
          Våra partners gör skillnad – varje dag.
        </h2>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="bg-white w-36 sm:w-44 md:w-52 h-20 sm:h-24 flex items-center justify-center rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="max-h-12 sm:max-h-14 object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
