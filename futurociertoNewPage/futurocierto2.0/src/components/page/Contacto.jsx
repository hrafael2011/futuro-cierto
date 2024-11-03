import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

const Contacto = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <h1>Contacto</h1>
      <Footer/>
    </>
  )
}

export default Contacto
