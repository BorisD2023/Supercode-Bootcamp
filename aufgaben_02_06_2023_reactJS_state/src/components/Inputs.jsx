import { useState } from "react"

const Inputs = () =>{
    const [firstName, setFirstName] = useState ("")
    const [lastName, setLastName] = useState ("")
    const [email, setEmail] = useState("")

    const firstNameChange = (e) => {
        setFirstName(e.target.value)
    };
    const lastNameChange = (e) => {
        setLastName(e.target.value)
    }
    const emailChange = (e) => {
        setEmail(e.target.value)
    }

    return(
        <div>
            <label htmlFor="firstName">Vorname:</label>
            <input type="text" value={firstName} onChange={firstNameChange} />
            <label htmlFor="lastName">Nachname:</label>
            <input type="text" value={lastName} onChange={lastNameChange} />
            <label htmlFor="email">Email:</label>
            <input type="text" value={email} onChange={emailChange}/>
            <p>Vorname: {firstName}</p>
            <p>Nachname: {lastName}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export default Inputs 