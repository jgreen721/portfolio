import React, {useEffect,useRef} from 'react'
import { useInView } from "react-intersection-observer";
import { Keyboard,MousePad,Monitor } from './components/'
import gsap from "gsap"
import "./Laptop.css"

const Laptop = ({focused}) => {
  const laptopRef = useRef();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(()=>{
    // console.log(inView)
    if(inView){
      gsap.fromTo(laptopRef.current,{translateY:500},{translateY:0,duration:1})
      laptopRef.current.querySelector(".laptop-top").classList.add("open-laptop");

    }
  },[inView])
  return (
    <div ref={ref} className="laptop-parent">
      <div ref={laptopRef} className="laptop">
        <div className="laptop-top">
          <div className="laptop-top-back-shell"></div>
          <div className="laptop-top-front">
            <div className="laptop-monitor">
              <Monitor focused={focused} inView={inView}/>
            </div>
            <h5 className="macbook-air-text">Macbook Air</h5>
          </div>
        </div>
        <div className="laptop-bottom">
          <div className="keyboard-container">
            <Keyboard inView={inView}/>
          </div>
          <div className="mouse-container">
            <MousePad/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Laptop