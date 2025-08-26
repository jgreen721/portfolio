import React from 'react'
import "./Laptop.css"

const Laptop = () => {
  return (
    <div className="laptop-parent">
  
      <div className="laptop">
        <div className="laptop-top open-laptop"></div>
        <div className="laptop-bottom">
          <div className="keyboard-container">
            <div className="top-keyboard-row">
              <button className="keyboard-btn top-row-keyboard-btn">
                <p>Esc</p>
              </button>
              <button className="keyboard-btn top-row-keyboard-btn">
                <p>F1</p>
              </button>
              <button className="keyboard-btn top-row-keyboard-btn">
                <p>F2</p>
              </button>
              <button className="keyboard-btn top-row-keyboard-btn">
                <p>F3</p>
              </button>
              <button className="keyboard-btn top-row-keyboard-btn">
                <p>F4</p>
              </button>
              <button className="keyboard-btn top-row-keyboard-btn">
                <p>F5</p>
              </button>
              <button className="keyboard-btn top-row-keyboard-btn">
                <p>F6</p>
              </button>
              <button className="keyboard-btn top-row-keyboard-btn">
                <p>F7</p>
              </button>
              <button className="keyboard-btn top-row-keyboard-btn">
                <p>F8</p>
              </button>
              <button className="keyboard-btn top-row-keyboard-btn">
                <p>F9</p>
              </button>
              <button className="keyboard-btn top-row-keyboard-btn">
                <p>F10</p>
              </button>
              <button className="keyboard-btn top-row-keyboard-btn">
                <p>F11</p>
              </button>
              <button className="keyboard-btn top-row-keyboard-btn">
                <p>F12</p>
              </button>
              <button className="top-row-keyboard-btn invisible-btn"></button>
              <button className="top-row-keyboard-btn invisible-btn"></button>
              <button className="top-row-keyboard-btn power-btn">
                <div className="power-btn-icon">
                </div>
              </button>


            </div>
          </div>
          <div className="mouse"></div>
        </div>
      </div>
    </div>
  )
}

export default Laptop