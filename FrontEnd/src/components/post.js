import React from 'react';
import axios from 'axios';
import { Typography, Grid, Avatar, Card, CardHeader, IconButton, CardContent } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { useEffect } from 'react';

// const backURL = 'http://localhost:5000/getpost'
// const accessToken = localStorage.getItem('token')
// const getPost = () => {
//     const [posts,setPosts] = useState([]);
//     useEffect(()=>{
//     // const postDB = async () =>
//     // await axios.get(backURL,accessToken)
//     // .then(res =>{
//     //     console.log(res)
//     //     setPosts()
        
//     // })
//     // .catch((err) => {
//     //     alert(err.response.data)
//     //     console.log('Error', err.response);
//     //   })
//     async function fetchData(){
//         const {data} = await http.get('backURL');
//         setPosts(data.data.posts);
//     }
//     })
//     }

const Post = (props) => {
    // props = getPost
    console.log(props);
    return (<Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      maxWidth="sm"
    >
        <Card
        sx={{
            bgcolor:'#f6d5d8',
            boxShadow:3,
            borderRadius:2,
            padding: 1,
            marginBottom:4,
            border:1

        }}>
            <CardHeader
            sx={{
                marginRight:2,
                marginBottom:1,}}
            avatar={
                <Avatar 
                sx={{
                    bgcolor: '#c6aea1',
                    border: 1,
                }}> 
                {props.post.username.charAt(0)}
                </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                }
                title={props.post.username}
                subheader={props.post.timestamp} />
            <CardContent
            sx={{
                bgcolor:'#FFFFFF',
                paddingBottom:4,
                paddingLeft:2,
                paddingTop:2,
                paddingRight:2,
                borderRadius:1,

            }}>
                <Typography>{props.post.message}</Typography>
            </CardContent>
        </Card>

    </Grid>
    
    
    )}

    export default Post