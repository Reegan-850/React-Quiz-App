function Result({
  score,
  restartQuiz,
  playerName,
}) {
  return (
    <div className="result-container">
      <h2>
        🎉 Congratulations, {playerName}!
      </h2>

      <h3>Your Score: {score} / 5</h3>

      {score === 5 && (
        <p>🏆 Excellent! Perfect Score!</p>
      )}

      {score >= 3 && score < 5 && (
        <p>👍 Good Job!</p>
      )}

      {score < 3 && (
        <p>💪 Keep Practicing!</p>
      )}

      <button onClick={restartQuiz}>
        Play Again
      </button>
    </div>
  );
}

export default Result;