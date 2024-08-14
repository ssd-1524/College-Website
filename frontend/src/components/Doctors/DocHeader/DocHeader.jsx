import React, { useEffect, useState, useContext } from 'react';
import logo from '../../Students/Header/logo.jpeg';
import account from '../../../svgs/youracc.svg';
import DocProfileCard from '../DocProfileCard/DocProfileCard';
import queries from '../../../svgs/queries(header).svg'
import shift from '../../../svgs/yourshift.svg'
import DocShift from '../DocShift/DocShift';
import { Context } from '../../../Context/Context';

export default function DocHeader({
  scrollToAppointment,
  scrollToAdvice,
  scrollToShop,
  scrollToReport
}) {
  const [activeSection, setActiveSection] = useState('');
  const [profileCard, setProfileCard] = useState(false);
  const [shiftCard, setShiftCard] = useState(false);
  const {shifts, setShifts} = useContext(Context);

  const toggleCard = () => {
    setProfileCard((prev) => !prev);
  };

  const toggleShift = () => {
    setShifts(true);
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
      <nav className="bg-white border-gray-200 px-4 lg:px-6">
        <div className="flex flex-wrap justify-between items-center mx-auto w-full">
          <div className="flex items-center">
            <img src={logo} className="mr-2 h-12" alt="Logo" />
          </div>
          <div className="flex justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex items-center flex-col mt-4 font-medium lg:flex-row lg:space-x-16 lg:mt-0">
              <li>
                <button
                  className='border-none'
                >
                  <img src={queries} className='size-16'/>
                </button>
              </li>
              <li>
                <button
                  className='border-none'
                  onClick={toggleShift}
                >
                  <img src={shift} className='size-24'/>
                </button>
              </li>
              <li className="relative">
                <img onClick={toggleCard} src={account} className="h-20 w-20 cursor-pointer" alt="Account" />
                {profileCard && (
                  <div id="profile-overlay" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                    <DocProfileCard />
                  </div>
                )}
              </li>
            </ul>
          </div>
          {shifts && (
            <div id="profile-overlay" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
              <DocShift />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
