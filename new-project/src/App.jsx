import React, { useState } from 'react'
import LifeCycle from './components/LifeCycle'

function App() {
  const [count, setCount] = useState(0)
  const [show,setShow] = useState(true)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <button onClick={()=>setShow(!show)}>Toggle</button>
      {show?<LifeCycle  count={count}/>:null}
      
      {/* <LifeCycle count={count} /> */}
    </div>
  )
}

export default App
