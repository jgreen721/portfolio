import React from 'react'
import "./HeroTop.css"

const HeroTop = ({circleSize}) => {
  return (
    <div style={{"--circleSize":circleSize}} className="header-layer header-layer-top">
            <div className="header-layer-content">
                <div className="top-flex-row">
                    <div className="captions-box">
                        <div className="caption-div">
                            <h3><span className="bold">I</span>lluminate</h3>
                        </div>
                        <div className="caption-div">
                            <h3><span className="bold">Y</span>our Path</h3>
                        </div>
                        <div className="caption-div">
                            <h3><span className="bold">T</span>o <span className="shiny-success">Success</span></h3>
                        </div>
                    </div>
                    <div className="top-flex-title-div">
                        <h1 className="top-flex-h1 top-flex-h1-top">JG</h1>
                    </div>
                </div>
                <div className="h1-title-div">
                    <h1 className="h1-title h1-title-top">
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
                    <h1 className="h1-quotes h1-quotes-top">"</h1>
                </div>
                <div className="blurb-div">
                <p>Passionate, skilled web developer bringing clients’ visions to life with clean code, modern frameworks, and creative design. Dedicated to building responsive, user-friendly applications that merge functionality with engaging, memorable experiences.</p>
                </div>
                </div>
            </div>
        </div>
  )
}

export default HeroTop