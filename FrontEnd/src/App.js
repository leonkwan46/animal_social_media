import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect,useState } from 'react';
import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Test from "./pages/test";
import Profile from "./pages/profile";
import ResetPassword from "./pages/ResetPassword/ResetPassword";


const App = () => {
  const { data } = useFetch("http://localhost:5000/homepage/username", {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token")
    }
  });

  return (
    <SocketContext.Provider value={socket}>
      <UserContext.Provider value={{ username: data?.username }}>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />}  />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile/:id" element={<Profile />}  />
      </Routes>
    </Router>
    </UserContext.Provider>
    </SocketContext.Provider>
  );
};

export default App;
