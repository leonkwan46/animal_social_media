import React from 'react'

import Logo from "../../assets/images/animal-society-low-resolution-logo-color-on-transparent-background.webp";

import "./header.css";
import IconButton from '@mui/material/IconButton';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';

// Logo, Home Button, Profile, Notifications, Chat.

const Header = () => {
  return (
    <header className = "header">
      <div className="logo-container">
        <img src = {Logo} alt = "logo" className='logo'/>
      </div>
      <div className="button-group">
        <IconButton><ChatBubbleOutlineIcon /></IconButton>
        <IconButton><NotificationsNoneIcon /></IconButton>
        <IconButton><PersonIcon /></IconButton>
      </div>
    </header>
  )
}

export default Header