import Contact, { About } from "./components/Contact"
function App() {

  let fname = "Pooja"
  let greet = <h1>hello, woo!!</h1>
  return (
    <>
      {greet}
      <h1>Welcome to React</h1>
      {/* calling variable */}
      {/* { Info()}   */}
      {/* //calling function */}
      <About />
      <Contact name = {fname} age = {23} country= "Nepal" />
      {/* proper way of calling function -  <Info/>*/}

    </>
  )
}


export default App
