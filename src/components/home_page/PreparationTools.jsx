function PreparationTools() {

    return (
        <section className="preparation-tools">
            <div className="tools-heading">
                <p className="tools-label">
                    Preparation tools
                </p>
                <h2>Everything you need to prepare</h2>
                <p className="tools-description">Choose your event and practise with resources built around the skills you need</p>
            </div>
            <div className="tools-grid">
                <article className="tool-card">
                    <div className="tool-icon">
                        RP
                    </div>
                    <h3>Roleplay Practice</h3>
                    <p>Practise original scenarios and receive structured feedback</p>
                    <a className="tool-link" href="#">Explore tool</a>
                </article>
                <article className="tool-card">
                    <div className="tool-icon">
                        CE
                    </div>
                    <h3>Cluster Exams</h3>
                    <p>Test your knowledge with timed, event-relevant questions.</p>
                    <a className="tool-link" href="#">Explore tool</a>
                </article>
                <article className="tool-card">
                    <div className="tool-icon">
                        FC
                    </div>
                    <h3>Flashcards</h3>
                    <p>Review business vocabulary, concepts, and essential terminology</p>
                    <a className="tool-link" href="#">Explore tool</a>
                </article>
                <article className="tool-card">
                    <div className="tool-icon">
                        PI
                    </div>
                    <h3>Performance Indicators</h3>
                    <p>Understand the skills and knowledge evaluated during competition</p>
                    <a className="tool-link" href="#">Explore tool</a>
                </article>
                <article className="tool-card">
                    <div className="tool-icon">
                        PEG
                    </div>
                    <h3>Prepared Event Guidance</h3>
                    <p>Organise requirements, timelines, written entries, and presentations.</p>
                    <a className="tool-link" href="#">Explore tool</a>
                </article>
            </div>
        </section>
    )
}

export default PreparationTools;