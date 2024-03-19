import React, { useState, useRef } from "react";
import "./Game.css";
export const Game = ({
  category,
  word,
  letters,
  guessedLetters,
  wrongLetters,
  score,
  guesses,
  verifyLetter,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);
  const handleLetter = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  };
  return (
    <div className="Name">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{category}</span>
      </h3>
      <p>
        Você ainda tem <span className="numberTips">{guesses}</span> tentativa(s)
      </p>
      <div className="wordContainer">
        {letters.map((l, i) =>
          guessedLetters.includes(l) ? (
            <span className="letter" key={i}>
              {l}
            </span>
          ) : (
            <span className="blank" key={i}></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleLetter}>
          <input
            type="text"
            onChange={(e) => setLetter(e.target.value)}
            ref={letterInputRef}
            value={letter}
          />
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((l, i) => (
          <span key={i}>{l},</span>
        ))}
      </div>
    </div>
  );
};
