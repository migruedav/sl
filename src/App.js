import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Demographics from "./paginas/Demographics";
import Keywords from "./paginas/Keywords";
import Mentions from "./paginas/Mentions";
import Metrics from "./paginas/Metrics";
import Sentiment from "./paginas/Sentiment";
import topPosts from "./paginas/TopPosts";
import TopPosts from "./paginas/TopPosts";
import Trends from "./paginas/Trends";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<TopPosts/>}></Route>
        <Route path="/TopPosts" element={<TopPosts/>}></Route>
        <Route path="/Demographics" element={<Demographics/>}></Route>
        <Route path="/Keywords" element={<Keywords/>}></Route>
        <Route path="/Mentions" element={<Mentions/>}></Route>
        <Route path="/Metrics" element={<Metrics/>}></Route>
        <Route path="/Sentiment" element={<Sentiment/>}></Route>
        <Route path="/Trends" element={<Trends/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;