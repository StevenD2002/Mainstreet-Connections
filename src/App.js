import "./App.css";
import { HomePage } from "./pages/home";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
