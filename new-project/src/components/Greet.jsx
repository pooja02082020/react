import React from 'react'

function Greet(props) {
  return (
    <>
      <h1>This is the greet component</h1>
      <h3>This is the first developer : {props.fnames[0]}</h3>
      <h3>This is the second developer : {props.fnames[1]}</h3>
      <h3>This is the third developer : {props.fnames[2]}</h3>
      <h3>This is the fourth developer : {props.fnames[3]}</h3>
    </>
  )
}

export default Greet
