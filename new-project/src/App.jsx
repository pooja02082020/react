import React, { Component } from 'react'
//import './App.css'
import InnerComp from './components/InnerComp'
import styles from './App.module.css'
import styled from 'styled-components'

export class App extends Component {
  render() {
    // inline style
    // const hstyle ={
    // color:"brown",
    // backgroundColor:"blue"
    // }
    // 

    //Create  a tag
    let Title = styled.h1
      `color: green;
    font-size:40px;
    background-color:yellow`

    let Btn = styled.button
      `
      color:green;
      background-color:yellow;
      `
    return (
      <div>
      <Btn>Click Me!</Btn>
        {/* <h1 style={hstyle}>Welcome to my Webpage</h1> */}
        <h1 className={styles.heading}>Welcome to my Webpage</h1>
        <hr />
        <Title>This is an example of styled element</Title>
        <h1 >another h1 tag</h1>
        <h4 id='heading'> List of Skills</h4>
        <ul className='list'>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>Java</li>
          <li>Python</li>
        </ul>
        <InnerComp />
      </div>
    )
  }
}

export default App
