import React, { useRef } from 'react'

function App() {
  const myRefInput = useRef(null);

  let check = () =>{
    console.log(myRefInput)
    myRefInput.current.focus()
    myRefInput.current.style.color = "blue"
     myRefInput.current.placeholder ="write smth "
      myRefInput.current.value = 4356789
  }

  const toggleIp =()=>{
    if(myRefInput.current.style.display !="none")
      myRefInput.current.style.display ="none"
    else{
      myRefInput.current.style.display = "inline"
    }
  }
  return (
    <div>
      <button onClick={toggleIp}>Toggle</button>
      <input ref={myRefInput} type="text"  placeholder='Enter Username'/>
      <button onClick={check}>Focus</button>
    </div>
  )
}

export default App
