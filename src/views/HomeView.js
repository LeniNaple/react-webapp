import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'

const HomeView = () => {
  return (
    <>
      <MainMenuSection />      
      <h1 className='d-flex justify-content-center'>Home</h1>
      <ProductGridSection title="Featured Products" />
      <FooterSection />
    </>
  )
}

export default HomeView