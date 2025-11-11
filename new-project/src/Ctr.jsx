import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './ReduxStore/Action'

function Ctr() {
    const count = useSelector((state)=>state)
    const dispatch=useDispatch()
  return (
    <div>
        <h2>Count:{count}</h2>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Ctr
