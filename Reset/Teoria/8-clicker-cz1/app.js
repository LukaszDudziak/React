class Counter extends React.Component {
  state = {
    count: 0,
    result: this.props.result,
  };

  handleMathClick(type, number) {
    if (type === "substraction") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result - number,
      }));
    } else if (type === "reset") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: this.props.result,
      }));
    } else if (type === "addition") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result + number,
      }));
    }
  }

  render() {
    return (
      <>
        {/* z pomocą binda */}
        <button onClick={this.handleMathClick.bind(this, "substraction", 10)}>
          -10
        </button>
        {/* z pomocą af */}
        <button onClick={() => this.handleMathClick("substraction", 1)}>
          -1
        </button>
        <button onClick={this.handleMathClick.bind(this, "reset")}>
          reset
        </button>
        <button onClick={this.handleMathClick.bind(this, "addition", 1)}>
          +1
        </button>
        <button onClick={this.handleMathClick.bind(this, "addition", 10)}>
          +10
        </button>
        <h1>Liczba kliknięć: {this.state.count}</h1>
        <h1>Wynik: {this.state.result}</h1>
      </>
    );
  }
}

ReactDOM.render(<Counter result={10} />, document.getElementById("root"));
