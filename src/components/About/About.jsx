import React from 'react'
import { Laptop } from './components'
import "./About.css"

const About = ({focused}) => {



  return (
    <div className="scene-container">
      <div className="scene-content-container">
          <Laptop focused={focused}/>
      </div>
    </div>
  )
}

export default About