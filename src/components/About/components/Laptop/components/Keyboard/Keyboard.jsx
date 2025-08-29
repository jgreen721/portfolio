import React, {useRef,useEffect} from 'react'
import {TopKeyboardRow,NumberKeyboardRow,TabKeyboardRow,CapsKeyboardRow,BottomKeyboardRow, ShiftKeyboardRow} from "./components"
import "./Keyboard.css"

const Keyboard = ({inView}) => {
      const keyboardRef = useRef();

  useEffect(()=>{
    if(inView){
        keyboardRef.current.querySelectorAll(".keyboard-btn").forEach((key)=>{
          key.classList.add("illuminate-keyboard")
        })
    }
  },[inView])
  return (
    <div ref={keyboardRef} className="keyboard">
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