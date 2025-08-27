import React from 'react'

const BottomKeyboardRow = () => {
  return (
    <div className="number-keyboard-row keyboard-row">
        <button className="keyboard-btn top-row-keyboard-btn">
      <p>Fn</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>Control</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>Option</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>Command</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn space-bar">
  
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>Command</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>Option</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>{`<`}</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>^</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>^</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>{`>`}</p>
    </button>

    </div>
  )
}

export default BottomKeyboardRow