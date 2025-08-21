import React, {useState} from 'react'
import {characterCountDesktop,characterCountMobile,connectFourDesktop,connectFourMobile,financeTrackerDesktop,financeTrackerMobile,codingConfDesktop,codingConfMobile, notificationsDesktop,notificationsMobile} from "../../const"
import "./Samples.css"

const Samples = () => {
    const samplesData = [
        {id:1,title:"Character Count",description:"Custom animations and icons offer responsive behavior as user provides input for engaging user interaction and experience",img:{desktop:characterCountDesktop,mobile:characterCountMobile},offset:-1},
        {id:2,title:"Connect Four",description:"The classic grid-game brought to life with a responsive UI along with timers and animations",img:{desktop:connectFourDesktop,mobile:connectFourMobile},offset:0},
        {id:3,title:"Finance Tracker",description:"Charts, graphs, filtering lists. This full stack application allows a user to track their spending and finances with all the expected CRUD operations, as well just take a demo tour to enjoy the pleasing design!",img:{desktop:financeTrackerDesktop,mobile:financeTrackerMobile},offset:1},
        {id:4,title:"Coding Conference",description:"Flashy form and image upload to excite user into signing up for your product or site.",img:{desktop:codingConfDesktop,mobile:codingConfMobile},offset:2},
        {id:5,title:"Notifications",description:"From a static ui-design of a users notifcations to a responsive, authentic user-experience.",img:{desktop:notificationsDesktop,mobile:notificationsMobile},offset:3},
    ]
    const [samples,setSamples] = useState(samplesData);


    const handleCarousel=()=>{
      console.log("handle carousel fired!")
      setSamples((samples)=>samples.map((sample)=>sample.offset == -1 ? {...sample,offset:3} : {...sample,offset:sample.offset-1}));
    }
  return (
    <div onClick={handleCarousel} className="samples-container">
      <div className="samples-header">
        <h1>Projects and Samples</h1>
      </div>
      <div className="samples-content">
        <div className="samples-column samples-column-desktop"></div>
        <div className="samples-column">
          <ul className="samples-gallery">
            {samples.map(sample=>(
              <li style={{top:`${sample.offset * 450}px`,zIndex:sample.offset == 3 || sample.offset == -1 ? -1 : 1}} key={sample.id} className="sample-item">
                <div className="sample-item-content">
                  <div className="sample-item-img-div">
                    <img className="sample-gallery-img" src={sample.img.desktop} alt="sample-img" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Samples