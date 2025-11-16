import React from 'react'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const LayoutOne = () => {
  return (
    <>
    <Navbar/>
    <Outlet />
    <Footer/>
  </>
  )
}

export default LayoutOne