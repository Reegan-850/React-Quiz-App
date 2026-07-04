function Welcome({
  playerName,
  setPlayerName,
  startQuiz,
}) {
  return (
    <div className="welcome-container">
      <h2>🎯 Welcome to QuizMaster</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={playerName}
        onChange={(e) =>
          setPlayerName(e.target.value)
        }
      />

      <button
        onClick={startQuiz}
        disabled={!playerName.trim()}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Welcome;