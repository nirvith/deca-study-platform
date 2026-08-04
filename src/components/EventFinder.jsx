import EventCard from "./EventCard";
import events from "../data/events";
import { useState } from "react"



function EventFinder() {

    const [search, setSearch] = useState("")

    const filteredEvents = events.filter((event) => {
        return (
            event.name.toLowerCase().includes(search.toLowerCase()) || 
            event.abbreviation.toLowerCase().includes(search.toLowerCase())
        )
    })

    return (
 
        <section className="event-finder">
            <div className="event-finder-heading">
                <p className="event-finder-label">Explore Events</p>
                <h2>What are you competing in?</h2>
                <p className="event-finder-description">Find your event and access targeted preparation tools.</p>
            </div>
            <div className="event-search">
                <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search by event name or abbreviation"
                />
            </div>
            <div className="cluster-filters">
                <button>Marketing</button>
                <button>Finance</button>
                <button>Hospitality and Tourism</button>
                <button>Business Management</button>
                <button>Entrepreneurship</button>
                <button>Personal Financial Literacy</button>
            </div>
            {filteredEvents.length === 0 && (
                <p>No events found</p>
            )}
            <div className="event-grid">
                {filteredEvents.map((event) => {
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