import React from 'react'
import {Loader,Desktop} from "./components"
import "./Monitor.css"

const Monitor = ({inView,focused}) => {
  return (
    <div className="monitor">
      <Loader inView={inView}/>
      <Desktop inView={inView} focused={focused}/>
    </div>
  )
}

export default Monitor