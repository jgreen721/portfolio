import React from 'react'
import "./CoffeeMug.css"

const CoffeeMug = () => {
  let msg = [
    {id:1,letter:"H",translate:'0rem'},
    {id:2,letter:"e",translate:'.25rem'},
    {id:3,letter:"l",translate:'.5rem'},
    {id:4,letter:"l",translate:'.25rem'},
    {id:5,letter:"o",translate:'0rem'},
  ]

  let msg2 = [
    {id:1,letter:"W",translate:'0rem'},
    {id:2,letter:"o",translate:'.25rem'},
    {id:3,letter:"r",translate:'.5rem'},
    {id:4,letter:"l",translate:'.25rem'},
    {id:5,letter:"d",translate:'0rem'},
  ]
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
            <div className="coffee-mug-text-div">
                {msg.map((letter,idx)=>(
                  <p className="mug-text" key={letter.id} style={{display:'inline-block',transform:`translateY(${letter.translate})`}}>{letter.letter}</p>
                ))}
                <div>
                   {msg2.map((letter,idx)=>(
                  <p className="mug-text" key={letter.id} style={{display:'inline-block',transform:`translateY(${letter.translate})`}}>{letter.letter}</p>
                ))}
                </div>
            </div>
        </div>
        <div className="coffee-mug-bottom"></div> 
        <div className="coffee-handle"></div>
    </div>
  )
}

export default CoffeeMug