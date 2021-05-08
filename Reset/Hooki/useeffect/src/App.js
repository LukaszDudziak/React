import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const handler = () => setCounter((prevValue) => prevValue + 1);
  const toggleVisibilityCounter = () => setIsActive((prevValue) => !prevValue);

  const counterComponent = isActive ? (
    <Counter rerenderCounter={counter} />
  ) : null;

  // useEffect(() => {
  //    alert("hello");
  // }, []);

  return (
    <div onClick={handler}>
      <button onClick={toggleVisibilityCounter}>Pokaż/ukryj komponent</button>
      <button onClick={handler}>Przerenderuj komponent</button>
      {counterComponent}
    </div>
  );
}

const Counter = ({ rerenderCounter }) => {
  // utworzenie stanu dla Countera
  const [counter, setCounter] = useState(0);
  //  utworzenie handlera dla ruchu myszy
  const handleMouseMove = (event) => setCounter(event.clientX);

  //wywołanie funkcji
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    //odmontowanie komponentu
    return () => {
      alert("Komponent jest odmontowywany");
      window.removeEventListener("mousemove", handleMouseMove);
    };
    //tablica zależności
  }, [rerenderCounter]);

  return (
    <div>
      <p>{counter}</p>
      <p>{rerenderCounter}</p>
    </div>
  );
};

export default App;
