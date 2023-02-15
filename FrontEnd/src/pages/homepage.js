import React from "react";
import { useState, useEffect } from "react";
import Post from "../components/createPost.js";
import TopNav from "../components/TopNav/TopNav";
import NotificationWindow from "../components/notiWindow.js";
import Feed from "../components/feed&post/Feed.js";
import { Box, Container } from "@mui/system";
import "./homepage.css";
import { SocketContext } from "../components/context.js";
import { useContext } from "react";



const Homepage = () => {

// const socket = io.connect("http://localhost:5000")
// const socketHomepage = socket
const socketHomepage = useContext(SocketContext);
// const name = localStorage.getItem('name')
const token = localStorage.getItem('token')
  
  // useEffect(()=>{
  //   socketHomepage.emit("newUser", token);
  // },[])


  return (
    <Container disableGutters={true} maxWidth={false} className="homepage">
      <TopNav />
      <Box className="body-wrapper">
        <Box className="left-side">
          <Post socket={socketHomepage} token = {token}/>
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
