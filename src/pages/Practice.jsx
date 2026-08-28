import Footer from "../components/home_page/Footer";
import Navbar from "../components/Navbar/Navbar";
import events from "../data/events";
import { Navigate, useParams, Link } from "react-router-dom";

function Practice() {

    const { eventId } = useParams();
    const event = events.find(e => e.id === eventId);

    if (!event) {
        return <Navigate to="/events" />;
    }

    return (
        <>
            <Navbar />

            <section className="practice-hero">
                <div className="practice-hero-badges">
                    <span className="event-abbreviation">{event.abbreviation}</span>
                    <span className="event-cluster">{event.cluster}</span>
                </div>
                <h1>{event.name}</h1>
                <p className="practice-hero-description">
                    Three ways to prepare. Pick one to get started, or work through all of them.
                </p>
            </section>

            <section className="practice-mode">
                <div className="practice-mode-content">
                    <p className="section-label">Cluster Exam</p>
                    <h2>Test what you actually know</h2>
                    <p className="section-description">
                        AI-generated multiple choice questions drawn from the {event.cluster} cluster,
                        matched to the difficulty of a real DECA exam.
                    </p>
                    <ul className="feature-list">
                        <li>Fresh questions generated every session</li>
                        <li>Instant explanations after every answer</li>
                    </ul>
                    <Link className="Practice-button" to={`/practice/${eventId}/exam`}>
                        Start Exam
                    </Link>
                </div>
            </section>

            <section className="practice-mode practice-mode-alt">
                <div className="practice-mode-content">
                    <p className="section-label">Flashcards</p>
                    <h2>Lock in the vocabulary</h2>
                    <p className="section-description">
                        Key terms and concepts for {event.name}, built for quick repetition
                        between classes or the night before.
                    </p>
                    <ul className="feature-list">
                        {event.topics.slice(0, 3).map((topic) => (
                            <li key={topic}>{topic}</li>
                        ))}
                    </ul>
                    <Link className="Practice-button" to={`/practice/${eventId}/flashcards`}>
                        Study Flashcards
                    </Link>
                </div>
            </section>

            <section className="practice-mode">
                <div className="practice-mode-content">
                    <p className="section-label">Role Play</p>
                    <h2>Practice the part that decides it</h2>
                    <p className="section-description">
                        AI-generated {event.performanceType.toLowerCase()} scenarios written
                        specifically for {event.abbreviation}, with the performance indicators
                        judges are scoring you against.
                    </p>
                    <ul className="feature-list">
                        <li>
                            {event.prepMinutes
                                ? `${event.prepMinutes} minutes preparation`
                                : "Prepared in advance"}
                        </li>
                        <li>{event.performanceMinutes} minute presentation</li>
                        <li>
                            {event.teamSize === 1 ? "Individual event" : `${event.teamSize} person team`}
                        </li>
                    </ul>
                    <Link className="Practice-button" to={`/practice/${eventId}/roleplay`}>
                        Generate Scenario
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Practice;