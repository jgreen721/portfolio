import React from 'react'
import { FaBatteryFull,FaSearch,FaMoon,FaApple } from "react-icons/fa";

import "./Desktop.css"

const Desktop = () => {
    const links = [
        {id:1,name:"Chrome"},
        {id:2,name:"File"},
        {id:3,name:"Edit"},
        {id:4,name:"View"},
        {id:5,name:"History"},
        {id:6,name:"Bookmarks"},
        {id:6,name:"Profile"},
        {id:6,name:"Tab"},
        {id:6,name:"Help"},
    ]

    const menuItems =[
        {id:1,icon:<FaBatteryFull/>},
        {id:2,icon:<FaSearch/>},
        {id:3,icon:<FaMoon/>},
    ]
  return (
    <div className="desktop-container">
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
    </div>
  )
}

export default Desktop