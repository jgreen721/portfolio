import React from 'react'
import "./TabKeyboardRow.css"

const TabKeyboardRow = () => {
  return (
    <div className="number-keyboard-row keyboard-row">
        <button className="keyboard-btn top-row-keyboard-btn flex-2-btn">
      <p>Tab</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>Q</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>W</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>E</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>R</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>T</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>Y</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>U</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>I</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>O</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>P</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>{`{`}</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>{`}`}</p>
    </button>
  
    <button className="top-row-keyboard-btn power-btn">
        <p>|</p>
    </button>
    </div>
  )
}

export default TabKeyboardRow