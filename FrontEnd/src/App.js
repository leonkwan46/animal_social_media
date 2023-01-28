import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/homepage'
import RegisterButton from './components/register/RegisterButton'
import Login from './pages/login'
import Test from './pages/test';
import Profile from './pages/profile';


const App = () => {
  return <Router>
    <Routes>
      <Route path='/' element={<Homepage />}> </Route>
      <Route path='/register' element={<RegisterButton />}> </Route>
      <Route path='/login' element={<Login />}> </Route>
      <Route path='/test' element={<Test />}> </Route>
      <Route path='/profile' element={<Profile />}> </Route>
    </Routes>
  </Router>
};

export default App;