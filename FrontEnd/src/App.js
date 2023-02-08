import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login-register/pages/login";
import Homepage from "./homepage/pages/homepage";
import Profile from "./profile/pages/profile";
import ResetPassword from "./login-register/components/ResetPassword";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
