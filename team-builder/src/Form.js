import React, { useState } from 'react';

const Form = props => {

    const [newMember, setNewMember] = useState({
        name: "",
        email: "",
        role: ""
    })

    const handleChange = (event) => {
        setNewMember({ 
            ...newMember, 
            [event.target.name]: event.target.value 
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newMember)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                type="text" 
                name="name"
                placeholder="Name"
            />

            
            <input
                onChange={handleChange}
                type="text"
                name="email"
                placeholder="Email"
            />

            <select
                defaultValue={'DEFAULT'}
                onChange={handleChange}
                name="role"
            >
                <option value="DEFAULT" disabled hidden>Choose Here</option>
                <option>Full Stack Engineer</option>
                <option>Front End Engineer</option>
                <option>Backend Engineer</option>
                <option>UX/UI Engineer</option>
                <option>Data Science Engineer</option>
            </select>

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;