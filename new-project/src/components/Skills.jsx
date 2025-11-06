import React, { useState } from 'react'

function Skills() {
    let [skills, setSkills] = useState([])
    let getSkills = (event) => {
        console.log(event.target.value, event.target.checked)

        if (event.target.checked) {
            setSkills([...skills,event.target.value])
        }
        else{
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }

    }
    return (
        <div>
            <h2>Select your Skills</h2>
            <label htmlFor="Js">JavaScript</label>
            <input type="checkbox" onChange={getSkills} value="Javascript" name="" id="Js" /><br /><br />

            <label htmlFor="Java">Java</label>
            <input type="checkbox" onChange={getSkills} value="java" id="Java" /><br /><br />

            <label htmlFor="py">Python</label>
            <input type="checkbox" onChange={getSkills} value="python" id="py" /><br /><br />

            <label htmlFor="c">C++</label>
            <input type="checkbox" onChange={getSkills} value="c++" id="c" /><br /><br />
            <h2>{skills.toString()}</h2>
        </div>
    )
}

export default Skills
