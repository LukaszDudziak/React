class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 0,
  };

  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1,
    });
  };

  handleAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1,
    });
  };
  //obsługa buttonu zakupu
  handleBuy = () => {
    this.setState({
      availableProducts: this.state.availableProducts - this.state.shoppingCart,
      shoppingCart: 0,
    });
  };

  render() {
    const { shoppingCart, availableProducts } = this.state;
    return (
      <div>
        <button
          disabled={!shoppingCart ? true : false}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>

        <span style={shoppingCart === 0 ? { opacity: 0.3 } : {}}>
          {shoppingCart}
        </span>
        <button
          disabled={shoppingCart === availableProducts ? true : false}
          onClick={this.handleAddToCart}
        >
          +
        </button>
        {/* jeśli nie będzie >0 to nie wyświetli buttona */}
        {shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
