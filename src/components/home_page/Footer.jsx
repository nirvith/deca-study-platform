import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h2>DECA BOUND</h2>

          <p>
            An independent study platform built to help DECA competitors
            prepare with confidence.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-link-group">
            <h3>Platform</h3>
            <Link to="/events">Explore Events</Link>
            <Link to="/practice">Roleplay Practice</Link>
            <Link to="/practice">Cluster Exams</Link>
            <Link to="/practice">Flashcards</Link>
          </div>

          <div className="footer-link-group">
            <h3>Resources</h3>
            <a href="https://www.deca.org" target="_blank" rel="noopener noreferrer">
              DECA Inc.
            </a>
            <a href="https://www.texasdeca.org" target="_blank" rel="noopener noreferrer">
              Texas DECA
            </a>
            <a href="https://www.deca.org/compete" target="_blank" rel="noopener noreferrer">
              Competitive Events Guide
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 DECA BOUND. All rights reserved.</p>

        <p className="footer-disclaimer">
          DECA BOUND is an independent platform and is not affiliated with or
          endorsed by DECA Inc. DECA® is a registered trademark of DECA Inc.
        </p>
      </div>
    </footer>
  );
}

export default Footer;