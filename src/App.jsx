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
  const [guesses, setGuesses] = useState(3);

  const pickedWordAndCategory = () => {
    let categories = Object.keys(words);
    let category = categories[Math.floor(Math.random() * categories.length)];

    let word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return [category, word];
  };

  //Start game
  const startGame = useCallback(() => {
    
      clearStates();
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
    
  }, [pickedWordAndCategory]);
  // process the letter input
  const verifyLetter = (letter) => {
    console.log(letter);
    if (guessedLetters.includes(letter) || wrongLetters.includes(letter)) {
      return;
    }
    //Guessed letter
    if (letters.includes(letter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ]);
      //wrong letter
    } else {
      setWrongLetters((actualWrongLetters) => [...actualWrongLetters, letter]);
      setGuesses(guesses - 1);
    }
  };

  useEffect(() => {
    if (guesses <= 0) {
      //clear states
      clearStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  const clearStates = () => {
    setWrongLetters([]);
    setGuessedLetters([]);
  };

  //retry the game
  const retry = () => {
    setGuesses(3);
    setScore(0);
    setGameStage(stages[0].name);
  };

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];
    //win condition
    if (uniqueLetters.length === guessedLetters.length) {
      setScore((actualScore) => actualScore + 50);
      startGame();
    }
  }, [guessedLetters, letters, startGame]);
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
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
