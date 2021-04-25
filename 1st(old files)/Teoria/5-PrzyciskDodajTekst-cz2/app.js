//Funkcja strzałkowa a deklarowanie metody. Bind
//setState - przekazanie do metody obiektu i funkcji
//Definiowanie state w konstruktorze

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "",
    };
  }
  state = {
    text: "",
  };

  handleClick = () => {
    const letter = "a";
    // this.setState({
    //   text: this.state.text + letter,
    // });

    this.setState((prevState) => {
      return {
        text: this.prevState.text + letter,
      };
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Dodaj A</button>
        <h1>{this.state.text}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
