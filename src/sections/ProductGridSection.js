import React from 'react'
import ProductCard from '../components/ProductCard'


const ProductGridSection = ({title, products}) => {


  return (

    <section className='product-grid'>
        <p>{title}</p>
        <div className='container'>
            <div className='grid'>
                
                {
                  products.map(product => <ProductCard key={product.id} product={product} />)
                }
                
            </div> 
        </div> 
    </section>
    
  )
}

export default ProductGridSection