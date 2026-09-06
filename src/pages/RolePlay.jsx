import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/home_page/Footer";
import events from "../data/events";
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";


function RolePlay() {
    const [scenario, setScenario] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { eventId } = useParams();
    const event = events.find((e) => e.id === eventId);

    useEffect(() => {
        async function loadScenario() {
            if(!event) return;
            const url = `/api/roleplay?event=${encodeURIComponent(event.name)}&cluster=${encodeURIComponent(event.cluster)}&topics=${encodeURIComponent(event.topics.join(","))}`;
            try{
                const res = await fetch(url);
                if(!res.ok) throw new Error("Request failed")
                const data = await res.json();
                setScenario(data.scenario);
            }   catch (err) {
                setError("Could not generate a scenario. Try again.")
            } finally {
                setLoading(false)
            }

        }
        loadScenario();
    }, [eventId]);

    if(!event) {
        return (
            <>
                <Navigate to="/events" />
            </>
        )
    }

    if(loading) {
        return (
            <>
                <Navbar />
                <h2>Generating your scenario...</h2>
                <Footer />
            </>
        )
    }

    if(error) {
        return (
            <>
                <Navbar />
                <h2>Something went wrong with generating Scenario</h2>
                <button onClick={() => window.location.reload()}>Retry</button>
                <Footer />
            </>
        )
    }

    if(!scenario) {
        return (
            <>
                <Navbar />
                <h2>No scenario available</h2>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Navbar />
            <section className="roleplay">
                <p className="situation">Situation: {scenario.situation}</p>
                <p className="user-role">Your role: {scenario.role}</p>
                <p className="judge-role">Judge's role: {scenario.judgeRole}</p>
                <p className="task">Task: {scenario.task}</p>
                <ul className="performance-indicators">
                    {scenario.performanceIndicators.map((pi) => (
                        <li key={pi}>{pi}</li>
                    ))}
                </ul>
                <button className="Generate-new-scenario" onClick={() => window.location.reload()}>Generate new scenario</button>
            </section>
            <Footer />
        </>
    )

}

export default RolePlay;