import React, { useState } from 'react';

const ReportForm = () => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    dateOfBirth: '',
    contactNumber: '',
    bloodGroup: '',
    medications: '',
    allergies: '',
    diseases: '',
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = (field) => {
    // Handle save logic here
    setFocusedField(null);
    alert(`Saved ${field}: ${formData[field]}`);
  };

  // Function to capitalize the first letter of each word
  const capitalizeLabel = (label) => {
    return label
      .split(/(?=[A-Z])/)
      .join(' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <>
    <h2 className='ml-6 mt-10 text-4xl font-bold text-teal-600 mb-4 underline' style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif' }}>Your Report</h2>
    <div className='m-10'>
    <div className="w-full mx-auto p-14 bg-white border rounded-3xl shadow-md flex flex-col justify-start items-start">
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
                readOnly={!editMode}
                onFocus={() => setFocusedField(field)}
                className={`w-full py-1 px-2 border-b-2 ${editMode ? 'border-gray-300' : 'border-transparent'} focus:outline-none focus:ring-0 focus:border-blue-500`}
                style={{ fontFamily: 'Arial, sans-serif', color: '#0047AB' }}
              />
              {editMode && focusedField === field && (
                <button
                  type="button"
                  className="ml-2 py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onMouseDown={() => handleSave(field)}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        ))}
      </form>
    </div>
    </div>
    </>
  );
};

export default ReportForm;
