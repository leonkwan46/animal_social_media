import React from 'react'

import Logo from "../../assets/images/animal-society-low-resolution-logo-color-on-transparent-background.webp";

import "./header.css";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

// Logo, Home Button, Profile, Notifications, Chat.

const Header = () => {
  return (
    <header className = "header">
      <div className="logo-container">
        <img src = {Logo} alt = "logo" className='logo'/>
      </div>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button>Chat</Button>
        <Button>Notification</Button>
        <Button>Profile</Button>
      </ButtonGroup>
    </header>
  )
}

export default Header