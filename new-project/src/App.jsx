import React, { useState } from 'react'
import Conter from './components/Conter'
import Learner from './components/Learner'

function App() {
  let [show, setShow]=useState(true)
  return (
    <>
      {/* <Conter/> */}
    {/* {show?<h3>Welcome</h3>:null} */}
    {show?<Learner/>:null}
      <button onClick={()=>setShow(!show)}>Toggle</button>
    </>
  )
}

export default App
