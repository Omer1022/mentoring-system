import React, { useEffect, useState } from "react";
import StudentsModal from "../components/StudentsModal";
import { useNavigate } from "react-router-dom";
import { getToken } from "../loginHelper";

export function Lobby() {
  const [showModal, setShowModal] = useState(false);
  const [codeBlockName, setCodeBlockName] = useState("");
  const navigate = useNavigate();

  // Authorize check
  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate("/");
    }
  }, []);

  const onCodeClick = (codeBlockName) => {
    setCodeBlockName(codeBlockName);
    setShowModal(true);
  };

  return (
    <header className="app-header center">
      <section className="dropdown">
        <h1 className="lobby-header">Choose code block</h1>
        <section className="dropdown-content">
          <li onClick={() => onCodeClick("Async Case")}>Async Case</li>
          <li onClick={() => onCodeClick("Loops")}>Loops</li>
          <li onClick={() => onCodeClick("Arrays")}>Arrays</li>
          <li onClick={() => onCodeClick("Functions")}>Functions</li>
        </section>
      </section>
      {showModal && (
        <StudentsModal
          setShowModal={setShowModal}
          showModal={showModal}
          codeBlockName={codeBlockName}
        />
      )}
    </header>
  );
}
