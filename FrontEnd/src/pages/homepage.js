import React from "react";
import { useState, useEffect } from "react";
import Post from "../components/createPost.js";
import TopNav from "../components/TopNav/TopNav";
import NotificationWindow from "../components/notiWindow.js";
import Feed from "../components/feed&post/Feed.js";
import { Box, Container } from "@mui/system";
import "./homepage.css";
import {io} from 'socket.io-client'



const Homepage = (socket) => {

// const socket = io.connect("http://localhost:5000")
const socketHomepage = socket
const name = localStorage.getItem('name')
  
  // useEffect(()=>{
  //   socket.emit("newUser", name);
  // },[])


  return (
    <Container disableGutters={true} maxWidth={false} className="homepage">
      <TopNav />
      <Box className="body-wrapper">
        <Box className="left-side">
          <Post socket={socketHomepage} name = {name}/>
          <Feed />
        </Box>
        <Box className="right-side">
          <NotificationWindow socket={socketHomepage}/>
        </Box>
      </Box>
    </Container>
  );
};          

export default Homepage;
