import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from "./pages/homepage"
import Register from './pages/register'
import Login from './pages/login';


const App = () => {
  return <Router>
    <Routes>
      <Route path='/' element={<Homepage/>}> </Route>
      <Route path='/register' element={<Register/>}> </Route>
      <Route path='/login' element={<Login/>}> </Route>
    </Routes>
  </Router>
};

export default App;