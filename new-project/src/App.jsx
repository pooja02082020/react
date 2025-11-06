import React, { useEffect, useState } from 'react'
import Effect from './components/Effect'

function App() {
  let[counter,setCounter] =useState(0)
  let[data,setData]=useState(0)

  // function greet(){
    // console.log("How are you?")
  // }

  // useEffect(()=>{
    // greet();
  // },[data])  
  // greet();
  return (
    <div>
      <button onClick={()=>setCounter(counter+1)}>count:</button>
      <button onClick={()=>setData(data+1)}>Data</button>
      <Effect count={counter} data={data}/>
    </div>
  )
}

export default App
