import React, { useState } from "react";
import StudentsModal from "../components/StudentsModal";
import { apiClient } from "../api";

export function Lobby() {
  const [showModal, setShowModal] = useState(false);
  const [codeBlockName, setCodeBlockName] = useState("");

  const onCodeClick = (codeBlockName) => {
    setCodeBlockName(codeBlockName);
    setShowModal(true);
  };

  const openCodeBlockSession = () => {
    // Open code session and save the link in db (include student name)
    // Use saveCodeSession in ApiClient class
  };

  return (
    <header className="app-header center">
      <section className="dropdown">
        <h1>Choose code block</h1>
        <section class="dropdown-content">
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
