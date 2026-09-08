import Footer from "../components/home_page/Footer";
import Navbar from "../components/Navbar/Navbar";
import events from "../data/events";
import { Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import flashcards from "../data/flashcards.json";
import { Link } from "react-router-dom";


function Flashcards() {
    const [cardIndex, setCardIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const { eventId } = useParams();
    const [finished, setFinished] = useState(false);

    const event = events.find((e) => e.id === eventId);
    const deck = flashcards.filter((c) => c.eventId === eventId);

    if (!event) {
        return <Navigate to="/events"/>;
    }

    if(deck.length === 0){
        return (
            <>
            <Navbar />
            <section className="flashcards">
                <h2>No flashcards for this event</h2>
            </section>
            <Footer />
            </>
        )
    }

    if (finished) {
        return (
            <>
                <Navbar />
                <section className="flashcards-complete">
                    <p className="section-label">Deck complete</p>
                    <h2>You've gone through all {deck.length} cards</h2>
                    <p>Run the deck again to study the terms you struggled with, or move on to an exam or a role-play scenario for this event</p>
                    <div className="complete-actions">
                        <button onClick={handleRestart}>Study again</button>
                        <Link to={`/practice/${eventId}/exam`}>Try the cluster exam</Link>
                        <Link to={`/practice/${eventId}/roleplay`}>Practice a roleplay</Link>
                        <Link to="/practice">Back to practice</Link>
                    </div>
                </section>
                <Footer />
            </>
        )
    }



    const card = deck[cardIndex]

    function handleNext() {
        if(cardIndex === deck.length - 1) {
            setFinished(true);
        }
        else {
            setCardIndex(cardIndex + 1);
            setFlipped(false);
        }
    }

    function handlePrev() {
        setCardIndex((cardIndex - 1 + deck.length) % deck.length)
        setFlipped(false)
    }

    function handleRestart() {
        setCardIndex(0)
        setFlipped(false)
        setFinished(false)
    }

    return (
        <>
            <Navbar />
            <section className="flashcards">
                <p className="section-label">Flashcards</p>
                <h1>{event.name}</h1>
                <p className="flashcards-progress">Card {cardIndex + 1} of {deck.length}</p>
                <div className="flashcard-row">
                    <button onClick={handlePrev} className="flashcard-arrow">←</button>

                    <div className="flashcard-scene" onClick={() => setFlipped(!flipped)}>
                        <div className={flipped ? "flashcard flipped" : "flashcard"}>
                            <div className="flashcard-face flashcard-front">
                                {card.term}
                            </div>
                            <div className="flashcard-face flashcard-back">
                                {card.definition}
                            </div>
                        </div>
                    </div>

                    <button onClick={handleNext} className="flashcard-arrow">→</button>
                </div>
                <p className="flip-hint">Click to flip</p>
            </section>
            <Footer />
        </>
    );
}

export default Flashcards;