import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './ReduxToolKit/CounterSlice'
import { decrement } from './ReduxToolKit/CounterSlice'
import { setAge, setUser } from './ReduxToolKit/userSlice'

function App() {
  let count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  let user = useSelector((state) => state.user)
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <br /><br />
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>

      <button onClick={()=>dispatch(setUser({name:"Pooja",age:25}))}>Update User</button>
       <button onClick={()=>dispatch(setAge({age:30}))}>Update Age</button>

    </div>
    
  )
}

export default App
