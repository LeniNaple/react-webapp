import React, { useContext } from 'react'
import ProductGridSection from './ProductGridSection'
import { GridProductsContext } from '../contexts/contexts' 

const FlashSaleSectionRight = ({btnTitle}) => {
    const gridProducts = useContext(GridProductsContext)

  return (
    <section className="flash-sale-right container">
        <div className="two-for-right">
            <ProductGridSection items={gridProducts} />
        </div>
        <div className="two-for-left"> 
            <h1>2 FOR USD $29</h1>
            <a href="#" className="btn-theme-white">
                <div className="line-button-l-1"></div>
                <div className="line-button-l-2"></div>
                <p>{btnTitle}</p>
                <div className="line-button-r-1"></div>
                <div className="line-button-r-2"></div>
            </a>
        </div>
    </section>
  )
}

export default FlashSaleSectionRight