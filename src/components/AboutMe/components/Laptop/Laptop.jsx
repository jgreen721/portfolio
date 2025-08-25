import React from 'react'
import "./Laptop.css"

const Laptop = () => {
  return (
    <div className="laptop">
    <div className="laptop-top">
        <div className="laptop-top-shell"></div>
        <div className="laptop-monitor">
            <div className="monitor-loader">
                <div className="loader-parent">
                    <h5>Loading...</h5>
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="laptop-bottom">
        <div className="laptop-keyboard">
            <div className="keyboard-row top-keyboard-row">
                <div className="key key-1"></div>
                <div className="key key-2"></div>
                <div className="key key-3"></div>
                <div className="key key-4"></div>
                <div className="key key-5"></div>
                <div className="key key-6"></div>
                <div className="key key-7"></div>
                <div className="key key-8"></div>
                <div className="key key-9"></div>
                <div className="key key-10"></div>
            </div>
            <div className="keyboard-row middle-keyboard-row">
                <div className="key key-1"></div>
                <div className="key key-2"></div>
                <div className="key key-3"></div>
                <div className="key key-4"></div>
                <div className="key key-5"></div>
                <div className="key key-6"></div>
                <div className="key key-7"></div>
                <div className="key key-8"></div>
                <div className="key key-9"></div>
                <div className="key key-10"></div>
            </div>
            <div className="keyboard-row middle-bottom-keyboard-row">
                <div className="key key-1"></div>
                <div className="key key-2"></div>
                <div className="key key-3"></div>
                <div className="key key-4"></div>
                <div className="key key-5"></div>
                <div className="key key-6"></div>
                <div className="key key-7"></div>
                <div className="key key-8"></div>
                <div className="key key-9"></div>
                <div className="key key-10"></div>
            </div>
            <div className="keyboard-row bottom-keyboard-row">
                <div className="key key-1"></div>
                <div className="key key-2"></div>
                <div className="key key-3"></div>
                <div className="key space-bar"></div>
                <div className="key key-5"></div>
                <div className="key key-6"></div>
                <div className="key key-7"></div>

            </div>
        </div>
        <div className="laptop-mouse-pad"></div>
        <div className="laptop-bottom-edge"></div>
    </div>
</div>
  )
}

export default Laptop