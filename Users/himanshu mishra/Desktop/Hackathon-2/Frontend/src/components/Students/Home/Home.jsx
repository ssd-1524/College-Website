import React from 'react';
import Header from '../Header/Header'
import DoctorAppointment from '../DoctorAppointment/DoctorAppointment';
import DoctorAdvice from '../DoctorAdvice/DoctorAdvice';
import Shop from '../Shop/Shop';
import ReportForm from '../ReportForm/ReportForm';

function Home() {
  return (
    <>
      <Header/>
      <DoctorAppointment/>
      <DoctorAdvice/>
      <Shop/>
      <ReportForm/>
    </>
  );
}

export default Home;
