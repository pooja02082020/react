import React from 'react'

// function MyInfo(props) {
function MyInfo({children,color}) {
  return (
    <div style={{color:color,background:"light",border:"2px solid blue"}}>
      {children}
    </div>
  )
}

export default MyInfo
