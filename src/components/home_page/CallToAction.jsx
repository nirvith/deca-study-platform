import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="final-cta">
      <div className="final-cta-content">
        <p className="final-cta-label">Start Preparing</p>

        <h2>Ready to master your DECA event?</h2>

        <p className="final-cta-description">
          Find your event, practice with targeted resources, and build the
          confidence you need for competition.
        </p>

        <div className="final-cta-buttons">
          <Link className="cta-primary-button" to="/events">
            Find Your Event
          </Link>

          <Link className="cta-secondary-button" to="/practice">
            Explore Tools
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;