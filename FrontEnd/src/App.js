import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Test from "./pages/test";
import Profile from "./pages/profile";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />}  />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<Profile />}  />
      </Routes>
    </Router>
  );
};

export default App;
