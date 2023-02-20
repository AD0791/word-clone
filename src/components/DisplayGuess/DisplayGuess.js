import React from "react";
import Guess from "../Guess";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function DisplayGuess({ validatedGuesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={validatedGuesses[num]} answer={answer} />
      ))}
    </div>
  );
}

export default DisplayGuess;
