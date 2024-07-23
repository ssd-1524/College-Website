import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.jpeg'; // Ensure the logo path is correct
import account from '../../../svgs/youracc.svg'

//NEW LEARNING(this question is asked in interviews): rather than using a tag we use link tag because in a tag the whole page is reloaded whereas the link tag prevents the reloading of the whole page

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto w-full">
          <div className="flex items-center">
            <img src={logo} className="mr-2 h-12" alt="Logo" />
          </div>
          <div
            className="flex justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex items-center flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/app/appointment"
                  className={({ isActive }) =>
                    `font-semibold block py-2 px-4 rounded-full duration-200 ${
                      isActive ? "bg-teal-700 text-white" : "bg-teal-500 text-white"
                    } hover:bg-teal-700`
                  }
                >
                  Dr. Appointment
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/app/advice"
                  className={({ isActive }) =>
                    `font-semibold block py-2 px-4 rounded-full duration-200 ${
                      isActive ? "bg-teal-700 text-white" : "bg-teal-500 text-white"
                    } hover:bg-teal-700`
                  }
                >
                  Dr. Advice
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/app/shop"
                  className={({ isActive }) =>
                    `font-semibold block py-2 px-4 rounded-full duration-200 ${
                      isActive ? "bg-teal-700 text-white" : "bg-teal-500 text-white"
                    } hover:bg-teal-700`
                  }
                >
                  Shop Medicine
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/app/report"
                  className={({ isActive }) =>
                    `font-semibold block py-2 px-4 rounded-full duration-200 ${
                      isActive ? "bg-teal-700 text-white" : "bg-teal-500 text-white"
                    } hover:bg-teal-700`
                  }
                >
                  Your Report
                </NavLink>
              </li>
              <li className="flex items-center space-x-2">
              <img src={account} className="h-16 w-16 cursor-pointer" alt="Account" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
