import Footer from "../components/home_page/Footer";
import Navbar from "../components/Navbar/Navbar";
import events from "../data/events";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";


function EventDetails() {

    const{ eventId } = useParams();
    const event = events.find(e => e.id === eventId);

    if (!event) {
        return(
            <>
                <Navigate to="/events" />
            </>
        )
    }

    return (
        <>
            <Navbar />
            <section className="event-details">
                <div className="event-details-header">
                    <span>{event.abbreviation}</span>
                    <span>{event.cluster}</span>
                    <h1>{event.name}</h1>
                    <p>{event.format}</p>
                </div>

                <p>{event.description}</p>

                <div className="event-details-structure">
                    {/* team size, performanceType, exam info, prep/performance minutes */}
                    <span>Team Size: {event.teamSize}</span>
                    <span>Performance Type: {event.performanceType}</span>
                    <span>Exam Questions: {event.examQuestions}</span>
                    { event.prepMinutes ? <span>Preparation Minutes: {event.prepMinutes}</span> : <span>No preparation time given on competition site</span> }
                    <span>Performance Minutes: {event.performanceMinutes}</span>
                </div>

                <ul className="event-details-topics">
                    {event.topics.map((topic) => (
                        <li key={topic}>{topic}</li>
                    ))}
                </ul>

                <p>{event.bestFor}</p>

                {/* Practice button stub */}
                <button className="Practice-button" href="/practice">Practice</button>
            </section>
            <Footer />
        </>
        
    )
}


export default EventDetails;