class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 1,
  };

  handleRemoveFromCart = () => {
    this.setState((prevState) => ({
      shoppingCart: prevState.shoppingCart - 1,
    }));
  };

  handleAddToCart = () => {
    this.setState((prevState) => ({
      shoppingCart: prevState.shoppingCart + 1,
    }));
  };

  //obsługa przycisku zakupu
  handleBuy = () => {
    this.setState((prevState) => ({
      availableProducts: prevState.availableProducts - this.state.shoppingCart,
      shoppingCart: 0,
    }));
  };

  render() {
    return (
      <>
        <button
          disabled={this.state.shoppingCart ? false : true}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>
        <span>{this.state.shoppingCart}</span>
        <button
          disabled={
            this.state.shoppingCart === this.state.availableProducts
              ? true
              : false
          }
          onClick={this.handleAddToCart}
        >
          +
        </button>
        {/* użycie operatora logicznego do wyświetlenia buttona */}
        {this.state.shoppingCart > 0 && (
          <button onClick={this.handleBuy}>Kup</button>
        )}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
