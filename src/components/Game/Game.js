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

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [gameStatus, setGameStatus] = useState("running");
  const [items, setItem] = useState([]);
  //console.log(answer);
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
      {gameStatus === "won" && (
        <WonBanner numOfGuesses={items.length} handleRestart={handleRestart} />
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
