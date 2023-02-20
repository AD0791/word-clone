import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import DisplayGuess from "../DisplayGuess";
import LostBanner from "../LostBanner/LostBanner";
import WonBanner from "../WonBanner/WonBanner";
import Keyboard from "../Keyboard/Keyboard";

import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
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
  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setItem([]);
    setGameStatus("running");
  }

  const validatedGuesses = items.map((guess) => checkGuess(guess, answer));
  return (
    <>
      <DisplayGuess validatedGuesses={validatedGuesses} answer={answer} />
      <GuessInput handleInput={handleInput} gameStatus={gameStatus} />
      <Keyboard validatedGuesses={validatedGuesses} />
      {gameStatus === "won" && <WonBanner numOfGuesses={items.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
