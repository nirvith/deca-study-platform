import Footer from "../components/home_page/Footer";
import Navbar from "../components/Navbar/Navbar";
import EventCard from "../components/Events/EventCard";
import events from "../data/events";
import { useState } from 'react';



function Events() {

    const [search, setSearch] = useState("")
    const [cluster, setCluster] = useState("All")

    const filteredEvents = events.filter(event => (cluster === "All" || event.cluster === cluster) && (event.name.toLowerCase().includes(search.toLowerCase()) || event.abbreviation.toLowerCase().includes(search.toLowerCase())));

  return (
    <>
      <Navbar />
      <section className="main">
        <div className="events-header">
            <p>Explore Events</p>
            <h2>Find Your DECA Event</h2>
            <p>Browse DECA events by career cluster and find the right event to start preparing for.</p>
        </div>
        <div className="event-content-area">
            <div className="left">
                <h3>EVENT CLUSTERS</h3>
                <button onClick={() => setCluster("All")}>All Events</button>
                <button className={cluster === "Marketing" ? "active" : ""} onClick={() => setCluster("Marketing")}>Marketing</button>
                <button  className={cluster === "Finance" ? "active" : ""}  onClick={() => setCluster("Finance")}>Finance</button>
                <button  className={cluster === "Hospitality and Tourism" ? "active" : ""}  onClick={() => setCluster("Hospitality and Tourism")}>Hospitality and Tourism</button>
                <button  className={cluster === "Business Management and Administration" ? "active" : ""}  onClick={() => setCluster("Business Management and Administration")}>Business Management and Administration</button>
                <button  className={cluster === "Entrepreneurship" ? "active" : ""} onClick={() => setCluster("Entrepreneurship")}>Entrepreneurship</button>
            </div>
            <div className="right">
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search events..."></input>

                {filteredEvents
                  .map((event) => (
                    <EventCard 
                      key={event.id}
                      abbreviation={event.abbreviation}
                      name={event.name}
                      cluster={event.cluster}
                      format={event.format}
                    />
                ))}
            </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Events;