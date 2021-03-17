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
    return (
      <>
        <button
          disabled={this.state.shoppingCart ? false : true}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>
        {/* css liniowo z warunkiem na opacity dla wartości równej 0. Zawsze można wywalić całego const "style" przed render, tak żeby zrobić preset w zmiennej i nie zmieniać tego liniowo*/}
        <span
          style={
            !this.state.shoppingCart
              ? {
                  opacity: 0.3,
                }
              : {}
          }
        >
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
        {this.state.shoppingCart > 0 && (
          <button onClick={this.handleBuy}>Kup</button>
        )}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
