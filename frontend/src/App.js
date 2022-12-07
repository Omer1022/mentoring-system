import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Lobby } from "./pages/Lobby";
import Login from "./pages/Login";
import Code from "./pages/Code";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/code" element={<Code />} />
      </Routes>
    </div>
  );
}

export default App;
