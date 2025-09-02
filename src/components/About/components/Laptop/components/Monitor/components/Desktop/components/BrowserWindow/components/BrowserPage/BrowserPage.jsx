import React, {useState} from 'react'
import {avatarImg,samples} from "../../../../../../../../../../../../const"
import {FaReact,FaHtml5,FaCss3} from "react-icons/fa"
import { FaCode } from "react-icons/fa6";
import { MdOutlineLaptopMac } from "react-icons/md";
import "./BrowserPage.css"

const BrowserPage = () => {
        const [samplesData,setSamplesData] = useState(samples)

        console.log(samplesData);

    const skills = [
        {id:1,icon:<FaReact/>, color:"react-blue"},
        {id:2,icon:<FaHtml5/>, color:"html-orange"},
        {id:3,icon:<FaCss3/>, color:"css-blue"},
      ]


      const handlePrev=()=>{
          console.log('handlePrev')
          setSamplesData((sampleData)=>sampleData.map((s=>({...s,offsetX:s.offsetX == 0 ? 4 : s.offsetX-1}))))

      }
      const handleNext=()=>{
          console.log('handleNext')
          setSamplesData((sampleData)=>sampleData.map((s=>({...s,offsetX:s.offsetX == 4 ? 0 : s.offsetX+1}))))

      }
  return (
    <div className="browser-page-content">
        <header>
            <div className="header-icon-div">
                <FaCode/>
                <FaCode className="shadow-header-icon"/>
            </div>
            <div className="browserpage-header-text-row">
                <h4>Hire</h4>
                <h4>-</h4>
                <h4>A-</h4>
                <h4>Dev</h4>
            </div>
            <div className="header-icon-div">
                <MdOutlineLaptopMac/>
                <MdOutlineLaptopMac className="shadow-header-icon"/>
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
                        <li key={skill.id} className={`skill-item ${skill.color}`}>
                            {skill.icon}
                        </li>
        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="samples">
        <ul className="samples-carousel">
            {samplesData.map(sample=>(
            <li style={{"--offset":`${sample.offsetX}`}} className="sample-proj-item">
                <div className="sample-img-div">
                <img className="sample-img" src={sample.img} alt="" />
                </div>
            </li>
            ))} 
    </ul>
    <div className="carousel-btns-row">
        <button onClick={handlePrev} className="carousel-btn">Prev</button>
        <button onClick={handleNext} className="carousel-btn">Next</button>
    </div>
  </div> 
  </div>

  )
}

export default BrowserPage