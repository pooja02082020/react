import React from 'react'

function Developer({details}) {
  return (
    <>
      <h1>
        List of developers
      </h1>
      <h3> Developer </h3>
      <h5>Name : {details.name}</h5>
       <h5>Id : {details.id}</h5>
        <h5>Country : {details.country}</h5>
    </>
  )
}

export default Developer
