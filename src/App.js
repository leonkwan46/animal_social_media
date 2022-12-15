import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register'


const App = () => {
  return <Router>
    <Routes>
      <Route path='/' element={<Register/>}> </Route>
    </Routes>
  </Router>
};

export default App;