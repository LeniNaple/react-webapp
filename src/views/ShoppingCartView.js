import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import { NavLink } from 'react-router-dom'
import FooterSection from '../sections/FooterSection'

const ShoppingCartView = () => {

  window.top.document.title = 'Shopping-Cart / Fixxo'

  return (
    <>
      <MainMenuSection />  
      <h1 className='d-flex justify-content-center'>There is nothing here yet!</h1>
      <NavLink className="menu-link d-flex justify-content-center align-items-center" to="/" end>Home</NavLink>
      <FooterSection />
    </>
  )
}

export default ShoppingCartView

