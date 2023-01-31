import React from "react";
import Post from "../components/createPost.js";
import TopNav from "../components/TopNav";
import { Container, Box } from "@mui/system";
import Feed from "../components/Feed";

const Homepage = () => {
  return (
    <Container disableGutters={true} maxWidth={false} className="homepage">
      <TopNav />
      <Box className="left-side">
        <Post />
        <Feed />
      </Box>
    </Container>
  );
};

export default Homepage;
