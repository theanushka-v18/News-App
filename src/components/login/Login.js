import React from 'react';
import { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import errorMapping from '../../utils/errorMapping';
import { useLoggedinStatus } from '../../context/LoggedinStatusContext';
import "./styles.css"

const Login = () => {
    const {loggedinStatus, setLoggedinStatus} = useLoggedinStatus();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleLogin() {
        if(!email || !password) {
            alert("Fill all the details!");
            return;
        }
        auth.signInWithEmailAndPassword(email, password).then((res) => {
            setLoggedinStatus(true);
            localStorage.setItem('loginStatus', true);
            alert("Successfully logged in!");
            navigate('/profile');
        }).catch((err) => {
            alert(errorMapping[err.code] || "Some error occurred!");
        })
    }

    function handleLogout() {
        auth.signOut().then((res) => {
            setLoggedinStatus(false);
            localStorage.setItem('loginStatus', false);
            alert("Logged Out!");
        })
    }

    return (
        <div className='login'>
            {loggedinStatus ? (<><h1>Already Loggedin!</h1> <button onClick={handleLogout}>Logout</button></>) : (<><label htmlFor="email">Email:</label><input id='email' type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password:</label><input id='password' type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
            <button id='login-btn' onClick={handleLogin}>Login</button></>)}
        </div>
    )
}

export default Login
