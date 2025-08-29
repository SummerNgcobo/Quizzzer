import React, { useState, useEffect } from "react";
import styles from "../quiz.module.css";
import layoutVideo from "../Layout.mp4";



export default function QuizIsland({ headline, description }) {
  // Quiz questions
  const quizQuestions = [
    {
      question: "What's another name for white space?",
      options: ["Positive space", "Negative space", "Margins", "Extra space"],
      answer: "Negative space",
    },
    {
      question: "Purpose of design QA?",
      options: [
        "Conducting usability research",
        "Testing font files only",
        "Running regular backend server updates as needed",
        "Ensuring UI matches design specs",
      ],
      answer: "Ensuring UI matches design specs",
    },
    {
      question: "What is this type of layout called?",
      video: layoutVideo,
      options: ["Responsive", "Liquid", "Adaptive", "Fixed"],
      answer: "Adaptive",
    },
    {
      question:
        "When implementing authentication for a consumer app, which approach best balances security and usability?",
      options: [
        "Requiring password change every login",
        "Using multi-factor authentication (MFA)",
        "Allowing only social login",
        "Skipping authentication for ease of access",
      ],
      answer: "Using multi-factor authentication (MFA)",
    },
    {
      question:
        "Which principle ensures that users can predict how an interface will behave?",
      options: ["Consistency", "Accessibility", "Aesthetics", "Gamification"],
      answer: "Consistency",
    },
    {
      question: "What is the main purpose of using a grid system in design?",
      options: [
        "To make layouts symmetrical only",
        "To provide alignment and visual structure",
        "To reduce the number of colors needed",
        "To make text larger on mobile devices",
      ],
      answer: "To provide alignment and visual structure",
    },
    {
      question:
        "Which research method collects qualitative insights by observing users in real time?",
      options: [
        "A/B Testing",
        "Surveys",
        "Usability Testing",
        "Analytics Tracking",
      ],
      answer: "Usability Testing",
    },
    {
      question: "What does the “F-pattern” describe in web design?",
      options: [
        "The way users scan a page",
        "The structure of a footer",
        "A standard wireframe layout",
        "A typography hierarchy",
      ],
      answer: "The way users scan a page",
    },
    {
      question:
        "Which type of feedback helps users understand that their action has been recognized?",
      options: [
        "Error messages",
        "System status indicators",
        "Placeholder text",
        "Accessibility alt text",
      ],
      answer: "System status indicators",
    },
    {
      question: "What is a key benefit of prototyping before development?",
      options: [
        "Speeds up final coding",
        "Reduces development cost by validating early",
        "Improves backend server response",
        "Guarantees pixel-perfect typography",
      ],
      answer: "Reduces development cost by validating early",
    },
    {
      question:
        "Which accessibility principle does adding alt text to images support?",
      options: ["Perceivable", "Operable", "Understandable", "Robust"],
      answer: "Perceivable",
    },
    {
      question: "What is the difference between adaptive and responsive design?",
      options: [
        "Adaptive uses fixed breakpoints, responsive fluidly adjusts",
        "Adaptive adjusts continuously, responsive uses steps",
        "Adaptive is for mobile only, responsive for desktop only",
        "Adaptive ignores accessibility, responsive ensures it",
      ],
      answer: "Adaptive uses fixed breakpoints, responsive fluidly adjusts",
    },
    {
      question: "Which UX metric measures how easily users complete a task?",
      options: [
        "Bounce Rate",
        "Task Success Rate",
        "Net Promoter Score (NPS)",
        "Heatmap",
      ],
      answer: "Task Success Rate",
    },
    {
      question: "What’s the main advantage of using a design system?",
      options: [
        "It reduces the need for usability testing",
        "Ensures consistency across products and teams",
        "Guarantees faster backend performance",
        "Eliminates the need for prototyping",
      ],
      answer: "Ensures consistency across products and teams",
    },
  ];

  // State
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(7 * 60); // 7 min timer

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !finished) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, finished]);

  // Helpers
  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === quizQuestions[current].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (current + 1 < quizQuestions.length) {
      setCurrent((prev) => prev + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className={styles.quizContainer}>
      {!finished ? (
        <>
          <h2>{headline}</h2>
          <p>{description}</p>

          {/* Progress */}
          <div className={styles.topBar}>
            <div
              className={styles.progress}
              style={{
                width: `${((current + 1) / quizQuestions.length) * 100}%`,
              }}
            ></div>
            <span className={styles.counter}>
              {current + 1}/{quizQuestions.length}
            </span>
          </div>

          {/* Question with optional video */}
          <div className={styles.questionRow}>
            {quizQuestions[current].video && (
              <video
                src={quizQuestions[current].video}
                muted       
                autoPlay    
                className={styles.questionVideo}
              />
            )}
            <h2 className={styles.questionText}>
              {quizQuestions[current].question}
            </h2>
          </div>

          {/* Options */}
          <div className={styles.optionsList}>
            {quizQuestions[current].options.map((option, idx) => (
              <button
                key={idx}
                className={`${styles.optionButton} ${
                  selected === option
                    ? option === quizQuestions[current].answer
                      ? styles.correct
                      : styles.incorrect
                    : ""
                }`}
                onClick={() => handleAnswer(option)}
                disabled={selected !== null}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Controls + Timer */}
          <div className={styles.controlsRow}>
            {!selected && (
              <button className={styles.dontKnow} onClick={nextQuestion}>
                I don’t know
              </button>
            )}
            {selected && (
              <button onClick={nextQuestion} className={styles.nextButton}>
                Next
              </button>
            )}
            <div className={styles.timer}>⏱ {formatTime(timeLeft)}</div>
          </div>
        </>
      ) : (
        <div className={styles.results}>
          <h2>Quiz Finished!</h2>
          <p>
            Your score: {score} / {quizQuestions.length}
          </p>
        </div>
      )}
    </div>
  );
}
