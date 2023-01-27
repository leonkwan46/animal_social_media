import React from 'react';
import Top_nav from '../components/Top_nav';
import Feed from '../components/Feed';

const Homepage = () => {
  return (
    <div className = "homepage" >
        <Top_nav />
        
        <Feed />
        
    </div>
   
  )
}

export default Homepage