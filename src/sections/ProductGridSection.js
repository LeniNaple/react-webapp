import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductGridSection = ({title}) => {
  return (

    <section className='product-grid'>
        <p>{title}</p>
        <div className='container'>
            <div className='grid'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div> 
        </div> 
    </section>
    
  )
}

export default ProductGridSection