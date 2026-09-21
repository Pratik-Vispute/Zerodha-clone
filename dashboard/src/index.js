import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./components/Home";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:3002";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);