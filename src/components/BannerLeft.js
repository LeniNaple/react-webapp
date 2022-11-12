import React from 'react'
import bannerImg1 from "../assets/images/banner-left.svg"


const Banner = () => {
  return (
    <>
        <div className="banner-img-left">
            <img src={bannerImg1} alt="#" />
            <div className="banner-text">
                <h1>Pamela Reif's</h1>
                <h1>Top Picks</h1>
                <a href="#" className="btn-theme-dark">
                    <div className="line-button-l-1"></div>
                    <div className="line-button-l-2"></div>
                    <p>SHOP NOW</p>
                    <div className="line-button-r-1"></div>
                    <div className="line-button-r-2"></div>
                </a>
            </div>
        </div>
    </>
  )
}

export default Banner