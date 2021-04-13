class Counter extends React.Component {
  state = {
    result: 1,
    ratio: 2,
  };

  handleMultiplication = () => {
    this.setState((prevState) => ({
      result: prevState.result * prevState.ratio,
    }));
    //tutaj przez async, nie ma jeszcze aktualnej wartości result
    // console.log(this.state);
  };

  //a tutaj już będę miał, bo wywoła się moment po aktualizacji
  componentDidUpdate() {
    // console.log(this.state);
    if (this.state.result > 1000 && this.state.ratio === 2) {
      this.setState((prevState) => ({
        ratio: 0.5,
      }));
    } else if (this.state.result < 1 && this.state.ratio === 0.5) {
      this.setState((prevState) => ({
        ratio: 2,
      }));
    }
  }

  render() {
    return (
      <div>
        <p>licznik?</p>
        <button
          onClick={this.handleMultiplication}
        >{`Pomnóż przez ${this.state.ratio}`}</button>
        <h1>Wynik: {this.state.result}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
