//CSS
import "./App.css";
import "./index.css";

//React
import { useState, useCallback, useEffect } from "react";

//Components
import { StartScreen } from "./Components/StartScreen/StartScreen";
import { Game } from "./Components/Game/Game";
import { GameOver } from "./Components/GameOver/GameOver";

//Pages

//data
import { wordsList } from "./data/data";
function App({}) {
  const stages = [
    { id: 1, name: "start" },
    { id: 2, name: "game" },
    { id: 3, name: "end" },
  ];
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [category, setCategory] = useState("");
  const [word, setWord] = useState("");
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [score, setScore] = useState(0);
  const [guesses, setguesses] = useState(3);

  const pickedWordAndCategory = () => {
    let categories = Object.keys(words);
    let category = categories[Math.floor(Math.random() * categories.length)];

    let word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return [category, word];
  };

  //Start game
  const startGame = () => {
    //let with letters of word
    let [category, word] = pickedWordAndCategory();
    console.log(category, word);
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());
    console.log(wordLetters);

    //set states
    setWord(word);
    setCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };
  // process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };
  //retry the game
  const retry = () => {
    setGameStage(stages[0].name);
  };
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          category={category}
          word={word}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          score={score}
          guesses={guesses}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
