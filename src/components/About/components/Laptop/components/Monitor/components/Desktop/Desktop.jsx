import React, {useEffect, useRef} from 'react'
import {BrowserWindow, DesktopMenuRow} from "./components"
import {desktopIcons} from "../../../../../../../../const"
import { GoFileDirectoryFill } from "react-icons/go";
// import { FcEmptyTrash,FcFullTrash } from "react-icons/fc";

import "./Desktop.css"

const Desktop = ({inView}) => {
    const desktopRef = useRef();
  

    const directories = [
        {id:1,name:"Documents"},
        {id:2,name:"Apps"},
        {id:3,name:"Reddit"},
    ]

 


    useEffect(()=>{
        if(inView){
            desktopRef.current.classList.add("show-desktop")
            desktopRef.current.querySelector(".google-chrome-icon").classList.add("bounce-icon")
            // console.log(desktopRef.current)
        }
    },[inView])

  return (
    <div ref={desktopRef} className="desktop-container">
        <DesktopMenuRow/>
        <div className="desktop-main-area">
            <div className="directories-column">
                {directories.map((directory,idx)=>(
                <div key={idx} className="directory-item">
                    <GoFileDirectoryFill/>
                   <p> {directory.name}</p>
                </div>
                ))}
            </div>
            <div className="icons-row">
                <ul className="desktop-icons">
                <div className="browser-icons-banner"></div>
                 {desktopIcons.map((icon,idx)=>(
                    <li key={idx} className={`desktop-icon-item`}>
                        <img className={`desktop-icon ${icon.className}`} src={icon.img} alt="desktop-icon"/>
                        {icon.title == "google chrome" && <BrowserWindow inView={inView}/>}
                    </li>
                ))}
                </ul>
                <ul className="desktop-icons-shadow">
                <div className="browser-icons-banner"></div>

                {desktopIcons.map((icon,idx)=>(
                    <li key={idx} className={`desktop-icon-item`}>
                        <img className={`shadow-desktop-icon ${icon.className}`} src={icon.img} alt="desktop-icon"/>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Desktop