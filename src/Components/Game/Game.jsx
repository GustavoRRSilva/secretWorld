import React, { useState, useRef } from "react";
import "./Game.css";
export const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  wrongLetters = [...new Set(wrongLetters)];
  const [pickedLetter, setPickedLetter] = useState("");
  const letterInputRef = useRef(null);
  const handleSubmit = (e) => {
    //Previne o envio do form
    e.preventDefault();

    //verifica a letra enviada
    verifyLetter(pickedLetter);

    //seta a letra escolhida como nula
    setPickedLetter("");

    //Coloca o foco para o campo de input da letra
    letterInputRef.current.focus();
  };
  return (
    <div className="Name">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>
        Você ainda tem <span className="numberTips">{guesses}</span>{" "}
        tentativa(s)
      </p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blank"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            onChange={(e) => setPickedLetter(e.target.value)}
            value={pickedLetter}
            ref={letterInputRef}
          />
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  );
};
