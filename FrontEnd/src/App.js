import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect,useState } from 'react';
import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Test from "./pages/test";
import Profile from "./pages/profile";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import {io} from 'socket.io-client'

const App = () => {
  const socket = io.connect("http://localhost:5000")
  const name = localStorage.getItem('name')
  
  useEffect(()=>{
    socket.emit("newUser", name);
  },[])

    
  return (
    <Router>
      <Routes>
        <Route path="/" socket={socket} element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />}  />
        <Route path="/profile" socket={socket} element={<Profile />} />
        <Route path="/reset-password"  socket={socket} element={<ResetPassword />} />
        <Route path="/profile/:id" socket={socket} element={<Profile />}  />
      </Routes>
    </Router>
  );
};

export default App;
