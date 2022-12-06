import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Lobby } from "./pages/Lobby";
import Login from "./pages/Login";
import Code from "./pages/Code";
import useToken from "./components/useToken";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/code" element={<Code />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
