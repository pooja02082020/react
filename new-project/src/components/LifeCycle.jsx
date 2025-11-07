import React, { useEffect } from 'react'

function LifeCycle({ count }) {
  useEffect(() => {
    console.log("Mounting Phase")
  }, [])

  useEffect(() => {
  console.log("Updating Phase")
}, [count])
  
useEffect(() => {
  return ()=>{
    console.log("Clean up before unmounting")
  }
})

  return (
    <div>
      <h1>Inside the Lifecycle Component</h1>
      <h3>Count: {count}</h3>
    </div>
  )
}

export default LifeCycle
