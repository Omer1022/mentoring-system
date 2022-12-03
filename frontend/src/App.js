import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Lobby } from "./pages/Lobby";
import Login from "./pages/Login";
import Code from "./pages/Code";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lobby />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/code" element={<Code />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
