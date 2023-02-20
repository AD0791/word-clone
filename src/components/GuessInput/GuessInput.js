import { useState } from "react";

function GuessInput({ handleInput, gameStatus }) {
  const [guess, setGuess] = useState("");
  const minimumInput = 5;
  const maximumInput = 5;

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        handleInput(guess.toUpperCase());
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value);
        }}
        minLength={minimumInput}
        maxLength={maximumInput}
        required
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={gameStatus !== "running"}
      />
    </form>
  );
}

export default GuessInput;
