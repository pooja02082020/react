import React, { useState } from 'react'
import { courseContext } from './components/DataContext'
import University from './components/University'

function App() {
  //let c1 = "DBMS"
  let [course,setCourse] =useState("")
  return (
    <div style={{ background: 'aqua', border: '2px solid black', padding: '10px', textAlign: 'center' }}>
      <courseContext.Provider value={course}>
        <select value={course} onChange={(event)=>setCourse(event.target.value)}>
          <option value="" selected>Select Course</option>
          <option value="Python">Python</option>
          <option value="operating system">OS</option>
          <option value="Java">Java</option>
          <option value="CSS">CSS</option>
          <option value="Blockchain">Block Chain</option>
          <option value="HTML">HTML</option>
        </select>
        <button onClick={()=>setCourse("")}>Clear</button>
        <h1>Container</h1>
        <University />
      </courseContext.Provider>
    </div>
  )
}



export default App
