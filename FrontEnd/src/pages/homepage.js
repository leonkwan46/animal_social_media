import React from "react";
import Post from "../components/createPost.js";
import TopNav from "../components/TopNav";

import "./homepage.css";
import { Box, Container } from "@mui/system";

const Homepage = () => {
  return (
    <Container disableGutters={true} maxWidth={false} className="homepage">
      <TopNav />
      <Box className="left-side">
        <Post />
      </Box>
    </Container>
  );
};

export default Homepage;
