import React, { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    department: "",
    doctor: "",
    date: "",
    name: "",
    phone: "",
    email: "",
    duration: "30",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // dummy functionality
    alert(
      `Bokningsförfrågan skickad:\nNamn: ${form.name}\nE-post: ${form.email}\nDatum: ${form.date}`
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-soft-3xl text-xl p-6 sm:p-8 md:p-10 w-full max-w-3xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center md:text-left">
        Boka en tid idag!
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Department */}
        <select
          name="department"
          value={form.department}
          onChange={handleChange}
          className="p-3 border rounded w-full"
        >
          <option value="">Välj avdelning</option>
          <option>Allmän</option>
          <option>Psykologi</option>
        </select>

        {/* Doctor */}
        <select
          name="doctor"
          value={form.doctor}
          onChange={handleChange}
          className="p-3 border rounded w-full"
        >
          <option value="">Välj läkare</option>
          <option>Dr. Svensson</option>
        </select>

        {/* Date */}
        <input
          name="date"
          value={form.date}
          onChange={handleChange}
          placeholder="åååå-mm-dd"
          className="p-3 border rounded w-full"
        />

        {/* Name */}
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Fullständigt namn"
          className="p-3 border rounded w-full"
        />

        {/* Phone */}
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Telefon"
          className="p-3 border rounded w-full"
        />

        {/* Email */}
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="E-post"
          className="p-3 border rounded w-full"
        />

        {/* Duration + Button */}
        <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="duration"
              value="30"
              checked={form.duration === "30"}
              onChange={handleChange}
            />{" "}
            150 sek - för 30min
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="duration"
              value="60"
              checked={form.duration === "60"}
              onChange={handleChange}
            />{" "}
            300 sek - för 60min
          </label>

          <button
            type="submit"
            className="sm:ml-auto bg-deepBlue text-white px-6 py-2 rounded-full w-full sm:w-auto"
          >
            Boka tid
          </button>
        </div>
      </form>
    </div>
  );
}
