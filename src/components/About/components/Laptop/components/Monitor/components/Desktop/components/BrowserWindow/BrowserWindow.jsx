import React, {useEffect,useRef} from 'react'
import { TopBrowserBar,BrowserRow } from './components';
import "./BrowserWindow.css"



const BrowserWindow = ({inView}) => {
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
          <BrowserRow/>
          <div className="browser-page-content">
                  <header>
                    <h4>Hire-</h4>
                    <h4>A-</h4>
                    <h4>Dev</h4>
                  </header>
                <div className="user-info-card">
                  <div className="user-info-img-div">
                    <img src="" alt="icon" />
                  </div>
                </div>
                <div className="samples"></div>
                </div>
        </div>
]
      </div>
    </div>
  )
}

export default BrowserWindow