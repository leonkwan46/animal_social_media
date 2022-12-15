import React, {useState}from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [num, setNum] = useState(0);

  const incrementNumber = () => {
    setNum(prev => prev + 1);
  }

  return (
    <div className="App">
      <h2>{num}</h2>
      <button onClick = {incrementNumber}>Increment</button>
    </div>
  );
}

export default App;
