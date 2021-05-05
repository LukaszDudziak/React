import { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [info, setInfo] = useState("Nie łączymy w jeden state");

  const handler = () => setCounter((prevValue) => prevValue + 1);

  return (
    <div onClick={handler}>
      <p>{counter}</p>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
