import React from 'react'
import "./FixedMenu.css"

const FixedMenu = ({handleThemeChange,theme}) => {
  return (
    <div className="fixed-menu">
        <h3>JGDev</h3>
        <button className="theme-btn" onClick={handleThemeChange}>
            <div className="button-content">
                {theme == "dark" 
                ?
                <div className="sun-icon">
                    <div className="rays-container">
                        <div className="ray ray-1"></div>
                        <div className="ray ray-2"></div>
                        <div className="ray ray-3"></div>
                        <div className="ray ray-4"></div>
                        <div className="ray ray-5"></div>
                        <div className="ray ray-6"></div>
                        <div className="ray ray-7"></div>
                        <div className="ray ray-8"></div>
                    </div>
                    <div className="sun"></div>
                </div>
                :
                <div className="moon-icon">
                    <div className="moon"></div>
                </div>
                }
            </div>
        </button>
    </div>
  )
}

export default FixedMenu