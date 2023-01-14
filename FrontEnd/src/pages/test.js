import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Test = async() => {

    const items = await axios.get("http://localhost:5000/test")
    
    return (
        <h1>{items}</h1>
    )
};

export default Test;