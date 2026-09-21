import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./components/Home";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://zerodha-clone-mfwh.onrender.com";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);