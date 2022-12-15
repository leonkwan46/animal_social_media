import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Register } from './pages/register'


const App = () => {
  return <Router>
    <Route path='/' element={<Register/>}></Route>
  </Router>
};

export default App;
