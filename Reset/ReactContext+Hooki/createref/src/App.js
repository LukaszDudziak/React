import React, { createRef, PureComponent } from "react";

import Counter from "./Counter";
import "./App.css";

class App extends PureComponent {
  state = {
    isCounterVisible: true,
  };
  //tworze odwołanie
  textInput = React.createRef();
  paragraphElement = createRef();
  render() {
    const counterElement = this.state.isCounterVisible ? <Counter /> : null;

    return (
      <div className='App'>
        {/* przypisuje odwołanie jako properte elementu */}
        <input ref={this.textInput} type='text' />
        <p ref={this.paragraphElement}></p>

        <button onClick={this.focusTextInput}>Ustaw focus na input</button>
        <button onClick={this.addChar}>Dodaj wykrzyknik</button>
        {/* problem */}
        <button onClick={this.toggleVisibilityCounter}>
          Pokaż/Ukryj counter
        </button>
        {counterElement}
      </div>
    );
  }

  toggleVisibilityCounter = () =>
    this.setState((prevState) => ({
      isCounterVisible: !prevState.isCounterVisible,
    }));

  //używam odwołania do wywołania focusa
  focusTextInput = () => this.textInput.current.focus();
  //używam odwołania do zmiany tc elementu
  addChar = () => (this.paragraphElement.current.textContent += "!");
}

export default App;
