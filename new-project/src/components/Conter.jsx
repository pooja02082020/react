import React, { useState } from 'react'


function Conter() {
    let [count, setCount] =useState(0)
    let [dec, setDEc] =useState(100)
    let update = ()=>{
        setCount(count+1)
    }
  return (
    <div>
      <h2>{count}</h2>
      <h2>{dec}</h2>
      <button onClick={update}>Count Up</button>
     <button onClick={()=>setDEc(dec-1)}>Count down</button>
    </div>
  )
}

export default Conter
