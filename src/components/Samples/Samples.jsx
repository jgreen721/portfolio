import React, {useRef,useState,useEffect} from 'react'
import { useInView } from "react-intersection-observer";
import {samples} from "../../const"
import gsap from "gsap"
import "./Samples.css"

const Samples = () => {
    const [hasRendered,setHasRendered] = useState(false);
    const { ref, inView, entry } = useInView({
      /* Optional options */
      threshold: 0,
    });
    const h1RefOne = useRef();
    const h1RefTwo = useRef();
    const h1RefThree = useRef();
    const tl = gsap.timeline();
    const [samplesData,setSamplesData] = useState(samples);
    const carouselRef = useRef();
    const [rotation,setRotation] = useState(0);

    useEffect(()=>{
        if(inView && !hasRendered){
            gsap.fromTo(h1RefOne.current,{transform:'translateY(50rem)'},{transform:'translateY(0rem)',duration:1,delay:.5})
            gsap.fromTo(h1RefThree.current,{transform:'translateY(30rem)'},{transform:'translateY(0rem)',duration:1})
            gsap.fromTo(h1RefTwo.current,{transform:'scale(0)'},{transform:'scale(1)',duration:1})
            setHasRendered(true)
        }
    },[inView])


    const handlePrev=()=>{
        setSamplesData((samplesData)=>samplesData.map((s)=>({...s,offsetX:s.offsetX%samplesData.length - 1})))
        let temp = rotation;
        temp = temp == 360 ? 325 : temp-(360/samplesData.length);
        setRotation(temp);
        console.log(temp);
        carouselRef.current.style.transform = `rotate(${temp}deg)`
    }


    const handleNext=()=>{
        setSamplesData((samplesData)=>samplesData.map((s)=>({...s,offsetX:s.offsetX%samplesData.length + 1})))
        let temp = rotation;
        temp = temp == 360 ? 325 : temp +(360/samplesData.length);
        setRotation(temp);
        console.log(temp);
        carouselRef.current.style.transform = `rotate(${temp}deg)`
    }
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

        <div className="samples-main-content">
            <div className="samples-carousel-container">
            <ul ref={carouselRef} className="samples-carousel">
                <div className="carousel-fill-in"></div>
                    {samplesData.map((sample,idx)=>(
                        <li style={{transform:`rotate(${idx * (360/(samplesData.length))}deg)`}}
                        key={sample.id} className="sample-item">
                            <div className="sample-item-card">
                                <div className="sample-item-content">
                                    <div className="sample-img-div">
                                        {/* <img src={sample.img} alt="img" /> */}
                                    </div>
                                    <h4>{sample.title}</h4>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="carousel-btns-row">
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
        </div>
    </div>
  )
}

export default Samples