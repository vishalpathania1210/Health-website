import React from 'react'
import { FaPhoneAlt, FaComments } from 'react-icons/fa'


export default function ContactCard(){
return (
<div className="bg-gradient-to-br from-tealAccent to-[#52d3b0] rounded-2xl p-6 relative shadow-lg border-4 border-white/10">
<div className="bg-white/10 rounded-xl p-6">
<div className="text-center">
<div className="inline-block p-4 bg-white/10 rounded-full mb-4 border-2 border-white/20">
<FaPhoneAlt size={32} className="text-white/90" />
</div>
<h3 className="text-3xl font-bold text-white">1-28-123-4567</h3>
<p className="mt-4 text-white/90">Telefonnummer</p>
<div className="mt-6 grid gap-3">
<button className="bg-white/10 text-white py-2 rounded-full border border-white/20">Telefonnummer</button>
<button className="bg-white text-deepBlue py-2 rounded-full font-semibold">Chatta med oss</button>
</div>
</div>
</div>
</div>
)
}