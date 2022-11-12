import React, { useContext } from 'react'
import ProductGridSection from './ProductGridSection'
import { ProductContext } from '../contexts/contexts' 

const FlashSaleSection = () => {
    const productContext = useContext(ProductContext)

  return (
    <section className="__flash-sale-left container">
        <div className="__two-for-left"> 
            <h1>2 FOR USD $29</h1>
            <a href="#" className="btn-theme-white">
                <div className="line-button-l-1"></div>
                <div className="line-button-l-2"></div>
                <p>SHOP NOW</p>
                <div className="line-button-r-1"></div>
                <div className="line-button-r-2"></div>
            </a>
        </div>
        <div className="__two-for-right">
            <div className="__two-for-right-grid">
                
                <ProductGridSection items={productContext.gridProducts} />
            </div>
        </div>

    </section>
  )
}

export default FlashSaleSection