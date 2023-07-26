import React from 'react';
import { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import errorMapping from "../../utils/errorMapping";
import "./styles.css";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    function handleSignup() {
        if(!email || !password || !confirmPassword) {
            alert("Please fill all the details!");
            return;
        }
        if(confirmPassword !== password) {
            alert("Password mismatch!");
            return;
        }
        auth.createUserWithEmailAndPassword(email, password).then((res) => {
            alert("User Created");
            navigate('/login');
        }).catch((err) => {
            alert(errorMapping[err.code] || "some error occurred");
        })
    }
    function gotoLogin() {
        navigate('/login');
    }

    return (
        <div className='signup'>
            <label htmlFor="email">Email:</label>
            <input id='email' type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input id='password' type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input id='confirmPassword' type='password' placeholder='confirm password' onChange={(e) => setConfirmPassword(e.target.value)} />
            <button id='signup-btn' onClick={handleSignup}>Signup</button>
            <p>Already a user? <button onClick={gotoLogin}>Login here</button></p>
        </div>
    )
}

export default Signup
