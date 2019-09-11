import React, { useState } from 'react';

const Form = props => {
    const [name, setName] = useState();

    const handleChange = (event) => {
        setName(event.target.value);
    }

    return (
        <form>
            Name: {name}
            <input
                onChange={handleChange}
                type="text" 
                name="name"
                placeholder="Name"
            />

            {/* <input
                type="text"
                name="email"
                placeholder="Email"
            />

            <select>
                <option>Full Stack Engineer</option>
                <option>Front End Engineer</option>
                <option>Backend Engineer</option>
                <option>UX/UI Engineer</option>
                <option>Data Science Engineer</option>
            </select> */}

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;