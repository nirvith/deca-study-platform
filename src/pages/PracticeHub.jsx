import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/home_page/Footer";
import events from "../data/events";
import { Link } from "react-router-dom";
import { useState } from "react";


function PracticeHub() {

    const [selectedCluster, setSelectedCluster] = useState("")
    const [selectedEventId, setSelectedEventId] = useState("")

    const clusters = [
        "Marketing",
        "Finance",
        "Hospitality and Tourism",
        "Business Management and Administration",
        "Entrepreneurship",
    ];

    const clusterEvents = events.filter((e) => e.cluster === selectedCluster);

    function handleClusterChange(e) {
        setSelectedCluster(e.target.value);
        setSelectedEventId("");
    }

    return (
        <> 
            <Navbar />
            <section className="practice-hub">
                <div className="practice-hub-left">
                    <p className="section-label">Practice Hub</p>
                    <h2>Choose your event</h2>
                    <p>Choose your event and then a Practice mode</p>
                    <div className="practice-controls">
                        <select value={selectedCluster} onChange={handleClusterChange}>
                            <option value="">Choose a cluster</option>
                            {clusters.map((cluster) => (
                                <option key={cluster} value={cluster}>{cluster}</option>
                            ))}
                        </select>
                        <select value={selectedEventId} onChange={(e) => setSelectedEventId(e.target.value)}
                        disabled={!selectedCluster} >
                            <option value="">Choose an Event</option>
                            {clusterEvents.map((event) => (
                                <option key={event.id} value={event.id}>{event.name}</option>
                            ))}
                        </select>
                    </div>
                    {!selectedEventId && (
                        <p className="practice-hint">Select a cluster and event above to begin.</p>
                    )}
                </div>

                <div className="practice-modes">

                    {/* Cluster Exam row */}
                    <div className="practice-mode-row">
                        <div className="practice-mode-info">
                            <h3>Cluster Exam</h3>
                            <p>Multiple choice questions from your event's cluster, with explanations after every answer.</p>
                        </div>
                        {selectedEventId ? (
                            <Link className="practice-mode-link" to={`/practice/${selectedEventId}/exam`}>
                                Start
                            </Link>
                        ) : (
                            <span className="practice-mode-link disabled">Start</span>
                        )}
                    </div>
                    
                    {/* Flashcards row */}
                    <div className="practice-mode-row">
                        <div className="practice-mode-info">
                            <h3>Flashcards practice</h3>
                            <p>FlashCards for each event helping students know and memorize important terms helping in vocabulary for the specified event. Flip them through to study.</p>
                        </div>
                        {selectedEventId ? (
                            <Link className="practice-mode-link" to={`/practice/${selectedEventId}/flashcards`}>
                                Start
                            </Link>
                        ) : (
                            <span className="practice-mode-link disabled">Start</span>
                        )}
                    </div>

                    {/* Role play row */}
                    <div className="practice-mode-row">
                        <div className="practice-mode-info">
                            <h3>Roleplay's</h3>
                            <p>AI-generated scenarios with performance indicators, written for your specific event.</p>
                        </div>
                        {selectedEventId ? (
                            <Link className="practice-mode-link" to={`/practice/${selectedEventId}/roleplay`}>
                                Start
                            </Link>
                        ) : (
                            <span className="practice-mode-link disabled">Start</span>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )


}


export default PracticeHub;