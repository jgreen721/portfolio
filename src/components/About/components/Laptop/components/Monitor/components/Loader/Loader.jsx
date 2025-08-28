import React, {useEffect,useRef} from 'react'
import "./Loader.css"

const Loader = ({inView}) => {
      const loaderRef = useRef();

  useEffect(()=>{
      if(inView){
        loaderRef.current.classList.add("clear-loading-blur")
      }
  },[inView])
  return (
    <div ref={loaderRef} className="loader-parent">
        <div className="loader-content">
            <div className="loader-card">
                <div className="loader-outside-circle">
                  <div className="loader-inside-circle"></div>
                </div>
                <div className="loader-text">Loading User...</div>

            </div>

        </div>
    </div>
  )
}

export default Loader