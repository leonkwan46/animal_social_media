import Post from "./post";
import { Grid, Typography} from "@mui/material";
// import {Posts} from './dummyData'
import { useEffect } from 'react';
import { useState } from "react";
import axios from "axios";
 import "./feed.css"
import { Box, Container } from "@mui/system";




const Feed = () => {
    const [status,setData] = useState([])
    const backURL = 'http://localhost:5000/homepage'
    const accessToken = localStorage.getItem('token')
    
    useEffect(() =>{
        const getData = async() =>{
            try{
                 axios.get(backURL,{
                        headers: {
                            authorization: 'Bearer ' + accessToken
                        }})
                        .then((res)=>{
                        const message = JSON.stringify(res.data)
                        console.log(res.data)
                        console.log(message)
                        setData(res.data)})
                ;
                console.log(status)
                console.log(status.length)
            } catch(err){
                alert('Error retrieving data!!!');
            }
        }
        getData();
    },[]);
    // = async() => axios.get(backURL,{
    //     headers: {
    //         authorization: 'Bearer ' + accessToken
    //     }})
    // .then((res) => {
    // const data = res.data;
    // console.log(data)
    // })
    // .catch(() => {
    // alert('Error retrieving data!!!');
    //  });

    return( 
    // ({handleSubmit}) => {
        
    <div
        className="post-wrapper"
        >
            <Box>
            {status.length >0 ? status.map(p=>(
                <Post key={p._id} post={p}/>))
                
            : <Typography>There's no post!</Typography>
            }
            </Box>
            <br/>
            <Box>
            {status.length >0 ? 
            <Typography> - That's all. - </Typography>
            :<Typography></Typography>}
            </Box>
      </div>
      )}
    //   )}}
       
    
    
export default Feed