import { useState } from "react";

function Quiz({ questionData, handleAnswer }) {
  const [selected, setSelected] = useState("");

  const handleClick = (option) => {
    setSelected(option);

    setTimeout(() => {
      handleAnswer(option);
      setSelected("");
    }, 500);
  };

  return (
    <div className="quiz-container">
      <h2>{questionData.question}</h2>

      <div className="options">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${
              selected === option
                ? option === questionData.answer
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            onClick={() => handleClick(option)}
            disabled={selected !== ""}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;