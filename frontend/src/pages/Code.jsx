import { useEffect } from "react";
import { getToken } from "../loginHelper";
import { useNavigate } from "react-router-dom";

const Code = () => {
  const navigate = useNavigate();

  // Authorize check
  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <div className="App">
      <h1 className="center">Code Title</h1>
      <pre className="center">Code Block</pre>
    </div>
  );
};

export default Code;
