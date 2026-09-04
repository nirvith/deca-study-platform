import Footer from "../components/home_page/Footer";
import Navbar from "../components/Navbar/Navbar";
import events from "../data/events";
import { Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import FallbackQuestions from "../data/FallbackQuestions";



function Exam() {
    

    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedAnswer,setSelectedAnswer] = useState(null)
    const [score, setScore] = useState(0)
    const{ eventId } = useParams()
    const event = events.find(e => e.id === eventId)

    useEffect(() => {
        async function loadQuestions() {

            if(!event) return;
            try {
                const res = await fetch(`/api/questions?cluster=${event.cluster}&count=10`);
                if (!res.ok) throw new Error("Request failed");
                const data = await res.json();
                setQuestions(data.questions);
            } catch(err) {
                setError("Using Saved questions")
                setQuestions(fallbackQuestions.filter(q => q.cluster === event.cluster))
            } finally {
                setLoading(false)
            } 
        }
        loadQuestions();
    }, [event]);


    if (!event) {
        return(
            <>
                <Navigate to="/events" />
            </>
        );
    }

    if(loading) {
        return (
            <>
                <Navbar />
                <h2>Generating Your Questions...</h2>
                <Footer />
            </>
        )
    }

    if(questions.length === 0) {
        return (
            <>
                <Navbar />
                <h2>Something went wrong while loading Questions</h2>
            </>
        )
    }

    if(currentIndex >= questions.length)
    {
        return(
            <>
                <Navbar />
                <span className="score">({score} / {questions.length}) {Math.round((score / questions.length) * 100)}</span>
                <button onClick={handleReset}>Try Again</button>
                <Footer />
            </>
        )
    }

    const question = questions[currentIndex];

    function handleAnswer(index) {
        if(selectedAnswer !== null)
        {
            return
        }
        setSelectedAnswer(index);
        if(index === question.correctIndex)
        {
            setScore(score + 1)
        }
    }

    function handleNext() {
        setCurrentIndex(currentIndex + 1)
        setSelectedAnswer(null)
    }

    function handleReset() {
        setCurrentIndex(0)
        setScore(0)
        setSelectedAnswer(null)
    }

    return (
        <>
            <Navbar />
            {error & <p className="exam-notice">{error}</p>}
            <h1>Question {currentIndex+1} of {questions.length}</h1>
            <p>{question.question}</p>
            {question.options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(index)}>{option}</button>
            ))}

            {selectedAnswer != null && (
                <div>
                    <span>{selectedAnswer === question.correctIndex ? "Correct" : "Incorrect"}</span>
                    <p>{question.explanation}</p>
                    <button onClick={handleNext}>Next</button>
                </div>
            )}
            
            <Footer />
        </>
    );



}


export default Exam;