import React from 'react';
import Post from "../components/createPost.js";
import TopNav from '../components/TopNav';

import "./homepage.css";

const Homepage = () => {

  return (
    <div className = "homepage">
      <TopNav />
      <div className="left-side">
        <Post/>
      </div>
    </div>
  )
}

export default Homepage