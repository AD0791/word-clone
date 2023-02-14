import React from "react";

function DisplayGuess({ items }) {
  return (
    <div className="guess-results">
      {items.map((answerItem) => (
        <p key={answerItem.id} className="guess">
          {answerItem.guess}
        </p>
      ))}
    </div>
  );
}

export default DisplayGuess;
