import { useState, useReducer } from 'react'
import CoverPhoto from '../Components/Profile/CoverPhoto.jsx'
import UserDetails from '../Components/Profile/UserDetails.jsx'
import UserFeed from '../Components/Profile/UserFeed.jsx'

const initialProfile = [
    {
        name: "Nathan Faiyaz",
        bio: "Software Developer",
        location: "Manila",
        username: "nfaiyaz",
        email: "nfaiyaz@gmail.com",
        address: "123 Main Street, Anytown, USA",
        followers: 2654,
        following: 316,
        likes: 12644,
    },
    {
        name: "John Doe",
        bio: "Software Engineer",
        location: "Japan",
        username: "jdoe",
        email: "jdoe@gmail.com",
        address: "123 Main Street, Anytown, USA",
        followers: 2231,
        following: 351,
        likes: 2512,
    }
]

const reducer = (state, action) => {
    
}

export default function Profile() {
    const [profile, dispatch] = useReducer(reducer, initialProfile);

    return (
        <>
            <CoverPhoto />
            <div className='mx-auto max-w-screen-lg'>
                <UserDetails />
                <UserFeed />
            </div>

        </>
    )
}
