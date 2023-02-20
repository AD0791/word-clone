import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import DisplayGuess from "../DisplayGuess";
import LostBanner from "../LostBanner/LostBanner";
import WonBanner from "../WonBanner/WonBanner";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState("running");
  const [items, setItem] = useState([]);
  const handleInput = (guessAnswer) => {
    const nextItems = [...items, guessAnswer];
    setItem(nextItems);
    if (guessAnswer.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextItems.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };
  return (
    <>
      <DisplayGuess items={items} answer={answer} />
      <GuessInput handleInput={handleInput} gameStatus={gameStatus} />
      {gameStatus === "won" && <WonBanner numOfGuesses={items.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
