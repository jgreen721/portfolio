import React from 'react'
import "./CarouselBtn.css"

const CarouselBtn = ({handleAction,btnText}) => {
  return (
    <button onClick={handleAction} className="carousel-btn">
    <div className="carousel-btn-overlay"></div>
        <div className="carousel-btn-content">
            {btnText}
        </div>
    </button>
  )
}

export default CarouselBtn