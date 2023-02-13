import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login-register/pages/login";
import Homepage from "./homepage/pages/homepage";
import Profile from "./profile/pages/profile";
import ResetPassword from "./login-register/components/ResetPassword";
import { UserContext } from "./shared/contexts/username";
import useFetch from "./shared/hooks/usefetch";
import "./App.css";

const App = () => {
  const { data } = useFetch("http://localhost:5000/homepage/username", {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token")
    }
  });

  return (
    <UserContext.Provider value={{ username: data?.username }}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
