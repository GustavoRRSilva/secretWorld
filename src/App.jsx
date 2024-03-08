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
function App() {
  const stages = [
    { id: 1, name: "start" },
    { id: 2, name: "game" },
    { id: 3, name: "end" },
  ];
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  //Start game
  const startGame = () => {
    setGameStage(stages[1].name)
  }
  // process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }
  //retry the game
  const retry = () =>{
    setGameStage(stages[0].name)
  }
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame = {startGame}/>}
      {gameStage === "game" && <Game verifyLetter = {verifyLetter}/>}
      {gameStage === "end" && <GameOver retry = {retry} />}
    </div>
  );
}

export default App;
