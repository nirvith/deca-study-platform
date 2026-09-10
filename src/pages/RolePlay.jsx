import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/home_page/Footer";
import events from "../data/events";
import { useState, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";


function RolePlay() {
    const [scenario, setScenario] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [phase, setPhase] = useState("prep");
    const [answer, setAnswer] = useState("");
    const [grading, setGrading] = useState(false);
    const [result, setResult] = useState(null);
    const [secondsLeft, setSecondsLeft] = useState(0);

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

    useEffect(() => {
        if (phase !== "responding") return;
        if (secondsLeft <= 0) return;

        const interval = setInterval(() => {
            setSecondsLeft((s) => s - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [phase, secondsLeft]);

    useEffect(() => {
        if (phase === "responding" && secondsLeft === 0) {
            handleGrade();
        }
    }, [secondsLeft, phase])

    const minutes = Math.floor(secondsLeft / 60)
    const seconds = secondsLeft % 60;


    async function handleGrade() {
        if(!answer.trim()) return;

        setPhase("graded");
        setGrading(true);

        try {
            const res = await fetch("/api/grade", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({scenario, response: answer}),
            });

            if(!res.ok) throw new Error("Grading failed");

            const data = await res.json();
            setResult(data.grade);
        } catch(err) {
            console.error("Grading Failed:", err);
        }
        finally {
            setGrading(false);
        }
    }

    function handleRetry() {
        setPhase("prep");
        setAnswer("");
        setResult(null);
        setSecondsLeft(0);
    }



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

    if (phase === "graded") {
        return (
            <>
                <Navbar />
                <section className="roleplay-results">
                    {grading ? (
                        <div className="roleplay-grading">
                            <h2>Grading your response...</h2>
                            <p>Scoring against the five performance indicators.</p>
                        </div>
                    ) : result ? (
                        <>
                            <div className="roleplay-score">
                                <p className="section-label">Your score</p>
                                <p className="roleplay-score-total">{result.total}</p>
                            </div>

                            <div className="roleplay-indicators">
                                <h3>Performance Indicators</h3>
                                {result.indicators.map((item, i) => (
                                    <div className="roleplay-indicator" key={i}>
                                        <div className="roleplay-indicator-top">
                                            <p className="roleplay-indicator-text">{item.indicator}</p>
                                            <span className="roleplay-indicator-score">{item.score}/20</span>
                                        </div>
                                        <p className="roleplay-indicator-comment">{item.comment}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="roleplay-feedback">
                                <div className="roleplay-feedback-block">
                                    <h3>What worked</h3>
                                    <p>{result.strengths}</p>
                                </div>
                                <div className="roleplay-feedback-block">
                                    <h3>What to improve</h3>
                                    <p>{result.improvements}</p>
                                </div>
                            </div>

                            <div className="roleplay-results-actions">
                                <button onClick={handleRetry}>Try this scenario again</button>
                                <button onClick={() => window.location.reload()}>New scenario</button>
                                <Link to="/practice">Back to Practice</Link>
                            </div>
                            </>
                            ) : (
                        <div className="roleplay-grading">
                            <h2>Something went wrong</h2>
                            <button onClick={() => window.location.reload()}>Try again</button>
                        </div>
                    )}
                    </section>
                    <Footer />
            </>

        )}







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
                {phase === "prep" && (
                    <div className="roleplay-start">
                        <p>Read the scenario. When you're ready, start the clock and write your response.</p>
                        <button className="roleplay-start-button" onClick={() =>  {
                                setSecondsLeft((event.prepMinutes || 10) * 60);
                                setPhase("responding")
                            }}>
                            Start
                        </button>
                    </div>
                )}
                

                {phase === "responding" && (
                    <div className="roleplay-answer">
                        <p className="roleplay-timer">
                            {minutes}:{String(seconds).padStart(2, "0")}
                        </p>
                        <textarea
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            placeholder="Type your response as you would deliver it to the judge..."
                            rows={12}
                        />
                        <button
                            className="roleplay-submit"
                            onClick={handleGrade}
                        >
                            Grade my response
                        </button>
                    </div>
                )}
                <button className="Generate-new-scenario" onClick={() => window.location.reload()}>Generate new scenario</button>
            </section>
            <Footer />
        </>
    )

}

export default RolePlay;