import Footer from "../components/home_page/Footer";
import Navbar from "../components/Navbar/Navbar";
import events from "../data/events";
import { Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import flashcards from "../data/flashcards.json";


function Flashcards() {
    const [cardIndex, setCardIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const { eventId } = useParams();

    const event = events.find((e) => e.id === eventId);
    const deck = flashcards.filter((c) => c.eventId === eventId);

    if (!event) {
        return <Navigate to="/events"/>;
    }

    if(deck.length === 0){
        return (
            <>
            <Navbar />
            <h2>No flashcards for this event</h2>
            <Footer />
            </>
        )
    }

    const card = deck[cardIndex]

    function handleNext() {
        setCardIndex((cardIndex + 1) % deck.length)
        setFlipped(false)
    }

    function handlePrev() {
        setCardIndex((cardIndex - 1 + deck.length) % deck.length)
        setFlipped(false)
    }

    return (
        <>
            <Navbar />
            <p>Card {cardIndex + 1} of {deck.length}</p>
            <div className="flashcard-row">
                <button onClick={handlePrev} className="flashcard-arrow">←</button>

                <div onClick={() => setFlipped(!flipped)} className="flashcard" style={{ cursor: "pointer" }}>
                    {flipped ? card.definition : card.term}
                </div>

                <button onClick={handleNext} className="flashcard-arrow">→</button>
            </div>
            <p className="flip-hint">Click to flip</p>
            <Footer />
        </>
    );
}

export default Flashcards;