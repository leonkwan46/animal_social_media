import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        
    }, [url])
}

export default useFetch