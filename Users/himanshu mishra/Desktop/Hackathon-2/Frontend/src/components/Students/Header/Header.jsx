import React, { useEffect, useState } from 'react';
import logo from './logo.jpeg'; // Ensure the logo path is correct
import account from '../../../svgs/youracc.svg';
import ProfileCard from '../ProfileCard/ProfileCard';

export default function Header({
  scrollToAppointment,
  scrollToAdvice,
  scrollToShop,
  scrollToReport
}) {
  const [activeSection, setActiveSection] = useState('');
  const [profileCard, setProfileCard] = useState(false);

  const toggleCard = () => {
    setProfileCard((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (event.target.id === 'profile-overlay') {
      setProfileCard(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['doctor-appointment', 'doctor-advice', 'shop', 'report-form'];
      let currentSection = '';

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (profileCard) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [profileCard]);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto w-full">
          <div className="flex items-center">
            <img src={logo} className="mr-2 h-12" alt="Logo" />
          </div>
          <div className="flex justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex items-center flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <button
                  onClick={scrollToAppointment}
                  className={`advice font-semibold block py-2 px-4 rounded-full duration-200 ${
                    activeSection === 'doctor-appointment' ? 'bg-teal-700' : 'bg-teal-500'
                  } text-white hover:bg-teal-700 cursor-pointer`}
                >
                  Dr. Appointment
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToAdvice}
                  className={`advice font-semibold block py-2 px-4 rounded-full duration-200 ${
                    activeSection === 'doctor-advice' ? 'bg-teal-700' : 'bg-teal-500'
                  } text-white hover:bg-teal-700 cursor-pointer`}
                >
                  Dr. Advice
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToShop}
                  className={`advice font-semibold block py-2 px-4 rounded-full duration-200 ${
                    activeSection === 'shop' ? 'bg-teal-700' : 'bg-teal-500'
                  } text-white hover:bg-teal-700 cursor-pointer`}
                >
                  Shop Medicine
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToReport}
                  className={`advice font-semibold block py-2 px-4 rounded-full duration-200 ${
                    activeSection === 'report-form' ? 'bg-teal-700' : 'bg-teal-500'
                  } text-white hover:bg-teal-700 cursor-pointer`}
                >
                  Your Report
                </button>
              </li>
              <li className="relative">
                <img onClick={toggleCard} src={account} className="h-16 w-16 cursor-pointer" alt="Account" />
                {profileCard && (
                  <div id="profile-overlay" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                    <ProfileCard />
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
