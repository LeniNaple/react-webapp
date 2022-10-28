import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

const ProductGridSection = ({title}) => {

  const [products, setProducts] = useState([
      { id: 1, productName: "Modern Black Blouse", category: "Fashion", price: "30.00", oldPrice: "35.00", rating: 5, img: "Card-Image-2"},
      { id: 2, productName: "Modern Black Blouse", category: "Fashion", price: "30.00", oldPrice: "35.00", rating: 5, img: "Card-Image-2"},
      { id: 3, productName: "Modern Black Blouse", category: "Fashion", price: "30.00", oldPrice: "35.00", rating: 5, img: "Card-Image-2"},
      { id: 4, productName: "Modern Black Blouse", category: "Fashion", price: "30.00", oldPrice: "35.00", rating: 5, img: "Card-Image-2"}
  ])

  
  
    



  return (

    <section className='product-grid'>
        <p>{title}</p>
        <div className='container'>
            <div className='grid'>
                
                {
                  products.map(product => <ProductCard item={product} />)
                }

                
            </div> 
        </div> 
    </section>
    
  )
}

export default ProductGridSection