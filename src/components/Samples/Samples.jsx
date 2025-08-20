import React from 'react'
import {characterCountDesktop,characterCountMobile,connectFourDesktop,connectFourMobile,financeTrackerDesktop,financeTrackerMobile,codingConfDesktop,codingConfMobile} from "../../const"
import "./Samples.css"

const Samples = () => {
    const samples = [
        {id:1,title:"Character Count",description:"Custom animations and icons offer responsive behavior as user provides input for engaging user interaction and experience",img:{desktop:characterCountDesktop,mobile:characterCountMobile}},
        {id:2,title:"Connect Four",description:"The classic grid-game brought to life with a responsive UI along with timers and animations",img:{desktop:connectFourDesktop,mobile:connectFourMobile}},
        {id:3,title:"Finance Tracker",description:"Charts, graphs, filtering lists. This full stack application allows a user to track their spending and finances with all the expected CRUD operations, as well just take a demo tour to enjoy the pleasing design!",img:{desktop:financeTrackerDesktop,mobile:financeTrackerMobile}},
        {id:4,title:"Coding Conference",description:"Flashy form and image upload to excite user into signing up for your product or site.",img:{desktop:codingConfDesktop,mobile:codingConfMobile}},
        {id:5,title:"Notifications",description:"From a static ui-design of a users notifcations to a responsive, authentic user-experience.",img:{desktop:notificationsDesktop,mobile:notificationsMobile}},
    ]
  return (
    <div className="samples-container">Samples</div>
  )
}

export default Samples