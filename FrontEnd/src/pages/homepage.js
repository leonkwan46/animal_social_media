import React from 'react';
import Post from "../components/createPost.js";
import TopNav from '../components/TopNav';
import Top_nav from '../components/Top_nav';
import Feed from '../components/Feed';

const Homepage = () => {

  return (
    <div className = "homepage">
      <TopNav />
      <Post/>
      </div>
    <div className = "homepage" >
        <Top_nav />
        
        <Feed />
        
    </div>
   
  )}


export default Homepage