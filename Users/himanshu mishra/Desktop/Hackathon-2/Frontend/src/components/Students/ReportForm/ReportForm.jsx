import React, { useState, useEffect } from 'react';
import { FaPen, FaSave } from 'react-icons/fa';

const ReportForm = () => {
  const [isEditing, setIsEditing] = useState(false); //made to allow editing
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    dateOfBirth: '',
    contactNumber: '',
    bloodGroup: '',
    medications: '',
    allergies: '',
    diseases: '',
  }); //made to set data in the form

  useEffect(() => {
    // Load saved form data from localStorage on initial render
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSave = () => {
    // Save the form data to localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
    setIsEditing(false);
    alert('All changes have been saved.');
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  // Function to capitalize the first letter of each word
  const capitalizeLabel = (label) => {
    return label
      .split(/(?=[A-Z])/)
      .join(' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div id="report">
      <h2 className='ml-6 mt-10 text-4xl font-bold text-teal-600 mb-4 underline' style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif' }}>Your Report</h2>
      <div className='m-10'>
        <div className="w-full mx-auto p-6 bg-white border rounded-3xl shadow-md flex flex-col justify-start items-start">
          <form className='w-full'>
            {Object.keys(formData).map((field, index) => (
              <div key={index} className="w-full mb-4 flex items-center justify-between">
                <label 
                  htmlFor={field} 
                  className="block text-start text-2xl underline font-medium text-blue-800 w-1/3" 
                  style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif'}}
                >
                  {capitalizeLabel(field)}:
                </label>
                <div className="relative mt-1 flex items-center w-2/3">
                  <input
                    type="text"
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                    className={`w-full py-1 px-2 text-2xl border-b-2 ${isEditing ? 'border-black' : 'border-transparent'} focus:outline-none focus:ring-0`}
                    style={{ 
                      fontFamily: 'Kaisei HarunoUmi, sans-serif', 
                      color: '#000', 
                      backgroundColor: 'transparent', 
                      borderBottom: '2px solid black' 
                    }}
                  />
                </div>
              </div>
            ))}
          </form>
          <div className="flex justify-center w-full mt-4">
            {isEditing ? (
              <button
                type="button"
                className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                onClick={handleSave}
              >
                <FaSave className="inline mr-2" /> Save
              </button>
            ) : (
              <button
                type="button"
                className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={handleEdit}
              >
                <FaPen className="inline mr-2" /> Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
