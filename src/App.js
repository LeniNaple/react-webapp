import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import '../src/assets/css/components/components.css';
import HomeView from './views/HomeView.js';
import ContactsView from './views/ContactsView.js';
import NotFoundView from './views/NotFoundView.js';


function App() {
  return (
    <>
    <BrowserRouter> 
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="*" element={<NotFoundView />} />
          <Route path="/contacts" element={<ContactsView />} />
        </Routes>

    </BrowserRouter>
      
    </>
  );
}

export default App;
