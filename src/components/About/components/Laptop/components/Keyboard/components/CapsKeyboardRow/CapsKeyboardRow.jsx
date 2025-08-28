import React from 'react'

const CapsKeyboardRow = () => {
  return (
    <div className="number-keyboard-row keyboard-row">
        <button className="keyboard-btn top-row-keyboard-btn flex-2-btn">
      <p>Caps Lock</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>A</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>S</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>D</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>E</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>F</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>G</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>H</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>J</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>K</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>L</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>{`:`}</p>
    </button>
    <button className="keyboard-btn top-row-keyboard-btn">
      <p>{`"`}</p>
    </button>
  
    <button className="top-row-keyboard-btn keyboard-btn flex-2-btn">
        <p>Return</p>
    </button>
    </div>
  )
}

export default CapsKeyboardRow