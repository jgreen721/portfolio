import React, {useRef,useEffect} from 'react'
import gsap from "gsap"
import "./SamplesHeader.css"

const SamplesHeader = ({inView,hasRendered}) => {
    const h1RefOne = useRef();
    const h1RefTwo = useRef();
    const h1RefThree = useRef();


    useEffect(()=>{
        if(inView && !hasRendered){
            gsap.fromTo(h1RefOne.current,{transform:'translateY(50rem)'},{transform:'translateY(0rem)',duration:1,delay:.5})
            gsap.fromTo(h1RefThree.current,{transform:'translateY(30rem)'},{transform:'translateY(0rem)',duration:1})
            gsap.fromTo(h1RefTwo.current,{transform:'scale(0)'},{transform:'scale(1)',duration:1})
        }
    },[inView])
  return (
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
  )
}

export default SamplesHeader