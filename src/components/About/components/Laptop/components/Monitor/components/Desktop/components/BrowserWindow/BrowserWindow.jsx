import React, {useEffect,useRef} from 'react'
import "./BrowserWindow.css"
import { TopBrowserBar } from './components';
import { GoArrowLeft,GoArrowRight } from "react-icons/go";
import { MdRefresh } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const BrowserWindow = ({inView}) => {
  const browserRef = useRef();
  const browserIcons = [
    {id:1,icon:<GoArrowLeft/>},
    {id:2,icon:<GoArrowRight/>},
    {id:3,icon:<MdRefresh/>},
  ]
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
          <div className="browser-row">
            <ul className="browser-icons">
              {browserIcons.map((browserIcon,idx)=>(
                <li className="browser-icon-item">
                  {browserIcon.icon}
                </li>
              ))}
            </ul>
            <div className="browser-search-input">
              https://hire-a-dev.com/jgreen721
            </div>
            <div className="hamburger-dots">
                <BsThreeDotsVertical/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BrowserWindow