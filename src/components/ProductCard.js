import React from 'react'
import { NavLink } from 'react-router-dom'
import TempImg from '../assets/images/Card-Image-2.png'

const ProductCard = ({item}) => {
  return (

        <div className="card">
            <div className="card-box">
                <img src={TempImg} alt='nothing here...' />
                <div className="card-interaction">
                    <button className="card-balls"><i className="fa-regular fa-heart"></i></button>
                    <button className="card-balls"><i className="fa-regular fa-code-compare"></i></button>
                    <button className="card-balls"><i className="fa-regular fa-bag-shopping"></i></button>
                </div>

                <div className="card-quick-view">
                    <NavLink to="/products" className="btn-theme-red">
                        <div className="line-button-l-1"></div>
                        <div className="line-button-l-2"></div>
                        <p>QUICK VIEW</p>
                        <div className="line-button-r-1"></div>
                        <div className="line-button-r-2"></div>
                    </NavLink>
                </div>
            </div>

            <div className="card-text">
                <p>{item.category}</p>
                <h1>{item.productName}</h1>
                <div className="card-stars">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </div>
                <h2><span>{item.oldPrice}</span> {item.price}</h2>
            </div>
        </div> 

  )
}

export default ProductCard