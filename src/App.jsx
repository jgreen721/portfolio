import {useState} from "react"
import {Hero} from "./components"
import './App.css'

function App() {
  const [theme,setTheme] = useState("")

  return (
    <div data-them="light" className="app">
      <div className="app-content">
          <Hero/>
          kdkdkd
      </div>
    </div>
  )
}

export default App
