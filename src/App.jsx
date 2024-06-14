import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import App2 from './App2'

function App() {
  const [count, setCount] = useState(0)
   useEffect(()=>{
    console.log("your stage is monut");
   },[])
   useEffect(()=>{
    console.log("your count is start");
   },[count])
  return (
    <>
    <App2 count={" counter 1"}/>
    
    
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>increment</button>
    <button onClick={()=>setCount(0)}>reset</button>
    <button onClick={()=>setCount(count-1)}>increment</button>
    </>
  )
}

export default App
