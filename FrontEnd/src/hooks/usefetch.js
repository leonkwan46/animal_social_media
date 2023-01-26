import axios from 'axios';
import { useEffect, useState } from 'react'

const useFetch = (url, headers) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    
    useEffect(() => {
        setLoading(true)
        const getData = async() => {
            await axios.get(url, headers)
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
                err.message = ""
                setError(err)
            }).finally(() => {
                setLoading(false)
            })
        }
        getData();
    }, [url])

    return { data, loading, error }
}

export default useFetch