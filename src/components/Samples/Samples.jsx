import React, {useRef,useState,useEffect} from 'react'
import {Carousel,SamplesHeader,CarouselBtn,FocusedDisplay} from "./components"
import { useInView } from "react-intersection-observer";
import {samples} from "../../const"
import gsap from "gsap"
// const samples = [];
import "./Samples.css"

const Samples = () => {
    const [hasRendered,setHasRendered] = useState(false);
    const [samplesData,setSamplesData] = useState(samples);
    const [rotation,setRotation] = useState(0);
    const [focused,setFocused] = useState(samples.filter(sample=>sample.isFocused)[0])
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });
    const carouselRef = useRef();




    useEffect(()=>{
        if(inView && !hasRendered){
            gsap.fromTo(carouselRef.current,{translateY:200,opacity:0},{translateY:0,opacity:1,duration:2})
            setHasRendered(true)
        }
    },[inView])


 


    const handlePrev=()=>{
        let temp = rotation;
        temp-=60;
        setRotation(temp);
        let focusedIdx = samplesData.findIndex(s=>s.isFocused);
        let tempData = samplesData;
        tempData[focusedIdx].isFocused = false;
      
        tempData[focusedIdx == samplesData.length-1 ? 0 : ++focusedIdx].isFocused = true;
        console.log(focusedIdx);
        setSamplesData(tempData);


        let tempFocused = tempData.filter(t=>t.isFocused)[0]
        setFocused(tempFocused)


    }


    const handleNext=()=>{
        let temp = rotation;
        temp+=60;
        setRotation(temp);
        let focusedIdx = samplesData.findIndex(s=>s.isFocused);
        let tempData = samplesData;
        tempData[focusedIdx].isFocused = false;
      
        tempData[focusedIdx == 0 ? samplesData.length-1 : --focusedIdx].isFocused = true;
        console.log(focusedIdx);
        setSamplesData(tempData);


        let tempFocused = tempData.filter(t=>t.isFocused)[0]
        setFocused(tempFocused)

    }
  return (
    <div ref={ref} className="samples-container">
        <div className="samples-content">
        <SamplesHeader inView={inView} hasRendered={hasRendered}/>
        <div ref={carouselRef}>
        <Carousel samplesData={samplesData} rotation={rotation}/>
        </div>
        <div className="carousel-btns-row">
            <CarouselBtn handleAction={handlePrev} btnText="Prev"/>
           <div className="desktop-tablet"> <FocusedDisplay inView={inView} focused={focused}/> </div>
            <CarouselBtn handleAction={handleNext} btnText="Next"/>
        </div>
         <div className="mobile">
            <div className="mobile-laptop-row">
                 <FocusedDisplay inView={inView} focused={focused}/>
             </div>
        </div> 

     
        </div>
    </div>
  )
}

export default Samples



      {/* <div className="focused-sample-display-col">
                <div ref={focusedRef} className="focused-sample-card">
                    <div className="focused-img-div">
                        <img src={focused.img} alt="" />
                    </div>
                    <div className="focused-text-col">
                        <h5>{focused.title}</h5>
                        <p className="site-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, a hic libero nostrum molestiae recusandae ratione, voluptas, error laudantium tempora nesciunt amet pariatur.</p>
                        <div className="site-link-div">
                            <a target="_blank" href={focused.link}>Visit</a>
                        </div>
                        <ul className="technologies">
                            {focused.technologies.map((technology,idx)=>(
                                <li className={`${technology.color}`} key={idx}>
                                    {iconMap[technology.name]}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div> */}