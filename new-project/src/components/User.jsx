import React from 'react'

function User({name = "User"}) {
  return (
    <div>
      <h3>Welcome , {name}</h3>
      
    </div>
  )
}

export default User
