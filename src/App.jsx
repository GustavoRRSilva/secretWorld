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
  console.log(words)
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen />}
      {gameStage === "game" && <Game />}
      {gameStage === "game" && <GameOver />}
    </div>
  );
}

export default App;
