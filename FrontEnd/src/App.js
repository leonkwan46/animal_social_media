import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./homepage/pages/homepage";
import WelcomePage from "./welcomepage/pages/welcomepage";
import Profile from "./profile/pages/profile";
import ResetPassword from "./welcomepage/components/ResetPassword";
import { SocketContext, socket } from "./shared/contexts/context";
import { UserContext } from "./shared/contexts/username";
import useFetch from "./shared/hooks/usefetch";
import "./App.css";

const App = () => {
  const { data } = useFetch("http://localhost:5000/homepage/username", {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  return (
    <SocketContext.Provider value={socket}>
      <UserContext.Provider value={{ username: data?.username }}>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </SocketContext.Provider>
  );
};

export default App;
