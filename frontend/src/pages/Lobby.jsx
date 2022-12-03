import { NavLink } from "react-router-dom";

export function Lobby() {
  return (
    <header className="app-header">
      {/* <nav>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/code">Code</NavLink>
      </nav> */}
      <section className="dropdown">
        <h1>Choose code block</h1>
        <section class="dropdown-content">
          <li>Async Case</li>
          <li>Loops</li>
          <li>Arrays</li>
          <li>Functions</li>
        </section>
      </section>
    </header>
  );
}
