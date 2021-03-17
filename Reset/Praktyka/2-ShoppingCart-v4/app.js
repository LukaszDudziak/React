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

  handleBuy = () => {
    this.setState((prevState) => ({
      availableProducts: prevState.availableProducts - this.state.shoppingCart,
      shoppingCart: 0,
    }));
  };

  render() {
    const { shoppingCart, availableProducts } = this.state;

    const style = !shoppingCart ? { opacity: 0.3 } : {};

    return (
      <>
        <button
          disabled={shoppingCart ? false : true}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>
        {/* tutaj już style zapisane w zmiennej */}
        <span style={style}>{shoppingCart}</span>
        <button
          disabled={shoppingCart === availableProducts ? true : false}
          onClick={this.handleAddToCart}
        >
          +
        </button>
        {shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
