import React from "react";
import { useState, useEffect } from "react";
import Post from "../components/createPost.js";
import TopNav from "../../shared/components/TopNav";
import NotificationWindow from "../components/notiWindow.js";
import Feed from "../../shared/components/Feed.js";
import { Box, Container } from "@mui/system";
import "./homepage.css";
import { io } from "socket.io-client";

const Homepage = () => {
  const socket = io.connect("http://localhost:5000");
  const name = localStorage.getItem("name");
  const [refreshFeed, setRefreshFeed] = useState(false);

  useEffect(() => {
    console.log(name);
    socket.emit("newUser", name);
  }, []);

  return (
    <Container disableGutters={true} maxWidth={false} className="homepage">
      <TopNav />
      <Box className="body-wrapper">
        <Box className="left-side">
          <Post socket={socket} name={name} setRefreshFeed={setRefreshFeed} />
          <Feed refreshFeed={refreshFeed} />
        </Box>
        <Box className="right-side">
          <NotificationWindow socket={socket} />
        </Box>
      </Box>
    </Container>
  );
};

export default Homepage;
