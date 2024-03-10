import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import NewsMain from "./Components/NewsMain";
import Ipl from "./Components/Ipl";
import Wwe from "./Components/wwe";
import Politics from "./Components/Politics";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Finance from "./Components/Finance";
import Home from "./Components/Home";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ipl" element={<Ipl />} />
        <Route path="/wwe" element={<Wwe />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/finance" element={<Finance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
