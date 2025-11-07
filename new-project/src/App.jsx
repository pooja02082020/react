import React, { useReducer } from 'react'
// INitial object set to 0
const inData ={
  name:'',
  password:'',
  email:'',
  city:'',
  country:''
}

let reducer =(state,action)=>{
  // console.log("State: ",state, "Action: ",action)
  // console.log("Action: ",action)

  return{...state,[action.type]:action.val}

}


function App() {
  let[state,dispatch]=useReducer(reducer,inData)
  console.log(state)
  return (
    <div>
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'name'})} placeholder='Enter Name' /><br /><br />
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'password'})} placeholder='Enter Password' /><br /><br />
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'email'})} placeholder='Enter Email' /><br /><br />
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'city'})} placeholder='Enter City' /><br /><br />
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'country'})} placeholder='Enter Country' /><br /><br />
    
    <br /><br />
    <ul>
      <li>Name: {state.name}</li>
      <li>Password:  {state.password}</li>
      <li>Email: {state.email} </li>
      <li>City:{state.city} </li>
      <li>Country:{state.country} </li>
    </ul>
    </div>
  )
}

export default App
