import React from 'react'
import {Loader,Desktop} from "./components"
import "./Monitor.css"

const Monitor = ({inView}) => {
  return (
    <div className="monitor">
      <Loader inView={inView}/>
      <Desktop inView={inView}/>
    </div>
  )
}

export default Monitor