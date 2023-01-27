import React from 'react'
import useFetch from '../hooks/usefetch';
import { Typography, Skeleton } from '@mui/material';
import { Box, Container } from '@mui/system';
import Top_nav from '../components/Top_nav';
// import Top_nav from '../components/Top_nav';

const Test = () => {

    const { data, loading, error } = useFetch('http://localhost:5000/test', {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })

    // Have to use "data?", Because we are waiting for data to finish loading
    return (
        <Container maxWidth={false} disableGutters>
            <Top_nav />
            
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