import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/homepage'
import Register from './pages/register/register'
import Login from './pages/login'
import Test from './pages/test';



const App = () => {
  return <Router>
    <Routes>
      <Route path='/' element={<Homepage/>}> </Route>
      <Route path='/register' element={<Register/>}> </Route>
      <Route path='/login' element={<Login/>}> </Route>
      <Route path='/test' element={<Test />}> </Route>
    </Routes>
  </Router>
};

export default App;