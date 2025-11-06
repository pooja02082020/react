import React, { useEffect } from 'react'

function Effect(count,data) {
    let checkProp=()=>{
        console.log("I was called inside EFFECT")
    }

    useEffect(()=>{
checkProp();
    },[data])
    // checkProp();
  return (
    <div>
      <h2>Count:{count}</h2>
      <h2>Data:{data}</h2>
    </div>
  )
}

export default Effect
