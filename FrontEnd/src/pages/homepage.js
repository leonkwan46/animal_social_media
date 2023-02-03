import React from "react";
import Post from "../components/createPost.js";
import TopNav from "../components/TopNav/TopNav";
import NotificationWindow from "../components/notiWindow.js";
import Feed from "../components/feed&post/Feed.js";
import { Box, Container } from "@mui/system";
import "./homepage.css";

const Homepage = () => {
  return (
    <Container disableGutters={true} maxWidth={false} className="homepage">
      <TopNav />
      <Box className="body-wrapper">
        <Box className="left-side">
          <Post />
          <Feed />
        </Box>
        <Box className="right-side">
          <NotificationWindow />
        </Box>
      </Box>
    </Container>
  );
};

export default Homepage;
