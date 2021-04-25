class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 2,
  };

  handleCart = (action) => {
    switch (action) {
      case "remove":
        this.setState({
          shoppingCart: this.state.shoppingCart - 1,
        });
        break;
      case "add":
        this.setState({
          shoppingCart: this.state.shoppingCart + 1,
        });
        break;
    }
  };

  render() {
    const { shoppingCart, availableProducts } = this.state;
    return (
      <div>
        {/* warunkowanie disabled względem wyświetlanej liczby */}
        <button
          disabled={!shoppingCart ? true : false}
          onClick={() => this.handleCart("remove")}
        >
          -
        </button>
        <span> {shoppingCart} </span>
        <button
          disabled={shoppingCart === availableProducts ? true : false}
          onClick={() => this.handleCart("add")}
        >
          +
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
