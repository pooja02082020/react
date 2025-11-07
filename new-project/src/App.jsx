import React, { useRef } from 'react'

function App() {
  let handleForm = (event) => {
    event.preventDefault()
    console.log(event)
    let user = document.querySelector("#user").value
    console.log("USER IS ", user)
    let pass = document.querySelector("#pass").value
    console.log("Password IS ", pass)
  }


  const userRef = useRef();
  const passRef = useRef();
  let handleRef = (event)=>{
    event.preventDefault();
    let user = userRef.current.value
    let pass = passRef.current.value
    console.log("USER IS ", user)
    console.log("Password IS ", pass)

  }
  return (
    <div>
      <form action="" onSubmit={handleForm}>
        <input id='user' type="text" placeholder='Enter username' /><br /><br />
        <input id='pass' type="password" placeholder='Enter password' /><br /><br />
        <button>Submit</button>
      </form>

      <form action="" onSubmit={handleRef}>
        <input ref={userRef} type="text" placeholder='Enter username' />
        <input ref={passRef} type="password" placeholder='Enter password' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
