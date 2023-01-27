import React from 'react';
import Top_nav from '../components/Top_nav';
import Post from "../components/createPost.js";
const Homepage = () => {


  return (
    <div className = "homepage">
      <Top_nav />
      <Post/>
    </div>
  )
}

export default Homepage