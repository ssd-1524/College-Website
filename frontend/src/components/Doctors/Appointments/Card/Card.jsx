import React, {useState} from 'react'
import ViewProfile from '../ViewProfile/ViewProfile';
import DrPrescribe from '../DrPrescribe/DrPrescribe';

function Card({name, date, time, symptoms}) {
  const [profileView, setProfileView] = useState(false);
  const [prescribe, setPrescribe] = useState(false);

  const toggleProfile = () => {
    setProfileView((prev) => !prev);
  };

  const togglePrescribe = () => {
    setPrescribe((prev) => !prev);
  };


  return (
    <div className="w-64 min-w-[16rem] rounded-3xl overflow-hidden shadow-2xl p-4 bg-white m-4">
      <div className="mb-4">
        <p className="text-lg font-bold" style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif'}}>Name-: {name}</p>
        <p className="text-lg" style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif'}}>Date-: {date}</p>
        <p className="text-lg" style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif'}}>Time-: {time}</p>
        <p className="text-lg" style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif'}}>Symptoms-: {symptoms}</p>
      </div>
      <div className="flex flex-col gap-3 justify-between">
        <button onClick={toggleProfile} className="bg-transparent text-teal-700 border border-teal-700 font-semibold rounded-full px-4 py-2 hover:bg-teal-700 hover:text-white" style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif'}}>
          View Profile
          {profileView && (
            <div id="profile-overlay" className="mt-16 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
              <ViewProfile />
            </div>
          )}
        </button>
        <button onClick={togglePrescribe} className="bg-transparent text-teal-700 border border-teal-700 font-semibold rounded-full px-4 py-2 hover:bg-teal-700 hover:text-white" style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif'}}>
          Prescribe
          {prescribe && (
            <div id="profile-overlay" className="mt-16 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
              <DrPrescribe />
            </div>
          )}
        </button>
      </div>
    </div>
  )
}

export default Card
