import React from 'react'
import { FaBatteryFull,FaSearch,FaMoon,FaApple } from "react-icons/fa";
import "./DesktopMenuRow.css"

const DesktopMenuRow = () => {
    const links = [
        {id:1,name:"Chrome"},
        {id:2,name:"File"},
        {id:3,name:"Edit"},
        {id:4,name:"View"},
        {id:5,name:"History"},
        {id:7,name:"Help"},
    ]

    const menuItems =[
        {id:1,icon:<FaBatteryFull/>},
        {id:2,icon:<FaSearch/>},
        {id:3,icon:<FaMoon/>},
    ]



    const days = {
        1:"Mon",
        2:"Tues",
        3:"Wed",
        4:"Thurs",
        5:"Fri",
        6:"Sat",
        7:"Sun"
    }

    const months = {
        1:"Jan",
        2:"Feb",
        3:"Mar",
        4:"Apr",
        5:"May",
        6:"June",
        7:"July",
        8:"Aug",
        9:"Sept",
        10:"Oct",
        11:"Nov",
        12:"Dec",
    }




    const renderTime=()=>{
        let day = days[new Date().getDay()]
        let month = months[new Date().getMonth()]
        let month_day = new Date().getDate();
        let time_date = new Date();
        let formatter = new Intl.DateTimeFormat("en-US", {
            hour: "numeric", // or "2-digit" for leading zero
            minute: "2-digit",
            hour12: true,
            });
        let formattedTime = formatter.format(time_date);
        let date = `${day} ${month} ${month_day} ${formattedTime}`
        return date;
    }



  return (
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
            <li>{renderTime()}</li>
        </ul>
    </div>
  )
}

export default DesktopMenuRow