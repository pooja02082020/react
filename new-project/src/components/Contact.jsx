function Contact({ name, age, country }) {
    return (
        <>
            <h2>Contact Component</h2>
            {/* <p>Name: {props.name}</p> */}
            {/* <p>Age: {props.age}</p> */}
            {/* <p>Country: {props.country}</p> */}
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
            {/* <Info name= {name} age={age} country={country}/> */}
        </>
    )
}

export function About() {
    return <h3>About Component</h3>
}

export default Contact
