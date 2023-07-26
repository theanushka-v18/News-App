import React from 'react';
import { useLoggedinStatus } from '../../context/LoggedinStatusContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const {loggedinStatus} = useLoggedinStatus();

    function gotoSignup() {
        navigate('/signup');
    }

    return (
        <div className='profile'>
            {loggedinStatus ? (<h1>Profile</h1>) : (<><h1>To view your profile, please signup</h1> <button onClick={gotoSignup}>Signup</button></>)}
        </div>
    )
}

export default Profile
