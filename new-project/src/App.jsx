import React from 'react'

function App() {
  function clickEvent(){
    alert("I was clicked")
  }

  function greet(name){
    alert("Welcome "+ name)
  }


  function handleClick(event){
    console.log("Event " , event)
    
  }
  return (
     <>
      <button onClick={clickEvent}>click me!</button>
      <button onClick={()=>greet("Sushma")}>Greet</button>
      <button onClick={handleClick}>Event Check</button>
    </>
  )
}


export default App
