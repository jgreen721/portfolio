import React from 'react'

const BottomKeyboardRow = () => {
  return (
    <div className="number-keyboard-row keyboard-row">
    <button className="keyboard-btn top-row-keyboard-btn">
        <p>Fn</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>Ctrl</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>Opt</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>Cmd</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn space-bar">
  
    </button>
    <button className="keyboard-btn top-row-keyboard-btn mobile-btn">
      <p>Cmd</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn mobile-btn">
      <p>Opt</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>{`<`}</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>^</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p className="down-arrow">^</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>{`>`}</p>
    </button>

    </div>
  )
}

export default BottomKeyboardRow