import Post from "./post";
import { Grid, Typography } from "@mui/material";
// import {Posts} from './dummyData'
import { useEffect } from 'react';
import { useState } from "react";
import axios from "axios";

const backURL = 'http://localhost:5000/getpost'
const accessToken = localStorage.getItem('token')


const Feed = () => {
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        
    axios.get(backURL,accessToken
        // {
        // headers: {
        //     authorization: 'Bearer ' + accessToken
        // }}
        )
    .then(res =>{
            res.json(posts=>{
                console.log(posts)
                setPosts(posts);
            });
        })
        },[]);
        
    return( <Grid
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="stretch"
        maxWidth="sm">
            {posts.length >0 
            ? posts.map(p=>(
                <Post key={p.id} post={p}/>))
            : <Typography>There's no post!</Typography>
            }
            
            
      </Grid>
        
    )
}

export default Feed