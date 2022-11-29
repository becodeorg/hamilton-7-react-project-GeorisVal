import { Key, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import GameDetail from "./components/GameDetails";
import Search from "./components/Search";
import TopGames from "./components/TopGames";
import Nav from "./components/Nav"
// import { motion } from "framer-motion"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // https://reactrouter.com/en/main/start/tutorial
// import { uuid as randomId } from 'uuidv4';
// API Key: 8f0f7afd66254afbbd55e97e8ba32642
// API Docs: https://rawg.io/apidocs
import axios from 'axios';

function App() {
  return (   
    <Router>
      <div className="App m-auto mt-10">
        <Nav />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/TopGames" element={<TopGames />}/>
          <Route path="/Search" element={<Search />} />
          <Route path ="/Game/:name" element={<GameDetail />} />
          <Route path="/List" element={<Header />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
