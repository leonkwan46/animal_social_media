import React from "react";
import Post from "../components/createPost.js";
import TopNav from "../components/TopNav";
import { Container } from "@mui/system";
import Feed from "../components/Feed";

import "./homepage.css";

const Homepage = () => {
  return (
    <Container className="homepage">
      <TopNav />
      <Post />
      <Feed />
    </Container>
  );
};

export default Homepage;
