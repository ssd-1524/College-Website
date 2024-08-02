import React from 'react';

function PillsSuggestion() {
  return (
    <div className='w-full h-full bg-white p-4 overflow-y-auto'>
      <input className='w-full p-2 mb-4 border rounded' placeholder='Search for pills...' />
      <div className='flex flex-col gap-4'>
        {['Paracetamol', 'Ibuprofen', 'Aspirin', 'Amoxicillin', 'Metformin'].map((pill, index) => (
          <div key={index} className='flex items-center justify-between border p-2 rounded'>
            <p>{index + 1}</p>
            <div>{pill}</div>
            <div className='flex items-center'>
              <button className='border px-2'>-</button>
              <p className='mx-2'>0</p>
              <button className='border px-2'>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PillsSuggestion;
