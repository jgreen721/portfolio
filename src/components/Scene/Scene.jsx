import React,{useEffect} from 'react'
import { useInView } from "react-intersection-observer";

import "./Scene.css"

const Scene = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(()=>{
    if(inView){
      entry.target.classList.add("lighton")
      // console.log(entry)
      
    }
  },[inView])

  return (
    <div className="scene-container">
      <div className="scene-container-content">
        <div ref={ref} className="light-parent">
          kdkd
        </div>
      </div>
    </div>
  )
}

export default Scene