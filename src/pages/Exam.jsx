import Footer from "../components/home_page/Footer";
import Navbar from "../components/Navbar/Navbar";
import events from "../data/events";
import { Navigate, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FallbackQuestions from "../data/FallbackQuestions";



function Exam() {
    

    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    const [answers, setAnswers] = useState({})
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
                setQuestions(FallbackQuestions.filter(q => q.cluster === event.cluster))
            } finally {
                setLoading(false)
            } 
        }
        loadQuestions();
    }, [eventId]);


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

    function handleAnswer(questionIndex, optionIndex) {
        setAnswers({...answers, [questionIndex]: optionIndex });
    }

    function handleSubmit() {
        let correct = 0;
        questions.forEach((q, i) => {
            if(answers[i] === q.correctIndex) correct++;
        })
        setScore(correct);
        setSubmitted(true);
    }

    function handleReview() {
        setSubmitted(false);
    }

    function handleRetake() {
        window.location.reload();
    }

    if (submitted) {

        const percentage = Math.round((score / questions.length) * 100);

        return (
            <>
                <Navbar />
                <section className="exam-results">
                    <div className="exam-results-left">
                        <p className="section-label">Exam complete</p>
                        <h2>Here's how you did</h2>
                        <p>Review what you missed, or run another set of questions.</p>

                        <div className="results-options">
                            <button className="results-option" onClick={handleReview}>
                                <span className="results-option-number">1</span>
                                Review your answers
                            </button>

                            <button className="results-option" onClick={handleRetake}>
                                <span className="results-option-number">2</span>
                                Take a new test on the same event
                            </button>

                            <Link className="results-option" to="/practice">
                                <span className="results-option-number">3</span>
                                Take a test on a different event
                            </Link>
                        </div>
                    </div>

                    <div className="exam-results-right">
                        <div className="score-ring">
                            <span className="score-ring-percent">{percentage}%</span>
                        </div>
                        <p className="score-detail">You got {score} out of {questions.length}</p>
                    </div>
                </section>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Navbar />
            {questions.map((q, qIndex) => (
                <div className="exam-question-card" key={q.id}>
                    <p className="exam-question-number">Question {qIndex + 1}</p>
                    <p className="exam-question-text">{q.question}</p>
                    <div className="exam-options">
                        {q.options.map((option, oIndex) => (
                            <button key={oIndex} className={answers[qIndex] === oIndex ? "exam-option selected" : "exam-option"} onClick={() => handleAnswer(qIndex, oIndex)}>
                                <span className="exam-option-letter">{"ABCD"[oIndex]}</span>
                                {option}
                            </button>

                        ))}
                    </div>
                </div>
            ))}
            <button className="exam-submit" onClick={handleSubmit}>
                Grade
            </button>
            <Footer />
        </>
    );



}


export default Exam;