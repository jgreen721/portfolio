import React, { useEffect, useRef } from 'react'
import { FaReact, FaJs, FaHtml5, FaCss3 } from "react-icons/fa";
import gsap from "gsap"
import "./FocusedDisplay.css"



const FocusedDisplay = ({focused,inView}) => {
   const focusedRef = useRef();
   const focusedLaptopRef = useRef();
   const infoRef = useRef();

  const iconMap={
    "html":<FaHtml5/>,
    "css":<FaCss3/>,
    "js":<FaJs/>,
    "react":<FaReact/>,
}

useEffect(()=>{
  if(inView){
      focusedRef.current.classList.add("grow-focused-area");
  }
},[inView])

useEffect(()=>{
   gsap.fromTo(focusedRef.current,{opacity:0,translateY:-300},{opacity:1,translateY:0,duration:1})
},[focused])
  return (
    <div ref={focusedRef} className="focused-display-container">
      <div ref={infoRef} className="focused-info-card">
        <h5 className="focused-title">{focused.title}</h5>
        <p className="focused-description">{focused.description}</p>
        <ul className="focused-technologies">
                            {focused.technologies.map((technology,idx)=>(
                                <li className={`${technology.color}`} key={idx}>
                                    {iconMap[technology.name]}
                                </li>
                            ))}
        </ul>
        <a className="focused-link" target="_blank" href={focused.link}>Visit</a>
      </div>
      <div ref={focusedLaptopRef} className="focused-laptop-container">
        <div className="laptop-half focused-laptop-top">
          <div className="focused-laptop-monitor">
            <img className="focused-laptop-img" src={focused.img} alt="" />
          </div>
        </div>
        <div className="laptop-half focused-laptop-bottom">
          <div className="focused-laptop-keyboard-container">
            <div className="focused-keyboard">
            </div>
          </div>

          <div className="focused-laptop-mouse"></div>
        </div>
      </div>
      <div className="cellphone-div">
        <div className="focused-cellphone"></div>
      </div>
    </div>
  )
}

export default FocusedDisplay