import React, {useEffect,useRef} from 'react'
import "./BrowserWindow.css"

const BrowserWindow = ({inView}) => {
  const browserRef = useRef();

  useEffect(()=>{
    if(inView){
      browserRef.current.classList.add("open-browser-tab")
    }
  },[inView])
  return (
    <div ref={browserRef} className="browser-window">BrowserWindow</div>
  )
}

export default BrowserWindow