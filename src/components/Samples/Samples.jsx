import React, {useRef,useEffect} from 'react'
import { useInView } from "react-intersection-observer";
import gsap from "gsap"
import "./Samples.css"

const Samples = () => {
    const samplesRef = useRef();
    const { ref, inView, entry } = useInView({
      /* Optional options */
      threshold: 0,
    });
    const h1RefOne = useRef();
    const h1RefTwo = useRef();
    const h1RefThree = useRef();
    const tl = gsap.timeline();

    useEffect(()=>{
        if(inView){
            tl.fromTo(h1RefOne.current,{transform:'translateY(50rem)'},{transform:'translateY(0rem)',duration:1})
            tl.fromTo(h1RefTwo.current,{transform:'translateY(30rem)'},{transform:'translateY(0rem)',duration:1})
            tl.fromTo(h1RefThree.current,{transform:'scale(0)'},{transform:'scale(1)',duration:1})
        }
    },[inView])
  return (
    <div ref={ref} className="samples-container">
        <div className="samples-content">
        <header className="samples-header">
            <div className="samples-header-h1-div samples-header-div-one">
                <h1 ref={h1RefOne} className="samples-header-h1 samples-header-h1-one">Projects</h1>
            </div>
            <div className="samples-header-h1-div samples-header-div-two">
                <h1 ref={h1RefTwo} className="samples-header-h1 samples-header-h1-two">&</h1>
            </div>
            <div className="samples-header-h1-div samples-header-div-three">
                <h1 ref={h1RefThree} className="samples-header-h1 samples-header-h1-three">Samples</h1>
            </div>
        </header>
        </div>
    </div>
  )
}

export default Samples