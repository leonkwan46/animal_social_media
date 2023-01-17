import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Test = () => {

    const token = localStorage.getItem('token')
    const data = axios.get('http://localhost:5000/test').then((res) => {
        alert(JSON.stringify(res.data))
    })
    
    return (
        <h1>ABC</h1>
    )
};

export default Test;