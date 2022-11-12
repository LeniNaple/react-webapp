import React from 'react'
import tempImg1 from "../assets/images/showcase-img-1.svg" 
import tempImg2 from "../assets/images/showcase-img-2.svg"

const ShowcaseSection = () => {
  return (
    <section className="showcase container">
            <img src={tempImg1} className="img-left" alt="showcase-img-1" />
            <div className="showcase-body">
                <h1> SALE UP</h1>
                <h1> To 50% Off</h1>
                <p>Online shopping free home delivery over $100</p>
                <a href="#" className="btn-theme-red">
                    <div className="line-button-l-1"></div>
                    <div className="line-button-l-2"></div>
                    <p>SHOP NOW</p>
                    <div className="line-button-r-1"></div>
                    <div className="line-button-r-2"></div>
                </a>
            </div>
            <img src={tempImg2} className="img-right" alt="showcase-img-2" />

        </section>
  )
}

export default ShowcaseSection