import React from 'react'
import { NavLink } from 'react-router-dom'

function DAHeader() {
  return (
    <header className='w-full flex h-10 mt-5'>
      <nav className='w-full flex h-10'>  
        <ul className='w-full flex h-10 justify-around'>
          <li>
            <NavLink to="/app/pcp" className={({ isActive }) => isActive ? "underline" : ""}>
              Primary Care Physician
            </NavLink>
          </li>
          <li>
            <NavLink to="/app/dentist" className={({ isActive }) => isActive ? "underline" : ""}>
              Dentist
            </NavLink>
          </li>
          <li>
            <NavLink to="/app/psychologist" className={({ isActive }) => isActive ? "underline" : ""}>
              Psychologist
            </NavLink>
          </li>
          <li>
            <NavLink to="/app/dermatologist" className={({ isActive }) => isActive ? "underline" : ""}>
              Dermatologist
            </NavLink>
          </li>
          <li>
            <NavLink to="/app/allergist" className={({ isActive }) => isActive ? "underline" : ""}>
              Allergist
            </NavLink>
          </li>
          <li>
            <NavLink to="/app/physical-therapist" className={({ isActive }) => isActive ? "underline" : ""}>
              Physical Therapist
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default DAHeader
