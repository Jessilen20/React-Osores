import React, { useState } from 'react';
import './UserForm.css';

const UserForm = (props) => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpass, setconfirmpass] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpass };
        console.log("Welcome", newUser);
    };

    return (
        <div>
<form className='formulario' onSubmit={createUser}>
            <div className='formI'>
                <label>First Name: </label>
                <input type="text" onChange={(e) => setfirstname(e.target.value)} />
            </div>
            <div className='formI'>
                <label>Last Name: </label>
                <input type="text" onChange={(e) => setlastname(e.target.value)} />
            </div>
            <div className='formI'>
                <label>Email Address: </label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='formI'>
                <label>Password: </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='formI'>
                <label>Confirm Password: </label>
                <input type="password" onChange={(e) => setconfirmpass(e.target.value)} />
            </div>
        </form>
        <div className='resultado'>
                <h2>Resultados</h2>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmpass}</p>
            </div>
        </div>
        
    );
};

export default UserForm;
