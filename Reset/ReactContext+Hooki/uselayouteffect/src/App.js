import React, { useEffect, useLayoutEffect, useState } from "react";

import Triangle from "./Triangle";

import "./App.css";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOnClick = () => setIsVisible((prev) => !prev);

  const triangleComponent = isVisible ? <Triangle /> : null;

  // useEffect(() => console.log("Po wyrenderowaniu DOM"), []);

  // useLayoutEffect(() => console.log("Przed wyrenderowaniem DOM"), []);

  // console.log("render");

  return (
    <div className='App'>
      <button onClick={handleOnClick}>Toggle</button>
      {triangleComponent}
    </div>
  );
};

export default App;
