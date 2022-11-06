import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadCrumbSection from '../sections/BreadCrumbSection'
import { ProductContext } from '../contexts/contexts'

const ProductsView = () => {
  const productContext = useContext(ProductContext)

  window.top.document.title = 'Products / Fixxo'


  return (
    <>
      <MainMenuSection />  
      <BreadCrumbSection currentPage="Products" />
      <ProductGridSection title="Products" items={productContext.all} />
      <FooterSection />
    </>
  )
}


export default ProductsView