class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 2,
  };

  handleRemoveFromCart = () => {
    //pamiętaj, żeby działając na state, używać prevState
    this.setState((prevState) => ({
      shoppingCart: prevState.shoppingCart - 1,
    }));
  };

  handleAddToCart = () => {
    this.setState((prevState) => ({
      shoppingCart: prevState.shoppingCart + 1,
    }));
  };

  render() {
    return (
      <>
        <button
          // ustawienie disabled dla wartości shoppingCart = 0
          disabled={this.state.shoppingCart ? false : true}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>
        <span>{this.state.shoppingCart}</span>
        <button
          // ustawienie disabled dla wartości shoppingCart = max magazynowy
          disabled={
            this.state.shoppingCart === this.state.availableProducts
              ? true
              : false
          }
          onClick={this.handleAddToCart}
        >
          +
        </button>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
