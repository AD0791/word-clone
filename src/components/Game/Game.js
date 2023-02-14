import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import DisplayGuess from "../DisplayGuess/DisplayGuess";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [items, setItem] = useState([]);
  const handleInput = (guessAnswer) => {
    const newItem = {
      guess: guessAnswer.toString(),
      id: crypto.randomUUID(),
    };
    const nextItems = [...items, newItem];
    setItem(nextItems);
  };
  return (
    <>
      <DisplayGuess items={items} />
      <GuessInput handleInput={handleInput} />
    </>
  );
}

export default Game;
