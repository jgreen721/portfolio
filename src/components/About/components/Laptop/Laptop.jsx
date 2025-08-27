import React from 'react'
import { Keyboard,MousePad } from './components/'
import "./Laptop.css"

const Laptop = () => {
  return (
    <div className="laptop-parent">
  
      <div className="laptop">
        <div className="laptop-top open-laptop"></div>
        <div className="laptop-bottom">
          <div className="keyboard-container">
            <Keyboard/>
          </div>
          <div className="mouse">
            <MousePad/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Laptop