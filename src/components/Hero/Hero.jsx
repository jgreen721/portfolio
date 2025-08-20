import React from 'react'
import {HeroTop,HeroBottom} from "./components"
import "./Hero.css"

const Hero = ({circleSize}) => {
  return (
    <header className="header">
  <HeroBottom/>
  <HeroTop circleSize={circleSize}/>

    </header>
  )
}

export default Hero