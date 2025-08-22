import React,{useEffect} from 'react'
import { useInView } from "react-intersection-observer";

import "./AboutMe.css"

const AboutMe = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });
    
      useEffect(()=>{
        if(inView){
          entry.target.querySelector(".about-me-cover").classList.add("drop-cover");
          console.log(entry)
          }else{
              
          }
      
      },[inView])


  
  return (
    <div ref={ref} className="about-me-section">
        <div className="about-me-cover"></div>
        <div className="about-me-content-container">
            <header className="about-me-header">
                <h1>About</h1>
                <h1 className="reversed">Me</h1>
            </header>

            <div className="about-me-content">
                <div className="laptop"></div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe