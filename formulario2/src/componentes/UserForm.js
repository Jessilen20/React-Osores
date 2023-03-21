import React, { useState } from 'react';
import './UserForm.css';

const UserForm = (props) => {
    const [password, setPassword] = useState("");
    const [confirmpass, setconfirmpass] = useState("");

    const [firstnameerror, setfirstnameerror] = useState("");
    const [lastnameerror, setlastnameerror] = useState("");
    const [emailerror, setemailerror] = useState("");
    const [passworderror, setpassworderror] = useState("");
    const [comparpass, setcomparpass] = useState("");

    const adfirstname = (e) => {
        setfirstnameerror(e.target.value);
        if (e.target.value.length < 2) {
            setfirstnameerror("First Name must be at least 2 characters");
        }
        else {
            setfirstnameerror('');
        }
    }

    const adlastname = (e) => {
        setlastnameerror(e.target.value);
        if (e.target.value.length < 2) {
            setlastnameerror("Last Name must be at least 2 characters");
        }
        else {
            setlastnameerror('');
        }
    }

    const ademailerror = (e) => {
        setemailerror(e.target.value);
        if (e.target.value.length < 2) {
            setemailerror("Email must be at least 2 characters");
        }
        else {
            setemailerror('');
        }
    }
    const adpasserror = (e) => {
        setpassworderror(e.target.value);
        if (e.target.value.length < 8) {
            setpassworderror("Password must be at least 8 characters");
        }
        else {
            setpassworderror('');
        }
    }
    const passequal = (e) => {
        setcomparpass(e.target.value);
        if (setPassword !== setconfirmpass) {
            setcomparpass("Passwords must match");
        }
        else {
            setcomparpass("");
        }
    }

    return (
        <div>
            <form className='formulario' onSubmit={(e) => e.preventDefault()}>
                <div className='formI'>
                    <label>First Name: </label>
                    <input type="text" onChange={adfirstname} />
                    {
                        firstnameerror ?
                            <p style={{ color: 'red' }}>{firstnameerror}</p> :
                            ''
                    }
                </div>
                <div className='formI'>
                    <label>Last Name: </label>
                    <input type="text" onChange={adlastname} />
                    {
                        lastnameerror ?
                            <p style={{ color: 'red' }}>{lastnameerror}</p> :
                            ''
                    }
                </div>
                <div className='formI'>
                    <label>Email Address: </label>
                    <input type="email" onChange={ademailerror} />
                    {
                        emailerror ?
                            <p style={{ color: 'red' }}>{emailerror}</p> :
                            ''
                    }
                </div>
                <div className='formI'>
                    <label>Password: </label>
                    <input type="password" onChange={adpasserror} />
                    {
                        passworderror ?
                            <p style={{ color: 'red' }}>{passworderror}</p> :
                            ''
                    }
                    {
                        comparpass ?
                            <p style={{ color: 'red' }}>{comparpass}</p> :
                            ''
                    }
                </div>
                <div className='formI'>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={passequal} />
                </div>
            </form>
        </div>

    );
};

export default UserForm;
