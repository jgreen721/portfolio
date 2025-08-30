import React, {useEffect, useRef} from 'react'
import {BrowserWindow} from "./components"
import { FaBatteryFull,FaSearch,FaMoon,FaApple } from "react-icons/fa";
import {desktopIcons} from "../../../../../../../../const"
import { GoFileDirectoryFill } from "react-icons/go";
import { FcEmptyTrash,FcFullTrash } from "react-icons/fc";

import "./Desktop.css"

const Desktop = ({inView}) => {
    const desktopRef = useRef();
    const links = [
        {id:1,name:"Chrome"},
        {id:2,name:"File"},
        {id:3,name:"Edit"},
        {id:4,name:"View"},
        {id:5,name:"History"},
        {id:6,name:"Profile"},
        {id:7,name:"Help"},
    ]

    const directories = [
        {id:1,name:"Documents"},
        {id:2,name:"Apps"},
        {id:3,name:"Reddit"},
    ]

    const menuItems =[
        {id:1,icon:<FaBatteryFull/>},
        {id:2,icon:<FaSearch/>},
        {id:3,icon:<FaMoon/>},
    ]

    useEffect(()=>{
        if(inView){
            desktopRef.current.classList.add("show-desktop")
            desktopRef.current.querySelector(".google-chrome-icon").classList.add("bounce-icon")
            console.log(desktopRef.current)
        }
    },[inView])
  return (
    <div ref={desktopRef} className="desktop-container">
        <div className="desktop-menu-row">
            <div className="flex-row">
                <div className="desktop-logo-div">
                    <FaApple/>
                </div>
                <ul className="menu-list">
                {links.map((linkItem,idx)=>(
                    <li key={idx} className="menu-list-item">
                        <p>{linkItem.name}</p>
                    </li>
                    ))}
                </ul>
            </div>
            <ul className="flex-row">
            {menuItems.map((menuItem,idx)=>(
                <li key={idx} className="menu-item">
                    {menuItem.icon}
                </li>
            ))}
            </ul>
        </div>
        <div className="desktop-main-area">
            {/* <div className="desktop-wallpaper-div"></div> */}
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
                {desktopIcons.map((icon,idx)=>(
                    <li key={idx} className={`desktop-icon-item`}>
                        <img className={`desktop-icon ${icon.className}`} src={icon.img} alt="desktop-icon"/>
                        {icon.title == "google chrome" && <BrowserWindow inView={inView}/>}
                    </li>
                ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Desktop