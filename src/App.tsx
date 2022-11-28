import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
// import { motion } from "framer-motion"
// import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"; https://reactrouter.com/en/main/start/tutorial
// import { uuid as randomId } from 'uuidv4';
// API Key: 8f0f7afd66254afbbd55e97e8ba32642
// API Docs: https://rawg.io/apidocs
import axios from 'axios';

async function getGames() {
  const query = await axios.get('https://api.rawg.io/api/platforms?key=8f0f7afd66254afbbd55e97e8ba32642');
  const data = await query.data.results;
  const games = data.games;
  console.log(data.slug)
}

function App() {
  const [count, setCount] = useState(0);
  getGames()
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
