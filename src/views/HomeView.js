import React, {useState} from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import TempImg from '../assets/images/Card-Image-2.png';

const HomeView = () => {

  const [FeaturedProducts, setFeaturedProducts] = useState([
    { id: 1, productName: "Modern Black Blouse 2", category: "Fashion", price: "$35.00", oldPrice: "", rating: 5, img: TempImg },
    { id: 2, productName: "Modern Black Blouse", category: "Fashion", price: "$30.00", oldPrice: "$35.00", rating: 5, img: "https://th.bing.com/th/id/R.3e3063b2f301275ec06d53eb7a96bfa8?rik=8NOq4800bFHxEQ&pid=ImgRaw&r=0"},
    { id: 3, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", oldPrice: "", rating: 5, img: "https://th.bing.com/th/id/R.fed08c43d1cee1a1fc7b4e79972c1f51?rik=Ti8MOxrj4u92pw&riu=http%3a%2f%2fwww.informationng.com%2fwp-content%2fuploads%2f2013%2f02%2ft-shirt.png&ehk=oMRp3nX%2f1L%2fJt9jGBaXOwU3Chw5bhsvxj9LTL1Pq1vk%3d&risl=&pid=ImgRaw&r=0"},
    { id: 4, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", oldPrice: "", rating: 5, img: "https://th.bing.com/th/id/R.7f58c80bd74b3d1615c47dfb189292bb?rik=GWXR5jXEzifrsQ&pid=ImgRaw&r=0"},
    { id: 5, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", oldPrice: "", rating: 5, img: TempImg },
    { id: 6, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", oldPrice: "", rating: 5, img: TempImg },
    { id: 7, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", oldPrice: "", rating: 5, img: TempImg },
    { id: 8, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", oldPrice: "", rating: 5, img: TempImg }
  ])
  const [TopProducts, setTopProducts] = useState([
    { id: 1, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", oldPrice: "", rating: 5, img: TempImg },
    { id: 2, productName: "Modern Black Blouse", category: "Fashion", price: "$30.00", oldPrice: "$35.00", rating: 5, img: "https://th.bing.com/th/id/R.3e3063b2f301275ec06d53eb7a96bfa8?rik=8NOq4800bFHxEQ&pid=ImgRaw&r=0"},
    { id: 3, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", oldPrice: "", rating: 5, img: "https://th.bing.com/th/id/R.fed08c43d1cee1a1fc7b4e79972c1f51?rik=Ti8MOxrj4u92pw&riu=http%3a%2f%2fwww.informationng.com%2fwp-content%2fuploads%2f2013%2f02%2ft-shirt.png&ehk=oMRp3nX%2f1L%2fJt9jGBaXOwU3Chw5bhsvxj9LTL1Pq1vk%3d&risl=&pid=ImgRaw&r=0"},
  ])



  return (
    <>
      <MainMenuSection />      
      <h1 className='d-flex justify-content-center'>Home</h1>
      <ProductGridSection title="Featured Products" products={FeaturedProducts} />
      {/* <ProductGridSection title="Top Products" products={TopProducts} /> */}
      <FooterSection />
    </>
  )
}

export default HomeView