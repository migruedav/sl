import { React, useEffect, useState } from "react";
import "./App.css";
import { supabase } from "./supabase";

import NavBar from "./components/NavBar";
import Demographics from "./paginas/Demographics";
import Keywords from "./paginas/Keywords";
import Mentions from "./paginas/Mentions";
import Metrics from "./paginas/Metrics";
import Sentiment from "./paginas/Sentiment";
import TopPosts from "./paginas/TopPosts";
import Trends from "./paginas/Trends";
import Login from "./paginas/LoginPage";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Login />} path="/" exact />
          <Route element={<TopPosts />} path="/TopPosts" />
          <Route element={<Mentions />} path="/Mentions" />
          <Route element={<Sentiment />} path="/Sentiment" />
          <Route element={<Trends />} path="/Trends" />
          <Route element={<Keywords />} path="/Keywords" />
          <Route element={<Demographics />} path="/Demographics" />
        </Route>
        <Route element={<Login />} path="/login" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
