import EventCard from "./EventCard";
import events from "../data/events";



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
                {events.map((event) => {
                    return (
                        <EventCard
                            key={event.id}
                            abbreviation={event.abbreviation}
                            name={event.name}
                            cluster={event.cluster}
                            format={event.format}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default EventFinder;