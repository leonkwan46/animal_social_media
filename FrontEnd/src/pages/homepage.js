import React from 'react';
import Post from "../components/createPost.js";
import TopNav from '../components/TopNav';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import charoPic from "../assets/images/charo.jpg";
import "./homepage.css";
import { Box, Container } from '@mui/system';

const Homepage = () => {

  return (
    <Container disableGutters={true} maxWidth = {false} className = "homepage">
      <TopNav />
      <Box className="left-side">
        <Post />
      </Box>
    </Container>
  )
}

export default Homepage