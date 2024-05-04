import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import Edit from "./Pages/Edit/Edit";

const App = () => {
  return (
    <div className="container">
      <h1>Meme Generator</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;
