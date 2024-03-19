import React from "react";
import "./GameOver.css";
export const GameOver = ({ retry,score }) => {
  return (
    <div className="gameOver">
      <h2 className="title">Game over</h2>
      <h3>Sua pontuação foi: <span className="score">{score}</span></h3>
      <button onClick={retry}>Retry game</button>
    </div>
  );
};
