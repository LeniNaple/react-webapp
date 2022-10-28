import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import TempImg from '../assets/images/Card-Image-2.png';

const ProductGridSection = ({title}) => {

  const [products, setProducts] = useState([
      { id: 1, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", oldPrice: "", rating: 5, img: TempImg },
      { id: 2, productName: "Modern Black Blouse", category: "Fashion", price: "$30.00", oldPrice: "$35.00", rating: 5, img: "https://th.bing.com/th/id/R.3e3063b2f301275ec06d53eb7a96bfa8?rik=8NOq4800bFHxEQ&pid=ImgRaw&r=0"},
      { id: 3, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", oldPrice: "", rating: 5, img: "https://th.bing.com/th/id/R.fed08c43d1cee1a1fc7b4e79972c1f51?rik=Ti8MOxrj4u92pw&riu=http%3a%2f%2fwww.informationng.com%2fwp-content%2fuploads%2f2013%2f02%2ft-shirt.png&ehk=oMRp3nX%2f1L%2fJt9jGBaXOwU3Chw5bhsvxj9LTL1Pq1vk%3d&risl=&pid=ImgRaw&r=0"},
      { id: 4, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", oldPrice: "", rating: 5, img: "https://th.bing.com/th/id/R.7f58c80bd74b3d1615c47dfb189292bb?rik=GWXR5jXEzifrsQ&pid=ImgRaw&r=0"}
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