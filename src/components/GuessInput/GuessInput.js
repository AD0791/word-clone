import { useState } from "react";

function GuessInput() {
  const [input, setInput] = useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(input);
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
      />
    </form>
  );
}

export default GuessInput;
