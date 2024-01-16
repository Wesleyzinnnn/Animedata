import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Searchpage from "./pages/Searchpage.jsx";
import "./index.css";
import Anime from "./pages/Anime.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Homepage />} />
          <Route path="search" element={<Searchpage />} />
          <Route path="anime/:mal_id" element={<Anime />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
