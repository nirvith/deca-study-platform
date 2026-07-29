function EventFinder() {

    return (

        <section className="event-finder">
            <div className="event-finder-heading">
                <p className="event-finder-label">Explore Events</p>
                <h2>What are you competing in?</h2>
                <p className="event-finder-description">Find your event and access targeted preparation tools.</p>
            </div>
            <div className="event-search">
                <input placeholder="Search by event name or abbreviation" /> 
            </div>
            <div className="cluster-filters">
                <button>Marketing</button>
                <button>Finance</button>
                <button>Hospitality and Tourism</button>
                <button>Business Management</button>
                <button>Entrepreneurship</button>
                <button>Personal Financial Literacy</button>
            </div>
            <div className="event-grid">
                <article className="event-card">
                    <div className="event-card-top">
                        <span className="event-abbreviation">MMS</span>
                        <span className="event-cluster">Marketing</span>
                    </div>
                    <h3 className="event-name">Marketing Management Series</h3>
                    <p className="event-format">Individual Series</p>
                    <a className="event-link" href="#">View Event</a>
                </article>
                <article className="event-card">
                    <div className="event-card-top">
                        <span className="event-abbreviation">BFS</span>
                        <span className="event-cluster">Finance</span>
                    </div>
                    <h3 className="event-name">Business Finance Series</h3>
                    <p className="event-format">Individual Series</p>
                    <a className="event-link" href="#">View Event</a>
                </article>
                <article className="event-card">
                    <div className="event-card-top">
                        <span className="event-abbreviation">HTDM</span>
                        <span className="event-cluster">Hospitality and Tourism</span>
                    </div>
                    <h3 className="event-name">Hospitality Services Team Decision Making</h3>
                    <p className="event-format">Team Decision Making</p>
                    <a className="event-link" href="#">View Event</a>
                </article>
            </div>
        </section>
    )
}

export default EventFinder;