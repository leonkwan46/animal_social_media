import React from "react";
import Post from "../components/createPost.js";
import TopNav from "../components/TopNav";
import { Container, Box } from "@mui/system";
import Feed from "../components/Feed";

import "./homepage.css";

const Homepage = () => {
  return (
    <Container className="homepage" disableGutters={true} maxWidth={false}>
      <TopNav />
      <Box className="left-side">
        <Post />
        <Feed />
      </Box>
    </Container>
  );
};

export default Homepage;
