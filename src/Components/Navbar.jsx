import React from 'react'
import logo1 from "../assets/logo1.png"; 

export default function Navbar(){
return (
<header className="relative">
<div className="h-8 bg-gradient-to-r from-navbarTop to-navbarTop2 text-sm text-white flex items-center justify-center">
<div className="max-w-6xl w-full px-6 flex justify-between">
<div>Sjukhård • Forskning • Medicinsk klinik</div>
<div className="flex gap-4 items-center">Telefonhälsan | info@telefonhalsan.se | Sverige, Jönköping</div>
</div>
</div>
<div className="bg-white shadow-sm">
<div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-4">
<div className="flex items-center gap-80">
<div className="w-36 text-lg font-semibold text-deepBlue flex items-center gap-2">
  <img src={logo1} alt="Telefonhälsan logo" className="w-44 h-10 object-contain" />
</div>
<nav className="hidden md:flex gap-6 text-gray-600">
<a href="#" className="hover:text-deepBlue">Hem</a>
<a href="#" className="hover:text-deepBlue">Hälsobutiken</a>
<a href="#" className="hover:text-deepBlue">Blogg</a>
</nav>
</div>
<div className="flex items-center ">
<button className="bg-deepBlue text-white px-4 py-2 rounded-full shadow">Donation</button>
</div>
</div>
</div>
</header>
)
}