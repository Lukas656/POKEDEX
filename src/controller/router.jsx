import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../view/Home.jsx";
import App from "../view/App.jsx";
import Login from "../view/Login.jsx";
import Game from "../view/Game.jsx";
import NotFound from "../view/NotFound.jsx";

const Content = () => (
  <main className="Content">
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/app" exact element={<App />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/game" exact element={<Game />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
);

export default Content;
