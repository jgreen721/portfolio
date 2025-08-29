import React, {useEffect, useRef} from 'react'
import { FaBatteryFull,FaSearch,FaMoon,FaApple } from "react-icons/fa";
import {desktopImg} from "../../../../../../../../const"
import "./Desktop.css"

const Desktop = ({inView}) => {
    const desktopRef = useRef();
    const links = [
        {id:1,name:"Chrome"},
        {id:2,name:"File"},
        {id:3,name:"Edit"},
        {id:4,name:"View"},
        {id:5,name:"History"},
        // {id:6,name:"Bookmarks"},
        {id:7,name:"Profile"},
        // {id:6,name:"Tab"},
        {id:8,name:"Help"},
    ]

    const menuItems =[
        {id:1,icon:<FaBatteryFull/>},
        {id:2,icon:<FaSearch/>},
        {id:3,icon:<FaMoon/>},
    ]

    useEffect(()=>{
        if(inView){
            desktopRef.current.classList.add("show-desktop")
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
            <div className="desktop-wallpaper-div">
                {/* <img className="desktop-wallpaper-img" src={desktopImg} alt="" /> */}
            </div>
        </div>
    </div>
  )
}

export default Desktop