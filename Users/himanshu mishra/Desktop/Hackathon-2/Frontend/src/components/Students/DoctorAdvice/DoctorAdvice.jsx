import React from 'react';

export default function DoctorAdvice() {
  return (
    <div id="advice" className="mx-5 mt-8 p-4 bg-white rounded-lg">
      <h2 className="text-4xl font-bold text-teal-600 mb-10 underline" style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif' }}>Dr. Advice</h2>
      <div className="p-8 bg-white rounded-3xl border shadow-2xl">
        <h3 className="text-center text-3xl font-semibold text-gray-700 mb-16">
          Ask for Doctor's Advice on your symptoms
        </h3>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex flex-col lg:w-2/3">
            <label className="block text-teal-800 mb-5 text-xl">Symptoms:</label>
            <textarea
              className="w-full border p-2 rounded-2xl border-teal-600"
              rows="8"
            />
          </div>
          <div className="flex flex-col lg:w-1/3">
            <label className="block text-teal-800 mb-5 text-xl">Select Specialist:</label>
            <select className="w-full border rounded-2xl border-teal-600 p-2">
              <option>Primary Care Physician</option>
              <option>Dentist</option>
              <option>Psychologist</option>
              <option>Dermatologist</option>
              <option>Allergist</option>
              <option>Physical Therapist</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-white border border-teal-600 text-teal-600 font-semibold py-2 px-8 rounded-full hover:bg-teal-600 hover:text-white transition-colors duration-200 m-5"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
