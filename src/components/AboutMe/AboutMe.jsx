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
                <div className="laptop-and-coffee">
                    <div className="coffee-mug-parent">
                    <div className="coffee-mug-top"></div>
                    <div className="coffee-mug"></div>
                    <div className="coffee-mug-bottom"></div>
                    </div>
                <div className="laptop">
                    <div className="laptop-top">
                        <div className="laptop-top-shell"></div>
                        <div className="laptop-monitor"></div>
                    </div>
                    <div className="laptop-bottom">
                        <div className="laptop-keyboard">
                            <div className="keyboard-row top-keyboard-row">
                                <div className="key key-1"></div>
                                <div className="key key-2"></div>
                                <div className="key key-3"></div>
                                <div className="key key-4"></div>
                                <div className="key key-5"></div>
                                <div className="key key-6"></div>
                                <div className="key key-7"></div>
                                <div className="key key-8"></div>
                                <div className="key key-9"></div>
                                <div className="key key-10"></div>
                            </div>
                            <div className="keyboard-row middle-keyboard-row">
                                <div className="key key-1"></div>
                                <div className="key key-2"></div>
                                <div className="key key-3"></div>
                                <div className="key key-4"></div>
                                <div className="key key-5"></div>
                                <div className="key key-6"></div>
                                <div className="key key-7"></div>
                                <div className="key key-8"></div>
                                <div className="key key-9"></div>
                                <div className="key key-10"></div>
                            </div>
                            <div className="keyboard-row middle-bottom-keyboard-row">
                                <div className="key key-1"></div>
                                <div className="key key-2"></div>
                                <div className="key key-3"></div>
                                <div className="key key-4"></div>
                                <div className="key key-5"></div>
                                <div className="key key-6"></div>
                                <div className="key key-7"></div>
                                <div className="key key-8"></div>
                                <div className="key key-9"></div>
                                <div className="key key-10"></div>
                            </div>
                            <div className="keyboard-row bottom-keyboard-row">
                                <div className="key key-1"></div>
                                <div className="key key-2"></div>
                                <div className="key key-3"></div>
                                <div className="key key-4"></div>
                                <div className="key key-5"></div>
                                <div className="key key-6"></div>
                                <div className="key key-7"></div>
                                <div className="key key-8"></div>
                                <div className="key key-9"></div>
                                <div className="key key-10"></div>
                            </div>
                        </div>
                        <div className="laptop-mouse-pad"></div>
                        <div className="laptop-bottom-edge"></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe