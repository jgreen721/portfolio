import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoArrowLeft,GoArrowRight } from "react-icons/go";
import { MdRefresh } from "react-icons/md";
import "./BrowserRow.css"

const BrowserRow = () => {

    const browserIcons = [
        {id:1,icon:<GoArrowLeft/>},
        {id:2,icon:<GoArrowRight/>},
        {id:3,icon:<MdRefresh/>},
      ]
  return (
        <div className="browser-row">
            <ul className="browser-icons">
              {browserIcons.map((browserIcon,idx)=>(
                <li key={browserIcon.id} className="browser-icon-item">
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
  )
}

export default BrowserRow