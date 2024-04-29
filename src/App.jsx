import React from "react";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Support from "./Support";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
