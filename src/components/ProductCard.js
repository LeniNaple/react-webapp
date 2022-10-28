import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = () => {
  return (

        <div className="card">
            <div className="card-box">
                <img src='' alt='nothing here...' />
                <div className="card-interaction">
                    <button className="card-balls"><i className="fa-regular fa-heart"></i></button>
                    <button className="card-balls"><i className="fa-regular fa-code-compare"></i></button>
                    <button className="card-balls"><i className="fa-regular fa-bag-shopping"></i></button>
                </div>

                <div to="/products" className="card-quick-view">
                    <NavLink className="btn-theme-red">
                        <div className="line-button-l-1"></div>
                        <div className="line-button-l-2"></div>
                        <p>QUICK VIEW</p>
                        <div className="line-button-r-1"></div>
                        <div className="line-button-r-2"></div>
                    </NavLink>
                </div>
            </div>

            <div className="card-text">
                <p>Category</p>
                <h1>Modern Black Blouse</h1>
                <div className="card-stars">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </div>
                <h2><span></span> $35.00</h2>
            </div>
        </div> 

  )
}

export default ProductCard