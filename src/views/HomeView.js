import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductContext } from '../contexts/contexts'
import ContactSection from '../sections/ContactSection'
import BannerSection from '../sections/BannerSection'
import FlashSaleSection from '../sections/FlashSaleSection'

const HomeView = () => {
  const productContext = useContext(ProductContext)

  window.top.document.title = 'Home / Fixxo'

  return (
    <>
      <div className='homeView'>
        <MainMenuSection /> 
      </div> 
      <ProductGridSection title="Featured Products" items={productContext.featuredProducts} />
      <BannerSection />
      <FlashSaleSection />
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default HomeView