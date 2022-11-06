import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import '../src/assets/css/views/style.css';
import HomeView from './views/HomeView.js';
import ContactsView from './views/ContactsView.js';
import NotFoundView from './views/NotFoundView.js';
import ShoppingCartView from './views/ShoppingCartView';
import ProductsView from './views/ProductsView';
import ProductsDetailsView from './views/ProductsDetailsView';
import { ProductContext } from './contexts/contexts.js';


function App() {
  const [products, setProducts] = useState({
    all: [],
    featuredProducts: []
  })

  useEffect(() => {
    const fetchAllProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts({...products, all: await result.json()})
    }
    fetchAllProducts(); 
    
    const fetchfeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({...products, featuredProducts: await result.json()})
    }
    fetchfeaturedProducts(); 

  }, [setProducts])


  return (
    <>
      <BrowserRouter> 
          <ProductContext.Provider value={products}> 
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="*" element={<NotFoundView />} />
              <Route path="/contacts" element={<ContactsView />} />
              <Route path="/shoppingcart" element={<ShoppingCartView />} />
              <Route path="/products" element={<ProductsView />} />
              <Route path="/products/:productName" element={<ProductsDetailsView />} />
            </Routes>
          </ProductContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
