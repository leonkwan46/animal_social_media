import React from 'react';
import Post from "../components/createPost.js";
import TopNav from '../components/TopNav';

import Feed from '../components/Feed';
import { Grid, TextField } from '@mui/material';

const Homepage = () => {

  
  return (
    
    <div className = "homepage">
      <TopNav />
      <Grid>
      <Post/>
      <Feed />
      </Grid>
    </div>
   
  )}


export default Homepage
