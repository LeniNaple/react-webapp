import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductGridSection = () => {
  return (

    <section className='product-grid'>
        <p>Featured Product</p>
        <div className='container'>
            <div className='grid'>
                <ProductCard />
            </div> 
        </div> 
    </section>
    
  )
}

export default ProductGridSection