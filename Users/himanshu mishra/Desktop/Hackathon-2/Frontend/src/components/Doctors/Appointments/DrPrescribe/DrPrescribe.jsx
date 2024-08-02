import React from 'react'

function DrPrescribe() {
  return (
    <div className="w-1/3 mx-auto p-6 bg-white border rounded-3xl shadow-md flex flex-col justify-start items-center">
      <div className='w-full mb-3'>
        <label className="block text-teal-800 mb-5 text-xl text-start">Precautions:</label>
        <textarea
            className="w-full border p-2 rounded-2xl border-teal-600"
            rows="4"
        />
      </div>
      <div className='w-full'>
        <label className="block text-teal-800 mb-5 text-xl text-start">Medicines:</label>
        <textarea
            className="w-full border p-2 rounded-2xl border-teal-600"
            rows="4"
        />
      </div>
      <div>
        <button className="bg-transparent text-teal-700 border border-teal-700 font-semibold rounded-full px-4 py-2 hover:bg-teal-700 hover:text-white" style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif'}}>Prescribe</button>
      </div>
    </div>
  )
}

export default DrPrescribe
