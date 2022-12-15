import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from "./pages/Homepage"
import Register from './pages/register'


const App = () => {
  return <Router>
    <Routes>
      <Route path='/' element={<Homepage/>}> </Route>
      <Route path='/register' element={<Register/>}> </Route>
      <Route path='/login' element={<Register/>}> </Route>
    </Routes>
  </Router>
};

export default App;