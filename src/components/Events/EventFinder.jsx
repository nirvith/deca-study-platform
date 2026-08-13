import EventCard from "./EventCard";
import events from "../../data/events";
import { useState } from "react"



function EventFinder() {

    const [search, setSearch] = useState("")
    const [selectedCluster, setSelectedCluster] = useState("All")

    const filteredEvents = events.filter((event) => {
        const matchesSearch = (
            event.name.toLowerCase().includes(search.toLowerCase()) || 
            event.abbreviation.toLowerCase().includes(search.toLowerCase())
        )
        const matchesCluster =
            selectedCluster === "All" || event.cluster === selectedCluster     
            
            return matchesSearch && matchesCluster
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
                <button onClick={() => setSelectedCluster("All")}
                        className={selectedCluster === "All" ? "active" : ""}>All</button>
                <button onClick={() => setSelectedCluster("Marketing")}
                        className={selectedCluster === "Marketing" ? "active" : ""}>Marketing</button>
                <button onClick={() => setSelectedCluster("Finance")}
                        className={selectedCluster === "Finance" ? "active" : ""}>Finance</button>
                <button onClick={() => setSelectedCluster("Hospitality and Tourism")}
                        className={selectedCluster === "Hospitality and Tourism" ? "active" : ""}>Hospitality and Tourism</button>
                <button onClick={() => setSelectedCluster("Business Management")}
                        className={selectedCluster === "Business Management and Administration" ? "active" : ""}>Business Management and Administration</button>
                <button onClick={() => setSelectedCluster("Entrepreneurship")}
                        className={selectedCluster === "Entrepreneurship" ? "active" : ""}>Entrepreneurship</button>
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