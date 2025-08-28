import React from 'react'
import {Loader} from "./components"
import "./Monitor.css"

const Monitor = ({inView}) => {
  return (
    <div className="monitor">
      <Loader inView={inView}/>
    </div>
  )
}

export default Monitor