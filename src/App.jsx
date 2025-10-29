// src/App.jsx
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ContactCard from "./Components/ContactCard";
import BookingForm from "./Components/BookingForm";
import Footer from "./Components/Footer";
import ComingSoon from "./Components/ComminSoon";
import Expertise from "./Components/Expertise"; // ✅ Added import
import IdentifyProblem from "./Components/IdentifyProblem";
import GoalsAfterTreatment from "./Components/GoalsAfterTreatment";
import MobileAddictionDefinition from "./Components/MobileAddictionDefinition";
 
import DonationSection from "./Components/DonationSection";
import AboutTelefonhalsan from "./Components/AboutTelefonhalsan";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 relative">
        <Hero />

        {/* Booking + Contact Section */}
        <section className="max-w-6xl mx-auto px-6 -mt-72 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <ContactCard />
            </div>
            <div className="lg:col-span-2">
              <BookingForm />
            </div>
          </div>
        </section>

        {/* ✅ Coming Soon Section (added below booking form, above expertise) */}
        <section className=" relative z-20">
          <ComingSoon />
        </section>

        {/* ✅ Expertise Section (added above footer) */}
        <section className=" relative z-20">
          <Expertise />
        </section>
        <section className=" relative z-20">
  <IdentifyProblem />
</section>
<section className="  relative z-20">
  <GoalsAfterTreatment />
</section>

<section className="relative z-50">
  <MobileAddictionDefinition />
</section>

<section className=" pb-48   relative ">
  <AboutTelefonhalsan />
</section>

<section className=" relative -mt-[500px] z-50">
  <DonationSection />
</section>
      </main>
      <Footer />
    </div>
  );
}
  