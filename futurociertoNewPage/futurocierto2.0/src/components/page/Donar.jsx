import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

const Donar = () => {
  return (
    <>

<Header/>
      <Outlet/>
      <h1>Donar</h1>
      <Footer/>
      
    </>
  )
}

export default Donar
