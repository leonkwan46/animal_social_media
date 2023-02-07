import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect,useState } from 'react';
import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Test from "./pages/test";
import Profile from "./pages/profile";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import "./App.css";

const App = () => {
    
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
