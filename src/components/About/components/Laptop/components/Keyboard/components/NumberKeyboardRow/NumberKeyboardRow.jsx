import React from 'react'
import "./NumberKeyboardRow.css"

const NumberKeyboardRow = () => {
  return (
    <div className="number-keyboard-row keyboard-row">
        <button className="keyboard-btn top-row-keyboard-btn">
      <p>`~</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>1</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>2</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>3</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>4</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>5</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>6</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>7</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>8</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>9</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>0</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>-</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>+</p>
    </button>
  
    <button className="top-row-keyboard-btn keyboard-btn">
        <p>Delete</p>
    </button>
    </div>
  )
}

export default NumberKeyboardRow