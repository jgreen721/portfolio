import React, {useEffect, useRef} from 'react'
import "./Carousel.css"

const Carousel = ({samplesData,rotation}) => {
    const carouselRef = useRef();


    useEffect(()=>{
        carouselRef.current.style.transform = `rotate(${rotation}deg)`

    },[rotation]);
  return (
    <div className="samples-main-content">
        <div className="samples-carousel-container">
            <div className="carousel-fill-in"></div>
            <ul ref={carouselRef} className="samples-carousel">
                    {samplesData.map((sample,idx)=>(
                        <li style={{"--rotation":`${idx * (360/(samplesData.length))}`}}
                        key={sample.id} className="sample-item">
                            <div className="sample-item-card">
                                <div className="sample-item-content">
                                    <div className="sample-shadow-img-div">
                                    <img className="sample-shadow-img" src={sample.mobileImg} alt="img" />
                                    </div>
                                    <div className="sample-img-div">
                                        <img className="sample-img" src={sample.mobileImg} alt="img" />
                                    </div>
                                    <p>{sample.title}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>  )
}

export default Carousel