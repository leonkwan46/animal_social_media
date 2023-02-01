import React from "react";
import Post from "../components/createPost.js";
import TopNav from "../components/TopNav";
import Feed from "../components/Feed";
import "./homepage.css";
import { Box, Container } from "@mui/system";

const Homepage = () => {
  return (
    <Container disableGutters={true} maxWidth={false} className="homepage">
      <TopNav />
      <Box className="body-wrapper">
        <Box className="left-side">
          <Post />
          <Feed />
        </Box>
        <Box className="right-side">fdaf</Box>
      </Box>
    </Container>
  );
};

export default Homepage;
