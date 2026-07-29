function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h2>DECA Bound</h2>

          <p>
            An independent study platform built to help DECA competitors
            prepare with confidence.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-link-group">
            <h3>Platform</h3>
            <a href="#">Explore Events</a>
            <a href="#">Roleplay Practice</a>
            <a href="#">Cluster Exams</a>
            <a href="#">Flashcards</a>
          </div>

          <div className="footer-link-group">
            <h3>Resources</h3>
            <a href="#">Performance Indicators</a>
            <a href="#">Prepared Events</a>
            <a href="#">Study Dashboard</a>
            <a href="#">AI Feedback</a>
          </div>

          <div className="footer-link-group">
            <h3>Account</h3>
            <a href="#">Get Started</a>
            <a href="#">Log In</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 DECA Bound. All rights reserved.</p>

        <p className="footer-disclaimer">
          DECA Bound is an independent platform and is not affiliated with or
          endorsed by DECA Inc. DECA® is a registered trademark of DECA Inc.
        </p>
      </div>
    </footer>
  );
}

export default Footer;