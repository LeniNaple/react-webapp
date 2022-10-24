import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'

const HomeView = () => {
  return (
    <>
      <MainMenuSection />      
      <h1 className='d-flex justify-content-center'>Home</h1>
      <FooterSection />
    </>
  )
}

export default HomeView