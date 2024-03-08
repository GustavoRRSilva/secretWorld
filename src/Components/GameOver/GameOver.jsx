import React from "react";
import "./GameOver.css";
export const GameOver = ({ retry }) => {
  return (
    <div>
      <h2 className="title">Game over</h2>
      <button onClick={retry}>Retry game</button>
    </div>
  );
};
