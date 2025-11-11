import React, { lazy, Suspense, useState } from 'react'
// import Visitor from './components/Visitor'
let Comp = lazy(()=>import('./components/Visitor'))

function App() {
  let[load,setLoad]=useState(false)
  return (
    <div>
      {load?<Suspense fallback ={<h2>Loading....</h2>}><Comp/></Suspense>:null
      }
      {/* {
        // load? <Visitor/>:null
      // } */}
     <button onClick={()=>setLoad(true)}>Load Visitor</button>
    </div>
  )
}

export default App
