import React from 'react'
import { Link } from 'react-router-dom';


export default function UserName({ userName }) {
    return (
        <>
            <div>UserName: {userName}</div>
            <Link to='/'>Home</Link>

        </>
    )
}
