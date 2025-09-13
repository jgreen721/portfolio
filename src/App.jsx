import {useState} from "react"
import {Hero,FixedMenu,About,Samples,Contact,Footer} from "./components"
import './App.css'

function App() {
  const [theme,setTheme] = useState("light")
  const [circleSize,setCircleSize] = useState("20%")
  const [focused,setFocused] = useState([]);




  onscroll=(e)=>{
    let headerHeight = 550;
    let percent = (window.pageYOffset/headerHeight).toFixed(2);
    let temp = 20 + (50 * percent);
    setCircleSize(`${temp}%`)
  }

  const handleThemeChange=()=>{
    setTheme((theme)=>theme == "light" ? "dark" : "light");
  }



  return (
    <div data-theme={theme} className="app">
      <FixedMenu handleThemeChange={handleThemeChange} theme={theme}/>
        <div className="app-content">
          <Hero circleSize={circleSize}/>

          <Samples/>
          <About focused={focused}/>
          <Contact/>
          <Footer/>
        </div>
    </div>
  )
}

export default App
