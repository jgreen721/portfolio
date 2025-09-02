import React from 'react'
import {avatarImg,samples} from "../../../../../../../../../../../../const"
import {FaReact,FaHtml5,FaCss3} from "react-icons/fa"
import { FaCode } from "react-icons/fa6";
import { MdOutlineLaptopMac } from "react-icons/md";
import "./BrowserPage.css"

const BrowserPage = () => {


    const skills = [
        {id:1,icon:<FaReact/>},
        {id:2,icon:<FaHtml5/>},
        {id:3,icon:<FaCss3/>},
      ]
  return (
    <div className="browser-page-content">
    <header>
      <div className="header-icon-div">
        💻
      </div>
      <h4>Hire-</h4>
      <h4>A-</h4>
      <h4>Dev</h4>
      <div className="header-icon-div">
        
      </div>
    </header>
  <div className="user-info-card">
    <div className="flex-row">
      <div className="user-info-flex-1">
    <div className="user-info-img-div">
      <img className="avatar-img" src={avatarImg} alt="icon" />
    </div>
    </div>
    <div className="user-info-flex-2">
    <div className="user-info">
      <h5>Justin Green</h5>
      <h5>Los Angeles,CA</h5>
      <h5>Programmer/Climber</h5>
      {/* <h5>Passionate full stack developer</h5> */}
      <div className="skills">
        {skills.map(skill=>(
        <li key={skill.id} className="skill-item">
          {skill.icon}
        </li>
        ))}
        {/* <FaHtml5/>
        <FaCss3/> */}
      </div>
    </div>
    </div>
    </div>
  </div>
   <div className="samples">
    <ul className="samples-carousel">
      {samples.map(sample=>(
        <li className="sample-item">
          <div className="sample-img-div">
            <img className="sample-img" src={sample.img} alt="" />
          </div>
        </li>
      ))}
    </ul>
  </div> 
  </div>
</div>
  )
}

export default BrowserPage