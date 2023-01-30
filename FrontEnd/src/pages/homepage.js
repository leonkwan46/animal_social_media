<<<<<<< HEAD
const Homepage = () => {
  return (
    <h1>HI</h1>
  );
};

export default Homepage;
=======
import React from 'react';
import Post from "../components/createPost.js";
import TopNav from '../components/TopNav';

import Feed from '../components/Feed';

const Homepage = () => {

  return (
    <div className = "homepage">
      <TopNav />
      <Post/>
      <Feed />
        
    </div>
   
  )}


export default Homepage
>>>>>>> developers
