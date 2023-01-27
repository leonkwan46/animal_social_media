import React from 'react';
import Post from "../components/createPost.js";
import TopNav from '../components/TopNav';

const Homepage = () => {

  return (
    <div className = "homepage">
      <TopNav />
      <Post/>
    </div>
  )
}

export default Homepage