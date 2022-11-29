import { Key, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Categories";
import GameDetail from "./components/GameDetails";
import Search from "./components/Search";
import TopGames from "./components/TopGames";
import Nav from "./components/Nav"
import Platform from "./components/Platform"
import Tags from "./components/Tags"
// import { motion } from "framer-motion"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // https://reactrouter.com/en/main/start/tutorial
// import { uuid as randomId } from 'uuidv4';
// API Key: 952d287c927344c9bf73dc7afd0ab555
// API Docs: https://rawg.io/apidocs
import axios from 'axios';

function App() {
  return (   
    <Router>
      <div className="App m-auto mt-10">
        <Nav />
        <Routes>
          <Route path="/categories" element={<Header />} />
          <Route path="/topgames" element={<TopGames />}/>
          <Route path="/search" element={<Search />} />
          <Route path ="/game/:name" element={<GameDetail />} />
          <Route path="/platform/:name" element={<Platform />} />
          <Route path="/tag/:name" element={<Tags />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
