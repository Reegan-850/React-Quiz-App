import { useState, useEffect } from "react";
import questions from "./data/questions";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [score, setScore] = useState(0);

  const [showResult, setShowResult] =
    useState(false);

  const [timeLeft, setTimeLeft] = useState(15);

  const [darkMode, setDarkMode] =
    useState(false);

  useEffect(() => {
    if (showResult) return;

    if (timeLeft === 0) {
      handleAnswer("");
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, showResult]);

  const handleAnswer = (selectedOption) => {
    if (
      selectedOption ===
      questions[currentQuestion].answer
    ) {
      setScore((prev) => prev + 1);
    }

    const nextQuestion =
      currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(15);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setTimeLeft(15);
  };

  return (
    <div
      className={`app ${
        darkMode ? "dark" : ""
      }`}
    >
      <h1>QuizMaster</h1>

      <button
        className="dark-btn"
        onClick={() =>
          setDarkMode(!darkMode)
        }
      >
        {darkMode
          ? "☀️ Light Mode"
          : "🌙 Dark Mode"}
      </button>

      {!showResult && (
        <>
          <h3>
            ⏰ Time Left: {timeLeft}s
          </h3>

          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${
                  ((currentQuestion + 1) /
                    questions.length) *
                  100
                }%`,
              }}
            ></div>
          </div>

          <p>
            Question{" "}
            {currentQuestion + 1} of{" "}
            {questions.length}
          </p>
        </>
      )}

      {showResult ? (
        <Result
          score={score}
          restartQuiz={restartQuiz}
        />
      ) : (
        <Quiz
          questionData={
            questions[currentQuestion]
          }
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default App;