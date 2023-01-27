import React from 'react'
import useFetch from '../hooks/usefetch';
import { Typography, Skeleton } from '@mui/material';
import { Box, Container } from '@mui/system';
import TopNav from '../components/TopNav';

const Test = () => {

    const { data, loading, error } = useFetch('http://localhost:5000/test', {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })


    // |||||
    // vvvvv
    // This is the olde way to get API call

    // axios.get('http://localhost:5000/test', {
    //     headers: {
    //         authorization: 'Bearer ' + localStorage.getItem('token')
    //     }
    // }).then((res)=> {
    //     setUsername(res.data.data.username)
    //     setPasswrod(res.data.data.password)
    // }).catch((err) => {
    //     // USE [err.response.data] TO GET CUSTOM MESSAGE
    //     console.log('====================================');
    //     console.log(err.response.data);
    //     console.log('====================================');
    // })


    // Have to use "data?", Because we are waiting for data to finish loading
    return (
        <Container maxWidth={false} disableGutters>
            <TopNav />
            
            <Box sx={{padding: '10% 10%'}}>
                <Typography variant='h4'>Username: </Typography> 
                {loading?<Skeleton animation="wave" width={'50%'} />:null}
                {error?(<Typography>{error}</Typography>):null}
                {data?.data.username}
                <Typography variant='h4'>Password: </Typography>
                {loading?<Skeleton animation="wave" width={'50%'} />:null}
                {error?(<Typography>{error}</Typography>):null}
                {data?.data.password}
            </Box>

        </Container>
    )
};

export default Test;