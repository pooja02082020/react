import React from 'react'

function NewUSer({data}) {
  return (
    <div style={{border:"2px solid black",width:"300px",margin:"20px",borderRadius:"20px",backgroundColor:"lightcoral"}}>
      <h2>Name:{data.name}</h2>
      <h2>Id:{data.id}</h2>
      <h2>Email:{data.email}</h2>
    </div>
  )
}

export default NewUSer
