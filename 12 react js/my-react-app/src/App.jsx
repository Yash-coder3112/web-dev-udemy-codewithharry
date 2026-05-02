import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [text, settext] = useState("hey")
  const btn1=() =>{
            settext("yo")
          }
  const btn2=()=>{
    settext("hi,bye")
  }

  return (
    <>
      
          <Navbar/>

          <div>{text}</div>

          




          <button onClick={btn1}>"button 1"</button>
          <button onClick={btn2}>button 2</button>
          
    </>
  )
}

export default App
