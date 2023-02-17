import React from "react";
import { useState, useEffect } from "react";
import Post from "../components/createPost.js";
import TopNav from "../../shared/components/TopNav";
import NotificationWindow from "../components/notiWindow.js";
import Feed from "../../shared/components/Feed.js";
import { Box, Container } from "@mui/system";
import "./homepage.css";
import { SocketContext } from "../../shared/contexts/context.js";
import { useContext } from "react";



const Homepage = () => {
  

  const socket = useContext(SocketContext);
  const token = localStorage.getItem('token')
  const [refreshFeed, setRefreshFeed] = useState(false);
  

  return (
    <Container disableGutters={true} maxWidth={false} className="homepage">
      <TopNav />
      <Box className="body-wrapper">
        <Box className="left-side">
          <Post socket={socket} token = {token} setRefreshFeed={setRefreshFeed}/>
          <Feed setRefreshFeed={setRefreshFeed}/>
        </Box>
        <Box className="right-side">
          <NotificationWindow socket={socket}/>
        </Box>
      </Box>
    </Container>
  );
};

export default Homepage;
