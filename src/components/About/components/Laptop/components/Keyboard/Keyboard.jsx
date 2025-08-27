import React from 'react'
import {TopKeyboardRow,NumberKeyboardRow,TabKeyboardRow,CapsKeyboardRow,BottomKeyboardRow, ShiftKeyboardRow} from "./components"
import "./Keyboard.css"

const Keyboard = () => {
  return (
    <div className="keyboard">
        <TopKeyboardRow/>
        <NumberKeyboardRow/>
        <TabKeyboardRow/>
        <CapsKeyboardRow/>
        <ShiftKeyboardRow/>
        <BottomKeyboardRow/>
    </div>
  )
}

export default Keyboard