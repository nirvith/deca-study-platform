function Hero() { 

    return (
        <section className="hero">
            <div className="hero-content">
                <p className='hero-label'>
                    Built for DECA Competitors
                </p>
                <h1 className="hero-title">
                    Prepare Smarter. <span>Compete With Confidence.</span>
                </h1>
                <p className='hero-description'>
                    Practice role-plays, prepare for cluster exams, review performance indicators, study with flashcards, and improve with personalized AI feedback.
                </p>
                <div className="hero-buttons">
                    <a className="primary-button" href="#">Start Practicing</a>
                    <a className="secondary-button" href="#">Explore Features</a>
                </div>
            </div>
            <div className="hero-preview">
                    <div className="preview-card">
                        <div className="preview-header">
                            <p>Role-Play Practice</p>
                            <span className="preview-status">Practice Ready</span>
                        </div>
                        <div className="preview-event-meta">
                            <span className="event-badge">MMS</span>
                            <span className="event-cluster">Marketing Cluster</span>
                        </div>
                        <h3>Marketing Communications Series</h3>
                        <div className="scenario-preview">
                            <p className="scenario-label">YOUR SCENARIO</p>
                            <p className="scenario-text">Develop a promotional strategy for a local business launching a new customer loyalty program.</p>
                        </div>
                        <div className="preview-details">
                            <div>
                                <span>Preparation</span>
                                <strong>10:00</strong>
                            </div>

                            <div>
                                <span>Performance Indicators</span>
                                <strong>5 PI's</strong>
                            </div>
                        </div>

                        <button className="preview-button">Begin Role-Play</button>
                    </div>
            </div>
        </section>

    );

}

export default Hero;