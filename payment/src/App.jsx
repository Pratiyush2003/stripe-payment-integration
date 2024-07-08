import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Success from "./Success";
import Cancel from "./Cancel";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Success" element={<Success/>}/>
        <Route path="/Cancel" element={<Cancel/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
