import {useState} from "react"
import {Hero} from "./components"
import './App.css'

function App() {
  const [theme,setTheme] = useState("light")

  return (
    <div data-them={theme} className="app">
      <div className="app-content">
          <Hero/>
      </div>
    </div>
  )
}

export default App
