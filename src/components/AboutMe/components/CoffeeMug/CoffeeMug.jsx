import React from 'react'
import "./CoffeeMug.css"

const CoffeeMug = () => {
  return (
    <div className="coffee-mug-parent">
        <div className="coffee-mug-top">
            <div style={{"--delay":"0s"}} className="steam steam-cloud-1"></div>
            <div style={{"--delay":".5s"}} className="steam steam-cloud-2"></div>
            <div style={{"--delay":"1.15s"}} className="steam steam-cloud-3"></div>
            <div className="mug-interior"></div>
            <div className="coffee"></div>
        </div>
        <div className="coffee-mug">
            <div className="coffee-mug-text">
                <p className="bold-code-text">{`While (alive){`}</p>
                <p className="code-text">code()</p>
                <p className="code-text">climb()</p>
                <p className="code-text">sleep()</p>
                <p className="close-bracket bold-code-text">{`}`}</p>
            </div>
        </div>
        <div className="coffee-mug-bottom"></div> 
        <div className="coffee-handle"></div>
    </div>
  )
}

export default CoffeeMug