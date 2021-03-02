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
    return (
      <div>
        {/* warunkowanie disabled względem wyświetlanej liczby */}
        <button
          disabled={!this.state.shoppingCart ? true : false}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>
        {/* style css edytowane przy pomocy jsx i operatora warunkowego*/}
        <span style={this.state.shoppingCart === 0 ? { opacity: 0.3 } : {}}>
          {this.state.shoppingCart}
        </span>
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
        {/* jeśli nie będzie >0 to nie wyświetli buttona */}
        {this.state.shoppingCart > 0 && (
          <button onClick={this.handleBuy}>Kup</button>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
