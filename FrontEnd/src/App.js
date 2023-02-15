import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect,useState } from 'react';
import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Test from "./pages/test";
import Profile from "./pages/profile";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
// import {io} from 'socket.io-client'
import {socket,SocketContext} from '../src/components/context'

const App = () => {
  // const socket = io.connect("http://localhost:5000")
  // const name = localStorage.getItem('name')
  
  

    
  return (
    <SocketContext.Provider value={socket}>
    <Router>
      <Routes>
        <Route path="/"  element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />}  />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reset-password"  element={<ResetPassword />} />
        <Route path="/profile/:id" element={<Profile />}  />
      </Routes>
    </Router>
    </SocketContext.Provider>
  );
};

export default App;
