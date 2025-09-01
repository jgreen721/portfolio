import React, {useEffect,useRef} from 'react'
import "./BrowserWindow.css"

const BrowserWindow = ({inView}) => {
  const browserRef = useRef();

  useEffect(()=>{
    if(inView){
      browserRef.current.classList.add("open-browser-tab")
    }
  },[inView])

  const handleMinimizeWindow=()=>{
    console.log("handle minimizeWindow()")
    browserRef.current.classList.toggle("open-browser-tab")
    browserRef.current.classList.toggle("minimize-browser-tab")
  }
  return (
    <div onClick={handleMinimizeWindow} ref={browserRef} className="browser-window">
      <div className="browser-container">
        <div className="top-browser-bar">
          <div className="browser-dots">
            <div className="browser-dot-div">
              <div className="browser-dot red-dot"></div>
            </div>
            <div className="browser-dot-div">
              <div className="browser-dot yellow-dot"></div>
            </div>
            <div className="browser-dot-div">
              <div className="browser-dot green-dot"></div>
            </div>
          </div>
        </div>
        <div className="browser-view-page">
          <div className="browser-tab">
            <p>google- Google Search</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BrowserWindow