import React from 'react'
import {HeroTop,HeroBottom} from "./components"
import "./Hero.css"

const Hero = () => {
  return (
    <header className="header">
  <HeroBottom/>
  <HeroTop/>

    </header>
  )
}

export default Hero