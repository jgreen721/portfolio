import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <header className="header">
        {/* <div className="header-overlay"></div> */}
        <div className="header-layer header-layer-1">
            <div className="header-layer-content">
                <div className="top-flex-row">
                    <div className="captions-box">
                        <div className="caption-div">
                            <h3>Illuminate</h3>
                        </div>
                        <div className="caption-div">
                            <h3>Your Path</h3>
                        </div>
                        <div className="caption-div">
                            <h3>To Success</h3>
                        </div>
                    </div>
                    <div className="top-flex-title-div">
                        <h1 className="top-flex-h1">JG</h1>
                    </div>
                </div>
                <div className="h1-title-div">
                    <h1 className="h1-title">
                        <span>D</span>
                        <span>e</span>
                        <span>v</span>
                        <span>e</span>
                        <span>l</span>
                        <span>o</span>
                        <span>p</span>
                        <span>e</span>
                        <span>r</span>
                    </h1>
                </div>
                <div className="bottom-flex-row">
                <div className="quotes-div">
                    <h1 className="h1-quotes">"</h1>
                </div>
                <div className="blurb-div">
                <p>Passionate, skilled web developer bringing clients’ visions to life with clean code, modern frameworks, and creative design. Dedicated to building responsive, user-friendly applications that merge functionality with engaging, memorable experiences.</p>
                </div>
                </div>
            </div>
        </div>
        {/* <div className="header-layer header-layer-2"></div> */}
    </header>
  )
}

export default Hero