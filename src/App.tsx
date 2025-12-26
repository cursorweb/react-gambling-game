import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Gambling Game</h1>
      <p>
        <button>Roulette</button>
      </p>
    </>
  )
}

export default App;