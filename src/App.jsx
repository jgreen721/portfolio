import {useState} from "react"
import {Hero,FixedMenu,About} from "./components"
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

  const handleThemeChange=()=>{
    setTheme((theme)=>theme == "light" ? "dark" : "light");
  }



  return (
    <div data-theme={theme} className="app">
      <div className="app-content">
        <FixedMenu handleThemeChange={handleThemeChange} theme={theme}/>
          <Hero circleSize={circleSize}/>
          <About/>
          {/* <AboutMe/> */}
      </div>
    </div>
  )
}

export default App
