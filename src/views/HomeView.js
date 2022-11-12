import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import { GridProductsContext, FeaturedProductsContext } from '../contexts/contexts'
import ContactSection from '../sections/ContactSection'
import BannerSection from '../sections/BannerSection'
import FlashSaleSection from '../sections/FlashSaleSection'

const HomeView = () => {
  const gridProducts = useContext(GridProductsContext)
  const featuredProducts = useContext(FeaturedProductsContext)

  window.top.document.title = 'Home / Fixxo'

  return (
    <>
      <div className='homeView'>
        <MainMenuSection /> 
      </div> 
      <ProductGridSection title="Featured Products" items={featuredProducts} />
      <BannerSection />
      <FlashSaleSection items={gridProducts} />
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default HomeView