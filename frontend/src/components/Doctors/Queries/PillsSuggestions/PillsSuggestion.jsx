import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../../../Context/Context';

function PillsSuggestion({ medicines, setMedicines }) {
  const { suggestedPills, setSuggestedPills } = useContext(Context);
  const [medicineName, setMedicineName] = useState('');
  const [medicineQuantity, setMedicineQuantity] = useState('');
  const [currentTiming, setCurrentTiming] = useState({ beforeAfter: '', meal: '' });
  const [timings, setTimings] = useState([]);

  const handleAddTiming = () => {
    if (currentTiming.beforeAfter && currentTiming.meal) {
      setTimings([...timings, currentTiming]);
      setCurrentTiming({ beforeAfter: '', meal: '' });
    }
  };

  const handleRemoveTiming = (index) => {
    setTimings(timings.filter((_, i) => i !== index));
  };

  const handleAddMedicine = () => {
    if (medicineName && medicineQuantity && timings.length > 0) {
      const newMedicine = { medicineName, medicineQuantity, timings };
      setMedicines([...medicines, newMedicine]);
      setMedicineName('');
      setMedicineQuantity('');
      setTimings([]);
    }
  };

  const handleRemoveMedicine = (index) => {
    const updatedMedicines = medicines.filter((_, i) => i !== index);
    setMedicines(updatedMedicines);
  };

  useEffect(() => {
    setSuggestedPills(medicines);
  }, [medicines, setSuggestedPills]);

  return (
    <div className='w-full h-full bg-white p-4 overflow-y-auto'>
      <div className='grid grid-cols-3 gap-4 align-middle'>
        <div className='w-full'>
          <input 
            placeholder='Type the name of the medicine' 
            className='w-full p-3'
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
          />
        </div>
        <div className='w-full'>
          <select 
            className='w-1/2 p-3 border'
            value={medicineQuantity}
            onChange={(e) => setMedicineQuantity(e.target.value)}
          >
            <option value='' disabled>Select Quantity</option>
            <option>Half Tablet</option>
            <option>One Tablet</option>
          </select>
          <select 
            className='w-1/2 p-3 border'
            value={currentTiming.beforeAfter}
            onChange={(e) => setCurrentTiming({ ...currentTiming, beforeAfter: e.target.value })}
          >
            <option value='' disabled>Select Before/After</option>
            <option>Before</option>
            <option>After</option>
          </select>
        </div>
        <div className='w-full flex gap-3 items-center'>
          <select 
            className='w-2/3 p-3 mr-1 border'
            value={currentTiming.meal}
            onChange={(e) => setCurrentTiming({ ...currentTiming, meal: e.target.value })}
          >
            <option value='' disabled>Select Meal</option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Snacks</option>
            <option>Dinner</option>
          </select>
          <button 
            className='w-1/4 p-3 bg-teal-400 text-white'
            onClick={handleAddTiming}
          >
            Add Timing
          </button>
        </div>
      </div>

      <div className='mt-2 flex flex-wrap gap-2'>
        {timings.map((timing, index) => (
          <div key={index} className='bg-blue-200 p-2 rounded-lg flex items-center'>
            <p className='mr-2'>{timing.beforeAfter} {timing.meal}</p>
            <button onClick={() => handleRemoveTiming(index)} className='text-red-500'>
              &times;
            </button>
          </div>
        ))}
      </div>

      <div className='mt-4'>
          <button 
            className='w-full p-3 bg-teal-400 text-white'
            onClick={handleAddMedicine}
          >
            Add Medicine
          </button>
      </div>

      <div className='mt-4 flex gap-5'>
        {medicines.map((med, index) => (
          <div key={index} className='bg-slate-200 p-6 rounded-lg shadow w-1/3'>
            <h1 className='text-3xl flex' style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif'}}><b className='underline'>Medicine Name: </b>
               {med.medicineName}
            </h1>
            <p className='text-xl' style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif'}}><b className='underline font-semibold'>Tablet Quantity: </b>{med.medicineQuantity}</p>
            <b className='text-xl underline font-semibold' style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif' }}>Medicine timing: </b>
            {med.timings.map((timing, timingIndex) => (
              <p key={timingIndex} className='text-xl' style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif' }}>
                {timing.beforeAfter} {timing.meal}
              </p>
            ))}
            <div className='flex gap-3 mt-5'>
              <button
                style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif'}}
                className='p-2 w-32 bg-red-500 text-white rounded'
                onClick={() => handleRemoveMedicine(index)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PillsSuggestion;
