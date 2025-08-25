import React,{useEffect} from 'react'
import { CoffeeMug,Laptop,WindowScene } from './components';
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
          entry.target.querySelector(".laptop-top").classList.add("unfold-laptop");
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
                {/* <WindowScene/> */}
                <div className="laptop-and-coffee">
                    <CoffeeMug/>
                    <Laptop/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe