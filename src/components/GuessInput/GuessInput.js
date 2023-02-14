import { useState } from "react";

function GuessInput() {
  const [input, setInput] = useState("");
  const minimumInput = 5;
  const maximumInput = 5;
  const handleInput = (input) => {
    return {
      guess: input.toUpperCase(),
    };
  };
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(handleInput(input));
        setInput("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
        minLength={minimumInput}
        maxLength={maximumInput}
      />
    </form>
  );
}

export default GuessInput;
