import React, {useEffect, useRef} from 'react'
import {samples} from "../../../../const"
import "./Laptop.css"

const Laptop = ({inView}) => {
        const progressRef = useRef();
        const loaderRef = useRef();
        const displayRef = useRef();


    useEffect(()=>{
        const handleProgressLoader=async()=>{
            await sleep(5000);
            startProgressLoader(0)

        }
        if(inView){
        console.log('start the proramming animations!!')
         handleProgressLoader();
        }
    },[inView])

    const startProgressLoader=async(progressVal)=>{
       
            progressRef.current.style.width = `${progressVal}%`
            await sleep(20)
            console.log(progressVal);
            if(progressVal < 100)startProgressLoader(++progressVal);
            else handleLoadMonitorDisplay();
    }

    const handleLoadMonitorDisplay=async()=>{
            loaderRef.current.classList.add("hide-loader-display")
            displayRef.current.classList.add("show-monitor-display");
    }

    const sleep=async(del)=>{
        await new Promise((resolve)=>setTimeout(()=>resolve(),del));

    }
  return (
    <div className="laptop">
    <div className="laptop-top">
        <div className="laptop-top-shell"></div>
        <div className="laptop-monitor">
            <div ref={loaderRef} className="monitor-loader">
                <div className="loader-parent">
                    <h5>Loading...</h5>
                    <div className="progress-bar">
                        <div ref={progressRef} className="progress"></div>
                    </div>
                </div>
            </div>
            <div ref={displayRef} className="monitor-display">
                <h3>Developer</h3>
                <h3>Climber</h3>
                <h5>And thats about it...</h5>
                <ul className="samples-list">
                    {samples.map(sample=>(
                        <li>
                            <img className="sample-img" src={sample.img} alt="img"/>
                        </li>
                    ))}
                </ul>
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