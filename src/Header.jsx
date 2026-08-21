import { useState } from "react";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <h1>VRS IT Solutions</h1>
      <nav className={menuOpen ? "nav-open" : "nav-close"}>
        <a href="#">Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#services" onClick={() => setMenuOpen(false)}>
          Services
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </nav>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </button>
    </header>
  );
}

export default Header;
