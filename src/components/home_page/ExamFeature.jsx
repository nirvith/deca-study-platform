function ExamFeature() {
    return (
        <section className="exam-feature">
            <div className="exam-feature-visual">
                <div className="exam-question-card">
                    <p>Question 12 of 100</p>
                    <h3>Which marketing function identifies customer needs?</h3>
                    <div className="exam-options">
                        <button>A. Financing</button>
                        <button>B. Market planning</button>
                        <button>C. Risk management</button>
                        <button>D. Purchasing</button>
                    </div>
                    <div className="exam-progress"></div>
                </div>
            </div>
            <div className="exam-feature-content">
                    <p className="section-label">CLUSTER EXAM PREPARATION</p>
                    <h2>Build confidence one question at a time</h2>
                    <p className="feature-description">Strengthen your exam knowledge with focused questions, clear explanations, and practice tailored to your career cluster</p>
                    <ul className="feature-list">
                        <li>Practice organized by career cluster</li>
                        <li>Explanations for every answer</li>
                        <li>Track accuracy and identify weak topics</li>
                    </ul>
                </div>
        </section>
    )
}

export default ExamFeature;