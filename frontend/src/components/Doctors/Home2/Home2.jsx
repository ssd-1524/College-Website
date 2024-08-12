import React from 'react'
import Card from '../Appointments/Card/Card'
import Appointments from '../Appointments/Appointments'
import Queries from '../Queries/Queries'
import DocHeader from '../DocHeader/DocHeader'

function Home2() {
  return (
    <>
        <DocHeader/>
        <Appointments/>
        <Queries/>
    </>
  )
}

export default Home2
