import React, { Component } from "react";
import Word from "./Word";
import "./App.css";

class App extends Component {
  state = {
    words: [],
    isLoaded: false,
  };

  //użycie fecza
  componentDidMount() {
    //sztuczne opóźnienie, żeby zrobić obsługę oczekiwania na fecz
    setTimeout(this.fetchData, 3000);
  }

  fetchData = () => {
    //podanie adresu z którego chce respons
    fetch("data/words.json")
      //przyjęcie responsa i sparsowanie do json
      .then((response) => response.json())
      //przypisanie odpowiedniego elementu obiektu do state i obsługa opóźnienia
      .then((data) => {
        this.setState({
          words: data.words,
          isLoaded: true,
        });
      });
  };
  render() {
    const words = this.state.words.map((word) => (
      <Word key={word.id} english={word.en} polish={word.pl} />
    ));
    //obsługa opóźnienia przy wyświetleniu
    return <ul>{this.state.isLoaded ? words : "Wczytuję dane"}</ul>;
  }
}

export default App;
