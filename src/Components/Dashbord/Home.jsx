import React from 'react'
import Navbar from './Navbar'
import Offertab from './Offer-tab'
import Premiumsec from './Premium-sec'
import Newarrival from '../Listing/New-arrival'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Offertab/>
      <Premiumsec/>
      <Newarrival/>
      <Footer/>
    </>
  )
}

export default Home
