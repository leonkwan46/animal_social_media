import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Test = () => {
    const [username, setUsername] = useState()
    const [password, setPasswrod] = useState()

    axios.get('http://localhost:5000/test', {
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then((res)=> {
        setUsername(res.data.data.username)
        setPasswrod(res.data.data.password)
    })
    return (
        <div>
            <h1>Username: {username}</h1>
            <h1>Password: {password}</h1>
        </div>
    )
};

export default Test;