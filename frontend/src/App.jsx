// src/App.jsx
import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [fruits, setFruits] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api");
      setFruits(response.data.fruits); // store fruits in state
      console.log(response.data.fruits);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <h1>Fruits List:</h1>
      <ul>
        {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
      </ul>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
    </div>
  );
}

export default App;
