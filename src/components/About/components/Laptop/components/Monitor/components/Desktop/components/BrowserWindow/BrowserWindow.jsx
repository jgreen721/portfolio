import React, {useEffect,useRef} from 'react'
import { TopBrowserBar,BrowserRow,BrowserPage } from './components';
import "./BrowserWindow.css"



const BrowserWindow = ({inView,focused}) => {
  const browserRef = useRef();



  useEffect(()=>{
    if(inView){
      browserRef.current.classList.add("open-browser-tab")
    }
  },[inView])

  return (
    <div ref={browserRef} className="browser-window">
      <div className="browser-container">
        <TopBrowserBar/>
          <div className="browser-view-page">
            <div className="browser-tab">
              <p>google- Google Search</p>
            </div>
            <BrowserRow focused={focused}/>
            <BrowserPage focused={focused}/>
          </div>
      </div>
    </div>
  )
}

export default BrowserWindow