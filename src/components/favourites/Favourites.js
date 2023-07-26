import React from 'react'
import { useLoggedinStatus } from '../../context/LoggedinStatusContext'
import { useNavigate } from 'react-router-dom';

const Favourites = () => {
    const navigate = useNavigate();
    const {loggedinStatus} = useLoggedinStatus();

    function gotoSignup() {
        navigate('/signup');
    }
    return (
        <div>
            {loggedinStatus ? (<h1>Favourites</h1>) : (<><h1>To access your favourite articles, please signup</h1> <button onClick={gotoSignup}>Signup</button></>)}
        </div>
    )
}

export default Favourites
