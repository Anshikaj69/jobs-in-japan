import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Companies from '../components/Companies'
import HowDo from '../components/HowDo'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Companies></Companies>
        <HowDo></HowDo>
        <Footer></Footer>
    </div>
  )
}

export default Homepage