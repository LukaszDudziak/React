import React, { useCallback, useMemo, useState } from "react";

import Counter from "./Counter";

import "./App.css";

//kiedy funkcja jest w scope wyæszym niz renderowany obiekt, to nie bedzie rerenderowana, dlatego to najprostsza opcja na optymalizacje
const add = (x, y) => x + y;

const App = () => {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  const value = add(5, 2);

  const increaseFirstCounter = useCallback(
    () => setFirstCounter((prevValue) => prevValue + 1),
    []
  );
  const increaseSecondCounter = useCallback(
    () => setSecondCounter((prevValue) => prevValue + 1),
    []
  );

  const firstCounterComponent = (
    <Counter callback={increaseFirstCounter} index={1} />
  );
  const secondCounterComponent = (
    <Counter callback={increaseSecondCounter} index={2} />
  );

  return (
    <div className='App'>
      <p>Licznik nr.1, wynosi: {firstCounter}</p>
      <p>Licznik nr.2, wynosi: {secondCounter}</p>

      {firstCounterComponent}
      {secondCounterComponent}
    </div>
  );
};

export default App;
