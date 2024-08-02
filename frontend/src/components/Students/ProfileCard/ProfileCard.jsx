import React, { useState, useEffect } from 'react';
import { FaPen, FaSave } from 'react-icons/fa';

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    mobileNo: '9827546828',
    Email: 'abc@gmail.com',
    RollNo: '12102130501015',
    Year: 'Second',
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('profileData'));
    if (storedData) {
      setProfileData(storedData);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSave = () => {
    localStorage.setItem('profileData', JSON.stringify(profileData));
    setIsEditing(false);
    alert('All changes have been saved.');
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const capitalizeLabel = (label) => {
    return label
      .split(/(?=[A-Z])/)
      .join(' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="pt-3 pb-3">
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 22.525c0 .81-.658 1.475-1.467 1.475H1.467C.658 24 0 23.334 0 22.525c0-.81.658-1.475 1.467-1.475h21.066c.81 0 1.467.665 1.467 1.475zM9.515 2.786a2.786 2.786 0 1 1 5.572 0 2.786 2.786 0 0 1-5.572 0zM15.49 6.943c-1.63 0-3.062.918-3.83 2.26-.768-1.342-2.2-2.26-3.83-2.26C4.57 6.943 3 8.536 3 10.448v2.695c0 .293.225.532.515.532h17.97c.29 0 .515-.239.515-.532V10.45c0-1.911-1.57-3.504-3.51-3.504z" />
            </svg>
          </div>
        </div>
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-7" style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif' }}>Drashti Patel</h2>
        <form className="w-full">
          {Object.keys(profileData).map((field, index) => (
            <div key={index} className="w-full mb-4 flex items-center justify-between">
              <label
                htmlFor={field}
                className="block text-start text-lg font-medium text-blue-800 w-1/3"
                style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif' }}
              >
                {capitalizeLabel(field)}:
              </label>
              <div className="relative mt-1 flex items-center w-2/3">
                <input
                  type="text"
                  id={field}
                  name={field}
                  value={profileData[field]}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                  className={`w-full py-1 px-2 text-lg border-b-2 ${isEditing ? 'border-black' : 'border-transparent'} focus:outline-none focus:ring-0`}
                  style={{
                    fontFamily: 'Kaisei HarunoUmi, sans-serif',
                    color: '#000',
                    backgroundColor: 'transparent',
                    borderBottom: '2px solid black',
                  }}
                />
              </div>
            </div>
          ))}
        </form>
        <div className="flex justify-center mt-4">
          {isEditing ? (
            <button
              type="button"
              className="py-2 px-4 bg-green-600 text-white rounded-full flex items-center hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              onClick={handleSave}
            >
              <FaSave className="mr-2" /> Save
            </button>
          ) : (
            <button
              type="button"
              className="py-2 px-4 bg-blue-600 text-white rounded-full flex items-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={handleEdit}
            >
              <FaPen className="mr-2" /> Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
