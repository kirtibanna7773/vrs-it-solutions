function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h3>VRS IT Solutions</h3>

        <p>Building modern digital solutions for your business.</p>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="copyright">© 2026 VRS IT Solutions</p>
      </div>
      <div className="social-links">
        <a href="#" aria-label="Instagram">
          <svg viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" />
          </svg>
        </a>

        <a href="#" aria-label="Facebook">
          <svg viewBox="0 0 24 24">
            <path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1z" />
          </svg>
        </a>

        <a href="#" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24">
            <path d="M6 9v9M6 6v.01M10 18v-5a3 3 0 0 1 6 0v5M10 9v9" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
