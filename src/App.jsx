import {useState} from "react"
import {Hero,AboutMe} from "./components"
import './App.css'

function App() {
  const [theme,setTheme] = useState("light")
  const [circleSize,setCircleSize] = useState("20%")




  onscroll=(e)=>{
    let headerHeight = 550;
    let percent = (window.pageYOffset/headerHeight).toFixed(2);
    // console.log("percent",percent);
    let temp = 20 + (50 * percent);
    setCircleSize(`${temp}%`)
  }



  return (
    <div data-them={theme} className="app">
      <div className="app-content">
          <Hero circleSize={circleSize}/>
          <AboutMe/>
      </div>
    </div>
  )
}

export default App
