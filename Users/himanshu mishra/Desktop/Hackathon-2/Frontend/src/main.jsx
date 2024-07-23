import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Choice from './components/Choice/Choice.jsx'
import DoctorSISU from './components/DoctorSISU/DoctorSISU.jsx'
import StudentSISU from './components/StudentSISU/StudentSISU.jsx'
import Layout from './Layout.jsx'
import Home from './components/Students/Home/Home.jsx'
import DoctorAdvice from './components/Students/DoctorAdvice/DoctorAdvice.jsx'
import ReportForm from './components/Students/ReportForm/ReportForm.jsx'
import Shop from './components/Students/Shop/Shop.jsx'
import Doc1 from './components/Students/DoctorAppointment/DABody/Doc1/Doc1.jsx'
import DoctorAppointment from './components/Students/DoctorAppointment/DoctorAppointment.jsx'
import Doc2 from './components/Students/DoctorAppointment/DABody/Doc2/Doc2.jsx'
import Doc3 from './components/Students/DoctorAppointment/DABody/Doc3/Doc3.jsx'
import Doc4 from './components/Students/DoctorAppointment/DABody/Doc4/Doc4.jsx'
import Doc5 from './components/Students/DoctorAppointment/DABody/Doc5/Doc5.jsx'
import Doc6 from './components/Students/DoctorAppointment/DABody/Doc6/Doc6.jsx'
import ContextProvider from './Context/ContextProvider.jsx'
import Cart from './components/Students/Shop/Cart/Cart.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children: [
      {
        path: "",
        element: <Choice/>,
      },
      {
        path: 'doctor',
        element: <DoctorSISU/>,
      },
      {
        path: 'student',
        element: <StudentSISU/>,
      },
    ]
  },
  {
    path: '/app',
    element: <Home />,
    children: [
      {
        path: 'pcp',
        element: <Doc1 />,
      },
      {
        path: 'dentist',
        element: <Doc2 />,
      },
      {
        path: 'psychologist',
        element: <Doc3 />,
      },
      {
        path: 'dermatologist',
        element: <Doc4 />,
      },
      {
        path: 'allergist',
        element: <Doc5 />,
      },
      {
        path: 'physical-therapist',
        element: <Doc6 />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>,
)
