import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../src/assets/css/views/style.css';
import HomeView from './views/HomeView.js';
import ContactsView from './views/ContactsView.js';
import NotFoundView from './views/NotFoundView.js';
import ShoppingCartView from './views/ShoppingCartView';
import ProductsView from './views/ProductsView';


function App() {
  return (
    <>
    <BrowserRouter> 
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="*" element={<NotFoundView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="/shoppingcart" element={<ShoppingCartView />} />
          <Route path="/products" element={<ProductsView />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
