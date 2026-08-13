import Footer from "../components/home_page/Footer";
import Navbar from "../components/Navbar/Navbar";
import EventCard from "../components/Events/EventCard";
import events from "../data/events";



function Events() {

    




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
                <button>All Events</button>
                <button>Marketing</button>
                <button>Finance</button>
                <button>Hospitality and Tourism</button>
                <button>Business Management & Administration</button>
                <button>Entrepreneurship</button>
            </div>
            <div className="right">
                <input placeholder="Search events..."></input>

                <section className="Marketing">
                    <h3>Marketing</h3>
                    {events
                    .filter((event) => event.cluster === "Marketing")
                    .map((event) => (
                        <EventCard 
                            key={event.id}
                            abbreviation={event.abbreviation}
                            name={event.name}
                            cluster={event.cluster}
                            format={event.format}
                        />
                    ))}
                </section>
                <section className="Finance">
                    <h3>Finance</h3>
                    {events
                        .filter((event) => event.cluster === "Finance")
                        .map((event) => (
                            <EventCard
                                key={event.id}
                                abbreviation={event.abbreviation}
                                name={event.name}
                                cluster={event.cluster}
                                format={event.format}
                            />
                        ))}
                </section>
                <section className="Hospitality and Tourism">
                    <h3>Hospitality and Tourism</h3>
                    {events
                        .filter((event) => event.cluster === "Hospitality and Tourism")
                        .map((event) => (
                            <EventCard
                                key={event.id}
                                abbreviation={event.abbreviation}
                                name={event.name}
                                cluster={event.cluster}
                                format={event.format}
                            />
                        ))}                   
                </section>
                <section className="Entrepreneurship">
                    <h3>Entrepreneurship</h3>
                    {events
                        .filter((event) => event.cluster === "Entrepreneurship")
                        .map((event) => (
                            <EventCard
                                key={event.id}
                                abbreviation={event.abbreviation}
                                name={event.name}
                                cluster={event.cluster}
                                format={event.format}
                            />
                        ))}                     
                </section>
                <section className="Business Management and Administration">
                    <h3>Business Management and Administration</h3>
                    {events
                        .filter((event) => event.cluster === "Business Management and Administration")
                        .map((event) => (
                            <EventCard
                                key={event.id}
                                abbreviation={event.abbreviation}
                                name={event.name}
                                cluster={event.cluster}
                                format={event.format}
                            />
                        ))}                    
                </section>
            </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Events;