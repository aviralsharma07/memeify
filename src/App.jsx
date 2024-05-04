import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import Edit from "./Pages/Edit/Edit";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>
        Memeify <br />
        <span>Your Own Meme Generator</span> <hr />
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;
