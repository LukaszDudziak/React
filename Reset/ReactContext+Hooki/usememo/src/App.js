import React, { useMemo, useState } from "react";

import Counter from "./Counter";

import "./App.css";

const App = () => {
  //do pokazania useMemo vs. React.memo()
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  const increaseFirstCounter = () => setFirstCounter(firstCounter + 1);
  const increaseSecondCounter = () => setSecondCounter(secondCounter + 1);

  //opcja druga - useMemo
  // const secondCounterComponent = useMemo(
  //   () => <Counter counter={secondCounter} index={2} />,
  //   [secondCounter]
  // );

  //do pokazania obslugi obiektow nieprymitywnych
  const [state, setState] = useState({ x: 0, y: 0 });

  const increaseX = () => setState({ ...state, x: state.x + 1 });
  const increaseY = () => setState({ ...state, y: state.y + 1 });

  const xCounterComponent = useMemo(
    () => <Counter counter={state} index={1} />,
    [state.x]
  );

  const yCounterComponent = useMemo(
    () => <Counter counter={state} index={2} />,
    [state.y]
  );

  return (
    <div className='App'>
      <p>Licznik nr.1, wynosi: {firstCounter}</p>
      <p>Licznik nr.2, wynosi: {secondCounter}</p>

      {/* przy kazdym renderze (klik w button) ten element sie renderuje */}
      <Counter counter={firstCounter} index={1} />

      {/* {secondCounterComponent} */}

      <Counter counter={secondCounter} index={2} />
      <button onClick={increaseFirstCounter}>Zwieksz licznik nr.1</button>
      <button onClick={increaseSecondCounter}>Zwieksz licznik nr.2</button>

      <p>Licznik x, wynosi: {state.x}</p>
      <p>Licznik y, wynosi: {state.y}</p>

      {xCounterComponent}
      {yCounterComponent}

      <button onClick={increaseX}>Zwieksz x</button>
      <button onClick={increaseY}>Zwieksz y</button>
    </div>
  );
};

export default App;
